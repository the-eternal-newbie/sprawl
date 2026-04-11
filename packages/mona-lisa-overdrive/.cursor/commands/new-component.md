# /new-component

Scaffold a new component in Mona Lisa Overdrive following the
canonical patterns.

## Usage

`/new-component <name> [category]`

- `name`: PascalCase component name (e.g., `Button`, `IconButton`,
  `Window`). The directory will be the kebab-case version.
- `category`: `primitive` (default) or `os`

Example: `/new-component Button` creates a primitive at
`src/components/button/`. `/new-component Window os` creates an OS
component at `src/os/window/`.

## Context to read first

Before scaffolding any component, you MUST read these files in
order. They define the canonical patterns and the component's
expected anatomy. Skipping this step produces components that don't
match the design system.

1. `AGENTS.md` — overall project rules
2. `.cursor/rules/00-core.mdc` — core engineering rules
3. `.cursor/rules/10-tokens.mdc` — token consumption rules
4. `.cursor/rules/20-components.mdc` — component authoring pattern
5. `.cursor/rules/30-os-components.mdc` — only if category is `os`
6. `.cursor/rules/40-testing.mdc` — testing requirements
7. `docs/CANONICAL_COMPONENTS.md` — find the entry for this
   component. It defines anatomy, variants, states, tokens
   consumed, and motion primitives. The component you scaffold
   MUST match the canonical entry.
8. `docs/CANONICAL_LAYOUTS.md` — only if the component is referenced
   by a layout (e.g., NavGridCard, SystemLogColumn)
9. `design-refs/galactic-terminal/normalized/DESIGN.md` — Part 3 has
   the theme-specific spec for this component if it exists. Use
   this to confirm tokens and variants.

If the component is NOT in `docs/CANONICAL_COMPONENTS.md`, STOP and
ask the human whether to add it to the canonical doc first. Do not
invent components.

## Steps

1. **Verify the component is canonical.** Confirm it appears in
   `docs/CANONICAL_COMPONENTS.md`. Note its category (Core or
   Extended), its anatomy, its variants, the tokens it consumes,
   and any motion primitives it uses.

2. **Determine motion needs.** Read the canonical entry's "Motion"
   field. If the component consumes motion primitives, it must
   import `useMotionPolicy` from `src/motion/` and respect the
   user's motion preference. If the canonical entry says
   "Motion: none", skip motion integration.

3. **Create the directory** at `src/components/<kebab-name>/` (or
   `src/os/<kebab-name>/`).

4. **Create the component file** at `<kebab-name>.tsx` following the
   exact shape in `.cursor/rules/20-components.mdc`. Required:
   - Named export only (no default export)
   - `forwardRef` wrapping with `displayName` set
   - `data-slot` attributes on every internal part listed in the
     canonical anatomy
   - CVA variants with `intent` (not `variant`) as the variant name
     for component intent
   - `cn()` helper for className merging
   - Props extend the native HTML element's props via intersection
   - Component-specific tokens consumed via Tailwind utility classes
     (e.g., `bg-bg-canvas`, `text-fg-default`, `border-border-accent-primary`)

5. **If variants are non-trivial** (more than 2 variant axes or
   compound variants), extract CVA definitions to a separate file
   at `<kebab-name>.variants.ts` and import them.

6. **Create the test file** at `<kebab-name>.test.tsx` per
   `.cursor/rules/40-testing.mdc`. Required test cases:
   - Renders without crashing with default props
   - Each variant produces the expected class output
   - Forwards refs to the underlying DOM element
   - Forwards native HTML props (data-*, aria-*, onClick)
   - Accessibility assertion via `vitest-axe` (`expect(container).toHaveNoViolations()`)

7. **Create the Ladle story file** at `<kebab-name>.stories.tsx`.
   Required stories:
   - `Default` — the component with all default props
   - One story per variant (e.g., `Primary`, `Secondary`, `Outlined`)
   - One story per size if the component has size variants
   - `Playground` — a story showing the full variant matrix
     (every intent × every size combination)
   - All stories use Tailwind utility classes, never inline styles
   - The story file uses Ladle's `Story` type and exports a default
     object with `title` set to the component name in lowercase

8. **Create the index file** at `index.ts` with explicit named
   re-exports:
```typescript
   export { ComponentName } from "./component-name.js";
   export type { ComponentNameProps } from "./component-name.js";
```
   No `export *` — explicit exports only.

9. **Update `src/index.ts`** to re-export the new component:
```typescript
   export { ComponentName, type ComponentNameProps } from "./components/component-name/index.js";
```
   Insert the export in alphabetical order.

10. **Run the verification suite** in this exact order:
    - `pnpm typecheck` — must pass
    - `pnpm lint` — must pass with zero warnings
    - `pnpm test` — must pass, including the accessibility assertion
    - `pnpm build` — must produce a clean dist/
    If any step fails, fix the issue and retry. Do not declare the
    component complete until all four pass.

11. **Verify in Ladle.** Run `pnpm dev` and confirm the story page
    loads, all variants render correctly under the Galactic Terminal
    theme, and no console errors appear. Take a mental note of what
    the component looks like — if it looks broken, it probably is.

12. **Summary.** Produce a brief report listing:
    - Files created
    - Tokens consumed (matched against the canonical entry)
    - Motion primitives consumed (if any)
    - Any decisions you made that need human input (e.g., "I chose
      to render leadingIcon at 1rem — confirm this matches your
      design intent")
    - Any tokens the component needed that weren't in `theme.css`
      (this is a signal that the token vocabulary is incomplete)

## Do not

- Do not skip reading the canonical components doc. The agent that
  scaffolds a component without reading the canonical entry will
  produce something that doesn't match the system.
- Do not skip the test file or the story file.
- Do not use a default export.
- Do not use `useMemo`, `useCallback`, or `React.memo` — React 19
  compiler handles this.
- Do not invent variants that aren't in the canonical entry. If you
  think a variant is missing, stop and ask.
- Do not hardcode color values, spacing values, or font families.
  Use Tailwind utility classes that read from the token vocabulary.
- Do not declare the component complete if any verification step
  failed.