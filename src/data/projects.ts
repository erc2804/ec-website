// --- Project cards. Slugs stay stable across languages; the portfolio page and
// the project pages read the same list.
export type ProjectType = "web" | "app" | "shop" | "other"

export type Project = {
  slug: string
  label: string
  type: ProjectType
  category: { de: string; en: string }
  image: string
  techs: string[]
}

export const projects: Project[] = [
  {
    slug: "konux",
    label: "KONUX",
    type: "web",
    category: { de: "Plattform", en: "Platform" },
    image: "/images/projects/konux.png",
    techs: ["React", "TypeScript", "NX", "Figma"],
  },
  {
    slug: "curanto",
    label: "Curanto",
    type: "web",
    category: { de: "Webshop", en: "Web shop" },
    image: "/images/projects/curanto.png",
    techs: ["Vue", "Statamic", "Figma", "Barrierefreiheit"],
  },
  {
    slug: "hit",
    label: "HIT",
    type: "web",
    category: { de: "Website", en: "Website" },
    image: "/images/projects/hit.png",
    techs: ["Vue", "Pimcore", "Figma", "Barrierefreiheit"],
  },
  {
    slug: "welliba",
    label: "Welliba",
    type: "app",
    category: { de: "App", en: "App" },
    image: "/images/projects/welliba_app.png",
    techs: ["Figma", "Lottie", "React", "Barrierefreiheit"],
  },
]
