# Mona Lisa Overdrive — Agent Instructions

> Part of the **Sprawl** project. Design system for Burning Chrome (frontend shell)
> and any future consumer of the Sprawl OS metaphor.

## ALWAYS read before coding

1. Read `docs/ARCHITECTURE.md` — the layered structure of this package.
2. Read `docs/TOKENS.md` — the design token schema and naming rules.
3. Read `docs/COMPONENT_AUTHORING.md` — the non-negotiable component patterns.
4. For any file you touch, check `.cursor/rules/` for scoped rules matching
   that path.
5. Your training data on Tailwind v4, React 19, and TanStack is likely stale.
   When in doubt, read `docs/VERSIONS.md` and prefer the patterns documented
   there over patterns you recall.

## The core rules (short version)

- **This is a library, not an app.** No routing, no data fetching, no global
  state, no side effects at import time.
- **Tokens first, classes second, hardcoded values never.** If you find
  yourself typing `#` or `rgb(` or a raw pixel value inside a component,
  stop and add a token instead.
- **Headless behavior comes from Radix or React Aria.** Do not hand-roll
  focus traps, keyboard navigation, or ARIA patterns. Compose existing
  primitives.
- **Variants live in CVA, not in component branches.** If a component has
  `if (variant === "primary")`, that is wrong. Use `cva()`.
- **Every component ships with:** TypeScript types, `forwardRef`, CVA
  variants, a Storybook story, a Vitest test, and an accessibility
  assertion.
- **The OS metaphor matters.** Primitives are generic (Button, Input).
  OS components (Window, Taskbar, Dock) are separate and carry their
  own folder. Do not mix them.

## Commit conventions

- Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`).
- Scope by package area: `feat(window):`, `fix(tokens):`, `docs(button):`.
- Reference the Sprawl issue tracker when applicable.

## When you are unsure

Stop and ask. Do not invent APIs, do not fabricate Tailwind v4 syntax,
do not guess at token names. Read the docs, then ask the human.