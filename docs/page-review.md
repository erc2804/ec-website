# Page review

Read this before reporting a visual change.

Review the whole page, not the change. Scroll the entire page top to bottom at desktop and
at mobile width, and check:

- Section backgrounds alternate. Two neighbouring sections never share a tone.
- Card surfaces follow one rule: white on grey gets `shadow-sm`, grey on white gets none.
- Text contrast reaches 4.5:1, large text 3:1. Dimming with opacity counts against it.
- Spacing between sections and inside cards matches the rest of the site.
- No content says the same thing twice on one page.
- Cards in a row align: headings, body and footers line up, lengths stay similar.
- Copy reads like a person talking: no filler, no bragging, no invented claims.
- The in-between widths hold too: 1024px and 1280px, not only a phone and a full desktop.
  Elements that share a row keep a visible gap or wrap; they never touch.
- Every interactive state looks finished: step through a demo to its end, switch every
  toggle, and look again.
- The composition reads as one piece. Controls that belong together sit together; a lone
  button floating in an empty row counts as broken even when it works.

A finding outside the change is reported, not silently left for later.
