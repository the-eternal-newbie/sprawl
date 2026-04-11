# DESIGN.md — Helion-Nine

## Part 1 — Creative Brief (human-readable)

### 1.1 Theme Identity
- **Name:** Helion-Nine
- **Slug:** helion-nine
- **Creative North Star:** A brutalist, industrial operating system designed for high-stakes telemetry and heavy-machinery orchestration.
- **Mood keywords:** Industrial, Aggressive, Technical, High-Contrast, Brutalist, Low-Latency, Authoritative, Kinetic.
- **Reference aesthetics:** Industrial terminal, shipyard manual, low-latency HUD, tactical diagnostic equipment, CRT scanlines.

### 1.2 Philosophy
Helion-Nine is a radical departure from the "soft" aesthetics of modern SaaS. It intentionally rejects rounded corners, subtle gradients, and pastel colors in favor of sharp 90-degree angles, pure black backgrounds, and a singular, piercing "signal-yellow" accent. It embraces the beauty of raw data and the efficiency of a high-density, low-latency environment.

The design intentionally avoids decorative elements that don't serve a functional or atmospheric purpose. It utilizes a "tonal layering" approach where depth is created through borders and glow effects rather than shadows or depth-of-field. The feeling a user should get is one of being "strapped in" to a powerful, uncompromising machine where every pixel represents a mission-critical data point.

### 1.3 Voice and Tone
The voice is clinical and authoritative. Text is treated as data—often presented in all-caps, with technical prefixes (e.g., `LOG_`, `ID_`, `SYS_`) and monospaced justifications. There is no playfulness here; everything is a protocol, a sequence, or a diagnostic result. Data is presented like a tactical HUD or a shipyard manual: information-dense, high-utility, and optimized for rapid scanning under pressure.

---

## Part 2 — Technical Specification (machine-readable)

### 2.1 Color Primitives
| Primitive name | Value (hex) | Scale step | Notes |
|----------------|-------------|------------|-------|
| signal-yellow  | #FFE600     | 500        | Base primary tone |
| signal-yellow  | #FFF4A3     | 100        | Lightest tint / highlight |
| signal-yellow  | #B3A100     | 700        | Darkened accent |
| deep-black     | #000000     | 950        | Absolute canvas background |
| dark-gray      | #0A0A0A     | 900        | Primary UI surface |
| mid-gray       | #1A1A1A     | 800        | Secondary surface / muted UI |
| light-gray     | #333333     | 700        | Border / inactive element |
| neutral-gray   | #808080     | 500        | Muted text |
| pure-white     | #FFFFFF     | 50         | Primary text / strong border |
| critical-red   | #FF4545     | 500        | Alert / Danger tone |

### 2.2 Semantic Color Intents
| Intent                    | Primitive reference     | Final value |
|---------------------------|-------------------------|-------------|
| bg.canvas                 | deep-black-950          | #000000     |
| bg.subtle                 | dark-gray-900           | #0A0A0A     |
| bg.muted                  | mid-gray-800            | #1A1A1A     |
| bg.emphasis               | signal-yellow-500       | #FFE600     |
| fg.default                | pure-white-50           | #FFFFFF     |
| fg.muted                  | neutral-gray-500        | #808080     |
| fg.subtle                 | light-gray-700          | #333333     |
| fg.on-accent.primary      | deep-black-950          | #000000     |
| fg.on-accent.secondary    | N/A — monochrome theme  | N/A         |
| fg.on-accent.tertiary     | N/A — monochrome theme  | N/A         |
| accent.primary            | signal-yellow-500       | #FFE600     |
| accent.secondary          | N/A — monochrome theme  | N/A         |
| accent.tertiary           | N/A — monochrome theme  | N/A         |
| border.subtle             | mid-gray-800            | #1A1A1A     |
| border.default            | light-gray-700          | #333333     |
| border.strong             | pure-white-50           | #FFFFFF     |
| border.accent.primary     | signal-yellow-500       | #FFE600     |
| border.accent.secondary   | N/A — monochrome theme  | N/A         |
| border.accent.tertiary    | N/A — monochrome theme  | N/A         |
| danger.solid              | critical-red-500        | #FF4545     |
| success.solid             | signal-yellow-500       | #FFE600     |
| warning.solid             | signal-yellow-500       | #FFE600     |
| info.solid                | signal-yellow-500       | #FFE600     |

