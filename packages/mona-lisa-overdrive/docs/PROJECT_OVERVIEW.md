# Sprawl — Project Overview

> A William Gibson–referenced portfolio operating system.

## The three zones

### Sprawl
The meta-project. The monorepo. The interconnected system of everything
below.

### Mona Lisa Overdrive
The design system. Tokens, primitives, OS-metaphor components, themes.
Independently versioned, published to npm eventually. This package is
the aesthetic and behavioral backbone of everything the user sees.

### Burning Chrome
The frontend — a TanStack Start application that renders the portfolio
as an operating system. Consumes Mona Lisa Overdrive for UI. Contains
the window manager, the app loader (Module Federation, Wasm, Pyodide,
iframe), and the CMS client.

### Count Zero
The backend — Django + DRF, hosted on Fly.io, backed by Neon Postgres.
Serves dynamic content, app manifests, and admin. A future FastAPI
sidecar (codename: TBD) will handle AI features.

## Mounted apps

Each mounted app (Rust raytracer, Python data viz, Go service, etc.)
lives in its own repo outside of Sprawl. They conform to the App
Manifest schema defined in `mnemonic-manifest` and are loaded at runtime
by Burning Chrome's multi-runtime loader.

## Why this split

- **Mona Lisa Overdrive is reusable.** Anyone — me or someone else —
  should be able to install it and build a Sprawl-styled interface.
- **Burning Chrome is the opinion.** It's my specific portfolio.
- **Count Zero is the truth.** All dynamic content flows from here.
- **Mounted apps are proof.** They demonstrate polyglot competence
  without polluting the JS ecosystem.