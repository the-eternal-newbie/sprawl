# DESIGN.md — Sector Zero

## Part 1 — Creative Brief (human-readable)

### 1.1 Theme Identity
- **Name:** Sector Zero
- **Slug:** sector-zero
- **Creative North Star:** The Kinetic Monolith — A high-contrast, industrial interface built for the heavy machinery of the future.
- **Mood keywords:** Industrial, Tech-Noir, Kinetic, Authoritative, Brutalist, High-Contrast.
- **Reference aesthetics:** Industrial terminal, low-latency HUD, heavy engineering schematics, mainframe console.

### 1.2 Philosophy
Sector Zero rejects the soft, approachable aesthetics of modern consumer web design. It embraces the raw utility of industrial control systems. There are no gradients, no soft shadows, and no playful animations. Everything is built on a rigid grid, emphasizing structural clarity and technical resilience.

The theme intentionally avoids "friendly" rounded corners and low-contrast accessibility hacks. It demands attention through bold primary colors against deep blacks. It is designed to feel like a high-stakes environment where data density and immediate legibility are paramount. A user should feel like an operator in a mission-critical node, not a casual surfer.

### 1.3 Voice and Tone
The text in Sector Zero is authoritative, clinical, and precise. It communicates in status codes, protocol identifiers, and direct commands. Data is presented as a high-density HUD or a technical dashboard, prioritizing "readiness" over "friendliness."

---

## Part 2 — Technical Specification (machine-readable)

### 2.1 Color Primitives
| Primitive name    | Value (hex) | Scale step | Notes |
|-------------------|-------------|------------|-------|
| industrial-orange | #F2542D     | 500        | Primary Brand/Accent color |
| neutral-950       | #0A0A0A     | 950        | Deep black canvas |
| neutral-900       | #141414     | 900        | Subtle background |
| neutral-800       | #1F1F1F     | 800        | Muted panels |
| neutral-600       | #555555     | 600        | Disabled/placeholder text |
| neutral-400       | #A3A3A3     | 400        | Muted text |
| neutral-100       | #E5E5E5     | 100        | Primary text |
| warning-orange    | #FFA500     | 500        | Warning state |
| status-green      | #bef264     | 500        | Success/Active state |
| tech-magenta      | #FF00FF     | 500        | Info state |
| danger-red        | #FF0000     | 500        | Danger state |

### 2.2 Semantic Color Intents
| Intent                    | Primitive reference     | Final value |
|---------------------------|-------------------------|-------------|
| bg.canvas                 | neutral-950             | #0A0A0A     |
| bg.subtle                 | neutral-900             | #141414     |
| bg.muted                  | neutral-800             | #1F1F1F     |
| bg.emphasis               | industrial-orange-500   | #F2542D     |
| fg.default                | neutral-100             | #E5E5E5     |
| fg.muted                  | neutral-400             | #A3A3A3     |
| fg.subtle                 | neutral-600             | #555555     |
| fg.on-accent.primary      | neutral-950             | #0A0A0A     |
| fg.on-accent.secondary    | N/A — monochrome theme  | N/A         |
| fg.on-accent.tertiary     | N/A — monochrome theme  | N/A         |
| accent.primary            | industrial-orange-500   | #F2542D     |
| accent.secondary          | N/A — monochrome theme  | N/A         |
| accent.tertiary           | N/A — monochrome theme  | N/A         |
| border.subtle             | neutral-800             | #1F1F1F     |
| border.default            | neutral-400             | #A3A3A3     |
| border.strong             | neutral-100             | #E5E5E5     |
| border.accent.primary     | industrial-orange-500   | #F2542D     |
| border.accent.secondary   | N/A — monochrome theme  | N/A         |
| border.accent.tertiary    | N/A — monochrome theme  | N/A         |
| danger.solid              | danger-red-500          | #FF0000     |
| success.solid             | status-green-500        | #bef264     |
| warning.solid             | warning-orange-500      | #FFA500     |
| info.solid                | tech-magenta-500        | #FF00FF     |

### 2.3 Typography
| Role     | Font family     | Weight | Size     | Line-height | Letter-spacing |
|----------|-----------------|--------|----------|-------------|----------------|
| display  | Space Grotesk   | 700    | 4rem     | 1.1         | -0.02em        |
| headline | Space Grotesk   | 600    | 2.5rem   | 1.15        | -0.01em        |
| title    | Space Grotesk   | 600    | 1.5rem   | 1.2         | 0              |
| body     | Space Grotesk   | 400    | 1rem     | 1.5         | 0              |
| body-sm  | Space Grotesk   | 400    | 0.875rem | 1.45        | 0              |
| label    | Space Grotesk   | 500    | 0.75rem  | 1.3         | 0.05em         |
| mono     | JetBrains Mono  | 400    | 0.9rem   | 1.5         | 0              |

- **Fallback stacks:** 'Space Grotesk', sans-serif; 'JetBrains Mono', monospace;
- **Font sources:** Google Fonts