### 2.3 Typography
| Role     | Font family     | Weight | Size     | Line-height | Letter-spacing |
|----------|-----------------|--------|----------|-------------|----------------|
| display  | Space Grotesk   | 700    | 4.5rem   | 0.9         | -0.04em        |
| headline | Space Grotesk   | 700    | 2.5rem   | 1.0         | -0.02em        |
| title    | Space Grotesk   | 600    | 1.25rem  | 1.2         | 0.02em         |
| body     | Space Grotesk   | 400    | 0.875rem | 1.5         | 0.01em         |
| body-sm  | Space Grotesk   | 400    | 0.75rem  | 1.4         | 0.01em         |
| label    | Space Grotesk   | 700    | 0.625rem | 1.1         | 0.1em          |
| mono     | JetBrains Mono  | 400    | 0.875rem | 1.5         | 0              |

- **Fallback stacks:** 'Space Grotesk', sans-serif; 'JetBrains Mono', monospace;
- **Font sources:** Google Fonts (Space Grotesk, JetBrains Mono)

### 2.4 Spacing Scale
| Step | Value   | Typical usage in this theme |
|------|---------|-----------------------------|
| 0    | 0       | —                           |
| 1    | 0.25rem | Hairline gaps, tiny padding |
| 2    | 0.5rem  | Grid alignment, item gap    |
| 3    | 0.75rem | Component internal padding  |
| 4    | 1rem    | Container padding           |
| 5    | 1.25rem | Card internal gaps          |
| 6    | 1.5rem  | Section separation          |
| 7    | 1.75rem | Large component gaps        |
| 8    | 2rem    | Layout margins              |

### 2.5 Radii
| Token       | Value   | Usage                         |
|-------------|---------|-------------------------------|
| radius.none | 0       | Industrial sharp edges (Primary) |
| radius.sm   | 0       | N/A — sharp edges only        |
| radius.md   | 0       | N/A — sharp edges only        |
| radius.lg   | 0       | N/A — sharp edges only        |
| radius.full | 0       | N/A — sharp edges only        |

### 2.6 Elevation / Shadows
| Token         | Value                                     | Usage                |
|---------------|-------------------------------------------|----------------------|
| shadow.sm     | 0 0 10px oklch(0.8 0.2 90 / 0.2)          | Subtle neon glow     |
| shadow.window | 0 0 40px -10px oklch(0.8 0.2 90 / 0.4)    | Panel outer glow     |
| shadow.inset  | inset 0 0 10px oklch(0 0 0 / 0.8)         | Recessed terminal    |

### 2.7 Motion
| Token                  | Duration    | Easing             | Usage                      |
|------------------------|-------------|--------------------|-----------------------------|
| motion.window.open     | 150ms       | steps(4, end)      | Glitch mount               |
| motion.window.close    | 100ms       | steps(4, end)      | Rapid dismiss              |
| motion.hover           | 0ms         | instant            | State changes              |
| motion.caret.blink     | 500ms       | steps(1, end)      | Terminal cursor blink      |
| motion.glitch          | 200ms       | steps(3, end)      | Chromatic shift            |
| motion.pulse           | 2s          | ease-in-out        | Orb/button pulse           |
| motion.ring-expand     | 4s          | ease-out           | StandbyPulse ring expansion |
| motion.radar-sweep     | 3s          | linear             | Scanner rotation           |
| motion.typewriter      | 50ms/char   | linear             | Boot log reveal            |
| motion.auto-scroll     | continuous  | linear             | Log feed ticker            |
| motion.geometry-rotate | 8s          | linear             | NavGridCard shape spin     |
| motion.scanline        | 8s          | linear             | CRT background sweep       |
| motion.phase-in        | 300ms       | ease-out           | HeroTitle mount            |

### 2.8 OS-Specific Tokens
| Token                    | Value   | Notes                  |
|--------------------------|---------|------------------------|
| window.chrome.height     | 32px    | Titlebar height        |
| window.body.padding      | 0px     | Docked components      |
| window.border.width      | 2px     | Double-line border     |
| taskbar.height           | 48px    | Status footer          |
| dock.icon.size           | 32px    | Top utility bar icons  |
| desktop.icon.grid        | 120px   | Center-out radial grid |
| boot.scanline.opacity    | 0.15    | Heavy CRT texture      |
| terminal.caret.blink     | 0.5s    | High-frequency pulse   |

### 2.9 Deviations and Notes
- **Radii:** All `radius` tokens are intentionally set to `0` across the entire theme to maintain the brutalist industrial aesthetic. No glassmorphism.
- **Colors:** The theme relies exclusively on a single hue (`signal-yellow`) with variation created through opacity and glow rather than a full chromatic ramp. This is a monochrome accent scheme — `accent.secondary` and `accent.tertiary` are N/A.
- **Typography:** Display type uses a `0.9` line-height to create high-tension, vertically dense headers.
- **Tone:** All UI elements are "louder" than standard, using high-contrast borders and glows as primary affordances.
- **Kanji motif:** Disabled. This theme does not use Japanese-character decorations.

