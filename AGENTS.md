# ec-website

Personal website of Ercan Cicek: frontend development, design and accessibility. Static,
bilingual, built with Astro.

## Read before you start

| Before you …                                      | Read                                                         |
| ------------------------------------------------- | ------------------------------------------------------------ |
| start any concept or design work                  | [docs/design-language.md](docs/design-language.md)           |
| write CSS, a `<style>` block or an `ec-` utility  | [docs/styling.md](docs/styling.md)                           |
| write or change any text that appears on the site | [docs/copy.md](docs/copy.md)                                 |
| add a page, a route or a translation key          | [docs/internationalisation.md](docs/internationalisation.md) |
| report a visual change                            | [docs/page-review.md](docs/page-review.md)                   |
| question an architecture decision                 | [docs/adr/](docs/adr/README.md)                              |
| pick up open work                                 | [docs/open-points.md](docs/open-points.md)                   |

## Working with the author

- German, informal "Du", plain words, no em dashes. Short answers, the point first.
- Propose, think along, push back when something is off, recommend one option. The author
  decides and approves each step.
- Concept work: research how others solve it, mock it in the chat, get approval, then
  build. When asked for ideas, write text and build nothing.
- **Never commit or push.** The author does all git work and runs
  `pnpm format && pnpm lint && pnpm check && pnpm build` himself before a commit.
- Files that are no longer needed are deleted, not parked. Name every deleted file in
  the report.

## Stack

- **Astro 7**, **TypeScript strict** (stays on 6.x: TypeScript 7 breaks `astro check`)
- **Tailwind 4** via `@tailwindcss/vite`; tokens live in `@theme` in `src/styles/global.css`
- **No UI framework.** Interactivity is vanilla JS inside `<script>` blocks
- **Tabler icons** via `@tabler/icons-astro`, imported individually
- **pnpm 11**, **Node >= 22.12**

## Commands

```bash
pnpm dev            # netlify dev, run by the author in his own terminal
pnpm build          # production build
pnpm format         # prettier --write .
pnpm lint           # eslint .
pnpm check          # astro check
```

`pnpm dev` runs `netlify dev`: the site and Pixel-Ercan's two Netlify functions (request page, about page) on port
8888, proxying Astro on 4321. `netlify.toml` starts Astro with `pnpm astro dev`; pointing
it at `pnpm dev` loops. `ANTHROPIC_API_KEY` lives in the gitignored `.env`.

The dev server sometimes keeps serving a component's old CSS after an edit. `touch` the
`.astro` file and reload; if the new rules are still missing in the served stylesheets,
that is the cause, not the code.

## Project structure

```
src/
  assets/       Photos, served through astro:assets as AVIF with WebP fallback.
                public/ keeps only files that need a fixed URL (share images, logo)
  layouts/      BaseLayout — document shell, language, global styles
  components/   Shared sections (Services, OneHand, Faq, Contact, ProcessSnap) and
    ui/         atomic building blocks that know nothing about any page
  views/
    <page>/     Page specific sections and scenes, or the whole page composition
  pages/        Routes. Thin: title, description, route key, both languages
  config/       site.ts — shared site data (URL, contact, address, profiles)
  i18n/         de.ts (reference), en.ts, route table, useTranslations
  styles/       global.css — tokens, base layer, ec- utilities
```

Dependency direction is one way: `pages` → `views` → `components` → `ui`. A `ui`
component never imports from `views` and never knows which page it sits on. A scene that
belongs to one page lives in that page's view folder.

Canonical host is **`https://ercancicek.com`** without www, from `src/config/site.ts`.
German at `/`, English at `/en/`, localised slugs from the route table in `src/i18n/index.ts`.

## Conventions

- **English in the codebase**: identifiers, comments, docs. Only the site content is
  German and English.
- **Long, descriptive `camelCase`.** `additionalClasses`, never `cls`. CSS classes are
  `class`, never `className`. One word per concept, used everywhere.
- **Comments only where the code cannot say it**: a constraint, a value from an external
  source, a deliberate deviation. Shape: `// --- Short explanation` in JS,
  `/* --- Short explanation --- */` in CSS. Every component starts with a short comment
  that says what it is and how it behaves.
- **Prettier decides** formatting; `prettier-plugin-tailwindcss` orders classes.
- **Astro whitespace follows JSX rules.** A line break between inline elements is not a
  space; write `{" "}`. Unclosed tags break the build.

## Components

- A component earns its existence: the same structure a second time, or real behaviour.
  Never to wrap a single utility.
- A `ui` component takes a `class` prop merged through `class:list`, never overwritten:
  `const { class: additionalClasses } = Astro.props`.
- Robust by default: it holds at 320px and with a 60 character label.
- Semantic markup, real `<button>` elements, an `as` prop over wrapper `div`s.
- Shared pieces (`SegmentedControl`, `ToolCursor`, `ProcessSnap`) are used where they
  fit, not because they exist. See the design language.

## Accessibility

Accessibility is the work sample here, so every mistake counts double.

- Semantic HTML before ARIA. Visible focus is the default, defined once in the base layer.
- `prefers-reduced-motion` is respected: final state, no cursor, no travel.
- Decorative pieces are `aria-hidden` plus `inert` and carry nothing the text does not say.
  A decorative icon is `aria-hidden`; an icon that carries meaning has text next to it.
- Interactive targets are at least 44px, icon-only controls included.
- One focus indicator, never two. Whatever suppresses the base `outline` puts an indicator
  of its own in its place.
- Moving content runs under five seconds or has a pause control (WCAG 2.2.2).
- Explanations of accessibility topics are researched, never freestyled, and cite their
  source.

## Working method

- **Verify, do not claim.** Trigger the interaction, read computed values, look at the
  page. Anything not verified is named as unverified.
- **Look at the result.** Visual work is checked in Claude in Chrome, in a tab of your own,
  never the author's. Say when the window is resized. When the window cannot be resized,
  say that mobile is unchecked.
- **Review the whole page, not the change** (docs/page-review.md), before reporting.
- **A passing build is not a review.** Read the diff for naming, redundancy and sentences
  that say the wrong thing.
- **Fix the class of defect, not the instance.** One pointed-out problem means a pass over
  the whole project for the same kind.
- **Build only what was asked for.**
