// --- The project request form as data, shared by the page (InquiryPage.astro,
// which renders and validates it) and Pixel-Ercan's function
// (netlify/functions/inquiry-assist.ts, which fills it). Change a field here
// and both sides follow.

export const topicKeys = ["accessibility", "design", "development", "other"] as const
export type TopicKey = (typeof topicKeys)[number]

export type FieldKey = "topics" | "goal" | "name" | "email" | "phone" | "callback"

export type FormState = {
  topics: TopicKey[]
  goal: string
  name: string
  email: string
  phone: string
  callback: boolean
}

// --- Loose on purpose: something@something.something. The real check is the
// reply that reaches the address.
export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
