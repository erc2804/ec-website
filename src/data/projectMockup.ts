// --- Resolves a project's mockup file name to the image Astro optimises. Only
// pages import this, never the Netlify functions: see the image field in
// projects.ts. A name without a file fails the build instead of a broken image.
import type { ImageMetadata } from "astro"

const mockups = import.meta.glob<{ default: ImageMetadata }>("../assets/images/projects/*", {
  eager: true,
})

export function projectMockup(file: string): ImageMetadata {
  const mockup = mockups[`../assets/images/projects/${file}`]
  if (!mockup) {
    throw new Error(`No mockup "${file}" in src/assets/images/projects`)
  }
  return mockup.default
}
