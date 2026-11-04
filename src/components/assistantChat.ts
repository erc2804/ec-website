// --- Pixel-Ercan's chat in the browser, for the markup of AssistantChat.astro:
// the conversation, the growing input, the status line and every error. A page
// creates it with what it does with an answer (fill a form, or simply reply).
// Whatever goes wrong, the visitor's message goes back into the field.
import { fill } from "../i18n/fill"

export type ChatMessage = { role: "user" | "assistant"; content: string }

const chatErrorReasons = [
  "offline",
  "timeout",
  "tooFast",
  "busy",
  "budget",
  "tooLong",
  "garbled",
  "error",
] as const
export type ChatErrorReason = (typeof chatErrorReasons)[number]

type ChatText = {
  speakerYou: string
  speakerAssistant: string
  working: string
  showEarlierOne: string
  showEarlierMany: string
  hideEarlier: string
  placeholder: string
  replyPlaceholder: string
  email: string
  phone: string
  phoneDisplay: string
  errors: Record<"empty" | "stillWorking" | ChatErrorReason, string>
}

export class ChatError extends Error {
  reason: ChatErrorReason

  constructor(reason: ChatErrorReason) {
    super(reason)
    this.reason = reason
  }
}

// --- The functions answer with these same names (netlify/lib/assistant.ts);
// anything else they send (origin, input, config) is a plain "error"
const isChatErrorReason = (code: unknown): code is ChatErrorReason =>
  chatErrorReasons.includes(code as ChatErrorReason)

// --- Longer than the function's own wait for the model, so its answer wins
const requestTimeout = 30000

export async function postToAssistant(url: string, body: unknown): Promise<unknown> {
  if (!navigator.onLine) throw new ChatError("offline")

  let response: Response
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(requestTimeout),
    })
  } catch (error) {
    if (error instanceof DOMException && error.name === "TimeoutError") {
      throw new ChatError("timeout")
    }
    throw new ChatError(navigator.onLine ? "error" : "offline")
  }

  // --- Netlify's rate limit answers before the function runs
  if (response.status === 429) throw new ChatError("tooFast")
  if (!response.ok) {
    const code = await response.json().then(
      (data) => data?.error,
      () => undefined
    )
    throw new ChatError(isChatErrorReason(code) ? code : "error")
  }

  try {
    return await response.json()
  } catch {
    throw new ChatError("garbled")
  }
}

type Answer = {
  reply: string
  /** --- Runs right before the reply shows, e.g. a line about what was filled in --- */
  before?: () => void
  /** --- Runs once the reply is in --- */
  after?: () => void | Promise<void>
}

type Options = {
  /** --- Asks the server with the whole conversation; throws a ChatError --- */
  respond: (messages: ChatMessage[]) => Promise<Answer>
  /** --- A new question is on its way --- */
  onAsk?: () => void
  /** --- The question failed and is back in the field --- */
  onError?: () => void
  /** --- The conversation was cleared --- */
  onReset?: () => void
}

const escapeForPattern = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

// --- Links in an answer: [label](/path), only to a page of this site
// (about-assist.ts already turns any other link mark into plain text), and
// Ercan's email address and phone number, so they work like every other
// contact link on the site
const renderReply = (content: string, text: ChatText) => {
  const pattern = new RegExp(
    `\\[([^\\]]+)\\]\\((\\/[a-z0-9/-]*)\\)|${escapeForPattern(text.email)}|${escapeForPattern(text.phoneDisplay)}`,
    "g"
  )
  const nodes: (string | HTMLAnchorElement)[] = []
  let lastIndex = 0
  for (const match of content.matchAll(pattern)) {
    nodes.push(content.slice(lastIndex, match.index))
    const link = document.createElement("a")
    if (match[2]) {
      link.href = match[2]
      link.textContent = match[1]
    } else {
      const isEmail = match[0] === text.email
      link.href = isEmail ? `mailto:${text.email}` : `tel:${text.phone}`
      link.textContent = match[0]
    }
    nodes.push(link)
    lastIndex = match.index + match[0].length
  }
  nodes.push(content.slice(lastIndex))
  return nodes
}

