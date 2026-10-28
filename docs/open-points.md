# Open points

Known gaps, carried deliberately rather than forgotten.

## Blocking before launch

**Brand green fails contrast for text.** `--color-brand-green-high` (`#379683`) reaches
3.26:1 on the page ground and 3.59:1 on white; WCAG AA needs 4.5:1 for body text. It is
used at body size in the secondary `Button` and the inquiry chat markers. `#2A7263` would
pass. A brand decision, not a code decision.

**The privacy policy contradicts the site.** `legal.privacy` says no personal data is
collected; the inquiry form sends name, email and phone through Netlify Forms, the chat
sends text to Anthropic. Both need a section, the Anthropic DPA needs checking.

**The inquiry form is not wired up on Netlify.** `ANTHROPIC_API_KEY`, form detection, a
notification for `projekt-anfrage`, a spending limit, one real submission on a preview.

**Screen reader wording is unverified.** The transcripts in `de.ts` and `en.ts` have not
been checked against VoiceOver on a real device yet, in both languages separately.

**Share image has the wrong aspect ratio.** `public/og-default.png` is 806×801; Open Graph
expects 1200×630.

## Open questions

**English: sales channel or courtesy?** The localised slugs, hreflang and the switcher only
pay off if the English pages should be found through search.

**Portfolio.** Paused: Curanto, HIT and Welliba came from employment, whether they may be
shown is undecided. New anonymised projects still need card images.

**Home page, "Weiter, Taste" vignette.** Still needs its animation.

**Home page design teaser.** "… aussieht wie alle anderen" may be too harsh now that the
design page frames AI templates as a good start.

**Live region helper.** Several live regions exist now (demo, chat log, inquiry status).
Open is whether they share an `announce()` helper that handles the region existing before
its content changes and repeated identical text.

## Not built yet

- About page. Renders `Placeholder` blocks.
- Chatbot concept and easter egg.
- A real bold cut of `an-regular`, so buttons stop relying on synthetic bold.

## Not yet checked

- **Mobile.** Design and development pages were only reviewed at desktop width. Phone
  check pending for: hero animations,
  states dropdown, process scenes under `lg`, inspector panel below the heading.
- **English copy** of the design and development pages.
- **The site's own accessibility.** No audit has been run against this project.
- **Dark mode.** No decision; the previous project committed to light only.

## Housekeeping

- `_to_delete/` holds `HeroBuild.astro` and `DeviceFrame.astro`, two discarded hero
  variants. Remove the folder.

## Deliberately not done

**No `llms.txt`.** Google's generative AI search guidance (May 2026) calls it unnecessary.

**No `onDark` button variant** until a button sits on a dark surface.
