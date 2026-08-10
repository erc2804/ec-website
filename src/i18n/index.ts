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
  accessibility: { de: "/barrierefreiheit", en: "/en/accessibility" },
} as const

export type RouteKey = keyof typeof routes

export function localisedPath(route: RouteKey, locale: Locale) {
  return routes[route][locale]
}
