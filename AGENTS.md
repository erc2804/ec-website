# ec-website

Personal website of Ercan Cicek — frontend development, design and accessibility.
Static site, bilingual, built with Astro.

## Stack

- **Astro 7** — zero JS by default, islands, i18n routing, content collections
- **Tailwind 4** via `@tailwindcss/vite`; design tokens live in `@theme` in `src/styles/global.css`
- **TypeScript strict** — the payoff is in content schemas and component props
- **No UI framework.** Interactivity is vanilla JS inside `<script>` blocks
- **Tabler icons** via `@tabler/icons-astro`
- **pnpm 11**, pinned through `packageManager` in `package.json`
- **Node >= 22.12** (Astro 7 minimum)

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

`pnpm format` is mandatory after every change, not optional. Before calling anything
finished: `format`, `lint`, `check`, `build` — all four.

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

The canonical host is **`https://ercancicek.com` without www** — the server 301s www to
the bare domain. Anything that emits absolute URLs reads it from `src/config/site.ts`.

## Conventions

**Language.** Everything in the codebase is English — identifiers, comments,
documentation, commit messages. Only the site content itself is German and English.

**Naming.** Long, descriptive `camelCase` over short and clever.
`additionalClasses` beats `cls`.

**One word per concept.** CSS classes are `class`, never `className` — this is not React,
and the HTML attribute is `class`. So: `additionalClasses`, `widthClass`, `stateClass`.
Mixing both spellings inside one file is a defect, not a matter of taste. The same applies
to every other concept: pick the word once and use it everywhere.

**Comments.** Only where they carry information the code cannot: a non-obvious
constraint, a value taken from an external source, a deliberate deviation.

Never explain what the code already shows, never justify a common practice, never
argue with the reader. "Single source of truth so a phone number changes in one
place, not across the project" is noise — the file says that by existing. Cut every
comment that would survive being deleted.

Always in this shape:

```js
// --- Short explanation
```

```css
/* --- Short explanation --- */
```

**Readability first.** Maintainable and easy for a human to follow. No clever
detours, no indirection that saves three lines and costs ten minutes of reading.

**Formatting.** Prettier decides, never a hand made exception. Class order is
handled by `prettier-plugin-tailwindcss`, so never argue about it manually.

## Components

**A component earns its existence.** Build one when the same structure is needed a
second time, or when it carries real behaviour. Never to wrap a single utility
class — `<main class="ec-layout-text-content">` needs no component around it. An
abstraction that saves nothing costs a lookup on every read.

**Atomic and self contained.** A `ui` component solves one thing and takes a
`class` prop from the outside, merged through `class:list` — never overwritten:

```astro
---
interface Props {
  class?: string
}
const { class: additionalClasses } = Astro.props
---

<div class:list={["some-base-class", additionalClasses]}><slot /></div>
```

**Responsive and robust by default.** Every `ui` component handles small screens
and overlong text on its own. A component that breaks at 320px or with a 60
character label is not finished.

**Semantic markup.** Prefer an `as` prop over wrapping everything in `div`s.

## Styling

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
state's rule, never in the base rule. See [ADR 0008](docs/adr/0008-navigation-without-javascript.md).

**Never let an `ec-` utility and a Tailwind utility fight over the same shorthand.**
Both live in the same layer, so the winner is whichever the generated stylesheet emits
last — which is not something the markup shows. `ec-reveal` originally set `transition`,
lost it to the `transition-colors` a `Button` carries, and the reveal jumped instead of
fading. The fix was an animation, a property no utility competes for. Check for a
collision whenever an own utility sets `transition`, `transform`, `display` or
`background`, and reach for a non-competing property or a custom property instead. See
[ADR 0009](docs/adr/0009-scroll-reveal.md).

**One link treatment for the whole site.** `a` carries the underline in the base layer:
quiet at rest, thicker and closer to the text on hover, built from `currentColor` so it
needs no variant on the dark sections. It is `text-decoration`, not a background, so it
survives a line break. Controls that are not running text — buttons, the wordmark, icon
links — opt out with `no-underline`. Do not write a second link hover into a component.

**German compounds need soft hyphens at display sizes.** A word like
`Barrierefreiheitserklärung` has no break opportunity and runs straight out of a 320px
viewport. Put `\u00AD` at the compound seams — plural, one seam is rarely enough at
`text-display` — and never in a `meta.title`, where the character reaches the browser tab
and search results.

## Design language

**Each page quotes the tool of its subject.** The accessibility page quotes the macOS
VoiceOver caption panel: `ScreenReaderCaption` shows what a screen reader says about the
h1, and the demo uses the same form for its comparison. A design page would quote a
selection frame with measurements, a code page a diff line. The motif carries an argument,
so it belongs where it proves something — not as a badge at the top of a section.

