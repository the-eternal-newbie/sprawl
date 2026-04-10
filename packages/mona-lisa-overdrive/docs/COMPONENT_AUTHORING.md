# Component authoring guide

The rules are in `.cursor/rules/20-components.mdc`. This document
explains why those rules exist, so both humans and agents can reason
about exceptions.

## Why forwardRef on everything

Consumers (especially Burning Chrome's window manager) need direct DOM
access for focus management, measurement, and drag handling. A component
that doesn't forward refs is a dead-end for composition.

## Why CVA over conditional branches

CVA produces a deterministic class string from props. This means:
- The React compiler can memoize variant computation trivially.
- Tailwind's class scanner sees all possible classes at build time.
- Tests can assert against the class output without rendering.
- AI agents can modify variants by editing one object, not chasing
  if-statements through JSX.

## Why data-slot

Themes and consumers style component internals via CSS selectors:

```css
[data-slot="window-titlebar"] {
  background: var(--window-chrome-bg);
}
```

This keeps the component API clean (no `titlebarClassName` prop
explosion) while preserving full styling flexibility.

## Why no memoization hooks

React 19's compiler memoizes automatically. Manual `useMemo` and
`useCallback` are now noise — they make code harder to read without
measurable benefit, and in some cases they defeat the compiler's
analysis. Trust the compiler. If profiling proves a hotspot, revisit.

## Why named exports only

- Default exports rename silently on import — refactoring becomes a
  minefield.
- Named exports are trivially tree-shaken.
- AI agents can find components by grep without guessing what name the
  importer chose.