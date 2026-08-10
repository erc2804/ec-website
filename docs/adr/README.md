# Architecture decision records

Short records of the decisions that shape this codebase: what the situation was, what was
decided, what else was considered, and what it costs.

They exist because the reasoning is the part that ages worst. A year from now the code will
still be readable, but the question "why not just use Next?" will have no answer left unless
it was written down.

| #                                           | Decision                                     | Status   |
| ------------------------------------------- | -------------------------------------------- | -------- |
| [0001](0001-astro-as-framework.md)          | Astro as the framework                       | Accepted |
| [0002](0002-no-component-library.md)        | No component library                         | Accepted |
| [0003](0003-tailwind-with-own-utilities.md) | Tailwind, with a small set of own utilities  | Accepted |
| [0004](0004-german-at-root.md)              | German as default locale, served at the root | Accepted |
| [0005](0005-typescript.md)                  | TypeScript in strict mode                    | Accepted |
| [0006](0006-tabler-icons.md)                | Tabler icons, imported individually          | Accepted |
| [0007](0007-localised-slugs.md)             | Localised slugs through a route table        | Accepted |

## Format

Each record answers four questions and stays on one page:

- **Context** — what situation forced a decision
- **Decision** — what was chosen
- **Alternatives** — what else was on the table and why it lost
- **Consequences** — what this costs, including the parts that are inconvenient
