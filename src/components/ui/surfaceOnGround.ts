// --- The colour rule for a surface inside a section (docs/design-language.md,
// Colour and type): white with shadow-sm on the grey page, grey without a
// shadow on a white section. `ground` names what the surface sits on; a
// Section's `tone` names the section's own colour, so a section with tone
// "light" hands ground="light" to the cards it holds. Text fields do not
// follow it: they are always white with a border (fieldClasses.ts).
export type Ground = "page" | "light"

export const surfaceOnGroundClasses: Record<Ground, string> = {
  page: "bg-gray-min shadow-sm",
  light: "bg-gray-subtle",
}
