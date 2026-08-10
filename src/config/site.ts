export const siteConfig = {
  // --- Without www: the server 301s www to the bare domain
  url: "https://ercancicek.com",
  name: "Ercan Cicek",
  defaultLocale: "de",
  locales: ["de", "en"] as const,

  // --- TODO: 806x801, Open Graph expects 1200x630
  defaultShareImage: "/og-default.png",

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

  profiles: ["https://www.linkedin.com/in/ercancicek"],

  areaServed: ["Düsseldorf", "Ratingen", "Köln", "Nordrhein-Westfalen"],
} as const

export type SiteConfig = typeof siteConfig
