# Design language

## Stance

- The home page sets the tone: few elements, each with real content, lots of room. Style,
  not decoration.
- Research before concept: how do others solve it, what do NN/g, Smashing Magazine and the
  W3C patterns say. Then an own answer, never the first generic one. A concept is mocked
  before it is built.
- Motion means something or does not happen. A frame that glides from element to element
  like the VoiceOver cursor, a scene that turns into the step being read. Never a timeline
  where dots change colour one after another.
- Accessibility as far as it helps people, without overengineering.

## Every page quotes the tool of its subject

Accessibility quotes the VoiceOver caption panel (`ScreenReaderCaption`), design the
selection frame of Figma (`SelectionFrame`), development the browser's inspector next to
the terminal in which I instruct the AI (`InspectFrame`). The quote carries the argument, so it sits where it proves something, not
as a badge on top of a section. A quote has to be right: a tool shown doing something it
does not do is worse than no quote.

Each page tells its own story. The shared pieces (sections, the scenes, Pixel-Ercan, the
tool cursor) are a vocabulary, not a template: nothing is on a page because another page
has it.

## Motion

- One run, under five seconds, then rest. No loop, no autoplay, nothing that would need a
  pause control (WCAG 2.2.2).
- Scrolling or the reader's own action triggers it, never a timer that runs regardless.
- `prefers-reduced-motion` shows the final state at once: no cursor, no retype, no travel.
- Below `lg` the process scenes stand still: every step carries its own picture, already in
  its state. The tool quotes in the heroes play at every width.

## Decoration is never a control

Scenes, captions, cursors and panels are `aria-hidden` plus `inert`, and carry nothing the
text next to them does not say. A list of steps stays a list. A control only exists where
it does something for everyone, screen reader users included; a radio group that switches
a hidden picture is a control without a purpose.

## The scenes

One picture language across the site (`RoleScene`, `ProcessScene`, `DesignProcessScene`,
`DevelopmentProcessScene`): speech bubbles in the shape of the inquiry chat, a grey
wireframe card for the product, the designed card from the states demo, a dark code block
with green token lines, the client as a grey user icon, Pixel-Ercan as the round avatar
with a badge for what he is doing (magnifier, brush, code). Pieces move between states
(600 ms, `cubic-bezier(0.65, 0, 0.35, 1)`), nothing is swapped.

## Examples

The product shown is always a generic, fictional one (Klaro, a time tracking tool), never a
bank or an insurer. A "designed" example must not look like the AI template next to it:
no gradient hero, no three icon cards, no two buttons side by side.

## Colour and type

- `brand-green-medium` for the one action on a page, `brand-green-high` for links and
  marks, `brand-blue` for the dark blocks. Single words in running text are highlighted in
  green with a tinted box, so the emphasis does not rest on colour alone.
- Greys from `gray-min` (white) over `gray-subtle` (the page) to `gray-low` (lines). White
  on grey gets `shadow-sm`, grey on white gets none. Two neighbouring sections never share a
  background.
- One typeface, `an-regular`, one weight. Hierarchy comes from size and colour
  (`typo-high`, `typo-medium`, `typo-low`).
- Pills for buttons and chips, large radii on cards, the round portrait. Text sits
  optically centred in every pill (`ec-pill-label`).

## What is on the site

- A normal form on the inquiry page, with an optional chat beside it that fills the fields.
  The visitor still sends the form.
- The chat look of the old site: round avatar with an online dot, bubbles with one pointed
  corner.
- Quiet scroll cues instead of a visible scrollbar.
- A large contact block at the end of every page, with its own wording per page.
- Copy that is personal and concrete, without bragging.

## What is not on the site

- Cards where icons with text do the job, and card rows whose heights jump.
- Dashed boxes, strokes above cards, decorative tiles without content, mock-ups of reports.
  Where a separation is needed, one thin line.
- Eyebrows that repeat their heading. A label says something new or goes.
- Switches without a visible label, plus icons on accordions (chevron), asterisks on
  required fields, "optional" pills, step numbers in a form.
- Empty states that look like errors. An empty state says nothing has happened yet, and
  what one can do.
- Invented screen reader announcements or tool behaviour. Check first.
- Many ideas at once.
