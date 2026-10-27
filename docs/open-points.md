# Open points

Known gaps, carried deliberately rather than forgotten.

## Blocking before launch

**Brand green fails contrast for text.** `--color-brand-green-high` (`#379683`) reaches
3.26:1 on the page ground and 3.59:1 on white. WCAG AA requires 4.5:1 for body text. It is
still used as a text colour at body size: the secondary `Button`, the `Placeholder` label
and the marker in front of each filled field in the inquiry chat. Headings in that colour
pass only because they count as large text at 3:1.

The same hue at `#2A7263` would reach 5.18:1 and 5.70:1. That is a brand decision, not a
code decision — the current value stays until it is made. On a site selling accessibility,
this is the most expensive defect in the project.

**The privacy policy contradicts the site.** `legal.privacy` in `src/i18n/de.ts` and
`en.ts` states that no personal data is collected. The inquiry form sends name, email and
phone through Netlify Forms, and the inquiry chat sends the visitor's text to Anthropic.
Both need a section, and the Anthropic DPA needs checking.

**The inquiry form is not wired up on Netlify yet.** Before it can go live:
`ANTHROPIC_API_KEY` set in Netlify, form detection enabled, a notification for
`projekt-anfrage`, a spending limit in the Anthropic console, and one real submission
tested on a deploy preview.

**Screen reader wording is unverified.** The transcripts in `src/i18n/de.ts` and `en.ts`
follow German and English VoiceOver from memory. Every string needs checking on a real
device. The English set is not a translation of the German one — VoiceOver says `button`
and `edit text` where the German voice says `Taste` and `Textfeld` — so both have to be
verified separately. The inquiry chat needs its own VoiceOver pass, including the own
messages that are briefly silenced before they are announced.

**Share image has the wrong aspect ratio.** `public/og-default.png` is 806×801, carried
over from the old logo. Open Graph expects 1200×630, so previews get cropped.

## Open questions

**Is English a sales channel or a courtesy?** The whole localised-slug mechanism — route
table, hreflang, language switcher — only pays off if the English pages are meant to be
found through search. If English merely serves international teams that are already in
contact, the pages could carry `noindex` and half the machinery would fall away.

**Which projects go into the portfolio?** `src/data/projects.ts` holds twelve ported
projects. Curanto, HIT and Welliba came from employment, and whether they may be shown is
undecided. Nothing builds on the file until that is settled.

**Screen reader demo, "Weiter" vignette.** It still needs an animation. Ideas 1 and 2 were
recommended; no choice yet.

**Accessibility page, process section.** Does the gliding focus frame carry the section on
its own, or does it read as arbitrary?

**Home page contact text.** The body still reads "Schreib mir kurz, was du vorhast …" and
should match the wording of the inquiry page.

**Scroll cue.** It could stop once the visitor has scrolled. Optional.

**Live region component.** It was deferred until a second live region appeared. Now there
are several: the screen reader demo, plus the chat log and the status messages on the
inquiry page. Open is whether they share a component with an `announce()` helper that
handles the parts that are easy to get wrong: the region has to exist in the DOM before its
content changes, and repeating identical text is often not announced again.

## Not built yet

- Design and development pages, about page and portfolio. They currently render
  `Placeholder` blocks.
- Chatbot concept and easter egg.

## Not yet checked

- **Mobile.** Every page so far was only reviewed at desktop width. The accessibility and
  inquiry pages need a check on a real phone.
- **English copy.** None of the new pages has had an English copy review.
- **The site's own accessibility.** No audit has been run against this project yet.
- **Dark mode.** No decision taken; the previous project committed to light only.

## Deliberately not done

**No `llms.txt`.** Google's generative AI search guidance from May 2026 names `llms.txt`
and content chunking as unnecessary, while much of the GEO advice online recommends them.
Cheap to add later if that changes.

**No `onDark` button variant.** The dark sections carry no button so far. The moment a
button sits on a dark surface, the variant belongs in `Button.astro` — not as a class list
from the outside.

## Resolved

- The home page is built; `src/pages/index.astro` no longer renders the toolchain check
- hreflang no longer derives the alternate from the path; it reads the route table in
  `src/i18n/index.ts`, so localised slugs are handled correctly
- `trailingSlash: "never"` — one spelling per URL across both languages
- Locale fallback comes from `siteConfig.defaultLocale` everywhere
