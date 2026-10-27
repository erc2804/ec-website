export type DemoCase = {
  /** --- Names the defect --- */
  name: string
  /** --- Names the same element once it is built correctly --- */
  fixedName: string
  /** --- What goes wrong when it is built the usual way, in one sentence --- */
  explanation: string
  /** --- What the correct markup changes, in one sentence --- */
  fix: string
  /** --- What a screen reader announces when the element is built the usual way --- */
  common: string
  /** --- What it announces when the element is marked up correctly --- */
  correct: string
  isCommonSilent?: boolean
  isCorrectSilent?: boolean
}
