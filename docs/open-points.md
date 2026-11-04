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

## Next up

**Move the Netlify project to this repository.** The live site still builds from
`website-gatsby`. In order: stop auto publishing, link the project to `ec-website`
(branch `main`), set `ANTHROPIC_API_KEY` as a secret for Production, Deploy Previews
and Branch deploys, build, then test the deploy's own link before publishing: a URL
without trailing slash (`/barrierefreiheit` must load without a redirect, from
`build.format: "file"`), an old URL (`/de/portfolio/konux` must 301 to the new one),
`/app-ads.txt`, the app privacy pages, one real form submission, both chats. If
anything is off, the last Gatsby deploy can be published again from the deploy list.

**Live regions through one helper** (ADR 0012): build `announce()`, move every live
region onto it, then check each with VoiceOver and NVDA.

**After launch.** Search Console: submit the new sitemap, remove the old one (no change
of address needed, the domain stays). Bing Webmaster Tools: import from Search Console,
submit the sitemap. Watch rankings for the first weeks.

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
