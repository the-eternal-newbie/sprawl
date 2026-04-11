# Stitch Prompt Template — v2.0

> This is the canonical prompt template used by Stitch to generate
> DESIGN.md files for Mona Lisa Overdrive themes. It supersedes the
> v1.0 template that produced the original DESIGN.md files.
>
> **Changes from v1.0:**
> - Section 2.2 uses three-accent semantic intent schema
> - Section 2.10 (Surface Effects) added
> - Part 3 structured against `docs/CANONICAL_COMPONENTS.md`
> - Part 5 metadata expanded (color_scheme, kanji_motif, sprawl_project)
> - Hard validation: mono font must be monospace
> - Spacing scale must be contiguous 0–8
> - Section 2.9 must declare motion primitives

---

## Instructions for Stitch

You are generating a `DESIGN.md` file for a Mona Lisa Overdrive theme.
This file is the single source of truth for a theme's visual identity,
token values, and component specifications. It will be consumed by both
humans and automated tooling.

Before generating, read the following reference documents:
- `docs/CANONICAL_COMPONENTS.md` — the definitive component list
- `docs/CANONICAL_LAYOUTS.md` — the layout composition reference
- `docs/TOKENS.md` — the token schema and naming rules
- `docs/ARCHITECTURE.md` — the layered system architecture

Generate the DESIGN.md with exactly this structure. Do not add, remove,
or reorder sections. Every section is required.

---

## Part 1 — Creative Brief (human-readable)

### 1.1 Theme Identity
- **Name:** `<theme display name>`
- **Slug:** `<kebab-case slug>`
- **Creative North Star:** `<one-sentence conceptual anchor>`
- **Mood keywords:** `<comma-separated list, 4–8 keywords>`
- **Reference aesthetics:** `<comma-separated list of visual references>`

### 1.2 Philosophy
`<2–3 paragraphs describing the theme's design philosophy. What does it
reject? What does it embrace? What feeling should the user get? Be
specific about which design conventions it follows and which it
intentionally violates.>`

### 1.3 Voice and Tone
`<1–2 paragraphs describing how text feels in this theme. Is it
clinical? Poetic? Aggressive? How is data presented — as telemetry,
as prose, as commands?>`

---

## Part 2 — Technical Specification (machine-readable)

### 2.1 Color Primitives

| Primitive name | Value (OKLCH or hex) | Scale step | Notes |
|----------------|----------------------|------------|-------|
| `<name>`       | `<value>`            | `<step>`   | `<notes>` |
| ...            | ...                  | ...        | ...   |

> List every raw color value the theme uses. Named descriptively, not
> semantically. Include at minimum: canvas background, surface
> elevations, primary accent, muted accent, foreground colors, and
> state colors (danger, success, warning, info).

### 2.2 Semantic Color Intents

| Intent                    | Primitive reference     | Final value |
|---------------------------|-------------------------|-------------|
| bg.canvas                 | `<ref>`                 | `<value>`   |
| bg.subtle                 | `<ref>`                 | `<value>`   |
| bg.muted                  | `<ref>`                 | `<value>`   |
| bg.emphasis               | `<ref>`                 | `<value>`   |
| fg.default                | `<ref>`                 | `<value>`   |
| fg.muted                  | `<ref>`                 | `<value>`   |
| fg.subtle                 | `<ref>`                 | `<value>`   |
| fg.on-accent.primary      | `<ref>`                 | `<value>`   |
| fg.on-accent.secondary    | `<ref or N/A>`          | `<value or N/A>` |
| fg.on-accent.tertiary     | `<ref or N/A>`          | `<value or N/A>` |
| accent.primary            | `<ref>`                 | `<value>`   |
| accent.secondary          | `<ref or N/A — theme is monochrome>` | `<value or N/A>` |
| accent.tertiary           | `<ref or N/A — theme is monochrome>` | `<value or N/A>` |
| border.subtle             | `<ref>`                 | `<value>`   |
| border.default            | `<ref>`                 | `<value>`   |
| border.strong             | `<ref>`                 | `<value>`   |
| border.accent.primary     | `<ref>`                 | `<value>`   |
| border.accent.secondary   | `<ref or N/A>`          | `<value or N/A>` |
| border.accent.tertiary    | `<ref or N/A>`          | `<value or N/A>` |
| danger.solid              | `<ref>`                 | `<value>`   |
| success.solid             | `<ref>`                 | `<value>`   |
| warning.solid             | `<ref>`                 | `<value>`   |
| info.solid                | `<ref>`                 | `<value>`   |

