# 0011 — No `onDark` button variant

**Status:** Accepted · **Date:** 2026-11-03

## Context

`ui/Button.astro` has three variants: primary, secondary and quiet, all built for the
light grounds. Dark surfaces exist (the home hero, the one-hand block), so a variant
for them suggests itself.

## Decision

No `onDark` variant until a button actually sits on a dark surface. Where a dark
surface holds a button today, it is the primary one, whose green fill works on dark
as on light.

## Alternatives

- **Build it ahead.** A variant without a place to look at it is designed blind, and
  an unused variant is code to keep correct for nothing.

## Consequences

The first button on a dark surface that is not primary brings the variant with it,
designed against that surface, with its focus ring and contrast checked there
(`ec-on-dark` already switches the focus colour).
