# Open points

Known gaps, carried deliberately rather than forgotten.

## Blocking before launch

**Brand green fails contrast for text.** `--color-brand-green-high` (`#379683`) reaches
3.26:1 on the page ground and 3.59:1 on white. WCAG AA requires 4.5:1 for body text, so the
eyebrow, section labels and the secondary button currently fail. Card headings pass, but
only because 24px bold counts as large text at 3:1.

The same hue at `#2A7263` would reach 5.18:1 and 5.70:1. That is a brand decision, not a
code decision — the current value stays until it is made. On a site selling accessibility,
this is the most expensive defect in the project.

**Screen reader wording is unverified.** The transcripts in `src/i18n/de.ts` and `en.ts`
follow German and English VoiceOver from memory. Every string needs checking on a real
device. The English set is not a translation of the German one — VoiceOver says `button`
and `edit text` where the German voice says `Taste` and `Textfeld` — so both have to be
verified separately.

**The home page is still the toolchain check.** `src/pages/index.astro` renders an English
test page under `lang="de"`. Harmless while it is only local, fatal if it ships.

**Share image has the wrong aspect ratio.** `public/og-default.png` is 806×801, carried
over from the old logo. Open Graph expects 1200×630, so previews get cropped.

## Open questions

**Is English a sales channel or a courtesy?** The whole localised-slug mechanism — route
table, hreflang, language switcher — only pays off if the English pages are meant to be
found through search. If English merely serves international teams that are already in
contact, the pages could carry `noindex` and half the machinery would fall away.

## Not yet checked

- **Mobile.** Every page so far was only reviewed at desktop width.
- **The site's own accessibility.** No audit has been run against this project yet.
- **Dark mode.** No decision taken; the previous project committed to light only.

## Deliberately not done

**No `llms.txt`.** Google's generative AI search guidance from May 2026 names `llms.txt`
and content chunking as unnecessary, while much of the GEO advice online recommends them.
Cheap to add later if that changes.

**No `onDark` button variant.** The CTA panel is dark, but its single button is the filled
primary and needs no adjustment. The moment a second button sits on a dark surface, the
variant belongs in `Button.astro` — not as a class list from the outside.

**No live region component.** There is exactly one live region so far. It becomes a
component when the second demo needs one — together with an `announce()` helper that
handles the parts that are easy to get wrong: the region has to exist in the DOM before its
content changes, and repeating identical text is often not announced again.

## Resolved

- hreflang no longer derives the alternate from the path; it reads the route table in
  `src/i18n/index.ts`, so localised slugs are handled correctly
- `trailingSlash: "never"` — one spelling per URL across both languages
- Locale fallback comes from `siteConfig.defaultLocale` everywhere
