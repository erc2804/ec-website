# ec-website

Personal website of Ercan Cicek — frontend development, design and accessibility.
Static site, bilingual, built with Astro.

## Read before you start

These files hold the detail. Open the one that matches the task before writing anything:

| Before you …                                      | Read                                                         |
| ------------------------------------------------- | ------------------------------------------------------------ |
| write CSS, a `<style>` block or an `ec-` utility  | [docs/styling.md](docs/styling.md)                           |
| start any concept or design work                  | [docs/design-language.md](docs/design-language.md)           |
| add a page, a route or a translation key          | [docs/internationalisation.md](docs/internationalisation.md) |
| write or change any text that appears on the site | [docs/copy.md](docs/copy.md)                                 |
| report a visual change                            | [docs/page-review.md](docs/page-review.md)                   |
| question an architecture decision                 | [docs/adr/](docs/adr/README.md)                              |
| pick up open work                                 | [docs/open-points.md](docs/open-points.md)                   |

## Working with the author

- Talk to the author in German, informal "Du", plain language, no em dashes.
- Propose before building, think along, push back when something is off, and give a clear
  recommendation. The author approves each step and decides.
- When asked for ideas, write ideas as text and build nothing.
- Concept work runs: research how others solve it, then a mock in the chat, then approval,
  then building.
- **Never commit or push.** The author does all git work.
- Accessibility as far as it helps the user, without overengineering.
- `website-gatsby` is a content source only. Nothing is built there.

## Stack

- **Astro 7**, **TypeScript strict**
- **Tailwind 4** via `@tailwindcss/vite`; design tokens live in `@theme` in
  `src/styles/global.css`
- **No UI framework.** Interactivity is vanilla JS inside `<script>` blocks
- **Tabler icons** via `@tabler/icons-astro`
- **pnpm 11** (pinned in `package.json`), **Node >= 22.12**

**TypeScript stays on 6.x.** TypeScript 7 is the native compiler and does not expose the
programmatic API `astro check` relies on. Upgrading breaks type checking until the Astro
language server catches up.

## Commands

```bash
pnpm dev            # dev server
pnpm build          # production build
pnpm preview        # serve the build locally
pnpm format         # prettier --write .
pnpm format:check   # verify formatting without writing
pnpm lint           # eslint .
pnpm lint:fix       # eslint . --fix
pnpm check          # astro check — type diagnostics
```

The inquiry chat needs its Netlify function: run `netlify dev` (port 8888, proxies Astro
on 4321) instead of `pnpm dev`. `ANTHROPIC_API_KEY` lives in the gitignored `.env`.

`pnpm format` is mandatory after every change. Before calling anything finished: `format`,
`lint`, `check`, `build` — all four.

A `PostToolUse` hook in `.claude/settings.json` formats and lints every file after a
write and reports failures back. Disable with `EC_HOOKS=0`.

pnpm 10+ blocks package build scripts by default. Approvals live in
`pnpm-workspace.yaml` under `allowBuilds:` — no longer in `package.json`, that
field is ignored by pnpm 11.

## Project structure

```
src/
  layouts/      BaseLayout — document shell, language, global styles
  components/
    Seo.astro   Head tags: canonical, Open Graph, hreflang, JSON-LD
    ui/         Atomic, reusable building blocks. Know nothing about any page.
  views/
    <page>/     Page specific sections, or a whole page composition when several
                language routes render the same structure.
  pages/        Routes. Thin: title, description, route key.
  config/       site.ts — shared site data (URL, contact, address, profiles)
  i18n/         de.ts, en.ts, route table, useTranslations
  styles/       global.css — tokens, base layer, ec- utilities
```

Dependency direction is one way: `pages` → `views` → `ui`. A `ui` component never
imports from `views`, and never knows which page it sits on.

The canonical host is **`https://ercancicek.com` without www**. Anything that emits
absolute URLs reads it from `src/config/site.ts`.

German is the default locale at `/`, English at `/en/`, with localised slugs from the
route table in `src/i18n/index.ts`. Copy lives in `src/i18n/`; German is the reference.

