# ec-website

Personal website of [Ercan Cicek](https://www.ercancicek.com) — frontend development,
design and accessibility. Static, bilingual (German and English), built with Astro.

## Why this repo is public

The interesting part of a site like this is not the markup, it is the reasoning: why this
framework, why no component library, why these accessibility guarantees. Those decisions
are written down in [`docs/adr/`](docs/adr/) — context, alternatives and consequences for
each one.

## Stack

|                 |                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------- |
| Framework       | [Astro 7](https://astro.build) — zero JS by default, islands, built-in i18n routing      |
| Styling         | [Tailwind 4](https://tailwindcss.com) via `@tailwindcss/vite`, design tokens in `@theme` |
| Language        | TypeScript, strict                                                                       |
| Interactivity   | Vanilla JS in `<script>` blocks — no UI framework, no component library                  |
| Package manager | pnpm 11, pinned via `packageManager`                                                     |
| Runtime         | Node >= 22.12                                                                            |

## Getting started

```bash
pnpm install
pnpm dev
```

| Command             | Description                       |
| ------------------- | --------------------------------- |
| `pnpm dev`          | Dev server                        |
| `pnpm build`        | Production build to `dist/`       |
| `pnpm preview`      | Serve the build locally           |
| `pnpm format`       | Format everything with Prettier   |
| `pnpm format:check` | Verify formatting without writing |

Build scripts are blocked by default in pnpm 10+. Approvals live in `pnpm-workspace.yaml`
under `allowBuilds:`.

## Structure

```
src/
  layouts/      Document shell
  components/
    ui/         Atomic, reusable building blocks
  views/
    <page>/     Page specific sections
  pages/        Routes
  styles/       Design tokens, base layer, ec- utilities
```

Dependencies point one way: `pages` → `views` → `ui`. A `ui` component never knows which
page it renders on.

## Accessibility

The site is built to WCAG 2.2 AA. A few things are structural rather than incidental:

- Visible focus is defined once in the base layer and applies to every interactive element
- `prefers-reduced-motion` is respected throughout
- Anything interactive is a real `<button>` or `<a>`, so mouse, touch and keyboard share
  one code path
- Decorative elements never carry information that is missing from the surrounding text

Conventions and working practices are documented in [`AGENTS.md`](AGENTS.md).

## Licence

Code is MIT. Content, images and branding are not — please do not reuse those.
