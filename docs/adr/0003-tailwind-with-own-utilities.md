# 0003 — Tailwind, with a small set of own utilities

**Status:** Accepted · **Date:** 2026-08-10

## Context

The design system carries over from the predecessor: brand colours, a custom typeface, a
tracking value applied to nearly all text, and two content widths (1200px for visual
layouts, 800px for running text). Those values must stay identical, and they need to be
usable from markup without repetition.

## Decision

Tailwind 4 through `@tailwindcss/vite`, with tokens declared in `@theme` inside
`src/styles/global.css`. Tailwind derives utilities from the tokens, so
`--color-brand-green-medium` becomes `bg-brand-green-medium` without further configuration.

Tailwind is the default for everything. Own CSS is written in exactly two situations:

1. The utility form would be an arbitrary value that hurts to read —
   `bg-[rgba(var(--something),0.1)]` belongs in a class
2. The same long chain repeats across many components

Own utilities are declared with `@utility` and prefixed `ec-`, so it stays visible in the
markup which class is ours and which comes from Tailwind. Currently that is
`ec-layout-visual-content` and `ec-layout-text-content`.

Component specific styles live in the component's own `<style>` block, which Astro scopes
automatically. `global.css` holds only tokens, the base layer and the shared utilities.

## Alternatives

**Plain CSS with custom properties.** Fully in keeping with "build it yourself", but it
trades a solved problem for hand written spacing scales and responsive variants, with no
payoff in the output.

**CSS Modules or a CSS-in-JS solution.** Astro's scoped `<style>` already provides component
level isolation without a build step or a runtime.

**SCSS.** Nesting, layers and custom properties are native in CSS now. A preprocessor would
add a build stage that buys nothing.

**No prefix on own classes.** Shorter, but in a markup line of twelve utilities it becomes
impossible to tell at a glance which class is defined in this project.

## Consequences

- Class lists in markup get long. `prettier-plugin-tailwindcss` sorts them into a canonical
  order so diffs stay readable and the order is never a matter of opinion.
- The two systems must not blur into each other. The rule above is the boundary: utility
  first, own class only when the utility form becomes unreadable or repeats.
- Whether Tailwind ships utilities for the newer platform features — anchor positioning,
  `::picker()` — has not been checked. Where it does not, those go into `ec-` classes.
