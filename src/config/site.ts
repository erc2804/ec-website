export const siteConfig = {
  // --- Without www: the server 301s www to the bare domain
  url: "https://ercancicek.com",
  name: "Ercan Cicek",
  // --- Trading name for the legal notice; name stays the wordmark in the header
  legalName: "nextstepweb, Inh. Ercan Cicek",
  vatId: "DE329893573",
  defaultLocale: "de",
  locales: ["de", "en"] as const,

  // --- 1200x630, the size Open Graph previews expect: the home hero in small,
  // one per language because the claim is text. Alt text: common.shareImageAlt.
  defaultShareImage: { de: "/og-default.png", en: "/og-default-en.png" },

  contact: {
    email: "contact@ercancicek.com",
    phone: "+4915203684025",
    phoneDisplay: "+49 1520 3684025",
  },

  address: {
    street: "Bechemer Straße 47",
    postalCode: "40878",
    city: "Ratingen",
    region: "Nordrhein-Westfalen",
    country: "DE",
  },

  // --- Platform drives which icon and which label the footer uses
  profiles: [{ platform: "linkedin", url: "https://www.linkedin.com/in/ercancicek" }],

  areaServed: ["Düsseldorf", "Ratingen", "Köln", "Nordrhein-Westfalen"],

  // --- First day free for a new project. The about page and Pixel-Ercan read it;
  // once the day has passed, both say "on request" (src/data/availability.ts).
  // Change it here and nowhere else.
  availableFrom: "2026-12-01",
} as const

export type SiteConfig = typeof siteConfig
