# Architecture — Mona Lisa Overdrive

## Position in Sprawl

Mona Lisa Overdrive is the design system package of the Sprawl project.
It is consumed primarily by Burning Chrome (the frontend shell), and is
designed to be consumable by any future Sprawl surface.

Sprawl (monorepo)
├── apps/
│   └── burning-chrome/           ← consumer
└── packages/
├── mona-lisa-overdrive/      ← this package
├── nuyen-tokens/              ← shared with other packages
├── neuromancer/              ← window manager (consumes MLO)
└── mnemonic-manifest/            ← app manifest schema

## Layered architecture

Mona Lisa Overdrive is built in four layers. Dependencies flow downward
only — a lower layer never imports from an upper layer.

### Layer 1 — Tokens (`src/tokens/`)

Primitive values, semantic mappings, and component-specific tokens.
Emitted as CSS variables via Tailwind v4's `@theme` directive. Zero
runtime dependencies.

### Layer 2 — Primitives (`src/components/`)

Generic, domain-agnostic components: Button, Input, Select, Dialog,
Tooltip, etc. Built on Radix UI for behavior, styled with Tailwind
utilities pulled from tokens.

### Layer 3 — OS components (`src/os/`)

The Sprawl operating system metaphor made visual: Window, Taskbar,
Dock, DesktopIcon, ContextMenu, BootScreen, Notification. These
compose primitives and consume OS-specific tokens.

### Layer 4 — Compositions (`src/compositions/`)

Higher-level assemblies for common patterns — a settings panel layout,
a file browser shell, etc. Optional, consumer-facing.

## Consumption

Burning Chrome imports Mona Lisa Overdrive as a workspace dependency:

```ts
import { Button, Window, useTheme } from "mona-lisa-overdrive";
```

Tokens are imported as a CSS side-effect:

```ts
import "mona-lisa-overdrive/styles.css";
import "mona-lisa-overdrive/themes/neon-noir.css";
```

## Build

- `tsup` bundles the library to ESM + CJS + types.
- Tailwind runs at build time in the consumer, not here. Mona Lisa
  Overdrive ships source classes; the consumer's Tailwind scanner picks
  them up via the `content` glob.
- Themes ship as raw CSS files — no bundling.