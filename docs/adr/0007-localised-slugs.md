# 0007 — Localised slugs through a route table

**Status:** Accepted · **Date:** 2026-08-10

## Context

The site is bilingual with German at the root and English under `/en/`. German visitors
search for "Barrierefreiheit", English speaking ones for "accessibility", so the slug
should differ per language: `/barrierefreiheit` and `/en/accessibility`.

Astro's built-in i18n routing does not support this. It assumes a 1:1 mapping between file
structure and URL across all locales — the same slug everywhere, only the prefix changes.

Deriving the counterpart from the current path, which was the first implementation here,
breaks the moment slugs differ: the German page then advertises `/en/barrierefreiheit` as
its English alternate, a URL that does not exist. A wrong `hreflang` is worse than none,
because search engines discard the whole group.

## Decision

A route table in `src/i18n/index.ts` as the single source for localised paths:

```ts
export const routes = {
  accessibility: { de: "/barrierefreiheit", en: "/en/accessibility" },
} as const
```

Pages pass a `routeKey` to the layout; `Seo.astro` builds the `hreflang` alternates from
the table. Without a key, `hreflang` is omitted entirely rather than guessed.

Each page exists twice as a thin routing file — title, description, route key — and both
render the same view component, so the markup lives once.

## Alternatives

**Astro's `getRelativeLocaleUrl()`.** Part of the framework and correct for prefixes, but
it cannot translate a slug; it only maps `/page` to `/en/page`.

**`@astrolicious/i18n`.** A third-party integration that does support translated paths, but
it replaces Astro's native i18n routing rather than extending it — the two cannot run side
by side. Trading a table of one line per page for a routing layer that has to be adopted
wholesale is the wrong exchange, especially in a project that avoids dependencies for
things it can own.

**Identical slugs in both languages.** Simplest option, and defensible if English is never
meant to be found through search. That question is still open; see `docs/open-points.md`.
Until it is answered, the table costs one line per page.

## Consequences

- Every new page needs an entry in the table. Forgetting it means no `hreflang` — visible,
  not silent, because the tags are simply absent.
- The language switcher, once it exists, reads from the same table. It has the same problem
  and would otherwise need a second mapping.
- Page files become pure routing entries; the content lives in `src/views/`. That sharpens
  the separation but means a "view" can be a whole page composition, not only a section.
- If English later becomes `noindex`, both the table and the `hreflang` block can be
  removed without touching any content.
