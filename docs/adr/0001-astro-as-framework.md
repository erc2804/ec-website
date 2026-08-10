# 0001 — Astro as the framework

**Status:** Accepted · **Date:** 2026-08-10

## Context

The site is content driven: a handful of pages, some long-form text, a few self contained
interactive sections. It is also a demonstration piece for performance and accessibility
work, which means the shipped bundle is not a detail — it is part of the argument. A site
that preaches performance while shipping half a megabyte of framework runtime to render
static text refutes itself.

The predecessor ran on Gatsby 5, which had become slow to build and heavier than the
content warranted.

## Decision

Astro 7.

Astro renders to static HTML and ships **no JavaScript unless a component explicitly asks
for it**. Interactive parts become islands that hydrate independently; everything else stays
plain markup. It also brings the pieces this project needs without extra dependencies:
i18n routing, content collections with schema validation, native view transitions and CSP
support.

## Alternatives

**Next.js.** A full stack React framework for a static marketing site means paying the
React runtime on every page, including the imprint. Published comparisons put a typical
Astro page around 9 KB of JavaScript against roughly 460 KB for a comparable Next page —
blog benchmarks, so treat the exact numbers with care, but the order of magnitude is not
in dispute. Next is the better tool when there is a real application behind the pages.
There isn't one here.

**Staying on Gatsby.** Build times and plugin weight were the reason to move, and the
GraphQL layer added ceremony for data that is a handful of local files.

**Hand written HTML.** Viable for five pages, painful for two languages, shared layouts and
schema validated content.

## Consequences

- Interactive sections must be genuinely self contained. Astro is a poor fit for state that
  has to survive navigation or for parts that constantly talk to each other. That constraint
  matches what this site needs; it would not suit an application.
- Cloudflare acquired the Astro team in January 2026. Open source was reaffirmed, but
  governance changed. For a project this size the risk is acceptable — the content is
  Markdown and the components are close to plain HTML, so leaving would be cheap.
- Astro 7 requires Node >= 22.12.
- Two Astro 7 behaviours differ from earlier versions and bite immediately: whitespace
  follows JSX rules, so a line break between inline elements no longer renders as a space,
  and the compiler no longer repairs malformed HTML silently. The second one is a feature
  here — broken markup fails the build instead of degrading quietly in the browser.
