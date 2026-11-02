// --- One surface colour per offer, set on the start page's offer cards and
// carried by every project card and project page: a project's panel takes the
// colour of its main offer, so the colour says something. The colours are the
// previous site's card colours; the design one adds the canvas grid.
import type { Service } from "../../data/projects"

export const offerSurfaceClasses: Record<Service, string> = {
  accessibility: "bg-brand-green-medium",
  design: "ec-canvas-grid bg-brand-green-high",
  development: "bg-brand-green-low",
}