## Conventions

**Language.** Everything in the codebase is English — identifiers, comments,
documentation, commit messages. Only the site content itself is German and English.

**Naming.** Long, descriptive `camelCase` over short and clever.
`additionalClasses` beats `cls`.

**One word per concept.** CSS classes are `class`, never `className` — this is not React.
So: `additionalClasses`, `widthClass`, `stateClass`. Mixing both spellings inside one file
is a defect. The same applies to every other concept: pick the word once and use it
everywhere.

**Comments.** Only where they carry information the code cannot: a non-obvious
constraint, a value taken from an external source, a deliberate deviation. Never explain
what the code already shows, never justify a common practice. Cut every comment that would
survive being deleted. Always in this shape:

```js
// --- Short explanation
```

```css
/* --- Short explanation --- */
```

**Readability first.** No clever detours, no indirection that saves three lines and costs
ten minutes of reading.

**Formatting.** Prettier decides, never a hand made exception. Class order is handled by
`prettier-plugin-tailwindcss`.

## Components

- **A component earns its existence.** Build one when the same structure is needed a
  second time, or when it carries real behaviour. Never to wrap a single utility class.
- **Atomic and self contained.** A `ui` component solves one thing and takes a `class`
  prop, merged through `class:list` — never overwritten:
  `const { class: additionalClasses } = Astro.props` →
  `class:list={["some-base-class", additionalClasses]}`.
- **Responsive and robust by default.** A component that breaks at 320px or with a 60
  character label is not finished.
- **Semantic markup.** Prefer an `as` prop over wrapping everything in `div`s.

## Icons

Tabler only, imported individually (`import { IconChevronRight } from "@tabler/icons-astro"`),
so a typo fails the build. Colour them with `text-*`, not `fill-*`. Never mix icon sets.

## Accessibility

Accessibility is the work sample here, so every mistake counts double.

- Semantic HTML before ARIA
- Visible focus is the default state, defined once in the base layer
- `prefers-reduced-motion` is respected
- Real `<button>` elements for anything interactive — they fire `click` on Enter
  and Space, so mouse, touch and keyboard share one code path
- Decorative icons get `aria-hidden="true"`. An icon that carries meaning needs a text
  alternative next to it; never let an icon be the only label
- A decorative element must not carry information that is missing from the text.
  When that holds, `inert` plus `aria-hidden` is always correct
- Interactive targets are at least 44px, well past the 24px of WCAG 2.2 SC 2.5.8.
  An icon-only control needs the target size even though the mark itself is smaller
- One focus indicator, never two. The screen reader demo replaces the base ring on
  its targets rather than adding to it: the black cursor frame already marks the
  element, and near black on white clears the 3:1 a focus indicator needs. Anything
  that suppresses the base `outline` has to put an indicator of its own in its place

## Working method

**Verify, do not claim.** Before stating that something works, read the actual state back —
trigger the interaction, log the values, check computed styles. Anything that could not be
verified is named as unverified. A guess is never presented as a finding.

**A passing build is not a review.** `build` and `check` catch function, never form.
Naming, redundancy, a needless abstraction, a sentence that says the wrong thing — none of
it fails a build. After writing, read the diff against this file before calling anything
done.

**Fix the class of defect, not the instance.** When a problem is pointed out in one file,
go through the whole project for the same kind of problem in the same pass.

**Build only what was asked for.** Unrequested code is disproportionately the bad code —
it is written without a real use case to check it against.

**Look at the result.** For anything visual, open it in the browser and look. The dev
server runs in the author's own terminal. Check every larger visual change in Claude in
Chrome whenever it is available, in a tab of your own, never the author's, and say when you resize
the window. "It builds" says nothing about whether it is any good.

## Astro 7 pitfalls

- **Whitespace follows JSX rules.** A line break between two inline elements no
  longer renders as a space. Use `{" "}` where a space is needed.
- **The compiler no longer fixes HTML silently.** Unclosed tags and bad nesting
  break the build instead of disappearing into the browser.
