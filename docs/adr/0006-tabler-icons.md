# 0006 — Tabler icons, imported individually

**Status:** Accepted · **Date:** 2026-08-10

## Context

The first icons in this project were hand written SVG paths inline in the markup, plus a
typographic character (`☞`) as a pointer. Both are dead ends: hand written paths are
unreadable in a diff and inconsistent in stroke and grid, and a text glyph renders
differently in every font.

Drawing an icon set is not a differentiator for this project. Using one consistently is.

## Decision

[Tabler Icons](https://tabler.io/icons) through `@tabler/icons-astro`, each icon imported
by name:

```astro
import {IconChevronRight} from "@tabler/icons-astro"
<IconChevronRight class="size-6 text-brand-blue" aria-hidden="true" />
```

Tabler is MIT licensed, covers roughly 5,900 icons on a single 24×24 grid with a 2px
stroke, and its rounded geometry sits well next to the brand typeface. The size makes it
unlikely a second set is ever needed, which is the usual reason icon sets drift apart.

## Alternatives

**`astro-icon` with Iconify.** One integration, every icon set available, referenced by
name string: `<Icon name="tabler:chevron-right" />`. More flexible, but a typo in a string
is not caught by the editor, and the failure mode depends on configuration. Individual
imports fail loudly at build time — the same reason this project uses TypeScript.

**Heroicons.** From the Tailwind team and well matched to it, but roughly 300 icons; too
narrow for a site that will need domain specific symbols.

**Icon font.** Renders as text, breaks with font blocking, and reads as a stray character
when it fails. Wrong choice on a site about accessibility.

**Keep drawing them.** Only defensible for a handful of marks, and it produced exactly the
inconsistency that triggered this decision.

## Consequences

- Verified: icons are inlined as SVG at build time. No runtime, no request, no JavaScript
  bundle — `dist/_astro/*.js` does not exist on a page using them.
- Colour comes from `text-*`, not `fill-*`; the icons use `currentColor`.
- Accessibility is not handled by the library. Decorative icons need `aria-hidden="true"`
  explicitly, and an icon may never be the only label for a control.
- Mixing in a second set would break visual consistency, so a missing icon is solved
  within Tabler or by extending it in the same style.
