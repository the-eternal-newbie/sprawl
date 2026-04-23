# /new-theme

Translate a normalized DESIGN.md file into a runtime theme CSS file
that Mona Lisa Overdrive can apply via `[data-theme="<slug>"]`.

> **Note:** This command translates an EXISTING normalized DESIGN.md
> into a CSS file. It does NOT generate new themes from scratch. If
> you want a new theme that doesn't have a normalized DESIGN.md yet,
> first run `/normalize-design-specs` to produce one.
>
> Once we have `/import-stitch-theme` (a more sophisticated version
> of this command), this command becomes a thin wrapper around it.

## Usage

`/new-theme <slug>`

- `slug`: kebab-case theme slug matching a directory under
  `design-refs/<slug>/normalized/`

Example: `/new-theme galactic-terminal` reads
`design-refs/galactic-terminal/normalized/DESIGN.md` and produces
`src/themes/galactic-terminal.css`.

## Preconditions

The following must exist before running this command:
- `design-refs/<slug>/normalized/DESIGN.md` — the normalized spec
- The DESIGN.md must use schema_version "2.0" (three-accent schema,
  v2.0 metadata fields)

If the DESIGN.md doesn't exist or is not v2.0, STOP and tell the
human to run `/normalize-design-specs` first.

## Context to read first

1. `AGENTS.md`
2. `.cursor/rules/10-tokens.mdc` — token discipline
3. `docs/CANONICAL_COMPONENTS.md` — the semantic intent reference
4. `src/styles/theme.css` — the canonical token vocabulary
5. `src/themes/galactic-terminal.css` — the reference implementation
   to model the new file after
6. `design-refs/<slug>/normalized/DESIGN.md` — the spec being translated

## Steps

1. **Parse the normalized DESIGN.md.** Extract:
   - Color primitives from section 2.1 (theme-local CSS variables)
   - Semantic intents from section 2.2 (mappings to primitives)
   - Typography from section 2.3
   - Spacing from section 2.4
   - Radii from section 2.5
   - Shadows from section 2.6
   - Motion tokens from section 2.7
   - OS-specific tokens from section 2.8
   - Surface effects from section 2.10 (if present)
   - color_scheme and kanji_motif from Part 5 metadata

2. **Validate completeness.** Confirm:
   - Every required semantic intent in section 2.2 has a value or
     explicit `N/A — theme is monochrome`
   - The mono typography role uses an actual monospace font
   - The spacing scale is contiguous from 0 through 8
   - All motion tokens referenced by Part 3 components exist in
     section 2.7
   If any check fails, STOP and report.

3. **Create the theme CSS file** at `src/themes/<slug>.css` with
   the following structure:
```css
   /*
    * Mona Lisa Overdrive — <Theme Name> theme
    *
    * <One-line creative north star from Part 1>
    *
    * Generated from design-refs/<slug>/normalized/DESIGN.md
    */

   [data-theme="<slug>"] {
     color-scheme: <light | dark from Part 5>;

     /* Color primitives (theme-local, not exposed to components) */
     --<primitive-name>: <hex value>;
     ...

     /* Semantic intents (what components consume) */
     --color-bg-canvas: var(--<primitive-name>);
     ...

     /* Typography */
     --font-display: <font family>;
     ...

     /* Radii */
     --radius-none: <value>;
     ...

     /* OS tokens */
     --size-window-chrome: <value>;
     ...
   }
```

4. **Handle three-accent N/A correctly.** If the DESIGN.md marks
   `accent.secondary` or `accent.tertiary` as N/A, set the
   corresponding CSS variable to inherit from `accent.primary`:
```css
   --color-accent-secondary: var(--color-accent-primary);
   --color-accent-tertiary: var(--color-accent-primary);
```
   Same for `fg.on-accent.*` and `border.accent.*` variants.
   This ensures components that read these tokens still work in
   monochrome themes — they just visually collapse to the primary
   accent.

5. **Handle surface effects.** If section 2.10 declares
   backdrop-filter effects (e.g., for glassmorphic themes), emit
   a separate selector that applies them to the relevant surfaces:
```css
   [data-theme="<slug>"] [data-surface="canvas"] {
     backdrop-filter: blur(12px);
   }
```
   Only do this if the theme actually uses surface effects. Themes
   marked `N/A — theme uses opaque surfaces` skip this section.

6. **Add the import to `.ladle/components.tsx`** so the theme is
   available in Ladle:
```typescript
   import "../src/themes/<slug>.css";
```
   Insert the import in alphabetical order with other theme imports.

7. **Run verification:**
   - `pnpm typecheck` (catches TypeScript issues if any)
   - `pnpm lint`
   - `pnpm build`

8. **Visually verify in Ladle.** Run `pnpm dev`, temporarily change
   the active theme in `.ladle/components.tsx` to the new slug, and
   confirm the welcome story renders correctly with the new theme's
   colors. If the theme has obvious problems (text invisible against
   background, accents missing, fonts not loading), STOP and report.
   Then revert the active theme to its previous value.

9. **Summary report:**
   - Theme file created
   - Number of primitives, semantic intents, motion tokens emitted
   - Any N/A intents that were collapsed to primary
   - Whether surface effects were applied
   - Any DESIGN.md ambiguities you had to resolve
   - Visual verification result (what you saw in Ladle)

## Do not

- Do not generate themes from screenshots or imagination. The
  normalized DESIGN.md is the only valid input.
- Do not skip the validation step. A theme with missing intents
  will silently break components that read those tokens.
- Do not modify `src/styles/theme.css`. The canonical vocabulary
  is fixed; themes only override values, never add new intents.
- Do not modify the normalized DESIGN.md file itself. If something
  is wrong with it, report it and let the human fix the spec.
- Do not change the active theme in `.ladle/components.tsx`
  permanently. Verify visually, then revert.