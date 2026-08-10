# 0004 — German as default locale, served at the root

**Status:** Accepted · **Date:** 2026-08-10

## Context

The site is bilingual. The predecessor used `gatsby-plugin-intl` with English as the default
and both languages behind a prefix: `/en/` and `/de/`. The root URL only redirected.

The primary audience is German speaking. Regulatory context (BFSG, EN 301 549), the wording
of enquiries and the relevant search terms are German. English matters for international
teams and stakeholders, but it is the secondary case.

## Decision

`de` is the default locale and is served **without a prefix**, `en` lives under `/en/`:

```js
i18n: {
  locales: ["de", "en"],
  defaultLocale: "de",
  routing: { prefixDefaultLocale: false },
}
```

Astro's built-in i18n routing handles this; no plugin involved.

## Alternatives

**Keeping `/de/` and `/en/` symmetrically.** Visually tidy and language agnostic, but it
means the main audience always travels through a redirect, and the root URL — the strongest
one on the domain — carries no content of its own.

**English as default.** The predecessor's setup. It fits an international portfolio, not a
practice whose subject matter is German legislation.

**Single language.** Would remove real complexity, but English content is genuinely used in
conversations with international teams.

## Consequences

- Existing `/de/...` URLs from the predecessor break. Acceptable: the new structure replaces
  the old one wholesale, and the content is being rewritten anyway.
- `hreflang` annotations and a language switcher have to be built deliberately, since the
  two languages no longer sit at symmetrical paths.
- `Astro.currentLocale` returns the default for unprefixed routes, so `<html lang>` is
  correct without special handling.

## Not decided here

Astro provides the routing, not the translated strings — there is no equivalent to
`intl.formatMessage()`. How message catalogues are organised is a separate decision.
