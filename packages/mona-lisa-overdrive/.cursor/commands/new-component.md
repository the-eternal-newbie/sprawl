# /new-component

Scaffold a new primitive component in Mona Lisa Overdrive.

## Usage

`/new-component <name> [category]`

- `name`: kebab-case component name (e.g., `icon-button`)
- `category`: `primitive` (default) or `os`

## Steps

1. Read `.cursor/rules/20-components.mdc` in full.
2. Create the directory at `src/components/<name>/` (or `src/os/<name>/`).
3. Create these files following the canonical shape in the rules:
   - `<name>.tsx`
   - `<name>.stories.tsx`
   - `<name>.test.tsx`
   - `index.ts` (explicit named re-exports)
4. Add the export to `src/index.ts` explicitly (no barrel globs).
5. If the component introduces new tokens, add them to
   `src/tokens/components/<name>.ts` and update `docs/TOKENS.md`.
6. Run `pnpm test` and `pnpm build` to verify.
7. Summarize what was created and surface any decisions that need human
   input (e.g., "I chose `intent` as the variant name — confirm?").

## Do not

- Do not skip the Storybook file.
- Do not skip the test file.
- Do not use a default export.
- Do not invent variants that aren't in the design spec — ask first.