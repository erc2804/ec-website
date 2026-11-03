# Open points

Known gaps, carried deliberately rather than forgotten.

## Blocking before launch

**The inquiry form is not wired up on Netlify.** `ANTHROPIC_API_KEY`, form detection, a
notification for `projekt-anfrage`, one real submission on a preview. A key of its own for
the website with a monthly spend limit in the Anthropic Console caps what bots can cost;
both chats then say Pixel-Ercan is done for the month.

**Screen reader wording is unverified.** The transcripts in `de.ts` and `en.ts` have not
been checked against VoiceOver on a real device yet, in both languages separately.

## Open questions

**English: sales channel or courtesy?** The localised slugs, hreflang and the switcher only
pay off if the English pages should be found through search.

**Home page, "Weiter, Taste" vignette.** Still needs its animation.

**Live region helper.** Several live regions exist now (demo, chat log, inquiry status).
Open is whether they share an `announce()` helper that handles the region existing before
its content changes and repeated identical text.

## Next up

**Focus order in the screen reader demo** (accessibility page) feels off: from
"Weiter" the next stop is "Warum ist das ein Problem?". Check the order against the
visual layout (WCAG 2.4.3, Focus Order) and decide where the button belongs.

## Not built yet

- Easter egg.

## Not yet checked

- **Mobile.** Design and development pages were only reviewed at desktop width. Phone
  check pending for: hero animations,
  states dropdown, the design process scene under `lg`.
- **English copy** of the design and development pages.
- **The site's own accessibility.** Audited in Chrome against WCAG 2.2 AA (Lighthouse,
  keyboard, reflow at 320px, text spacing, contrast); the screen reader check on a real
  device is the open part (see above).
- **Dark mode.** No decision; the previous project committed to light only.

## Housekeeping

- `src/components/ui/Placeholder.astro` is unused since the about page was built.

## Deliberately not done

**No `llms.txt`.** Google's generative AI search guidance (May 2026) calls it unnecessary.

**No `onDark` button variant** until a button sits on a dark surface.
