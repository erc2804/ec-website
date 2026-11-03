# 0012 — One `announce()` helper for live regions

**Status:** Accepted, not yet built · **Date:** 2026-11-03

## Context

Several parts of the site speak to screen readers through live regions: the screen
reader demo, the states demo, the chat status, the inquiry form's send status, the
copy button on the email tile. Each writes its region its own way, and live regions
fail quietly in the same few ways:

- A region that is not in the accessibility tree before its text changes is not
  announced. MDN: "Establish the live region before updating its content", and "The
  most reliable way to ensure that live regions are registered is to include them in
  the initial markup" ([ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions)).
  `display: none` takes it out of the tree just like a missing node does
  ([Scott O'Hara, Are we live?](https://www.scottohara.me/blog/2022/02/05/are-we-live.html)).
- A region created by script needs its text in a later task. MDN: "defer the content
  update to a later event-loop task, for example using setTimeout()".
- Assistive technology announces changes. To say the same text twice, the region is
  cleared first and filled again a moment later; MDN calls this "sometimes unreliable,
  as it's dependent on the exact timing of these two updates".

## Decision

One small helper, `announce(region, text)`, used by every live region on the site.
The region itself stays in the initial markup and is never hidden with `display`.
The helper clears the region, writes the text in a later task, and handles the same
text in a row. Behaviour differs between browsers and screen readers (MDN: "Behavior
can vary across browser and assistive technology combinations"), so the helper is
only adopted once it is tested with VoiceOver in Safari and with NVDA in Firefox and
Chrome, and each region still announces as before.

## Alternatives

- **Each component on its own.** That is the state today, and how the same mistake
  ends up in one region but not the others.

## Consequences

Every live region changes once, and every one needs a screen reader check after the
switch. Until then the regions stay as they are.
