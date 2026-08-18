# 0008 — Navigation without JavaScript

**Status:** Accepted · **Date:** 2026-08-18

## Context

The site navigation has to work as an inline row on wide screens and as a panel
on narrow ones. The usual solution ships JavaScript: a toggle, a focus trap,
escape handling, focus return, and a state flag mirrored into `aria-expanded`.

[ADR 0002](0002-no-component-library.md) already decided that this class of
behaviour belongs to the browser. The Popover API delivers exactly it.

## Decision

One `<nav popover>` in the document, used at both breakpoints.

Below `md` it is a popover panel: top layer, light dismiss, escape, and focus
return to the invoker are the browser's job. From `md` an author rule overrides
the popover's UA `display: none` and the same element sits inline in the header
row. Author rules beat UA rules regardless of specificity, so no `!important` is
involved.

That cuts both ways, and it is the trap in this construction: **`display` is the
state switch, so it may never appear in the panel's base rule.** A single
`display: flex` there beats the same UA rule the desktop branch relies on, and
the closed panel stays rendered — in the accessibility tree, in the tab order,
and hit-testing over the content beneath it, invisible at `opacity: 0`. Only
`:popover-open` and the `md` rule may set it. `transition-behavior: allow-discrete`
on `display` is what keeps the closing animation visible without it.

The invoker is a plain `popovertarget` button. The browser contributes the
expanded state itself — verified in the accessibility tree as
`button "Menü" expandable` when closed and `expandable expanded` when open. The
icon follows the state through `:has()`, so no script keeps them in sync.

**The panel is deliberately not modal, and is not drawn as one.** A popover does
not seal off the page: focus still moves through the content behind it. A dimmed,
blurred backdrop would promise a modality that does not exist. The panel is
therefore lifted by a shadow and a border, not by darkening everything else.

**It closes when focus leaves it, and does not trap focus.** Trapping focus is a
dialog's behaviour and only honest when the rest of the page is `inert`; here it
would lock the reader into a panel that seals nothing. Closing on departure is
what the ARIA Authoring Practices describe for a disclosure navigation menu, and
it is the one thing light dismiss does not cover — it reacts to a click outside
and to escape, but not to a tab past the last link.

This is the only script the navigation needs: one `focusin` listener on the
document, which closes the panel once focus lands outside it and outside its
toggle. Watching the document rather than the panel covers leaving the toggle as
well, and it leaves a window switch alone, because focus stays where it was
rather than reading as a departure. Without the script the menu still opens, and
escape and an outside click still close it.

## Alternatives

**`<dialog>` with `command="show-modal"`.** Gives a real focus trap, `inert` for
the rest of the page and `role="dialog"`, all declaratively. But a `<dialog>`
rendered inline on desktop still reports itself as a dialog in the accessibility
tree, so the desktop navigation would carry the wrong role. Avoiding that means
two separate structures — a duplicated link list and two landmarks — which is
disproportionate for a handful of links.

**A separate desktop list and mobile panel.** Straightforward, but the links
exist twice and drift apart, and both are navigation landmarks that need
distinguishing labels.

**A scripted toggle.** Everything the browser now does for free, written by hand
and maintained by hand, including the focus return that is easy to forget.

## Consequences

- The mobile panel is a disclosure menu, not a dialog. That is the correct ARIA
  pattern for navigation, but it means the visual treatment must never suggest
  modality.
- The desktop branch depends on an author rule beating the popover's UA
  `display: none`, and the mobile branch depends on nothing else beating it.
  Anyone rewriting that CSS has to know why `display` sits where it does.
- One link list, one landmark, and a single listener of behaviour that the
  browser does not offer.
