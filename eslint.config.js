import js from "@eslint/js"
import tseslint from "typescript-eslint"
import astro from "eslint-plugin-astro"
import prettier from "eslint-config-prettier"

export default [
  { ignores: ["dist/**", ".astro/**", "node_modules/**"] },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  {
    rules: {
      // --- Naming. The reason this config exists: mixed vocabulary for the same
      // concept (widthClassName next to additionalClasses) is a defect Prettier
      // cannot see. camelCase for variables, PascalCase for types and components.
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variableLike",
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
        },
        { selector: "typeLike", format: ["PascalCase"] },
        {
          selector: "property",
          format: null, // --- HTML attributes and data-* keys are not ours to rename
        },
      ],

      // --- Forbid the React spelling outright; this project says class, not className
      "no-restricted-syntax": [
        "error",
        {
          selector: "Identifier[name=/^(className|classNames)$/]",
          message: "Use class / additionalClasses. This is not React.",
        },
      ],

      // --- Unused code is either a mistake or leftovers. Both should be visible.
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },

  // --- Astro's frontmatter declares Props implicitly; TS cannot see the use
  {
    files: ["**/*.astro"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },

  // --- Must stay last so formatting rules never fight Prettier
  prettier,
]
