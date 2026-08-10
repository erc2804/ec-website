# 0002 — No component library

**Status:** Accepted · **Date:** 2026-08-10

## Context

Every project reaches the point where it needs a dialog, a popover, a tooltip or a custom
select. The reflex is to reach for Radix, Headless UI or Ark, and the reason is almost
always accessibility: focus trapping, escape handling, restoring focus on close, top layer
stacking and the ARIA relationships between trigger and surface are tedious to get right
and easy to get subtly wrong.

That reasoning was sound for years. It stopped being the whole story in early 2026.

## Decision

No component library. Components are built here, on top of platform primitives.

The following reached Baseline across Chromium, Firefox and Safari in early 2026:

- **Popover API** (`popover`, `showPopover()`) — top layer placement, light dismiss,
  focus restoration and the implicit relationship to the invoker, handled by the browser
- **Invoker Commands** (`command` / `commandfor`) — declarative triggers without JavaScript
- **CSS Anchor Positioning** — tethering a surface to its trigger in CSS, with an implicit
  anchor reference created between a popover and its invoker
- **Customizable Select** (`appearance: base-select`, `::picker()`) — a stylable native
  select instead of a rebuilt one

What used to require a library is now browser behaviour. A native `<select>` styled through
`base-select` keeps its platform keyboard handling and its screen reader semantics; a
rebuilt listbox only approximates them.

## Alternatives

**Radix or Ark.** Well tested and well maintained. But they simulate in JavaScript what the
browser now does natively, they ship runtime to do it, and a bug in that simulation is a bug
we cannot fix. Delegating accessibility to a dependency also means the accessibility of this
site is only as good as its update cadence.

**Web Components with Shadow DOM.** Attractive for encapsulation, but ARIA IDREF
relationships do not cross shadow boundaries — `aria-labelledby` and `aria-describedby`
pointing outside the root simply do not resolve. Proposals to fix this exist; their state
was not verified for this decision, so it was not made the foundation.

## Consequences

- More work per component, and no fallback when a browser lags. Support has to be checked
  per feature rather than assumed from a library's compatibility table.
- Progressive enhancement becomes a requirement rather than a nicety: where a primitive is
  missing, the content must still work.
- In exchange, the accessibility characteristics are the browser's rather than an
  approximation of them, and the shipped JavaScript for these components is close to zero.
- Every component must be tested against keyboard and screen reader directly. There is no
  library test suite standing behind it.
