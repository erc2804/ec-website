// --- The few marks the site's copy may carry, read by InlineText:
//   `code`              mono face on a grey chip
//   [text](url)         a link
//   [text]{lang=en}     a part in another language, so a screen reader switches
//                       voice (WCAG 3.1.2); the syntax is Pandoc's
// One more mark lives outside InlineText: **highlight**, split by the components
// that draw it (HomePage roles, OneHandSection). Wherever copy goes out as plain
// text (Pixel-Ercan's knowledge in netlify/functions/about-assist.ts),
// plainText takes all of them off and keeps the words.

export const inlineMarkPattern = /(`[^`]+`|\[[^\]]+\]\([^)]+\)|\[[^\]]+\]\{lang=[a-z-]+\})/

// --- One whole part, as split off by inlineMarkPattern
export const linkMark = /^\[([^\]]+)\]\(([^)]+)\)$/
export const languageMark = /^\[([^\]]+)\]\{lang=([a-z-]+)\}$/

// --- Every link mark anywhere in a text: $1 the label, $2 the target
export const linkMarks = /\[([^\]]+)\]\(([^)]+)\)/g

export const plainText = (text: string) =>
  text
    .replace(linkMarks, "$1")
    .replace(/\[([^\]]+)\]\{lang=[a-z-]+\}/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replaceAll("**", "")