### 2.4 Spacing Scale
| Step | Value   | Typical usage in this theme |
|------|---------|-----------------------------|
| 0    | 0       | —                           |
| 1    | 0.25rem | Hairline gaps, micro-spacing |
| 2    | 0.5rem  | Tight component padding     |
| 3    | 0.75rem | Component internal padding  |
| 4    | 1rem    | Standard layout padding     |
| 5    | 1.25rem | Card internal gaps          |
| 6    | 1.5rem  | Section separation          |
| 7    | 1.75rem | Large component gaps        |
| 8    | 2rem    | Large section spacing       |

### 2.5 Radii
| Token       | Value   | Usage                         |
|-------------|---------|-------------------------------|
| radius.none | 0       | Industrial sharp edges (Default) |
| radius.sm   | 0       | N/A — Theme strictly uses 0   |
| radius.md   | 0       | N/A — Theme strictly uses 0   |
| radius.lg   | 0       | N/A — Theme strictly uses 0   |
| radius.full | 0       | N/A — Theme strictly uses 0   |

### 2.6 Elevation / Shadows
| Token         | Value                                   | Usage                  |
|---------------|-----------------------------------------|------------------------|
| shadow.sm     | 0 0 10px rgba(242, 84, 45, 0.2)         | Hovered orange accents |
| shadow.window | 0 10px 30px rgba(0, 0, 0, 0.8)          | Floating windows       |
| shadow.inset  | inset 0 2px 4px rgba(0,0,0,0.5)         | Recessed panels        |

### 2.7 Motion
| Token                  | Duration    | Easing          | Usage                       |
|------------------------|-------------|-----------------|-----------------------------|
| motion.window.open     | 150ms       | linear          | Fast clinical snap          |
| motion.window.close    | 100ms       | linear          | Fast dismiss                |
| motion.hover           | 50ms        | ease-out        | Instant feedback            |
| motion.caret.blink     | 800ms       | steps(1, end)   | Terminal cursor blink       |
| motion.glitch          | 200ms       | steps(3, end)   | Industrial glitch shift     |
| motion.pulse           | 2s          | ease-in-out     | StandbyPulse orb/button pulse |
| motion.ring-expand     | 4s          | ease-out        | StandbyPulse ring expansion |
| motion.radar-sweep     | 3s          | linear          | Scanner rotation            |
| motion.typewriter      | 50ms/char   | linear          | Boot log reveal             |
| motion.auto-scroll     | continuous  | linear          | Log feed ticker             |
| motion.geometry-rotate | 8s          | linear          | NavGridCard shape spin      |
| motion.scanline        | 8s          | linear          | CRT sweep (opacity 0.03)   |
| motion.phase-in        | 300ms       | ease-out        | HeroTitle mount             |

### 2.8 OS-Specific Tokens
| Token                    | Value   | Notes                  |
|--------------------------|---------|------------------------|
| window.chrome.height     | 32px    | Titlebar height        |
| window.body.padding      | 16px    | Default inner padding  |
| window.border.width      | 1px     | Window outline         |
| taskbar.height           | 44px    | Bottom system bar      |
| dock.icon.size           | 40px    | Dock item size         |
| desktop.icon.grid        | 100px   | Desktop icon spacing   |
| boot.scanline.opacity    | 0.03    | Subtle CRT scanline    |
| terminal.caret.blink     | 0.8s    | Sharp blink rate       |

