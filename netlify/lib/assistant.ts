// --- What both of Pixel-Ercan's functions share: who may call them, how a
// conversation is read and capped, and the call to Anthropic with every way it
// can fail mapped to one code the page knows (src/components/assistantChat.ts).
// Outside netlify/functions, so Netlify does not take it for a function.

import type { Locale } from "../../src/i18n"

// --- Provided by the Netlify runtime (and by `netlify dev` locally)
declare const Netlify: { env: { get(name: string): string | undefined } }

export type { Locale }
export type ChatMessage = { role: "user" | "assistant"; content: string }

const model = "claude-haiku-5-5"

const allowedOrigins = [
  /^https:\/\/(www\.)?ercancicek\.com$/,
  /^https:\/\/[a-z0-9-]+\.netlify\.app$/,
  /^http:\/\/localhost:\d+$/,
]

export const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  })

export const cleanText = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : ""

// --- What a visitor reads is written by the stronger model; reading into a
// form stays on the default one above
export const replyModel = "claude-sonnet-5-5"

// --- Structured output, not free text: what goes out is only the message
// itself, never the model thinking aloud about whether it follows the rules.
// Sonnet does not take a forced tool call, so this is a JSON schema.
export const messageFormat = {
  type: "json_schema",
  schema: {
    type: "object",
    properties: { message: { type: "string" } },
    required: ["message"],
    additionalProperties: false,
  },
}

// --- The model slips a colon in now and then despite the rule. In a chat
// message one reads like a form, so it becomes a full stop. Times like 16:00
// have no space after the colon and stay.
export const withoutColons = (text: string) =>
  text.replace(/:\s+(\S)/g, (_match, next: string) => `. ${next.toUpperCase()}`)

// --- The message from a reply in that format, or "" if there is none
export const readMessage = (data: unknown) => {
  const content = (data as { content?: { type?: string; text?: string }[] })?.content
  const text = (Array.isArray(content) ? content : [])
    .filter((block) => block.type === "text")
    .map((block) => block.text ?? "")
    .join("")
  try {
    return cleanText((JSON.parse(text) as Record<string, unknown>).message, 4000)
  } catch {
    return ""
  }
}

type Limits = { maxMessages: number; maxMessageLength: number; maxConversationLength: number }

type AssistantRequest = {
  locale: Locale
  messages: ChatMessage[]
  body: Record<string, unknown>
  apiKey: string
}

// --- Everything before the model: method, origin, key, a readable body and a
// conversation within the limits. Returns the request, or the answer to send.
export async function readRequest(
  request: Request,
  limits: Limits
): Promise<AssistantRequest | Response> {
  if (request.method !== "POST") return json({ error: "method" }, 405)

  const origin = request.headers.get("origin") ?? ""
  if (!allowedOrigins.some((pattern) => pattern.test(origin))) return json({ error: "origin" }, 403)

  const apiKey = Netlify.env.get("ANTHROPIC_API_KEY")
  if (!apiKey) return json({ error: "config" }, 500)

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return json({ error: "input" }, 400)
  }
  if (!body || typeof body !== "object") return json({ error: "input" }, 400)

  const locale: Locale = body.locale === "en" ? "en" : "de"
  const messages: ChatMessage[] = (Array.isArray(body.messages) ? body.messages : [])
    .filter(
      (message): message is ChatMessage =>
        typeof message?.content === "string" &&
        (message.role === "user" || message.role === "assistant")
    )
    .map((message) => ({
      role: message.role,
      content: message.content.slice(0, limits.maxMessageLength),
    }))

  if (!messages.length || messages.at(-1)?.role !== "user") return json({ error: "input" }, 400)
  const conversationLength = messages.reduce((sum, message) => sum + message.content.length, 0)
  if (messages.length > limits.maxMessages || conversationLength > limits.maxConversationLength) {
    return json({ error: "tooLong" }, 413)
  }

  return { locale, messages, body, apiKey }
}

// --- How Anthropic says the money is used up, from its docs
// (platform.claude.com/docs/en/api/errors and /api/rate-limits): a spend limit
// set in the Console is a 400 whose message starts like this, the tier's
// monthly cap a 429 with this code, a billing problem a 402.
const ownSpendLimitPrefix = "You have reached your specified"
const tierSpendCapCode = "enforced_spend_limit_reached"

type AnthropicError = {
  error?: { type?: string; message?: string; details?: { error_code?: string } }
}

const isBudgetError = (status: number, data: AnthropicError) =>
  status === 402 ||
  (status === 400 && (data.error?.message ?? "").startsWith(ownSpendLimitPrefix)) ||
  (status === 429 && data.error?.details?.error_code === tierSpendCapCode)

// --- The call itself. Returns the response body, or the answer to send.
export async function callModel(
  apiKey: string,
  payload: Record<string, unknown>
): Promise<Record<string, unknown> | Response> {
  let response: Response
  try {
    response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({ model, ...payload }),
      signal: AbortSignal.timeout(25000),
    })
  } catch (error) {
    const isTimeout = error instanceof DOMException && error.name === "TimeoutError"
    return json({ error: isTimeout ? "timeout" : "upstream" }, isTimeout ? 504 : 502)
  }

  if (!response.ok) {
    const data: AnthropicError = await response.json().catch(() => ({}))
    // --- Only in the function log on Netlify, never sent to the visitor
    console.error("Anthropic", response.status, data.error?.type, data.error?.message)
    if (isBudgetError(response.status, data)) return json({ error: "budget" }, 503)
    if (response.status === 429 || response.status === 529) return json({ error: "busy" }, 503)
    return json({ error: "upstream" }, 502)
  }

  try {
    return await response.json()
  } catch {
    return json({ error: "garbled" }, 502)
  }
}
