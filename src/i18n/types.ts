export type DemoCase = {
  /** --- Names the defect --- */
  name: string
  /** --- The longer explanation in the dialog: what happens, why it matters,
   * how it is built right. One string per paragraph. --- */
  details: string[]
  /** --- What a screen reader announces when the element is built the usual way --- */
  common: string
  /** --- What it announces when the element is marked up correctly --- */
  correct: string
  isCommonSilent?: boolean
  isCorrectSilent?: boolean
}
