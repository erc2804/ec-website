# Styling

Read this before writing CSS, a `<style>` block or an own `ec-` utility.

**Tailwind first, always.** If a utility exists, use it.

Write a class into CSS only when the utility version turns into an arbitrary value
or an unreadable chain — `bg-[rgba(var(--something),0.1)]` belongs in a class, not
in the markup. Own utilities are prefixed `ec-` so it stays obvious in the markup
what is ours.

**Component styles live in the component.** Astro scopes `<style>` blocks per
component automatically; that is the modular unit. `global.css` holds only tokens,
the base layer and shared `ec-` utilities.

**Plain CSS, no preprocessor.** Nesting, layers and custom properties are native.

**Scoped styles outrank Tailwind.** Astro rewrites a scoped selector to
`.my-class[data-astro-cid-…]`, which beats a plain utility. A `width` inside a scoped
block therefore wins over `w-auto` in the markup and the override fails silently. Keep
layout properties out of scoped blocks and set them with utilities; use the scoped block
for what utilities cannot express.

**Scoped styles outrank the browser's own rules too.** Author declarations beat the
UA stylesheet regardless of specificity, which is what lets the desktop navigation
override `[popover]:not(:popover-open) { display: none }`. The same mechanism silently
disables that UA rule wherever else it is needed: a `display` in the base rule of a
popover leaves the closed panel rendered, focusable and hit-testable at `opacity: 0`.
Where an element's visibility is a browser-managed state, `display` belongs in the
state's rule, never in the base rule. See [ADR 0008](adr/0008-navigation-without-javascript.md).

**Never let an `ec-` utility and a Tailwind utility fight over the same shorthand.**
Both live in the same layer, so the winner is whichever the generated stylesheet emits
last — which is not something the markup shows. `ec-reveal` originally set `transition`,
lost it to the `transition-colors` a `Button` carries, and the reveal jumped instead of
fading. The fix was an animation, a property no utility competes for. Check for a
collision whenever an own utility sets `transition`, `transform`, `display` or
`background`, and reach for a non-competing property or a custom property instead. See
[ADR 0009](adr/0009-scroll-reveal.md).

**One link treatment for the whole site.** `a` carries the underline in the base layer:
quiet at rest, thicker and closer to the text on hover, built from `currentColor` so it
needs no variant on the dark sections. It is `text-decoration`, not a background, so it
survives a line break. Controls that are not running text — buttons, the wordmark, icon
links — opt out with `no-underline`. Do not write a second link hover into a component.

**The font carries its own vertical metrics.** Safari ignores `ascent-override`, so the
metrics are edited into both files in `public/fonts/` (ascent 840, descent 160, no line
gap). That puts the letters on the optical middle of their line box, so pills, buttons,
chips and inputs centre their text with plain flex centring: no nudges, no uneven
padding. Bump the `?v=` query string whenever a file changes. A new cut gets the same
metrics, or its text sits on a different line. `font-bold` resolves to the Demi cut
(`an-demi.woff2`, declared for 600 to 700), never to a synthetic bold.

**Animated cursors move with `left` and `top`, not `translate`.** Chrome runs `translate`
on the compositor and freezes keyframe stops that come from custom properties, so a path
measured by a script lands beside its marks. `left`/`top` are evaluated every frame. Set
the stops before the animation starts (`data-is-ready`), and keep the keyframe shorthand
free of `var()` that changes later.

**German compounds need soft hyphens at display sizes.** A word like
`Barrierefreiheitserklärung` has no break opportunity and runs straight out of a 320px
viewport. Put `­` at the compound seams — plural, one seam is rarely enough at
`text-display` — and never in a `meta.title`, where the character reaches the browser tab
and search results.
