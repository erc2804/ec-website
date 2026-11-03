// --- Fills {name} placeholders in a translation: fill("Ab {date}", { date })
// A placeholder without a value becomes empty. Kept apart from i18n/index.ts,
// so a page script can use it without bundling every translation.

export const fill = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "")
