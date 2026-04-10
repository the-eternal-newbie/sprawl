# /audit-tokens

Scan the codebase for hardcoded values that should be tokens.

## Steps

1. Search `src/components/` and `src/os/` for:
   - Hex colors: `/#[0-9a-fA-F]{3,8}/`
   - RGB/HSL/OKLCH: `/(rgb|hsl|oklch)\(/`
   - Pixel values outside of tailwind classes: `/\b\d+px\b/` in tsx/ts files
   - Raw rem values: `/\b\d+(\.\d+)?rem\b/`
2. For each hit, determine:
   - Is it a legitimate dynamic value (e.g., drag position)? Leave it.
   - Is it a missing token? Add a semantic token and replace.
3. Produce a report grouped by file with recommendations.
4. Do NOT auto-fix without confirmation — surface findings first.