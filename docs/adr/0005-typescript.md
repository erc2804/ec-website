# 0005 — TypeScript in strict mode

**Status:** Accepted · **Date:** 2026-08-10

## Context

For a static site with little logic, TypeScript is often ceremony: a build step and a type
layer over code that mostly renders markup. The predecessor was plain JavaScript and got
along fine — with one recurring category of defect.

In that project, structured content lived in JSON, and booleans were stored as strings:

```json
{ "label": "React", "mainListing": "true" }
```

One place compared correctly against `"true"`. Another checked the value for truthiness —
and `"false"` is a non-empty string, so that branch was always taken. Twenty-six entries
carried `"mainListing": "false"`. Either the wrong things rendered, or the condition was
dead code. Nothing failed, nothing warned, and the two views quietly disagreed.

That is not a discipline problem. It is what happens when structured content has no schema.

## Decision

TypeScript in strict mode, the configuration Astro ships with (`astro/tsconfigs/strict`).

The value is expected in two specific places, not spread evenly across the codebase:

- **Content collections.** Schemas validate front matter at build time. A typo, a missing
  field or a string where a boolean belongs breaks the build instead of the page.
- **Component props.** A `Props` interface documents a component's API where it is used,
  and catches a renamed prop at every call site.

`.astro` files need no annotations to benefit; markup stays markup.

## Alternatives

**Plain JavaScript with JSDoc.** Gets most of the type checking without a compile step, but
loses the schema validation for content — the part that actually caused the problem above.

**Plain JavaScript, no types.** What the predecessor did, along with the defect described.

## Consequences

- Types have to be maintained. Where they would only restate the obvious, they are omitted;
  the goal is fewer defects, not maximum coverage.
- Astro provides the toolchain, so this adds no configuration and no separate build step.
- Content schemas have to be written before content is added — deliberately, since that is
  where the benefit sits.