### 2.9 Deviations and Notes
- **Radii:** Sector Zero intentionally enforces 0px radius across all components — including `radius.full` — to maintain its brutalist, industrial aesthetic. No rounded elements exist anywhere in the theme.
- **Color Scale:** The primary accent (industrial-orange) does not use a traditional tint ramp; it is used at full saturation for maximum impact. This is a monochrome-accent theme — there is no secondary or tertiary accent.
- **Typography:** Uses Space Grotesk for all roles (including body) to maintain a singular, engineered voice. Only `mono` uses JetBrains Mono.
- **Monochrome Collapse:** Components that support `intent: secondary` or `intent: tertiary` (StatBar, ProcessList, MiniChart) collapse all intents to `accent.primary` (#F2542D) since this theme has no secondary or tertiary accents. The `intent: neutral` variant uses `fg.default` (#E5E5E5).

Motion primitives used by this theme:
- `motion.window.open` / `motion.window.close` — CSS transition, rapid snap open/dismiss
- `motion.hover` — CSS transition, 50ms ease-out for instant feedback on state change
- `motion.caret.blink` — CSS animation, 0.8s step blink for terminal cursor
- `motion.glitch` — CSS animation, 200ms industrial glitch shift on accent text
- `motion.pulse` — CSS animation, 2s ease-in-out scale + opacity for StandbyPulse orb and BootContinueButton
- `motion.ring-expand` — CSS animation, 4s expanding concentric rings on StandbyPulse
- `motion.radar-sweep` — CSS animation, 3s rotating sweep line on ScannerWidget
- `motion.typewriter` — JS-driven, line-by-line reveal at 50ms/char for BootLogList and HexSnapshot
- `motion.auto-scroll` — JS-driven, continuous left-scroll for SystemLogFeed and SystemLogColumn
- `motion.geometry-rotate` — CSS animation, 8s continuous rotation for GeometricAnchor shapes
- `motion.scanline` — CSS animation, 8s linear vertical sweep for CRT overlay (opacity 0.03)
- `motion.phase-in` — CSS transition, 300ms fade+translate for HeroTitle on mount

### 2.10 Surface Effects

N/A — theme uses opaque surfaces. Sector Zero does not employ backdrop-filter or translucency effects. Depth is communicated through borders, dark shadows, and tonal layering of neutral-950/900/800.

---

## Part 3 — Component Inventory

### CORE CANONICAL COMPONENTS

#### Component: TopAppBar
- **Category:** os
- **Purpose:** Persistent top strip containing brand, nav tabs, and utility cluster.
- **Variants visible in this theme:**
  - Fixed full-width bar at viewport top
- **States shown:** default (always visible in Desktop/Immersive layouts)
- **Tokens consumed:**
  - `bg`: bg.subtle (#141414)
  - `fg`: fg.default (#E5E5E5)
  - `border`: border.subtle (bottom edge, #1F1F1F)
- **Motion consumed:** none
- **Behavioral notes:** Uses label typography for all text elements within. SECTOR_ZERO brand in white, CON_01 active tab in orange bg. Absent in Boot layout.

#### Component: BrandMark
- **Category:** os
- **Purpose:** Orange gear icon + "SECTOR_ZERO" wordmark in the TopAppBar.
- **Variants visible in this theme:**
  - Glyph + wordmark (gear icon in orange, SECTOR_ZERO text in white)
- **States shown:** default
- **Tokens consumed:**
  - `glyph`: accent.primary (#F2542D)
  - `wordmark`: fg.default (#E5E5E5)
- **Motion consumed:** none

#### Component: NavTabs
- **Category:** os
- **Purpose:** TERM_01, ID_SYS, SCANNER navigation tabs.
- **Variants visible in this theme:**
  - Three tabs with text labels, active tab has orange pill background
- **States shown:** active (CON_01 shown active with orange bg.emphasis pill), inactive
- **Tokens consumed:**
  - `tab.inactive`: fg.muted (#A3A3A3)
  - `tab.active`: fg.on-accent.primary (#0A0A0A) with bg.emphasis (#F2542D) pill
  - `indicator`: accent.primary (#F2542D — monochrome theme uses primary for all indicators)
- **Motion consumed:** motion.hover

#### Component: UtilityCluster
- **Category:** os
- **Purpose:** Right-side cluster: sector badge, coordinates, clock, icons, menu.
- **Variants visible in this theme:**
  - Full cluster: ZONE_INDUSTRIAL_9 badge in orange, clock in orange (22:43:04 UTC), gear/alert icons, MENU button
- **States shown:** default
- **Tokens consumed:**
  - `sector`: accent.primary (#F2542D — ZONE_INDUSTRIAL_9 badge)
  - `coordinates`: fg.muted (#A3A3A3)
  - `clock`: accent.primary (#F2542D — monochrome, no secondary accent)
  - `menu`: fg.default (#E5E5E5)
- **Motion consumed:** none

#### Component: StatusFooter
- **Category:** os
- **Purpose:** Bottom strip with log feed, kernel info, CPU metrics, sync indicator.
- **Variants visible in this theme:**
  - Two-row footer: upper row = SECTOR_LOGS feed with orange label, lower row = kernel + CPU metrics
- **States shown:** default (always visible in Desktop layout)
- **Tokens consumed:**
  - `kernel`: fg.muted (#A3A3A3 — kernel version text)
  - `feed.label`: accent.primary (#F2542D — SECTOR_LOGS: label)
  - `feed.entries`: fg.muted (#A3A3A3 — timestamped log entries)
  - `metrics`: fg.muted (#A3A3A3 — CPU metrics)
  - `sync`: accent.primary (#F2542D — UPLINK_STABLE indicator; monochrome collapse)
- **Motion consumed:** motion.auto-scroll (feed ticker)

#### Component: Window
- **Category:** os
- **Purpose:** Draggable, resizable container for Terminal, utilities, and other modules.
- **Variants visible in this theme:**
  - `default`, `focused`, `maximized`
  - `titleBarIntent`: default (most windows), accent-primary (DetailWindow, SystemTerminal)
- **States shown:** active, floating, maximized
- **Tokens consumed:**
  - `root.bg`: bg.subtle (#141414)
  - `root.border`: border.default (#A3A3A3); border.accent.primary (#F2542D) when focused
  - `root.shadow`: shadow.window
  - `titlebar.bg`: resolved by titleBarIntent (default → bg.muted #1F1F1F)
- **Motion consumed:** motion.window.open, motion.window.close
- **Behavioral notes:** Sharp 0-radius edges. Orange border when focused. No corner notches (unlike GT).

#### Component: WindowTitleBar
- **Category:** os
- **Purpose:** Chrome strip at top of a Window.
- **Variants visible in this theme:**
  - Standard: orange leading square dot + title in orange text + controls
  - Accent: full-width accent-primary bar (SystemTerminal, DetailWindow)
- **States shown:** default
- **Tokens consumed:**
  - `bg`: bg.muted (#1F1F1F default), accent.primary (#F2542D when titleBarIntent is accent-primary)
  - `fg`: accent.primary (#F2542D default title text), fg.on-accent.primary (#0A0A0A when accent)
  - Leading orange dot visible on standard titlebars (accent.primary)

#### Component: WindowControls
- **Category:** os
- **Purpose:** Minimize (—), maximize (□), close (×) controls.
- **Variants visible in this theme:**
  - `glyph` variant — text/icon buttons (—, □, ×)
- **States shown:** default, hover
- **Tokens consumed:**
  - `default`: fg.muted (#A3A3A3)
  - `hover`: fg.default (#E5E5E5)
  - `close.hover`: danger.solid (#FF0000)
- **Motion consumed:** motion.hover

#### Component: MiniWindow
- **Category:** os
- **Purpose:** Compact docked window for persistent widgets.
- **Variants visible in this theme:**
  - Bottom-docked position, compact titlebar with minimal controls
- **States shown:** default
- **Tokens consumed:** same as Window defaults
- **Motion consumed:** motion.window.open

#### Component: DetailWindow
- **Category:** os
- **Purpose:** Accent-titled window for detail overlays.
- **Variants visible in this theme:**
  - `titleBarIntent`: accent-primary (full orange titlebar)
- **States shown:** default (open overlay)
- **Tokens consumed:**
  - `titlebar.bg`: accent.primary (#F2542D)
  - `titlebar.fg`: fg.on-accent.primary (#0A0A0A)
  - Rest: Window defaults

#### Component: Terminal
- **Category:** os
- **Purpose:** Interactive CLI rendered inside a Window.
- **Variants visible in this theme:**
  - **UserTerminal** — compact, floating, maximized variants
  - **SystemTerminal** — full-width accent-primary titlebar, orange accent throughout
- **States shown:** awaiting input, active
- **Tokens consumed:**
  - `root.bg`: bg.canvas (#0A0A0A)
  - `fg`: fg.default (#E5E5E5 — body text, values), fg.muted (#A3A3A3 — labels)
  - `accent`: accent.primary (#F2542D — section headers, prompt prefix, caret)
- **Motion consumed:** motion.caret.blink

#### Component: AsciiArtBlock
- **Category:** primitive
- **Purpose:** "SZO" orange pixel art block in the terminal header.
- **Variants visible in this theme:**
  - Orange pixel art with [SECTOR_ZERO_ON] caption below
- **States shown:** default
- **Tokens consumed:**
  - `art`: accent.primary (#F2542D — orange pixel art)
  - `caption`: fg.muted (#A3A3A3 — [SECTOR_ZERO_ON] label)
- **Motion consumed:** optional motion.glitch on hover

#### Component: KeyValueList
- **Category:** primitive
- **Purpose:** Label + value pairs: OPERATOR, STATION, VERSION, RUNTIME.
- **Variants visible in this theme:**
  - Standard rows with keys in gray, values in near-white
  - Special values: OPERATOR: ADVANCED (orange badge), RUNTIME: 128:44:12 (orange value)
- **States shown:** default
- **Tokens consumed:**
  - `key`: fg.muted (#A3A3A3 — OPERATOR:, STATION:, VERSION:)
  - `value`: fg.default (#E5E5E5 — ZERO_NULL, V4.6.0-STABLE)
  - `value.accent`: accent.primary (#F2542D — ADVANCED badge, orange runtime values)

#### Component: ColorChipRow
- **Category:** primitive
- **Purpose:** Row of 3 small colored squares under KeyValueList.
- **Variants visible in this theme:**
  - 3 chips: orange, dark-orange/brown, dark gray (monochrome palette)
- **States shown:** default
- **Tokens consumed:**
  - Chips use accent.primary (#F2542D), bg.muted (#1F1F1F), fg.muted (#A3A3A3)

#### Component: SectionHeader
- **Category:** primitive
- **Purpose:** Terminal-style header with `#` prefix (e.g. `# CORE_PROTOCOL: MISSION_STATEMENT...`).
- **Variants visible in this theme:**
  - `#` prefix style, orange prefix with white label text
- **States shown:** default
- **Tokens consumed:**
  - `prefix`: accent.primary (#F2542D)
  - `label`: fg.default (#E5E5E5)

#### Component: PromptLine
- **Category:** primitive
- **Purpose:** Interactive command prompt.
- **Variants visible in this theme:**
  - Full prompt: `ADMIN@SECTOR_ZERO:~$` with orange prefix, white input, orange block caret
  - System variant: `SYSTEM@SZ:~$`
- **States shown:** awaiting input
- **Tokens consumed:**
  - `prefix`: accent.primary (#F2542D — orange)
  - `input`: fg.default (#E5E5E5)
  - `caret`: accent.primary (#F2542D — orange block cursor)
- **Motion consumed:** motion.caret.blink

#### Component: HeroTitle
- **Category:** primitive
- **Purpose:** Massive display text: CHARACTER_READOUT, NEBULA_CORE RECONSTRUCTION.
- **Variants visible in this theme:**
  - accent.primary variant (orange — CHARACTER_READOUT, RECONSTRUCTION)
  - fg.default variant (white — NEBULA_CORE)
- **States shown:** default
- **Tokens consumed:**
  - `text`: accent.primary (#F2542D) or fg.default (#E5E5E5) variant-dependent
- **Motion consumed:** optional motion.phase-in

#### Component: SectionDivider
- **Category:** primitive
- **Purpose:** Horizontal rule below section headers and between content blocks.
- **Variants visible in this theme:**
  - Accent variant (orange line)
  - Subtle variant (muted line)
- **States shown:** default
- **Tokens consumed:**
  - `accent`: border.accent.primary (#F2542D)
  - `subtle`: border.subtle (#1F1F1F)

#### Component: KanjiCaption
N/A — `kanji_motif: disabled`. Sector Zero does not render kanji captions.

#### Component: Quotation
- **Category:** primitive
- **Purpose:** Left-bordered quote block.
- **Variants visible in this theme:**
  - Orange left border, quote text in fg.default
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary (#F2542D)
  - `quote`: fg.default (#E5E5E5)

#### Component: Button
- **Category:** primitive
- **Purpose:** Standard action button.
- **Variants visible in this theme:**
  - `primary`: orange bg + dark text (INITIALIZE BOOT >)
  - `outlined`: orange border + orange text (DISCONNECT_)
- **States shown:** default, hover
- **Tokens consumed:**
  - `primary.bg`: accent.primary (#F2542D)
  - `primary.fg`: fg.on-accent.primary (#0A0A0A)
  - `outlined.border`: border.accent.primary (#F2542D)
  - `outlined.fg`: accent.primary (#F2542D)
- **Motion consumed:** motion.hover

#### Component: IconButton
- **Category:** primitive
- **Purpose:** Icon-only buttons: gear, alert, menu icons in UtilityCluster.
- **Variants visible in this theme:**
  - `ghost`: transparent bg, icon in fg.muted → fg.default on hover
  - `filled`: accent.primary bg (play button)
- **States shown:** default, hover, active
- **Tokens consumed:**
  - `ghost`: fg.muted (#A3A3A3) → fg.default (#E5E5E5)
  - `filled.bg`: accent.primary (#F2542D)
  - `filled.fg`: fg.on-accent.primary (#0A0A0A)
- **Motion consumed:** motion.hover

#### Component: Input
N/A — not shown in this theme's designs.

#### Component: SearchInput
N/A — not shown in this theme's designs.

#### Component: Label
- **Category:** primitive
- **Purpose:** Small uppercase label text throughout the UI.
- **Variants visible in this theme:**
  - Standard muted labels (CPU_LOAD, MEM_USAGE, CORE_TEMP, etc.)
- **States shown:** default
- **Tokens consumed:**
  - `fg`: fg.muted (#A3A3A3)

#### Component: Badge
- **Category:** primitive
- **Purpose:** Pill-shaped status label.
- **Variants visible in this theme:**
  - `accent`: TERM_01 active tab pill, ADVANCED operator badge, LVL_99 (orange bg)
  - `default`: STANDBY status (gray bg)
- **States shown:** default
- **Tokens consumed:**
  - `accent.bg`: accent.primary (#F2542D), `accent.fg`: fg.on-accent.primary (#0A0A0A)
  - `default.bg`: bg.muted (#1F1F1F), `default.fg`: fg.muted (#A3A3A3)

#### Component: Clock
- **Category:** primitive
- **Purpose:** Time display: `22:43:04 UTC` in orange.
- **Variants visible in this theme:**
  - Orange time text in UtilityCluster
- **States shown:** default
- **Tokens consumed:**
  - `time`: accent.primary (#F2542D)

#### Component: LocaleSelector
N/A — not clearly shown in this theme's designs.

#### Component: VolumeSlider
- **Category:** primitive
- **Purpose:** Horizontal volume control with orange fill.
- **Variants visible in this theme:**
  - Inline slider with orange fill, percentage label
- **States shown:** default, interacting
- **Tokens consumed:**
  - `track`: bg.muted (#1F1F1F)
  - `fill`: accent.primary (#F2542D)
  - `label`: fg.muted (#A3A3A3)

### EXTENDED CANONICAL COMPONENTS

#### Component: IdentityCard
- **Category:** os (Window variant)
- **Purpose:** Floating ID card: ID_RECORD: 09_ALPHA with portrait and metadata footer.
- **Variants visible in this theme:**
  - `titleBarIntent`: accent-primary (FULL orange titlebar — unique to SZ)
- **States shown:** default
- **Tokens consumed:**
  - `titlebar.bg`: accent.primary (#F2542D — resolved via titleBarIntent)
  - `titlebar.fg`: fg.on-accent.primary (#0A0A0A)
  - `portrait`: image with orange frame corners (accent.primary)
  - `footer`: fg.default (#E5E5E5 — NODE: KO-HANA), fg.muted (#A3A3A3 — CLASS: SECTOR_GUARD)

#### Component: ScannerWidget
- **Category:** os (Window variant)
- **Purpose:** Dark radar window: RADAR_SZ2_SCAN titlebar, orange/red markers on dark radar.
- **Variants visible in this theme:**
  - `titleBarIntent`: default (dark titlebar)
- **States shown:** scanning (active)
- **Tokens consumed:**
  - `display.border`: border.subtle (#1F1F1F — radar circles)
  - `display.sweep`: accent.primary (#F2542D — orange sweep line; monochrome collapse)
  - `markers`: accent.primary (#F2542D — orange dot), danger.solid (#FF0000 — red dot)
  - `readout`: fg.muted (#A3A3A3)
- **Motion consumed:** motion.radar-sweep

#### Component: StandbyPulse
- **Category:** os
- **Purpose:** Centerpiece idle viz: dark geometric pentagons/shapes with orange ring elements, small orange orb, SYSTEM_STANDBY label.
- **States shown:** idle (default desktop state)
- **Tokens consumed:**
  - `orb`: accent.primary (#F2542D — orange glow; monochrome collapse from secondary)
  - `rings`: border.subtle (#1F1F1F — concentric shapes) + border.accent.primary (#F2542D — faint orange overlays)
  - `label`: fg.muted (#A3A3A3 — SYSTEM_STANDBY, LISTENING FOR BIOMETRIC AUTHENTICATION)
- **Motion consumed:** motion.pulse (orb), motion.ring-expand (rings)

#### Component: MediaPlayer
- **Category:** os (Window variant)
- **Purpose:** Media playback — floating Window with orange titlebar.
- **Variants visible in this theme:**
  - Floating: cover art, progress bar, transport controls, metadata
- **States shown:** playing
- **Tokens consumed:**
  - `title`: fg.default (#E5E5E5)
  - `meta`: fg.muted (#A3A3A3)
  - `progress.fill`: accent.primary (#F2542D)
  - `controls.play`: accent.primary bg (filled IconButton)
- **Motion consumed:** motion.hover (controls)

#### Component: MetricsCard
- **Category:** primitive
- **Purpose:** Telemetry cards: CPU_LOAD 24.8%, MEM_USAGE 12.4GB, NETWORK 442 kb/s, CORE_TEMP 42.0°C.
- **Variants visible in this theme:**
  - `default`: orange value for accent metrics (CPU_LOAD, CORE_TEMP), white for others
- **States shown:** default
- **Tokens consumed:**
  - `label`: fg.muted (#A3A3A3)
  - `value`: accent.primary (#F2542D — CPU_LOAD, CORE_TEMP) or fg.default (#E5E5E5 — MEM_USAGE, NETWORK)
  - `graph`: accent.primary (#F2542D — orange progress bars)
  - `bg`: bg.muted (#1F1F1F)

#### Component: ProgressBar
- **Category:** primitive
- **Purpose:** Horizontal progress in MetricsCards and system health.
- **Variants visible in this theme:**
  - Orange fill bars below metric values
- **States shown:** default
- **Tokens consumed:**
  - `track`: bg.muted (#1F1F1F)
  - `fill`: accent.primary (#F2542D — monochrome, all bars orange)

#### Component: StatBar
- **Category:** primitive
- **Purpose:** Labeled stat bars in CoreAttributesPanel: STAMINA, HEALTH, DEXTERITY.
- **Variants visible in this theme:**
  - ALL bars orange (monochrome collapse). `intent: primary/secondary/tertiary` all resolve to accent.primary.
  - `intent: neutral` → fg.default (#E5E5E5)
- **States shown:** default
- **Tokens consumed:**
  - `intent: primary` → accent.primary (#F2542D — orange, STAMINA)
  - `intent: secondary` → accent.primary (#F2542D — monochrome collapse, HEALTH)
  - `intent: tertiary` → accent.primary (#F2542D — monochrome collapse, DEXTERITY)
  - `intent: neutral` → fg.default (#E5E5E5 — white)
  - `label`: fg.default (#E5E5E5)
  - `value`: fg.default (#E5E5E5)

#### Component: SkillRow
- **Category:** primitive
- **Purpose:** Skill rows in SkillsLogPanel: FULLSTACK_DEV MASTER, CLOUD_ARCH EXPERT, CYBER_DEF ADVANCED, AI_OPS_DESIGN ADVANCED.
- **States shown:** default
- **Tokens consumed:**
  - `row.bg`: alternating bg.subtle (#141414) / bg.muted (#1F1F1F)
  - `label`: fg.default (#E5E5E5)
  - `rank.active`: accent.primary (#F2542D — MASTER, EXPERT in orange)
  - `rank.default`: fg.default (#E5E5E5)

#### Component: ProcessList
- **Category:** primitive
- **Purpose:** PID status list: ACTIVE_PROCESSES with PID/name in white.
- **States shown:** running, idle
- **Tokens consumed:**
  - `pid`: fg.muted (#A3A3A3)
  - `name`: fg.default (#E5E5E5)
  - `status.running`: accent.primary (#F2542D — ACTIVE badges in orange)
  - `status.idle`: fg.muted (#A3A3A3 — STANDBY badge in gray)

#### Component: MiniChart
- **Category:** primitive
- **Purpose:** Small grouped bar chart in SkillsLogPanel.
- **States shown:** default
- **Tokens consumed:**
  - Bars: accent.primary (#F2542D — monochrome, all bars orange)

#### Component: HexSnapshot
- **Category:** primitive
- **Purpose:** Hex byte grid in boot screen with orange timestamps.
- **States shown:** default, error highlight
- **Tokens consumed:**
  - `address`: fg.muted (#A3A3A3)
  - `bytes`: fg.default (#E5E5E5)
  - `timestamp`: accent.primary (#F2542D — orange timestamps)
  - `error`: danger.solid (#FF0000 — red error row)
- **Motion consumed:** motion.typewriter

#### Component: Timeline
- **Category:** os
- **Purpose:** Horizontal timeline with diamond/square nodes.
- **States shown:** default
- **Tokens consumed:**
  - `track`: border.subtle (#1F1F1F — connecting line)
  - `cursor`: accent.primary (#F2542D — active position marker)

#### Component: TimelineNode
- **Category:** primitive
- **Purpose:** Square/diamond nodes: INIT_MISSION, ORBIT_CORE, DEEP_SPACE (active), MODULE_016, SIGNAL_LOST.
- **Variants visible in this theme:**
  - `idle`: hollow square, border.subtle
  - `active`: filled orange square with glow (DEEP_SPACE), accent.primary
  - `visited`: small orange filled square (INIT_MISSION), accent.primary dimmed
- **States shown:** idle, active, visited
- **Tokens consumed:**
  - `idle`: border.subtle (#1F1F1F), fg.muted (#A3A3A3 — label)
  - `active`: accent.primary (#F2542D — fill + glow)
  - `active.label`: accent.primary (#F2542D — DEEP_SPACE in orange)

#### Component: MetadataTag
- **Category:** primitive
- **Purpose:** Corner tags: LOG_ID // 0492-D-ALPHA.
- **States shown:** default
- **Tokens consumed:**
  - `label`: accent.primary (#F2542D — orange text; monochrome collapse from tertiary)
  - `bg`: bg.muted (#1F1F1F — when pill-shaped)

#### Component: AccentBar
- **Category:** primitive
- **Purpose:** Small orange accent lines used as corner decorations.
- **States shown:** default
- **Tokens consumed:**
  - accent.primary (#F2542D — orange bars only; monochrome)

#### Component: TagChipRow
- **Category:** primitive
- **Purpose:** Bordered tech tag chips in detail views.
- **States shown:** default
- **Tokens consumed:**
  - `chip.border`: border.default (#A3A3A3)
  - `chip.fg`: fg.default (#E5E5E5)

#### Component: MetadataChipRow
- **Category:** primitive
- **Purpose:** Key+value metadata chips: COORD: 40.7128° N / STAMP: 2184.09.12 / STATUS: CRITICAL.
- **States shown:** default
- **Tokens consumed:**
  - `chip.border`: border.default (#A3A3A3)
  - `key`: fg.muted (#A3A3A3)
  - `value`: fg.default (#E5E5E5)

#### Component: NavGridCard
- **Category:** os
- **Purpose:** Full-screen menu navigation cards: HOME, ABOUT_ME, AUDIO, PORTFOLIO, BLOG, CONTACT.
- **Variants visible in this theme:**
  - Orange borders, orange ID tags (SEQ1_CODE, SEQ2_IDENTITY, etc.), orange labels with orange underlines
- **States shown:** default, active
- **Tokens consumed:**
  - `border`: border.accent.primary (#F2542D — orange card border)
  - `id`: accent.primary (#F2542D — SEQ1_CODE corner tag in orange)
  - `label`: fg.default (#E5E5E5 — HOME, ABOUT_ME in white)
  - `icon`: accent.primary (#F2542D — orange dot beside label)

#### Component: GeometricAnchor
- **Category:** primitive
- **Purpose:** Wireframe/outlined shapes inside NavGridCards (home icon, silhouette, headphone icon, bar chart/waveform).
- **Variants visible in this theme:**
  - `wireframe`: orange wireframe shapes (monochrome collapse from secondary)
- **States shown:** default (rotating)
- **Tokens consumed:**
  - `wireframe`: accent.primary (#F2542D — orange lines; monochrome)
- **Motion consumed:** motion.geometry-rotate

#### Component: BlogCard
- **Category:** primitive
- **Purpose:** Blog entry cards with cover image, metadata, title, description.
- **States shown:** default
- **Tokens consumed:**
  - `cover`: image with MetadataTag overlay (orange tag)
  - `meta`: fg.muted (#A3A3A3)
  - `title`: fg.default (#E5E5E5)
  - `description`: fg.muted (#A3A3A3)

#### Component: MissionBriefCard
- **Category:** primitive
- **Purpose:** Bordered card with MISSION_OBJECTIVE header and prose body.
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary (#F2542D — orange left border)
  - `header`: fg.default (#E5E5E5 — MISSION_OBJECTIVE)
  - `body`: fg.muted (#A3A3A3 — prose content)

#### Component: CoreAttributesPanel
- **Category:** os
- **Purpose:** CORE_ATTRIBUTES panel with orange border/header.
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary (#F2542D — orange border)
  - `header`: fg.default (#E5E5E5 — CORE_ATTRIBUTES), fg.muted (#A3A3A3 — subtext)
  - `bg`: bg.subtle (#141414)

#### Component: SkillsLogPanel
- **Category:** os
- **Purpose:** SKILL_INVENTORY panel with skill rows and MiniChart.
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.default (#A3A3A3)
  - `header`: fg.default (#E5E5E5 — SKILL_INVENTORY)
  - `bg`: bg.subtle (#141414)

#### Component: SystemLogColumn
- **Category:** os
- **Purpose:** Left-side orange log entries.
- **Variants visible in this theme:**
  - Orange timestamp prefixes with white log text
- **States shown:** default (continuously scrolling)
- **Tokens consumed:**
  - `text`: fg.muted (#A3A3A3)
  - `status`: accent.primary (#F2542D — orange status markers; monochrome collapse)
- **Motion consumed:** motion.auto-scroll

#### Component: TelemetryColumn
- **Category:** os
- **Purpose:** Right-side readout: POS_POSITION, coordinates, etc.
- **States shown:** default
- **Tokens consumed:**
  - `key`: fg.muted (#A3A3A3)
  - `value`: fg.default (#E5E5E5)

#### Component: UserSignatureBar
- **Category:** os
- **Purpose:** Bottom bar: CARLOS_VARA // SECTOR_ZERO_UNIT, with orange name and timestamp.
- **States shown:** default
- **Tokens consumed:**
  - `status`: accent.primary (#F2542D — orange dot; monochrome collapse)
  - `name`: accent.primary (#F2542D — CARLOS_VARA in orange)
  - `role`: fg.muted (#A3A3A3)
  - `timestamp`: accent.primary (#F2542D — MON_MAR_12.EE_SYS.04 in orange)

#### Component: SubtitleBar
- **Category:** primitive
- **Purpose:** Under-header metadata line if visible.
- **States shown:** default
- **Tokens consumed:**
  - `fg`: fg.muted (#A3A3A3)

#### Component: BootHeader
- **Category:** os
- **Purpose:** SECTOR ZERO title in orange, BIOS REVISION 4.0.2 // INDUSTRIAL PROTOCOL subtitle.
- **States shown:** default
- **Tokens consumed:**
  - `title`: accent.primary (#F2542D — SECTOR ZERO in orange)
  - `meta`: fg.muted (#A3A3A3 — BIOS REVISION 4.0.2 // INDUSTRIAL PROTOCOL)

#### Component: BootLogList
- **Category:** os
- **Purpose:** Orange timestamps with white log text.
- **States shown:** initializing (line-by-line reveal)
- **Tokens consumed:**
  - `timestamp`: accent.primary (#F2542D — orange timestamps)
  - `message`: fg.default (#E5E5E5 — log text)
  - `success`: accent.primary (#F2542D — orange-tinted success lines; monochrome collapse)
- **Motion consumed:** motion.typewriter

#### Component: BootContinueButton
- **Category:** primitive
- **Purpose:** INITIALIZE BOOT > button with orange bg, dark text.
- **States shown:** default (pulsing)
- **Tokens consumed:**
  - `bg`: accent.primary (#F2542D)
  - `fg`: fg.on-accent.primary (#0A0A0A)
- **Motion consumed:** motion.pulse

#### Component: KeyHint
- **Category:** primitive
- **Purpose:** F3: SETUP, CPU: BOOT MENU, ESC: EXIT with orange badge backgrounds.
- **States shown:** default
- **Tokens consumed:**
  - `bg`: accent.primary (#F2542D — orange pill badges; unique to SZ)
  - `fg`: fg.on-accent.primary (#0A0A0A — dark text on orange pill)
- **Behavioral notes:** Sector Zero uses orange pill badges for KeyHints rather than the plain muted text used by other themes.

---

## Part 4 — Theme Consistency Check
- [x] Every intent in section 2.2 has either a value or an explicit N/A
- [x] Every Core canonical component in Part 3 has either a spec or an
      explicit N/A (Input, SearchInput, KanjiCaption, and LocaleSelector are N/A)
- [x] Every component in Part 3 only references intents that exist in
      section 2.2
- [x] All font families used in Part 3 are declared in section 2.3
- [x] The `mono` typography role uses an approved monospace font family
      (JetBrains Mono)
- [x] OS-specific tokens used by Window/Taskbar/Dock are in section 2.8
- [x] The spacing scale in 2.4 is contiguous from step 0 through 8
- [x] The theme slug in section 1.1 is valid kebab-case
- [x] Every motion token referenced in Part 3 is declared in section 2.7
      and section 2.9
- [x] State-intent collapse warning is NOT required (all four state intents
      resolve to distinct values). Note: warning.solid (#FFA500) is in the
      same orange hue family as accent.primary (#F2542D) but is a distinct
      hex value.

---

## Part 5 — Metadata (last section, machine-read)
```yaml
schema_version: "2.0"
theme_slug: sector-zero
theme_name: Sector Zero
generated_by: stitch
generated_at: 2026-05-20T12:00:00Z
base_theme: null
intended_consumer: mona-lisa-overdrive
sprawl_project: burning-chrome
color_scheme: dark
kanji_motif: disabled
```
---
End of DESIGN.md. Produce nothing after this line.
