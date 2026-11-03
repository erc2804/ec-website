// --- One surface colour per offer, for the start page's offer cards. The
// colours are the previous site's card colours; the design one adds the canvas
// grid. Project cards do not take them: a colour per main offer said nothing a
// reader could decode, so every project sits on the light green.
import type { Service } from "../../data/projects"

export const offerSurfaceClasses: Record<Service, string> = {
  accessibility: "bg-brand-green-medium",
  design: "ec-canvas-grid bg-brand-green-high",
  development: "bg-brand-green-low",
}
