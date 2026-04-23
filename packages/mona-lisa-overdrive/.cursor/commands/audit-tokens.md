# /audit-tokens

Scan the codebase for hardcoded design values that should be tokens,
and produce a report of findings grouped by file.

## Usage

`/audit-tokens [path]`

- `path`: optional path to scope the audit. Defaults to scanning
  `src/components/`, `src/os/`, and `src/motion/`.

## Context to read first

1. `.cursor/rules/10-tokens.mdc` — token discipline rules
2. `docs/CANONICAL_COMPONENTS.md` — the semantic intent reference
3. `src/styles/theme.css` — the canonical token vocabulary

## Steps

1. **Scan the target paths** for hardcoded values:

   **Color values:**
   - Hex colors: `/#[0-9a-fA-F]{3,8}\b/`
   - RGB/HSL/OKLCH: `/(rgb|rgba|hsl|hsla|oklch)\(/`
   - Tailwind arbitrary color values inside class strings:
     `/(bg|text|border|fill|stroke)-\[#[0-9a-fA-F]{3,8}\]/`

   **Spacing values:**
   - Pixel values in TS/TSX files: `/\b\d+px\b/` (excluding
     comments)
   - Raw rem values: `/\b\d+(\.\d+)?rem\b/`
   - Tailwind arbitrary spacing: `/(p|m|gap|w|h|top|bottom|left|right)-\[\d/`

   **Font values:**
   - Hardcoded font-family strings: `/font-family:\s*["']/`
   - Inline `style={{ fontFamily: ... }}`

2. **Exclude these paths from the scan:**
   - `src/themes/*.css` — theme files legitimately contain hex
     values, that's their job
   - `src/styles/theme.css` — the canonical vocabulary itself
   - `src/test/**` — test fixtures may need raw values
   - `**/*.test.*` — test assertions may compare against raw values
   - `node_modules/`, `dist/`, `.ladle/`, `.turbo/`

3. **Classify each finding:**
   - **Legitimate dynamic value** — e.g., a drag offset, a
     computed pixel position, a runtime-calculated size. Mark as
     "OK — runtime value."
   - **Missing token** — a hardcoded value that should be a
     semantic token. Mark as "MISSING TOKEN — should consume
     `<suggested-intent>`."
   - **Hardcoded fallback** — a value used as a fallback when a
     token is unavailable. Usually a smell. Mark as "FALLBACK —
     consider removing."
   - **Editor noise** — a number that looks like a hardcoded value
     but is actually unrelated (e.g., `z-index: 999`). Mark as
     "OK — non-design value."

4. **Cross-reference against `.variants.ts` files.** CVA variant
   files are the most common place hardcoded values sneak in.
   Scan them carefully and flag any non-token color or spacing.

5. **Produce a report** at `/tmp/token-audit-<timestamp>.md`
   grouped by file, listing:
   - File path
   - Line number
   - The hardcoded value
   - The classification
   - The recommended fix (if applicable)

   Example:
```markdown
   # Token audit report — 2026-04-11

   ## src/components/button/button.variants.ts

   - Line 12: `bg-[#FF00FF]` — MISSING TOKEN — should consume
     `bg-accent-primary`
   - Line 23: `p-[7px]` — MISSING TOKEN — odd value, suggest
     `p-2` (0.5rem) or add a new spacing step

   ## src/motion/context.tsx

   - Line 45: `300ms` — OK — non-design value (debounce duration)
```

6. **Do NOT auto-fix.** This command produces a report only. The
   human reviews findings and decides which to fix. Auto-fixing
   risks introducing tokens for legitimate dynamic values or
   collapsing values that should remain distinct.

7. **Summary.** Print a top-line summary:
   - Total findings
   - Findings by classification
   - Files with the most issues (top 5)
   - Any files that are completely clean

## Do not

- Do not modify any source files. Report only.
- Do not flag values inside theme CSS files — those are supposed
  to be hardcoded.
- Do not flag arbitrary Tailwind class values that match a real
  intent name (e.g., `bg-bg-canvas` is fine, `bg-[var(--color-bg-canvas)]`
  is also fine because it explicitly references the token).
- Do not include test files in the audit unless explicitly asked.