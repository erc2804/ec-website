# Internationalisation

Read this before adding a page, a route or a translation key.

German is the default locale and lives at `/`, English at `/en/`
(`prefixDefaultLocale: false`). Slugs are localised: `/barrierefreiheit` and
`/en/accessibility`.

**Copy lives in `src/i18n/`.** German is the reference; `Translations = typeof de` means a
missing or renamed key fails the type check instead of rendering an empty string. Read it
with `useTranslations(Astro.currentLocale)`.

Screen reader transcripts are **not translations**. English VoiceOver says `button` and
`edit text` where the German voice says `Taste` and `Textfeld`. Translating those strings
literally would misrepresent what the software announces.

**Localised paths come from the route table** in `src/i18n/index.ts`, never from the
current path — Astro has no built-in support for translated slugs, and deriving them breaks
as soon as the slugs differ. `Seo.astro` builds hreflang from it; without a `routeKey` the
tags are omitted rather than guessed. Every new page needs an entry. See
[ADR 0007](adr/0007-localised-slugs.md).

Each page therefore exists twice as a thin routing file — title, description, route key —
both rendering the same view. A view may be a whole page composition, not only a section.