Motion primitives used by this theme:
- `motion.window.open` / `motion.window.close` — CSS transition, stepped glitch mount/dismiss
- `motion.hover` — instant (0ms), no transition on state change
- `motion.caret.blink` — CSS animation, 0.5s step blink for terminal cursor
- `motion.glitch` — CSS animation, 200ms chromatic-shift on accent text
- `motion.pulse` — CSS animation, 2s ease-in-out scale + opacity for StandbyPulse orb and BootContinueButton
- `motion.ring-expand` — CSS animation, 4s expanding concentric rings on StandbyPulse
- `motion.radar-sweep` — CSS animation, 3s rotating sweep line on ScannerWidget
- `motion.typewriter` — JS-driven, line-by-line reveal at 50ms/char for BootLogList and HexSnapshot
- `motion.auto-scroll` — JS-driven, continuous left-scroll for SystemLogFeed and SystemLogColumn
- `motion.geometry-rotate` — CSS animation, 8s continuous rotation for GeometricAnchor
- `motion.scanline` — CSS animation, 8s linear vertical sweep for CRT overlay
- `motion.phase-in` — CSS transition, 300ms fade+translate for HeroTitle on mount

### 2.10 Surface Effects

N/A — theme uses opaque surfaces. Helion-Nine does not employ backdrop-filter or translucency effects. Depth is communicated through borders and glow effects.

---

## Part 3 — Component Inventory

### CORE CANONICAL COMPONENTS

#### Component: TopAppBar
- **Category:** os
- **Purpose:** Persistent top strip containing brand mark, nav tabs, and utility cluster.
- **Variants visible in this theme:**
  - Fixed full-width bar at viewport top; yellow brand, TERMINAL_01/DATA/44_CORE tabs, utility cluster on black