**Section labels have to say something new.** An eyebrow reading `RECHTSLAGE` above
"Was gilt, und wonach ich prüfe." says the same thing twice. If a label only restates its
heading, drop it rather than restyle it.

## Icons

Tabler icons through `@tabler/icons-astro`, imported individually:

```astro
import {IconChevronRight} from "@tabler/icons-astro"
<IconChevronRight class="size-6 text-brand-blue" aria-hidden="true" />
```

Individual imports over name strings, so a typo fails the build and the editor completes
the names. Icons render as inline SVG with no runtime cost.

Colour them with `text-*`, not `fill-*` — Tabler icons use `currentColor`.

**Decorative icons need `aria-hidden="true"`.** An icon that carries meaning on its own
needs a text alternative next to it instead. Never let an icon be the only label.

Do not mix icon sets. Mixing is the usual reason an interface stops looking coherent.

## Accessibility

Accessibility is the work sample here, so every mistake counts double.

- Semantic HTML before ARIA
- Visible focus is the default state, defined once in the base layer
- `prefers-reduced-motion` is respected
- Real `<button>` elements for anything interactive — they fire `click` on Enter
  and Space, so mouse, touch and keyboard share one code path
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
verified is named as unverified. A vermutung is never presented as a finding.

**A passing build is not a review.** `build` and `check` catch function, never form.
Naming, redundancy, a needless abstraction, a sentence that says the wrong thing — none of
it fails a build. After writing, read the diff against this file before calling anything
done.

**Fix the class of defect, not the instance.** When a problem is pointed out in one file,
go through the whole project for the same kind of problem in the same pass. Correcting only
the file that was pointed at means the next one surfaces the same issue again.

**Build only what was asked for.** Unrequested code is disproportionately the bad code —
it is written without a real use case to check it against.

**Look at the result.** For anything visual, open it in the browser and look. The dev
server runs in the author's own terminal; screenshots go through Claude in Chrome.
"It builds" says nothing about whether it is any good.

## Internationalisation

German is the default locale and lives at `/`, English at `/en/`
(`prefixDefaultLocale: false`). Slugs are localised: `/barrierefreiheit` and
`/en/accessibility`.

**Copy lives in `src/i18n/`.** German is the reference; `Translations = typeof de` means a
missing or renamed key fails the type check instead of rendering an empty string. Read it
with `useTranslations(Astro.currentLocale)`.

Screen reader transcripts are **not translations**. English VoiceOver says `button` and
`edit text` where the German voice says `Taste` and `Textfeld`. Translating those strings
literally would misrepresent what the software announces.

**Localised paths come from the route table** in `src/i18n/index.ts`, never from the
current path — Astro has no built-in support for translated slugs, and deriving them breaks
as soon as the slugs differ. `Seo.astro` builds hreflang from it; without a `routeKey` the
tags are omitted rather than guessed. Every new page needs an entry. See
[ADR 0007](docs/adr/0007-localised-slugs.md).

Each page therefore exists twice as a thin routing file — title, description, route key —
both rendering the same view. A view may be a whole page composition, not only a section.

## Site copy

Copy is part of the work, not filler around it. It addresses the reader informally
(German "Du"). The rules below are the ones that kept being broken:

- **Plain German, no agency copy.** "Frist im Nacken", "auf dem Tisch", "ungutes Gefühl" —
  all cut. The audience is a bank or an insurer; anything that sounds like a campaign
  undermines the sober tone of everything else.
- **Say what happens.** A button reads "Projekt anfragen", not "Anwendung schildern". A
  label that needs interpreting is wrong.
- **Read every sentence for what it literally claims.** "Deshalb landen die Fehler in der
  Anwendung" says the author puts bugs into the product. Grammar that parses is not the
  same as a sentence that means the intended thing.
- **No invented numbers.** "Tools find about a third of the issues" was cut because it
  could not be sourced. Either it is verifiable or it does not appear.
- **Terminology has to be right.** WCAG has success criteria, not paragraphs. EN 301 549
  currently references WCAG 2.1; this project deliberately tests against 2.2. A wrong term
  on an accessibility page costs more than a missing sentence.
- **Say a thing once.** The same argument in two sections reads as padding.
- **Text before layout.** Write the copy, then build the element around it — never fill a
  layout with words afterwards.

## Astro 7 pitfalls

- **Whitespace follows JSX rules.** A line break between two inline elements no
  longer renders as a space. Use `{" "}` where a space is needed.
- **The compiler no longer fixes HTML silently.** Unclosed tags and bad nesting
  break the build instead of disappearing into the browser.

## Documentation

Full docs: https://docs.astro.build

- [Routing and middleware](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling and Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internationalisation](https://docs.astro.build/en/guides/internationalization/)

Architecture decisions and their trade-offs are recorded in `docs/adr/`.