> **Three-accent schema:** Every theme must declare `accent.primary`.
> Themes with a second brand hue declare `accent.secondary`; themes
> with a third declare `accent.tertiary`. Monochrome themes must
> explicitly mark secondary and tertiary as
> `N/A — theme is monochrome`.
>
> **fg.on-accent.\*** values must provide readable contrast against
> their corresponding accent background. If an accent slot is N/A,
> its fg.on-accent slot is also N/A.
>
> **border.accent.\*** follow the same pattern as accent intents.
>
> **State-intent collapse warning:** If any of `success.solid`,
> `warning.solid`, `info.solid`, or `danger.solid` resolve to the
> same hex value as another state intent, add a warning block at the
> top of the DESIGN.md:
> ```
> > ⚠ STATE-INTENT COLLAPSE: <list collapsed intents and shared value>.
> > This theme differentiates these states through non-color affordances
> > (iconography, labels, position) rather than hue.
> ```

### 2.3 Typography

| Role     | Font family     | Weight | Size     | Line-height | Letter-spacing |
|----------|-----------------|--------|----------|-------------|----------------|
| display  | `<font>`        | `<wt>` | `<size>` | `<lh>`      | `<ls>`         |
| headline | `<font>`        | `<wt>` | `<size>` | `<lh>`      | `<ls>`         |
| title    | `<font>`        | `<wt>` | `<size>` | `<lh>`      | `<ls>`         |
| body     | `<font>`        | `<wt>` | `<size>` | `<lh>`      | `<ls>`         |
| body-sm  | `<font>`        | `<wt>` | `<size>` | `<lh>`      | `<ls>`         |
| label    | `<font>`        | `<wt>` | `<size>` | `<lh>`      | `<ls>`         |
| mono     | `<font>`        | `<wt>` | `<size>` | `<lh>`      | `<ls>`         |

- **Fallback stacks:** `<list fallback stacks>`
- **Font sources:** `<e.g. Google Fonts>`

> **HARD VALIDATION:** The `mono` role MUST reference a font family
> that is actually monospace. Approved monospace families:
> JetBrains Mono, Fira Code, IBM Plex Mono, Space Mono, Geist Mono.
>
> The following are explicitly NOT monospace and must never be used
> for the `mono` role: Space Grotesk, Inter.

### 2.4 Spacing Scale

| Step | Value   | Typical usage in this theme |
|------|---------|-----------------------------|
| 0    | 0       | —                           |
| 1    | 0.25rem | `<usage>`                   |
| 2    | 0.5rem  | `<usage>`                   |
| 3    | 0.75rem | `<usage>`                   |
| 4    | 1rem    | `<usage>`                   |
| 5    | 1.25rem | `<usage>`                   |
| 6    | 1.5rem  | `<usage>`                   |
| 7    | 1.75rem | `<usage>`                   |
| 8    | 2rem    | `<usage>`                   |

> **HARD VALIDATION:** The spacing scale must be contiguous from step
> 0 through step 8 at minimum. No gaps are allowed. Every step must
> have a value. Themes may extend beyond step 8 but must not skip
> any step from 0–8.

### 2.5 Radii

| Token       | Value   | Usage                         |
|-------------|---------|-------------------------------|
| radius.none | `<val>` | `<usage>`                     |
| radius.sm   | `<val>` | `<usage>`                     |
| radius.md   | `<val>` | `<usage>`                     |
| radius.lg   | `<val>` | `<usage>`                     |
| radius.full | `<val>` | `<usage>`                     |

### 2.6 Elevation / Shadows

| Token         | Value                  | Usage                |
|---------------|------------------------|----------------------|
| shadow.sm     | `<val>`                | `<usage>`            |
| shadow.window | `<val>`                | `<usage>`            |
| shadow.inset  | `<val>`                | `<usage>`            |

### 2.7 Motion

| Token              | Duration | Easing             | Usage              |
|--------------------|----------|--------------------|--------------------|
| motion.window.open | `<dur>`  | `<easing>`         | `<usage>`          |
| motion.hover       | `<dur>`  | `<easing>`         | `<usage>`          |
| `<additional>`     | `<dur>`  | `<easing>`         | `<usage>`          |

> List every motion token the theme uses. Components in Part 3
> reference these tokens by name. If a component references a motion
> token not listed here, that is an error.

### 2.8 OS-Specific Tokens

| Token                    | Value   | Notes                  |
|--------------------------|---------|------------------------|
| window.chrome.height     | `<val>` | `<notes>`              |
| window.body.padding      | `<val>` | `<notes>`              |
| window.border.width      | `<val>` | `<notes>`              |
| taskbar.height           | `<val>` | `<notes>`              |
| dock.icon.size           | `<val>` | `<notes>`              |
| desktop.icon.grid        | `<val>` | `<notes>`              |
| boot.scanline.opacity    | `<val>` | `<notes>`              |
| terminal.caret.blink     | `<val>` | `<notes>`              |