- **States shown:** default (always visible in Desktop/Immersive layouts)
- **Tokens consumed:**
  - `bg`: bg.canvas (#000000)
  - `fg`: fg.default (#FFFFFF)
  - `border`: border.subtle (bottom edge)
- **Motion consumed:** none
- **Behavioral notes:** Uses label typography for all text elements within. Absent in Boot layout.

#### Component: BrandMark
- **Category:** os
- **Purpose:** H9 pixel-art logo glyph rendered in signal-yellow in the TopAppBar.
- **Variants visible in this theme:**
  - Glyph-only (pixel-art H9 logo, no wordmark text in TopAppBar)
- **States shown:** default
- **Tokens consumed:**
  - `glyph`: accent.primary (#FFE600)
- **Motion consumed:** none

#### Component: NavTabs
- **Category:** os
- **Purpose:** TERMINAL_01, DATA, 44_CORE navigation tabs.
- **Variants visible in this theme:**
  - Tabs with yellow active pill background
- **States shown:** active (yellow pill background), inactive
- **Tokens consumed:**
  - `tab.inactive`: fg.muted (#808080)
  - `tab.active`: fg.on-accent.primary (#000000) with bg.emphasis (#FFE600) pill
  - `indicator`: accent.primary (#FFE600)
- **Motion consumed:** motion.hover

#### Component: UtilityCluster
- **Category:** os
- **Purpose:** Right-side cluster: SECTOR badge, coordinates, clock (yellow), icons, SYS_MENU button.
- **Variants visible in this theme:**
  - Full cluster visible: SECTOR badge, coordinates, clock in yellow, utility icons, SYS_MENU
- **States shown:** default
- **Tokens consumed:**
  - `sector`: fg.default (#FFFFFF — sector name), accent.primary (#FFE600 — sector badge)
  - `coordinates`: fg.muted (#808080)
  - `clock`: accent.primary (#FFE600)
  - `menu`: fg.default (#FFFFFF)
- **Motion consumed:** none

#### Component: StatusFooter
- **Category:** os
- **Purpose:** Persistent bottom strip with kernel info, system logs, SYNC_ACTIVE indicator in yellow.
- **Variants visible in this theme:**
  - Full-width docked bar: kernel version, log feed, metrics, SYNC_ACTIVE in yellow
- **States shown:** default (always visible in Desktop layout)
- **Tokens consumed:**
  - `kernel`: fg.muted (#808080 — kernel version text)
  - `feed.label`: accent.primary (#FFE600 — SYSTEM_LOGS: label)
  - `feed.entries`: fg.muted (#808080 — timestamped log entries)
  - `metrics`: fg.muted (#808080 — coordinates, CPU, MEM)
  - `sync`: accent.primary (#FFE600 — SYNC_ACTIVE ●)
- **Motion consumed:** motion.auto-scroll (feed ticker)

#### Component: Window
- **Category:** os
- **Purpose:** Draggable, resizable container for Terminal, MediaPlayer, and other modules.
- **Variants visible in this theme:**
  - `default`, `focused`, `maximized`
  - `titleBarIntent`: default (most windows), accent-primary (SystemTerminal, DetailWindow)
- **States shown:** active, floating, maximized
- **Tokens consumed:**
  - `root.bg`: bg.subtle (#0A0A0A)
  - `root.border`: border.default (#333333); border.accent.primary (#FFE600) when focused; neon glow on focused windows
  - `root.shadow`: shadow.window
  - `titlebar.bg`: resolved by titleBarIntent (default → bg.muted #1A1A1A)
- **Motion consumed:** motion.window.open, motion.window.close
- **Behavioral notes:** Sharp 90° edges throughout. No border-radius. Focused windows exhibit a faint yellow outer glow.

#### Component: WindowTitleBar
- **Category:** os
- **Purpose:** Chrome strip at top of a Window.
- **Variants visible in this theme:**
  - Standard: icon + title text in yellow + controls
  - Accent: full-width yellow bar (accent-primary titleBarIntent)
- **States shown:** default
- **Tokens consumed:**
  - `bg`: bg.muted (#1A1A1A — default), accent.primary (#FFE600 — when titleBarIntent is accent-primary)
  - `fg`: fg.default (#FFFFFF — default), fg.on-accent.primary (#000000 — when accent)

#### Component: WindowControls
- **Category:** os
- **Purpose:** Minimize (—), maximize (□), close (×) controls.
- **Variants visible in this theme:**
  - `glyph` variant — text/icon buttons (—, □, ×)
- **States shown:** default, hover
- **Tokens consumed:**
  - `default`: fg.muted (#808080)
  - `hover`: fg.default (#FFFFFF)
  - `close.hover`: danger.solid (#FF4545)
- **Motion consumed:** motion.hover

#### Component: MiniWindow
- **Category:** os
- **Purpose:** Compact docked window for MediaPlayer variant.
- **Variants visible in this theme:**
  - Bottom-left docked position, compact titlebar
- **States shown:** default
- **Tokens consumed:** same as Window defaults
- **Motion consumed:** motion.window.open

#### Component: DetailWindow
- **Category:** os
- **Purpose:** Accent-titled window for timeline detail overlay.
- **Variants visible in this theme:**
  - `titleBarIntent`: accent-primary (yellow titlebar)
- **States shown:** default (open overlay)
- **Tokens consumed:**
  - `titlebar.bg`: accent.primary (#FFE600)
  - `titlebar.fg`: fg.on-accent.primary (#000000)
  - Rest: Window defaults

#### Component: Terminal
- **Category:** os
- **Purpose:** Interactive CLI rendered inside a Window.
- **Variants visible in this theme:**
  - **UserTerminal** — compact (floating), maximized
  - **SystemTerminal** — full-screen variant with accent-primary titlebar (yellow)
- **States shown:** awaiting input, active
- **Tokens consumed:**
  - `root.bg`: bg.canvas (#000000)
  - `fg`: fg.default (#FFFFFF — body text, values), fg.muted (#808080 — labels)
  - `accent`: accent.primary (#FFE600 — section headers, prompt prefix, caret)
- **Motion consumed:** motion.caret.blink

#### Component: AsciiArtBlock
- **Category:** primitive
- **Purpose:** HELION pixel-art glyph rendered in signal-yellow in the terminal header.
- **Variants visible in this theme:**
  - Yellow pixel-art HELION logo
- **States shown:** default
- **Tokens consumed:**
  - `art`: accent.primary (#FFE600 — yellow pixel art)
  - `caption`: fg.muted (#808080 — label below)
- **Motion consumed:** optional motion.glitch on hover

#### Component: KeyValueList
- **Category:** primitive
- **Purpose:** Label + value pairs: USER, HOST, KERNEL, UPTIME and extended data.
- **Variants visible in this theme:**
  - Standard rows with keys in neutral-gray and values in white
- **States shown:** default
- **Tokens consumed:**
  - `key`: fg.muted (#808080)
  - `value`: fg.default (#FFFFFF)

#### Component: ColorChipRow
- **Category:** primitive
- **Purpose:** Row of 3 small colored squares under KeyValueList.
- **Variants visible in this theme:**
  - 3 chips, all yellow/dark (monochrome collapse — no secondary/tertiary colors)
- **States shown:** default
- **Tokens consumed:**
  - Chips use accent.primary (#FFE600), fg.muted (#808080)

#### Component: SectionHeader
- **Category:** primitive
- **Purpose:** Terminal-style header with yellow `#` prefix.
- **Variants visible in this theme:**
  - `#` prefix style with yellow accent marker
- **States shown:** default
- **Tokens consumed:**
  - `prefix`: accent.primary (#FFE600)
  - `label`: fg.default (#FFFFFF)

#### Component: PromptLine
- **Category:** primitive
- **Purpose:** Interactive command prompt with yellow prefix and caret.
- **Variants visible in this theme:**
  - Yellow prompt prefix, white input text, yellow block caret
- **States shown:** awaiting input
- **Tokens consumed:**
  - `prefix`: accent.primary (#FFE600)
  - `input`: fg.default (#FFFFFF)
  - `caret`: accent.primary (#FFE600 — block cursor)
- **Motion consumed:** motion.caret.blink

#### Component: HeroTitle
- **Category:** primitive
- **Purpose:** Massive display text: CHARACTER_STATS in yellow, section headings in white.
- **Variants visible in this theme:**
  - accent.primary variant (yellow — CHARACTER_STATS)
  - fg.default variant (white — section text)
- **States shown:** default
- **Tokens consumed:**
  - `text`: accent.primary (#FFE600) or fg.default (#FFFFFF) depending on variant
- **Motion consumed:** optional motion.phase-in

#### Component: SectionDivider
- **Category:** primitive
- **Purpose:** Horizontal rule with yellow accent line.
- **Variants visible in this theme:**
  - Accent variant (yellow line), subtle variant (muted line)
- **States shown:** default
- **Tokens consumed:**
  - `accent`: border.accent.primary (#FFE600)
  - `subtle`: border.subtle (#1A1A1A)

#### Component: KanjiCaption
N/A — kanji_motif is disabled for this theme.

#### Component: Quotation
- **Category:** primitive
- **Purpose:** Left-bordered quote block with yellow left border.
- **Variants visible in this theme:**
  - Yellow left border, no KanjiCaption (kanji_motif disabled)
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary (#FFE600)
  - `quote`: fg.default (#FFFFFF)

#### Component: Button
- **Category:** primitive
- **Purpose:** Standard action button.
- **Variants visible in this theme:**
  - `primary`: yellow bg + black text
  - `outlined`: yellow border + yellow text
- **States shown:** default, hover
- **Tokens consumed:**
  - `primary.bg`: accent.primary (#FFE600)
  - `primary.fg`: fg.on-accent.primary (#000000)
  - `outlined.border`: border.accent.primary (#FFE600)
  - `outlined.fg`: accent.primary (#FFE600)
- **Motion consumed:** motion.hover

#### Component: IconButton
- **Category:** primitive
- **Purpose:** Icon-only buttons: utility icons, media controls.
- **Variants visible in this theme:**
  - `ghost`: transparent bg, icon in fg.muted → fg.default on hover
  - `filled`: accent.primary bg (play button in MediaPlayer)
- **States shown:** default, hover, active
- **Tokens consumed:**
  - `ghost`: fg.muted (#808080) → fg.default (#FFFFFF)
  - `filled.bg`: accent.primary (#FFE600)
  - `filled.fg`: fg.on-accent.primary (#000000)
- **Motion consumed:** motion.hover

#### Component: Input
N/A — not shown in this theme's designs.

#### Component: SearchInput
N/A — not shown in this theme's designs.

#### Component: Label
- **Category:** primitive
- **Purpose:** Small uppercase label text throughout the UI.
- **Variants visible in this theme:**
  - Standard muted labels in neutral-gray
- **States shown:** default
- **Tokens consumed:**
  - `fg`: fg.muted (#808080)

#### Component: Badge
- **Category:** primitive
- **Purpose:** Pill-shaped status label.
- **Variants visible in this theme:**
  - `accent`: active pill (yellow bg, black text)
  - `online`: status badge in yellow
- **States shown:** default
- **Tokens consumed:**
  - `accent.bg`: accent.primary (#FFE600), `accent.fg`: fg.on-accent.primary (#000000)

#### Component: Clock
- **Category:** primitive
- **Purpose:** Time display in yellow within UtilityCluster.
- **Variants visible in this theme:**
  - Yellow time text
- **States shown:** default
- **Tokens consumed:**
  - `time`: accent.primary (#FFE600)

#### Component: LocaleSelector
- **Category:** primitive
- **Purpose:** Locale dropdown if visible.
- **Variants visible in this theme:**
  - Globe trigger icon, dropdown with locale rows
- **States shown:** closed, open
- **Tokens consumed:**
  - `trigger`: fg.muted (#808080 — globe icon)
  - `menu.bg`: bg.subtle (#0A0A0A)
  - `menu.border`: border.accent.primary (#FFE600)
  - `option.active.bg`: accent.primary (#FFE600)
  - `option.fg`: fg.default (#FFFFFF)

#### Component: VolumeSlider
- **Category:** primitive
- **Purpose:** Horizontal volume control with yellow fill.
- **Variants visible in this theme:**
  - Inline slider with yellow fill, percentage label
- **States shown:** default, interacting
- **Tokens consumed:**
  - `track`: bg.muted (#1A1A1A)
  - `fill`: accent.primary (#FFE600)
  - `label`: fg.muted (#808080)

### EXTENDED CANONICAL COMPONENTS

#### Component: IdentityCard
- **Category:** os (Window variant)
- **Purpose:** Floating ID portrait card with portrait and NAME/TYPE footer.
- **Variants visible in this theme:**
  - `titleBarIntent`: accent-primary (yellow titlebar — secondary is N/A in monochrome theme)
- **States shown:** default
- **Tokens consumed:**
  - `titlebar.bg`: accent.primary (#FFE600 — resolved via titleBarIntent)
  - `titlebar.fg`: fg.on-accent.primary (#000000)
  - `portrait`: fills card body
  - `footer`: fg.default (#FFFFFF — NAME), fg.muted (#808080 — TYPE)

#### Component: ScannerWidget
- **Category:** os (Window variant)
- **Purpose:** Circular radar plot with dark background and yellow markers.
- **Variants visible in this theme:**
  - `titleBarIntent`: default (dark titlebar with muted text)
- **States shown:** scanning (active)
- **Tokens consumed:**
  - `display.border`: border.subtle (#1A1A1A — radar circles)
  - `display.sweep`: accent.primary (#FFE600 — sweep line; monochrome collapse)
  - `markers`: accent.primary (#FFE600 — all markers yellow)
  - `readout`: fg.muted (#808080 — HDG, SPD readouts)
- **Motion consumed:** motion.radar-sweep

#### Component: StandbyPulse
- **Category:** os
- **Purpose:** Centerpiece idle viz: faint golden orb with dark expanding rings. Yellow/amber glow.
- **States shown:** idle (default desktop state)
- **Tokens consumed:**
  - `orb`: accent.primary (#FFE600 — golden/yellow glow)
  - `rings`: border.subtle (#1A1A1A — concentric circles) + border.accent.primary (#FFE600 — faint yellow overlays)
  - `label`: fg.muted (#808080 — SYSTEM_STANDBY)
- **Motion consumed:** motion.pulse (orb), motion.ring-expand (rings)

#### Component: MediaPlayer
- **Category:** os (Window variant)
- **Purpose:** Media playback — floating Window with yellow titlebar, cover art, yellow progress bar, transport controls.
- **Variants visible in this theme:**
  - Floating: cover art, yellow progress bar, full transport controls, metadata
  - Mini: compact MiniWindow variant
- **States shown:** playing
- **Tokens consumed:**
  - `title`: fg.default (#FFFFFF)
  - `meta`: fg.muted (#808080)
  - `progress.fill`: accent.primary (#FFE600)
  - `controls.play`: accent.primary (#FFE600) bg (filled IconButton)
- **Motion consumed:** motion.hover (controls)

#### Component: MetricsCard
- **Category:** primitive
- **Purpose:** Telemetry cards: CPU 24.8%, MEM 12.4GB, etc. White numeric values, yellow progress bars beneath.
- **Variants visible in this theme:**
  - `default`: white numeric value with yellow progress bar below
- **States shown:** default
- **Tokens consumed:**
  - `label`: fg.muted (#808080)
  - `value`: fg.default (#FFFFFF — numeric display)
  - `graph`: accent.primary (#FFE600 — progress bar fill)
  - `bg`: bg.muted (#1A1A1A)

#### Component: ProgressBar
- **Category:** primitive
- **Purpose:** Horizontal progress indicator, yellow fill on dark track.
- **Variants visible in this theme:**
  - Thin bar below MetricsCard values, wider bars in panels
- **States shown:** default
- **Tokens consumed:**
  - `track`: bg.muted (#1A1A1A)
  - `fill`: accent.primary (#FFE600 — monochrome collapse: all intents resolve to yellow)

#### Component: StatBar
- **Category:** primitive
- **Purpose:** Labeled stat bars in CoreAttributesPanel. ALL bars yellow (monochrome collapse).
- **Variants visible in this theme:**
  - All `intent` values (primary, secondary, tertiary) collapse to accent.primary (#FFE600)
  - `intent: neutral` → fg.default (#FFFFFF)
- **States shown:** default
- **Tokens consumed:**
  - `intent: primary` → accent.primary (#FFE600 — yellow)
  - `intent: secondary` → accent.primary (#FFE600 — monochrome collapse)
  - `intent: tertiary` → accent.primary (#FFE600 — monochrome collapse)
  - `intent: neutral` → fg.default (#FFFFFF)
  - `label`: fg.default (#FFFFFF)
  - `value`: fg.default (#FFFFFF)

#### Component: SkillRow
- **Category:** primitive
- **Purpose:** Skill rows: skill name white, active ranks yellow (MASTER, EXPERT).
- **States shown:** default, active highlight
- **Tokens consumed:**
  - `row.bg`: alternating bg.subtle (#0A0A0A) / bg.muted (#1A1A1A)
  - `label`: fg.default (#FFFFFF)
  - `rank.active`: accent.primary (#FFE600 — MASTER, EXPERT)
  - `rank.default`: fg.default (#FFFFFF)

#### Component: ProcessList
- **Category:** primitive
- **Purpose:** PID + status list. PID/name white, ACTIVE badges yellow.
- **States shown:** running, idle
- **Tokens consumed:**
  - `pid`: fg.muted (#808080)
  - `name`: fg.default (#FFFFFF)
  - `status.running`: accent.primary (#FFE600 — ACTIVE in yellow; monochrome collapse)
  - `status.idle`: fg.muted (#808080)

#### Component: MiniChart
- **Category:** primitive
- **Purpose:** Small grouped bar chart. All bars yellow (monochrome).
- **States shown:** default
- **Tokens consumed:**
  - Bars: accent.primary (#FFE600 — monochrome collapse: all bars same color)

#### Component: HexSnapshot
- **Category:** primitive
- **Purpose:** Hex byte grid. Timestamps muted gray, bytes white, errors in red.
- **States shown:** default, error highlight
- **Tokens consumed:**
  - `address`: fg.muted (#808080)
  - `bytes`: fg.default (#FFFFFF)
  - `error`: danger.solid (#FF4545)
- **Motion consumed:** motion.typewriter

#### Component: Timeline
- **Category:** os
- **Purpose:** Horizontal timeline with diamond nodes. Yellow active node (HELIOS_CORE).
- **States shown:** default
- **Tokens consumed:**
  - `track`: border.subtle (#1A1A1A — connecting line)
  - `cursor`: accent.primary (#FFE600 — active position marker)

#### Component: TimelineNode
- **Category:** primitive
- **Purpose:** Diamond nodes on Timeline.
- **Variants visible in this theme:**
  - `idle`: hollow diamond, border.subtle
  - `active`: yellow filled diamond with glow, accent.primary
- **States shown:** idle, active
- **Tokens consumed:**
  - `idle`: border.subtle (#1A1A1A), fg.muted (#808080 — label)
  - `active`: accent.primary (#FFE600 — fill + glow)
  - `active.label`: accent.primary (#FFE600)

#### Component: MetadataTag
- **Category:** primitive
- **Purpose:** Corner tags: PROTOCOL_LOG: 002-HELION in yellow.
- **States shown:** default
- **Tokens consumed:**
  - `label`: accent.primary (#FFE600 — yellow text)
  - `bg`: bg.muted (#1A1A1A — when pill-shaped)

#### Component: AccentBar
- **Category:** primitive
- **Purpose:** Small yellow accent lines used as corner decorations.
- **States shown:** default
- **Tokens consumed:**
  - accent.primary (#FFE600)

#### Component: TagChipRow
- **Category:** primitive
- **Purpose:** Bordered chips with white text.
- **States shown:** default
- **Tokens consumed:**
  - `chip.border`: border.default (#333333)
  - `chip.fg`: fg.default (#FFFFFF)

#### Component: MetadataChipRow
- **Category:** primitive
- **Purpose:** COORD/STAMP/LEVEL metadata chips with key + value pairs.
- **States shown:** default
- **Tokens consumed:**
  - `chip.border`: border.default (#333333)
  - `key`: fg.muted (#808080)
  - `value`: fg.default (#FFFFFF)

#### Component: NavGridCard
- **Category:** os
- **Purpose:** Full-screen menu navigation cards: HOME_MAIN, IDENTITY_CORE, AUDIO_LNK, ASSET_STORAGE, SYS_LOGS, NETWORK_IN.
- **Variants visible in this theme:**
  - Yellow borders, yellow ID tags, white labels
- **States shown:** default, active
- **Tokens consumed:**
  - `border`: border.accent.primary (#FFE600)
  - `id`: accent.primary (#FFE600 — corner tag)
  - `label`: fg.default (#FFFFFF)
  - `icon`: accent.primary (#FFE600)

#### Component: GeometricAnchor
- **Category:** primitive
- **Purpose:** Yellow wireframe shapes inside NavGridCards.
- **Variants visible in this theme:**
  - `wireframe`: yellow wireframe 3D shapes (monochrome collapse)
- **States shown:** default (rotating)
- **Tokens consumed:**
  - `wireframe`: accent.primary (#FFE600)
- **Motion consumed:** motion.geometry-rotate

#### Component: BlogCard
- **Category:** primitive
- **Purpose:** Blog entry cards: cover image, yellow MetadataTag, white title.
- **States shown:** default
- **Tokens consumed:**
  - `cover`: image with MetadataTag overlay (yellow)
  - `meta`: fg.muted (#808080 — date, status)
  - `title`: fg.default (#FFFFFF)
  - `description`: fg.muted (#808080)

#### Component: MissionBriefCard
- **Category:** primitive
- **Purpose:** Bordered card with MISSION_DIRECTIVE header and yellow left border.
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary (#FFE600 — yellow left border)
  - `header`: fg.default (#FFFFFF — MISSION_DIRECTIVE)
  - `body`: fg.muted (#808080 — prose content)

#### Component: CoreAttributesPanel
- **Category:** os
- **Purpose:** CORE_CAPABILITIES panel with yellow border, yellow stat bars.
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary (#FFE600)
  - `header`: fg.default (#FFFFFF — CORE_CAPABILITIES), fg.muted (#808080)
  - `bg`: bg.subtle (#0A0A0A)

#### Component: SkillsLogPanel
- **Category:** os
- **Purpose:** SKILLS_INDEX panel with yellow border and skill rows.
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary (#FFE600)
  - `header`: fg.default (#FFFFFF — SKILLS_INDEX)
  - `bg`: bg.subtle (#0A0A0A)

#### Component: SystemLogColumn
- **Category:** os
- **Purpose:** Left-side log text with yellow [OK] status.
- **Variants visible in this theme:**
  - `bracket-status`: SYS_INIT... [OK] entries
- **States shown:** default (continuously scrolling)
- **Tokens consumed:**
  - `text`: fg.muted (#808080)
  - `status`: accent.primary (#FFE600 — [OK] in yellow)
- **Motion consumed:** motion.auto-scroll

#### Component: TelemetryColumn
- **Category:** os
- **Purpose:** Right-side readout: COORD_X, COORD_Y values.
- **States shown:** default
- **Tokens consumed:**
  - `key`: fg.muted (#808080)
  - `value`: fg.default (#FFFFFF)

#### Component: UserSignatureBar
- **Category:** os
- **Purpose:** Bottom bar with yellow status dot and name.
- **States shown:** default
- **Tokens consumed:**
  - `status`: accent.primary (#FFE600 — yellow dot)
  - `name`: fg.default (#FFFFFF)
  - `role`: fg.muted (#808080)
  - `timestamp`: accent.primary (#FFE600)

#### Component: SubtitleBar
- **Category:** primitive
- **Purpose:** Under-header metadata line if visible in blog feed.
- **States shown:** default
- **Tokens consumed:**
  - `fg`: fg.muted (#808080)

#### Component: BootHeader
- **Category:** os
- **Purpose:** HELION-9 // AETHERSYSTEM BIOS header in yellow.
- **States shown:** default
- **Tokens consumed:**
  - `title`: accent.primary (#FFE600)
  - `meta`: fg.muted (#808080 — KERNEL, UPTIME subtitle)

#### Component: BootLogList
- **Category:** os
- **Purpose:** Timestamped boot log entries with yellow timestamps.
- **States shown:** initializing (line-by-line reveal)
- **Tokens consumed:**
  - `timestamp`: accent.primary (#FFE600 — yellow timestamps)
  - `message`: fg.default (#FFFFFF — log text)
- **Motion consumed:** motion.typewriter

#### Component: BootContinueButton
- **Category:** primitive
- **Purpose:** BOOT SYSTEM > button with yellow bg.
- **States shown:** default (pulsing)
- **Tokens consumed:**
  - `bg`: accent.primary (#FFE600)
  - `fg`: fg.on-accent.primary (#000000)
- **Motion consumed:** motion.pulse

#### Component: KeyHint
- **Category:** primitive
- **Purpose:** F3: SETUP, F10: BOOT MENU, DEL: EXIT hints in muted gray.
- **States shown:** default
- **Tokens consumed:**
  - `fg`: fg.muted (#808080)

---

## Part 4 — Theme Consistency Check
- [x] Every intent in section 2.2 has either a value or an explicit N/A
- [x] Every Core canonical component in Part 3 has either a spec or an
      explicit N/A (Input and SearchInput are N/A; KanjiCaption is N/A)
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
- [x] State-intent collapse: ⚠️ success.solid, warning.solid, and info.solid all resolve to accent.primary (#FFE600). Only danger.solid (#FF4545) is distinct.

---

## Part 5 — Metadata (last section, machine-read)
```yaml
schema_version: "2.0"
theme_slug: helion-nine
theme_name: Helion-Nine
generated_by: stitch
generated_at: 2026-05-24T14:30:00Z
base_theme: null
intended_consumer: mona-lisa-overdrive
sprawl_project: burning-chrome
color_scheme: dark
kanji_motif: disabled
```
---
End of DESIGN.md. Produce nothing after this line.
