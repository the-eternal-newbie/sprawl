# /new-theme

Create a new theme variant for Mona Lisa Overdrive.

## Usage

`/new-theme <theme-name>`

## Steps

1. Read `docs/TOKENS.md` and `.cursor/rules/10-tokens.mdc`.
2. Create `src/themes/<theme-name>.css`.
3. Override the semantic tokens (never primitives) under the
   `[data-theme="<theme-name>"]` selector.
4. Add a Storybook story at `src/themes/<theme-name>.stories.tsx`
   demonstrating every primitive rendered under the new theme.
5. Add the theme to the theme switcher in the Storybook preview.
6. Run `pnpm storybook` and visually confirm no hardcoded values leaked
   through.

## Naming

Themes should follow the Sprawl aesthetic — evocative, cyberpunk-adjacent.
Examples: `neon-noir`, `chiba-city`, `black-ice`, `kuang-grade`.