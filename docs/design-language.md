# Design language

Read this before any concept or design work.

## Stance

- **The home page is the reference.** Calm, clear, lots of white space, a few strong
  elements. Style instead of decoration.
- **Fewer elements, but not thin.** Every element needs real content. Clutter goes, and so
  do gaps that leave a section empty.
- **Research first.** Look at how others solve it (competitors, NN/g, Smashing Magazine,
  the W3C patterns), then find an own solution that is better. Never the first generic
  answer.
- **Animation is refined and means something.** Good: a focus frame glides from element
  to element like the VoiceOver cursor. Bad: steps simply change colour one after another.
- **Accessibility as far as it helps people.** No overengineering.

## Each page quotes the tool of its subject

The accessibility page quotes the macOS VoiceOver caption panel: `ScreenReaderCaption`
shows what a screen reader says about the h1, and the demo uses the same form for its
comparison. A design page would quote a selection frame with measurements, a code page a
diff line. The motif carries an argument, so it belongs where it proves something — not as
a badge at the top of a section. A quote has to be factually right; a tool used for
something it does not do is worse than no quote.

## Section labels have to say something new

An eyebrow reading `RECHTSLAGE` above "Was gilt, und wonach ich prüfe." says the same thing
twice. If a label only restates its heading, drop it rather than restyle it.

## What worked

- **Inquiry page:** a normal form, with an optional chat next to it that fills the fields.
  The visitor still sends the form.
- **Chat look** from the old site: round avatar with an online dot, speech bubbles with a
  pointed corner.
- **Quiet scroll cues** instead of a visible scrollbar.
- **The blind test** in the screen reader demo: a curtain with one calm sentence, not a
  gimmick.
- **The header's "Projekt anfragen" button** fading out while another inquiry button is in
  view.
- **Single words highlighted in green** in running text, where the contrast holds.
- **The round portrait.**
- **A large contact section** like the one on the home page.
- **Personal and concrete copy** such as "Ich komme aus UI/UX-Design …", without bragging.

## What was rejected, and why

- **A green timeline with dots, steps turning blue:** generic, seen everywhere.
- **Strokes or lines above cards, dashed boxes:** ugly. Where a separation is needed, one
  thin line.
- **Cards where none are needed**, for example under "Was danach passiert": icons with text
  are enough.
- **Decorative tiles without content** ("0 Pixel") and **mock-ups of reports:** clutter.
- **Inconsistent card styles.** The rule: white on grey gets `shadow-sm`, grey on white
  gets none.
- **Two neighbouring sections with the same background.**
- **Cards in a row with text of different length**, so the row jumps.
- **Text not vertically centred** in chips, inputs and buttons.
- **Plus icons on accordions.** Use a chevron.
- **Asterisks on required fields, "Optional" pills, step numbers in a form.**
- **Switches nobody understands without explanation.** Always a visible label that says
  what is being switched.
- **Invented screen reader announcements.** Check first what the element really is, for
  example an ordered list.
- **Empty states that look like errors** ("Bereit. Drück Weiter"). An empty state says that
  nothing has happened yet, and what one can do.
- **Needless line breaks, wild layouts, too many ideas at once.**
