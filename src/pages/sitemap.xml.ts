// --- The sitemap, built from the route table: every indexed page in both
// languages, each with the same hreflang alternates Seo.astro puts in the
// head. Slugs are localised, so the pairs cannot come from the paths (ADR 0007).
import type { APIRoute } from "astro"
import { siteConfig } from "../config/site"
import { routes, unindexedRoutes, type RouteKey } from "../i18n"

const absoluteUrl = (path: string) => new URL(path, siteConfig.url).href

export const GET: APIRoute = () => {
  const indexedRoutes = (Object.keys(routes) as RouteKey[]).filter(
    (route) => !(unindexedRoutes as readonly RouteKey[]).includes(route)
  )

  const entries = indexedRoutes.flatMap((route) => {
    const alternates = [
      ...siteConfig.locales.map(
        (locale) =>
          `<xhtml:link rel="alternate" hreflang="${locale}" href="${absoluteUrl(routes[route][locale])}"/>`
      ),
      `<xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(routes[route][siteConfig.defaultLocale])}"/>`,
    ].join("")
    return siteConfig.locales.map(
      (locale) => `<url><loc>${absoluteUrl(routes[route][locale])}</loc>${alternates}</url>`
    )
  })

  const sitemap = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
    ...entries,
    `</urlset>`,
  ].join("\n")

  return new Response(sitemap, { headers: { "Content-Type": "application/xml; charset=utf-8" } })
}