export function createAssistantChat(assistant: HTMLElement, options: Options) {
  const text: ChatText = JSON.parse(assistant.dataset.text ?? "{}")
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
  const scrollBehavior = (): ScrollBehavior => (reducedMotion.matches ? "auto" : "smooth")
  // --- Below lg the conversation is part of the page, not an area of its own
  const narrow = window.matchMedia("(width < 64rem)")

  const log = assistant.querySelector<HTMLElement>(".ec-assistant-log")!
  const logFrame = assistant.querySelector<HTMLElement>(".ec-log-frame")!
  const logThumb = assistant.querySelector<HTMLElement>(".ec-log-thumb")!
  const toNewest = assistant.querySelector<HTMLButtonElement>(".ec-to-newest")!
  const showEarlier = assistant.querySelector<HTMLButtonElement>(".ec-show-earlier")!
  const entryTemplate = assistant.querySelector<HTMLTemplateElement>("#assistantEntryTemplate")!
  const form = assistant.querySelector<HTMLFormElement>(".ec-assistant-form")!
  const input = assistant.querySelector<HTMLTextAreaElement>("#assistantInput")!
  const status = assistant.querySelector<HTMLElement>("#assistantStatus")!
  const resetButton = assistant.querySelector<HTMLButtonElement>(".ec-assistant-reset")!
  const introEntry = log.firstElementChild!

  let messages: ChatMessage[] = []
  let isWorking = false
  let isEarlierOpen = false
  input.value = ""

  // --- The field grows with its text up to a limit, then scrolls. Measured by
  // hand: field-sizing is not in Safari. While empty it sizes to the
  // placeholder, so the example is never cut off.
  const maxInputHeight = 240
  const resizeInput = () => {
    // --- Hidden (after sending) there is nothing to measure; a height taken
    // then would be 0 and stick once the chat is back
    if (!input.offsetWidth) return
    const value = input.value
    input.style.height = "auto"
    if (!value) input.value = input.placeholder
    // --- scrollHeight leaves out the border, height (border-box) includes it
    const borderHeight = input.offsetHeight - input.clientHeight
    const height = Math.min(input.scrollHeight + borderHeight, maxInputHeight)
    if (!value) input.value = ""
    input.style.height = `${height}px`
    input.style.overflowY = height >= maxInputHeight ? "auto" : "hidden"
  }
  input.addEventListener("input", resizeInput)
  window.addEventListener("resize", resizeInput)
  resizeInput()

  // --- No scrollbar in the conversation. Faded edges show there is more above
  // or below, and a round button leads back to the newest message.
  const updateScrollHints = () => {
    const { scrollTop, scrollHeight, clientHeight } = log
    const isScrollable = scrollHeight > clientHeight + 1
    const isAtTop = scrollTop <= 1
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 8
    logFrame.dataset.isScrollable = String(isScrollable)
    logFrame.dataset.shadowTop = String(isScrollable && !isAtTop)
    logFrame.dataset.shadowBottom = String(isScrollable && !isAtBottom)
    toNewest.classList.toggle("hidden", !isScrollable || isAtBottom)
    toNewest.classList.toggle("grid", isScrollable && !isAtBottom)

    if (!isScrollable) return
    const thumbHeight = Math.max(32, (clientHeight * clientHeight) / scrollHeight)
    const thumbTop = (scrollTop / (scrollHeight - clientHeight)) * (clientHeight - thumbHeight)
    logThumb.style.height = `${thumbHeight}px`
    logThumb.style.transform = `translateY(${thumbTop}px)`
  }
  log.addEventListener("scroll", updateScrollHints, { passive: true })
  window.addEventListener("resize", updateScrollHints)

  // --- Everything before the latest message of the visitor counts as earlier.
  // Folded on narrow screens until the visitor opens it; a new message folds
  // it again.
  const updateEarlier = () => {
    const children = [...log.children] as HTMLElement[]
    const lastUser = children.findLastIndex((child) => child.dataset.from === "user")
    children.forEach((child, index) => child.classList.toggle("is-earlier", index < lastUser))
    const earlierCount = children.filter(
      (child, index) => index < lastUser && child.classList.contains("ec-entry")
    ).length
    log.dataset.isCollapsed = String(!isEarlierOpen)
    showEarlier.classList.toggle("hidden", earlierCount === 0)
    showEarlier.setAttribute("aria-expanded", String(isEarlierOpen))
    showEarlier.textContent = isEarlierOpen
      ? text.hideEarlier
      : fill(earlierCount === 1 ? text.showEarlierOne : text.showEarlierMany, {
          count: String(earlierCount),
        })
  }

  showEarlier.addEventListener("click", () => {
    isEarlierOpen = !isEarlierOpen
    updateEarlier()
  })

  // --- Narrow screens: the page itself follows the conversation. Sending
  // folds the earlier messages away, which would pull the page up under the
  // reader (Safari keeps no scroll anchor), so the input is held in place
  // first; then the conversation, from the button for the earlier messages
  // to the new one, glides to the top, below the header, and the answer has
  // the room under it, the keyboard's share of the screen included. Once the
  // reader scrolls on their own, the answer no longer moves the page.
  let isFollowing = false
  const stopFollowing = () => {
    isFollowing = false
  }
  window.addEventListener("touchmove", stopFollowing, { passive: true })
  window.addEventListener("wheel", stopFollowing, { passive: true })

  const holdInputInPlace = (change: () => void) => {
    const inputTop = form.getBoundingClientRect().top
    change()
    if (!narrow.matches) return
    const shift = form.getBoundingClientRect().top - inputTop
    if (shift) window.scrollBy({ top: shift, behavior: "instant" })
  }

  const bringToTop = (element: Element) => {
    if (!narrow.matches) return
    element.scrollIntoView({ block: "start", behavior: scrollBehavior() })
  }

  // --- After a tap the keyboard would cover what just changed, so on touch
  // focus goes to the conversation instead of the field
  let lastPointerType = ""
  assistant.addEventListener("pointerdown", (event) => (lastPointerType = event.pointerType), {
    capture: true,
  })
  assistant.addEventListener("keydown", () => (lastPointerType = ""), { capture: true })
  const focusAfterChoice = () => {
    if (lastPointerType === "touch" || lastPointerType === "pen") log.focus({ preventScroll: true })
    else input.focus()
  }

  const scrollToNewest = (isSmooth = true) => {
    log.scrollTo({ top: log.scrollHeight, behavior: isSmooth ? scrollBehavior() : "auto" })
    updateScrollHints()
  }
  toNewest.addEventListener("click", () => scrollToNewest())

  const addEntry = (from: "user" | "assistant", content?: string) => {
    let entry: HTMLElement
    if (from === "assistant") {
      entry = entryTemplate.content.firstElementChild!.cloneNode(true) as HTMLElement
    } else {
      entry = document.createElement("div")
      entry.classList.add("ec-entry")
      entry.dataset.from = "user"
      const bubble = document.createElement("p")
      bubble.classList.add("ec-bubble")
      entry.append(bubble)
    }
    const bubble = entry.querySelector<HTMLElement>(".ec-bubble")!
    // --- Who is speaking is otherwise only told by side and colour
    const speaker = document.createElement("span")
    speaker.classList.add("sr-only")
    speaker.textContent = `${from === "user" ? text.speakerYou : text.speakerAssistant}: `
    if (content === undefined) {
      // --- Typing dots, hidden from screen readers; the status line says it
      bubble.classList.add("ec-typing")
      entry.setAttribute("aria-hidden", "true")
      bubble.append(...[1, 2, 3].map(() => document.createElement("span")))
    } else {
      bubble.replaceChildren(
        speaker,
        ...(from === "assistant" ? renderReply(content, text) : [content])
      )
    }

    // --- The visitor's own message goes into the history without being read
    // back to them; only what Pixel-Ercan adds is announced
    if (from === "user") {
      log.setAttribute("aria-live", "off")
      // --- Long enough for the accessibility tree to take the change in silence
      window.setTimeout(() => log.setAttribute("aria-live", "polite"), 250)
    }
    log.append(entry)
    if (from === "user") {
      isEarlierOpen = false
      updateEarlier()
    }
    scrollToNewest()
    return entry
  }

  // --- A quiet line of the page's own between the bubbles
  const appendLine = (line: HTMLElement) => {
    log.append(line)
    scrollToNewest()
  }

  // --- Working is said to screen readers only: the typing dots show it, and
  // a line that comes and goes would move the input under the cursor
  const setStatus = (message: string, isVisible = true) => {
    status.textContent = message
    status.classList.toggle("sr-only", !isVisible)
  }

  const ask = async (content: string) => {
    if (isWorking) return
    isWorking = true
    messages.push({ role: "user", content })
    let userEntry!: HTMLElement
    let typing!: HTMLElement
    holdInputInPlace(() => {
      options.onAsk?.()
      userEntry = addEntry("user", content)
      typing = addEntry("assistant")
    })
    isFollowing = true
    bringToTop(logFrame)
    setStatus(text.working, false)

    try {
      const answer = await options.respond(messages)
      typing.remove()
      setStatus("")
      answer.before?.()
      messages.push({ role: "assistant", content: answer.reply })
      addEntry("assistant", answer.reply)
      if (isFollowing) bringToTop(logFrame)
      resetButton.classList.remove("hidden")
      input.placeholder = text.replyPlaceholder
      resizeInput()
      await answer.after?.()
    } catch (error) {
      // --- Nothing is lost: the message goes back into the field
      typing.remove()
      userEntry.remove()
      updateEarlier()
      messages.pop()
      if (!input.value) input.value = content
      resizeInput()
      const reason = error instanceof ChatError ? error.reason : "error"
      setStatus(fill(text.errors[reason], { email: text.email }))
      options.onError?.()
    } finally {
      isWorking = false
      updateScrollHints()
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const content = input.value.trim()
    if (!content) {
      setStatus(text.errors.empty)
      input.focus()
      return
    }
    // --- One question at a time: a new one stays in the field until the
    // answer to the last one is in
    if (isWorking) {
      setStatus(text.errors.stillWorking)
      return
    }
    input.value = ""
    resizeInput()
    ask(content)
  })

  // --- Enter sends, Shift+Enter breaks the line, as in any chat
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey && !event.isComposing) {
      event.preventDefault()
      form.requestSubmit()
    }
  })
  input.addEventListener("input", () => {
    const isHint = [text.errors.empty, text.errors.stillWorking].includes(status.textContent ?? "")
    if (isHint) setStatus("")
  })

  const reset = () => {
    messages = []
    log.replaceChildren(introEntry)
    isEarlierOpen = false
    updateEarlier()
    setStatus("")
    input.value = ""
    input.placeholder = text.placeholder
    resizeInput()
    resetButton.classList.add("hidden")
    updateScrollHints()
    options.onReset?.()
  }

  resetButton.addEventListener("click", () => {
    if (isWorking) return
    reset()
    focusAfterChoice()
    bringToTop(assistant)
  })

  return {
    ask,
    reset,
    appendLine,
    isWorking: () => isWorking,
    focusAfterChoice,
    hasConversation: () => messages.length > 0,
    // --- After the chat was hidden: measure again
    refresh: () => {
      resizeInput()
      updateScrollHints()
    },
  }
}
