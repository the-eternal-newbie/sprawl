# Pinned versions and gotchas

Your training data may be out of date. This file is the source of
truth for what versions we use and the specific patterns that go with
them.

## React 19.2

- **Compiler is on.** Do not write `useMemo`, `useCallback`,
  `React.memo`. They are noise and in some cases actively harmful.
- **`<Activity>` primitive** is available for state-preserving hidden
  components. Prefer this over CSS `display: none` for off-screen
  windows.
- **`useEffectEvent`** is the standard way to read latest state inside
  an effect without re-running it.

## Tailwind v4

- **Config is CSS-first.** There is no `tailwind.config.js` anymore.
  Tokens live in `@theme { ... }` in a CSS file.
- **`@import "tailwindcss"`** replaces the three legacy `@tailwind`
  directives.
- **Content detection is automatic** — no `content` glob in most cases.
- **Arbitrary values use CSS variable syntax** directly: `bg-(--my-var)`.

## TanStack Start

- Burning Chrome uses this. Mona Lisa Overdrive does not import from
  it — the design system must remain framework-agnostic within React.
- If you find yourself reaching for TanStack APIs in this package,
  stop. The functionality belongs in Burning Chrome or neuromancer.

## CVA

- `cva(base, config)` — base is a string, config has `variants`,
  `defaultVariants`, and `compoundVariants`.
- Use `VariantProps<typeof ...>` to derive prop types.