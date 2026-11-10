// --- What both of Pixel-Ercan's chats know about Ercan's offers and his
// availability, built from the same data as the pages so it cannot drift from
// them. In German, the language the site is written in; he answers in the
// visitor's language anyway.

import { availableFromMonth, isAvailableNow } from "../../src/data/availability"
import { de } from "../../src/i18n/de"

export const offersKnowledge = `# Angebote
${(["accessibility", "design", "development"] as const)
  .map((key) => {
    const page = de[key]
    return `## ${de.home.offers.items[key].title}
${de.home.offers.items[key].teaser}
${page.services.lead}
${page.services.items.map((item) => `- ${item.title}: ${item.text}`).join("\n")}
Häufige Fragen:
${page.faq.items.map((item) => `- ${item.question} ${item.answer}`).join("\n")}`
  })
  .join("\n\n")}`

// --- Once the month in site.ts has begun, the date says nothing any more:
// "on request", as on the page
export const availability = () => {
  const change = "Das kann sich auch kurzfristig ändern, Genaues klärt Ercan persönlich."
  return isAvailableNow()
    ? `Verfügbarkeit für neue Projekte: auf Anfrage. ${change}`
    : `Ercan hat ab ${availableFromMonth("de")} wieder Zeit für neue Projekte. ${change}`
}
