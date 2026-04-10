# Design tokens

## Philosophy

Tokens are a **contract** between the design system and its consumers.
A stable token API means a theme author can reskin the entire Sprawl OS
without touching a single component. This is the core promise of Mona
Lisa Overdrive.

## The three tiers

### Primitive tokens (`src/tokens/primitives.ts`)

Raw values. Named descriptively, not by intent.

```ts
export const primitives = {
  color: {
    slate: {
      50: "oklch(0.98 0.01 240)",
      // ...
      950: "oklch(0.12 0.02 240)",
    },
    // ...
  },
  space: {
    0: "0",
    1: "0.25rem",
    // ...
  },
  radius: { sm: "0.125rem", md: "0.375rem", lg: "0.5rem" },
  // ...
} as const;
```

### Semantic tokens (`src/tokens/semantic.ts`)

Primitives mapped to intent. This is the layer components consume.

```ts
export const semantic = {
  bg: {
    canvas: "var(--color-slate-950)",
    subtle: "var(--color-slate-900)",
    muted: "var(--color-slate-800)",
  },
  fg: {
    default: "var(--color-slate-50)",
    muted: "var(--color-slate-400)",
  },
  accent: {
    solid: "var(--color-cyan-500)",
    emphasis: "var(--color-cyan-400)",
    fg: "var(--color-slate-950)",
  },
  border: {
    subtle: "var(--color-slate-800)",
    default: "var(--color-slate-700)",
  },
} as const;
```

### Component tokens (`src/tokens/components/*.ts`)

Per-component values that don't belong in the general semantic layer.

```ts
// tokens/components/window.ts
export const window = {
  chrome: { height: "2rem" },
  body: { padding: "1rem" },
  borderRadius: "var(--radius-lg)",
  shadow: "0 20px 60px -10px oklch(0 0 0 / 0.6)",
} as const;
```

## Naming rules

- Primitives: descriptive (`slate-900`, `cyan-500`)
- Semantic: dot-path by intent (`bg.canvas`, `fg.muted`)
- Component: dot-path by component.part (`window.chrome.height`)
- Never mix layers in a single token name

## Themes

A theme is a CSS file that overrides semantic tokens (never primitives)
under a selector:

```css
[data-theme="neon-noir"] {
  --color-bg-canvas: oklch(0.08 0.05 300);
  --color-accent-solid: oklch(0.7 0.3 320);
  /* ... */
}
```

Component tokens are theme-aware too — a theme can override
`--window-shadow` if its aesthetic calls for it.