// --- When Ercan is free for a new project, from siteConfig.availableFrom.
// Once that day has come the date says nothing any more, so every reader
// (the about page at build time, its script in the browser, Pixel-Ercan's
// function per request) shows "on request" instead of a month in the past.
import { siteConfig } from "../config/site"
import type { Locale } from "../i18n"

const availableFromTime = Date.parse(`${siteConfig.availableFrom}T00:00:00Z`)

export const isAvailableNow = (now = Date.now()) => now >= availableFromTime

// --- "Dezember 2026" / "December 2026"
export const availableFromMonth = (locale: Locale) =>
  new Intl.DateTimeFormat(locale === "en" ? "en-US" : "de-DE", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(availableFromTime)
