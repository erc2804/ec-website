export type DemoCase = {
  /** --- Names the defect. Doubles as the marker label in the form. --- */
  name: string
  /** --- What goes wrong in the code, in one sentence --- */
  explanation: string
  /** --- What a screen reader announces when the element is built the usual way --- */
  common: string
  /** --- What it announces when the element is marked up correctly --- */
  correct: string
  isCommonSilent?: boolean
  isCorrectSilent?: boolean
}
