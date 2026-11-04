# ercancicek.com

Hi, I'm Ercan. This is the code behind [my website](https://ercancicek.com), where I offer
frontend development, design and accessibility. If you came here to see how it's built:
nice, have a look around. Here's the short tour, the details are in [`docs/`](docs/).

## What I cared about

**Accessibility is the work sample.** I sell accessibility, so the site has to hold up
itself: built to WCAG 2.2 AA, one visible focus style everywhere, real buttons and links,
reduced motion respected, decoration hidden from screen readers and never carrying
anything the text doesn't say. What isn't there yet is written down openly in the
[accessibility statement](https://ercancicek.com/barrierefreiheitserklaerung).

**As little JavaScript as possible.** Astro renders plain HTML. What moves is a few small
scripts, no UI framework, no component library. Even the navigation works without
JavaScript, thanks to the Popover API.

**Every page shows the tool of its topic.** Instead of decoration, each page quotes the
tool it talks about: the VoiceOver caption panel on the accessibility page, a Figma
selection frame on the design page, the terminal and the browser inspector on the
development page. On the development page a small invoice app on a phone shows why vibe
coding alone isn't enough.

**Pixel-Ercan.** My pixel version helps on two pages. On the request page he fills the
form from what you tell him, and you still send it yourself. On the about page he answers
questions about me from the same data the pages are built from, so he can't tell a
different story than the site. Both run as Netlify Functions with the Anthropic API.

**Built with AI, steered by me.** A lot of the code was written with Claude Code, along
rules I set and checked. Those rules are in [`AGENTS.md`](AGENTS.md), and they are a
good read if you want to know how I work.

## Built with

Astro 7, TypeScript in strict mode, Tailwind 4, Tabler icons, pnpm, hosted on Netlify.
Photos go through `astro:assets` and arrive as AVIF.

## Where the details are

| If you want to know                         | Read                                                           |
| ------------------------------------------- | -------------------------------------------------------------- |
| why I chose what I chose                    | [`docs/adr/`](docs/adr/README.md), one page per decision       |
| how the site looks and moves, and why       | [`docs/design-language.md`](docs/design-language.md)           |
| how the CSS is organised                    | [`docs/styling.md`](docs/styling.md)                           |
| how the copy is written                     | [`docs/copy.md`](docs/copy.md)                                 |
| how German and English live side by side    | [`docs/internationalisation.md`](docs/internationalisation.md) |
| what I check before a change counts as done | [`docs/page-review.md`](docs/page-review.md)                   |
| what's still open                           | [`docs/open-points.md`](docs/open-points.md)                   |
| the conventions and how I work with AI      | [`AGENTS.md`](AGENTS.md)                                       |

## Run it yourself

```bash
pnpm install
pnpm dev
```

`pnpm dev` starts `netlify dev` on port 8888, with the site and Pixel-Ercan's two
functions. He needs an `ANTHROPIC_API_KEY` in a `.env` file; everything else runs
without one. You'll need Node 22.12 or newer.

| Command       | What it does                  |
| ------------- | ----------------------------- |
| `pnpm build`  | Production build into `dist/` |
| `pnpm check`  | Type check with `astro check` |
| `pnpm lint`   | ESLint                        |
| `pnpm format` | Prettier over everything      |

## Licence

The code is MIT. The content, the images and my branding are not, so please don't reuse
those.
