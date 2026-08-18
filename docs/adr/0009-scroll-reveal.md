# 0009 — Scroll reveal as an animation

**Status:** Accepted · **Date:** 2026-08-18

## Context

Sections arrive as they enter the viewport: the heading first, its content just
behind it. The order mirrors how a screen reader walks a section, which is the
argument the site makes about itself.

Two traps sit in the obvious implementation. Hiding elements up front makes the
page blank without JavaScript. And a `transition` on `opacity` and `transform`
loses to any Tailwind transition utility on the same element.

## Decision

An `ec-reveal` utility in `global.css`, plus one `IntersectionObserver` in
`BaseLayout.astro` that collects every `.ec-reveal` on the page. Adding the class
to an element is all a view has to do.

The hidden start state lives inside `@media (scripting: enabled)`, so without
JavaScript nothing is ever stuck invisible.

The reveal is a **CSS animation, not a transition**. A `Button` carries
`transition-colors` for its hover; both would set the `transition` shorthand, and
the utility wins depending on where it lands in the generated stylesheet — the
element then jumps to its end state instead of fading. An animation cannot
collide with a transition utility.

`animation-fill-mode` is `backwards`, never `forwards` or `both`: backwards holds
the start frame through the stagger delay, while forwards would pin
`transform: none` permanently and silently disable any transform utility on the
same element. The stagger runs through `--ec-reveal-delay` rather than
`transition-delay`, which is the same collision class.

Under `prefers-reduced-motion` there is no entrance at all, rather than an
instant one: the content is simply there.

## Alternatives

**A transition.** Reads more naturally, but collides with `transition-*`
utilities as described. The failure is silent and only shows on elements that
happen to carry one.

**Observing each element in its own component script.** More scripts, repeated
logic, and no single place to change the timing.

**Animating on every entry rather than once.** A block that fades back out on the
way up reads as a glitch, so the observer unobserves after the first reveal.

## Consequences

- Any element can join the choreography with one class, on any page.
- The rule that layout and animation properties must not be split between an
  `ec-` utility and a Tailwind utility on the same element now has a documented
  precedent.
- The observer runs on every page from the layout, whether or not a page uses it.
