// --- Every page may be crawled, AI search crawlers included. The thank-you
// pages keep themselves out of the index with noindex; a Disallow here would
// hide that noindex from the crawler.
import type { APIRoute } from "astro"
import { siteConfig } from "../config/site"

export const GET: APIRoute = () => {
  const robots = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${new URL("/sitemap.xml", siteConfig.url).href}`,
    "",
  ].join("\n")
  return new Response(robots, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