### 2.9 Deviations and Notes

> List any theme-specific deviations from the canonical patterns:
> - Non-standard radii, clip-paths, or shape treatments
> - Special color behaviors (opacity overlays, gradient usage)
> - Typography overrides or unusual role assignments
> - Any other quirk that an implementer needs to know
>
> **Motion declarations:** List every motion primitive referenced by
> components in Part 3. For each, state whether it is a CSS animation,
> a JS-driven animation, or a state transition. This section serves
> as the cross-reference for Part 3's motion annotations.
>
> Example:
> ```
> Motion primitives used by this theme:
> - motion.caret.blink — CSS animation, 0.5s step blink
> - motion.glitch — CSS animation, 200ms chromatic-aberration shift
> - motion.pulse — CSS animation, 2s ease-in-out scale + opacity
> - motion.typewriter — JS-driven, line-by-line reveal at 50ms/char
> ```

### 2.10 Surface Effects

| Surface intent | Effect                          |
|----------------|---------------------------------|
| `<intent>`     | `<CSS effect, e.g. backdrop-filter: blur(12px)>` |
| ...            | ...                             |

> Required for themes that use translucency or backdrop filters.
> List which surface intents apply a `backdrop-filter` and at what
> blur radius. Themes that do not use surface effects should include
> this section with the note: `N/A — theme uses opaque surfaces`.

---

## Part 3 — Component Inventory

> Structure this section against `docs/CANONICAL_COMPONENTS.md`.
>
> **For every Core canonical component:** Write one entry following
> the format below. If the theme does not visually use the component,
> write: `N/A — not shown in this theme's designs`.
>
> **For every Extended canonical component the theme visualizes:**
> Write one entry following the format below. Extended components the
> theme does not use are omitted entirely (no entry needed).
>
> Do NOT redefine component anatomy — it is defined in the canonical
> doc. Theme-specific entries only list: which variants the theme
> shows, which states are visible, which tokens the theme applies
> (with theme-specific values), behavioral notes unique to this
> theme, and motion primitives consumed.

### Format for each component entry:

```
### Component: <CanonicalName>
- **Category:** <os | primitive>
- **Purpose:** <1-sentence purpose specific to this theme>
- **Variants visible in this theme:**
  - `<variant>`: <value> | <value>
- **States shown:** <comma-separated list>
- **Tokens consumed:**
  - `<token>`: <theme-specific value or intent reference>
- **Motion consumed:** <motion token names, or "none">
- **Behavioral notes:** <theme-specific behavioral notes>
- **Open questions:** <any unresolved design questions>
```

> If a component is N/A, use this format:
> ```
> ### Component: <CanonicalName>
> N/A — not shown in this theme's designs.
> ```

---

## Part 4 — Theme Consistency Check

- [ ] Every intent in section 2.2 has either a value or an explicit N/A
- [ ] Every Core canonical component in Part 3 has either a spec or an
      explicit N/A
- [ ] Every component in Part 3 only references intents that exist in
      section 2.2
- [ ] All font families used in Part 3 are declared in section 2.3
- [ ] The `mono` typography role uses an approved monospace font family
- [ ] OS-specific tokens used by Window/Taskbar/Dock are in section 2.8
- [ ] The spacing scale in 2.4 is contiguous from step 0 through 8
- [ ] The theme slug in section 1.1 is valid kebab-case
- [ ] Every motion token referenced in Part 3 is declared in section 2.9
- [ ] State-intent collapse warning is present if any state intents
      share a value

---

## Part 5 — Metadata (last section, machine-read)

```yaml
schema_version: "2.0"
theme_slug: <kebab-case slug>
theme_name: <display name>
generated_by: stitch
generated_at: <ISO 8601 timestamp>
base_theme: <slug of parent theme, or null>
intended_consumer: mona-lisa-overdrive
sprawl_project: burning-chrome
color_scheme: <light | dark>
kanji_motif: <enabled | disabled>
```

> **Required fields:**
> - `color_scheme` — `light` or `dark`. Determines default surface
>   contrast direction.
> - `kanji_motif` — `enabled` or `disabled`. Controls whether the
>   KanjiCaption component renders or returns null.
> - `sprawl_project` — always `burning-chrome` for Mona Lisa Overdrive
>   themes.

---

End of DESIGN.md. Produce nothing after this line.
