import { siteConfig } from "../config/site"
import { de } from "./de"
import { en } from "./en"

export type Locale = (typeof siteConfig.locales)[number]

export type Translations = typeof de

const dictionaries = { de, en } satisfies Record<Locale, Translations>

export function useTranslations(locale: string | undefined) {
  const key = (locale ?? siteConfig.defaultLocale) as Locale
  return dictionaries[key] ?? dictionaries[siteConfig.defaultLocale]
}

// --- Localised slugs: the alternate URL cannot be derived from the current path.
export const routes = {
  home: { de: "/", en: "/en" },
  accessibility: { de: "/barrierefreiheit", en: "/en/accessibility" },
  design: { de: "/ui-ux-design", en: "/en/ui-ux-design" },
  development: { de: "/frontend-entwicklung", en: "/en/frontend-development" },
  portfolio: { de: "/portfolio", en: "/en/portfolio" },
  about: { de: "/ueber-mich", en: "/en/about-me" },
  imprint: { de: "/impressum", en: "/en/legal-notice" },
  privacy: { de: "/datenschutz", en: "/en/privacy" },
  accessibilityStatement: {
    de: "/barrierefreiheitserklaerung",
    en: "/en/accessibility-statement",
  },
} as const

export type RouteKey = keyof typeof routes

// --- Which routes appear where. Not every route belongs in the header, and the
// legal pages belong only in the footer.
export const mainNavRoutes = [
  "accessibility",
  "design",
  "development",
  "portfolio",
  "about",
] as const satisfies readonly RouteKey[]

export const footerRoutes = [
  "imprint",
  "privacy",
  "accessibilityStatement",
] as const satisfies readonly RouteKey[]

// --- Each language names itself, so the switch can carry lang and be spoken in
// the voice of the language it leads to.
export const localeNames = {
  de: { short: "DE", full: "Deutsch" },
  en: { short: "EN", full: "English" },
} as const satisfies Record<Locale, { short: string; full: string }>

export function localisedPath(route: RouteKey, locale: Locale) {
  return routes[route][locale]
}
