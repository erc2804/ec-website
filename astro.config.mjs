// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://ercancicek.com",

  // --- One spelling per URL. Without this Astro emits "/page/" for German and
  // the hreflang alternate ends up as "/en/page" — two forms of the same thing.
  trailingSlash: "never",

  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
    routing: {
      // Deutsch liegt auf "/", Englisch auf "/en/".
      // Die Hauptzielgruppe ist deutschsprachig; ein "/de/"-Präfix wäre
      // für sie ein unnötiger Umweg und teilt die Domain-Autorität.
      prefixDefaultLocale: false,
    },
  },

  // --- The dev toolbar floats over the bottom of the page and hides the
  // demo's bar on phones while checking layouts
  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
