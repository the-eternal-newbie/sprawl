# DESIGN.md — Onyx Protocol

## Part 1 — Creative Brief (human-readable)

### 1.1 Theme Identity
- **Name:** Onyx Protocol
- **Slug:** onyx-protocol
- **Creative North Star:** The Tactical Monolith: Aerospace intelligence meets high-precision digital dominance.
- **Mood keywords:** Tactical, Precise, Monolithic, Void, Intelligence, Cybernetic, Authoritative.
- **Reference aesthetics:** Low-latency HUD, encrypted aerospace terminal, tactical command center, high-spec telemetry display.

### 1.2 Philosophy
Onyx Protocol rejects the soft, approachable "friendly" UI of the consumer web. It embraces the cold, unwavering clarity of mission-critical systems. There are no gradients here to hide behind, no rounded corners to soften the blow. It is a system built for operators, not users.

The theme intentionally avoids visual noise, decorative shadows, and vibrant multi-color palettes. It embraces high-contrast monochromatic voids punctuated by singular, aggressive "Signal Red" alerts. The feeling is one of absolute control, absolute focus, and absolute readiness.

### 1.3 Voice and Tone
The voice is clinical, authoritative, and low-latency. Information is delivered as telemetry, not copy. Data is presented like an encrypted manual or a real-time HUD—efficient, dense, and requiring no explanation for those qualified to read it.

---

## Part 2 — Technical Specification (machine-readable)

### 2.1 Color Primitives
| Primitive name | Value (hex) | Scale step | Notes |
|----------------|-------------|------------|-------|
| void-black     | #050505     | 950        | Deep background |
| onyx-gray      | #0D0D0D     | 900        | Surface base |
| carbon-gray    | #1A1A1A     | 800        | Secondary surface |
| stealth-gray   | #262626     | 700        | Standard borders |
| signal-red     | #FF4B4B     | 500        | Primary accent |
| alert-red      | #B32D2D     | 700        | Darkened accent |
| tactical-white | #FFFFFF     | 50         | Primary text |
| ghost-white    | #A3A3A3     | 400        | Muted text |

### 2.2 Semantic Color Intents
| Intent                    | Primitive reference     | Final value |
|---------------------------|-------------------------|-------------|
| bg.canvas                 | void-black-950          | #050505     |
| bg.subtle                 | onyx-gray-900           | #0D0D0D     |
| bg.muted                  | carbon-gray-800         | #1A1A1A     |
| bg.emphasis               | signal-red-500          | #FF4B4B     |
| fg.default                | tactical-white-50       | #FFFFFF     |
| fg.muted                  | ghost-white-400         | #A3A3A3     |
| fg.subtle                 | stealth-gray-700        | #262626     |
| fg.on-accent.primary      | void-black-950          | #050505     |
| fg.on-accent.secondary    | N/A — monochrome theme  | N/A         |
| fg.on-accent.tertiary     | N/A — monochrome theme  | N/A         |
| accent.primary            | signal-red-500          | #FF4B4B     |
| accent.secondary          | N/A — monochrome theme  | N/A         |
| accent.tertiary           | N/A — monochrome theme  | N/A         |
| border.subtle             | carbon-gray-800         | #1A1A1A     |
| border.default            | stealth-gray-700        | #262626     |
| border.strong             | ghost-white-400         | #A3A3A3     |
| border.accent.primary     | signal-red-500          | #FF4B4B     |
| border.accent.secondary   | N/A — monochrome theme  | N/A         |
| border.accent.tertiary    | N/A — monochrome theme  | N/A         |
| danger.solid              | signal-red-500          | #FF4B4B     |
| success.solid             | tactical-white-50       | #FFFFFF     |
| warning.solid             | signal-red-500          | #FF4B4B     |
| info.solid                | ghost-white-400         | #A3A3A3     |

### 2.3 Typography
| Role     | Font family    | Weight | Size     | Line-height | Letter-spacing |
|----------|----------------|--------|----------|-------------|----------------|
| display  | Space Grotesk  | 700    | 4rem     | 1.1         | -0.04em        |
| headline | Space Grotesk  | 600    | 2.5rem   | 1.15        | -0.02em        |
| title    | Space Grotesk  | 600    | 1.5rem   | 1.2         | 0              |
| body     | Space Grotesk  | 400    | 1rem     | 1.5         | 0              |
| body-sm  | Space Grotesk  | 400    | 0.875rem | 1.45        | 0.01em         |
| label    | Space Grotesk  | 600    | 0.75rem  | 1.3         | 0.1em          |
| mono     | JetBrains Mono | 400    | 0.875rem | 1.5         | 0.02em         |

- **Fallback stacks:** 'Space Grotesk', sans-serif; 'JetBrains Mono', monospace;
- **Font sources:** Google Fonts

### 2.4 Spacing Scale
| Step | Value   | Typical usage in this theme |
|------|---------|-----------------------------|
| 0    | 0       | —                           |
| 1    | 0.25rem | Internal button padding     |
| 2    | 0.5rem  | Component-to-component      |
| 3    | 0.75rem | Small section margins       |
| 4    | 1rem    | Standard window padding     |
| 5    | 1.25rem | Panel section gaps          |
| 6    | 1.5rem  | Header spacing              |
| 7    | 1.75rem | Large component gaps        |
| 8    | 2rem    | Page section margins        |

### 2.5 Radii
| Token       | Value   | Usage                         |
|-------------|---------|-------------------------------|
| radius.none | 0       | All windows, buttons, panels  |
| radius.sm   | 0       | N/A — forced sharpness        |
| radius.md   | 0       | N/A — forced sharpness        |
| radius.lg   | 0       | N/A — forced sharpness        |
| radius.full | 0       | N/A — forced sharpness        |

### 2.6 Elevation / Shadows
| Token         | Value                                   | Usage                |
|---------------|-----------------------------------------|----------------------|
| shadow.sm     | None                                    | N/A — flat aesthetic |
| shadow.window | 0 0 40px rgba(255, 75, 75, 0.1)         | Active window glow   |
| shadow.inset  | None                                    | N/A — flat aesthetic |

### 2.7 Motion
| Token                  | Duration    | Easing                  | Usage                     |
|------------------------|-------------|-------------------------|---------------------------|
| motion.window.open     | 150ms       | cubic-bezier(0,1,0,1)   | Sharp pop-in              |
| motion.window.close    | 100ms       | cubic-bezier(0,1,0,1)   | Sharp dismiss             |
| motion.hover           | 50ms        | linear                  | Instant state             |
| motion.caret.blink     | 800ms       | steps(1, end)           | Terminal cursor blink     |
| motion.glitch          | 200ms       | steps(2)                | Alert pulsing             |
| motion.pulse           | 2s          | ease-in-out             | StandbyPulse orb pulse    |
| motion.ring-expand     | 4s          | ease-out                | StandbyPulse ring expansion |
| motion.radar-sweep     | 3s          | linear                  | Scanner rotation          |
| motion.typewriter      | 50ms/char   | linear                  | Boot log reveal           |
| motion.auto-scroll     | continuous  | linear                  | Log feed ticker           |
| motion.geometry-rotate | 8s          | linear                  | NavGridCard shape spin    |
| motion.scanline        | 8s          | linear                  | CRT sweep (low opacity 0.03) |
| motion.phase-in        | 300ms       | ease-out                | HeroTitle mount           |

### 2.8 OS-Specific Tokens
| Token                    | Value   | Notes                  |
|--------------------------|---------|------------------------|
| window.chrome.height     | 32px    | titlebar height        |
| window.body.padding      | 16px    | default inner padding  |
| window.border.width      | 1px     | window outline         |
| taskbar.height           | 40px    | bottom system bar      |
| dock.icon.size           | 48px    | dock item size         |
| desktop.icon.grid        | 80px    | desktop icon spacing   |
| boot.scanline.opacity    | 0.03    | CRT effect intensity   |
| terminal.caret.blink     | 0.8s    | terminal cursor rate   |

### 2.9 Deviations and Notes
- All radii are intentionally `0` to reinforce the industrial, tactical aesthetic.
- The theme uses a single primary accent color (`#FF4B4B`) for all "Signal" intents — monochrome theme with no secondary or tertiary accent.
- Success and Information intents default to white and gray respectively to maintain a strict tactical palette.
- Typography uses Space Grotesk for all UI elements to ensure a high-precision, geometric feel.
- No glassmorphism, no backdrop-filter, no translucency. Depth communicated through borders only.
- No kanji motif (`kanji_motif: disabled`).

Motion primitives used by this theme:
- `motion.window.open` / `motion.window.close` — CSS transition, sharp cubic-bezier pop-in/dismiss
- `motion.hover` — CSS transition, 50ms instant state change
- `motion.caret.blink` — CSS animation, 0.8s step blink for terminal cursor
- `motion.glitch` — CSS animation, 200ms stepped alert pulse on accent elements
- `motion.pulse` — CSS animation, 2s ease-in-out scale + opacity for StandbyPulse orb
- `motion.ring-expand` — CSS animation, 4s expanding concentric rings on StandbyPulse
- `motion.radar-sweep` — CSS animation, 3s rotating sweep line (if ScannerWidget present)
- `motion.typewriter` — JS-driven, line-by-line reveal at 50ms/char for BootLogList and HexSnapshot
- `motion.auto-scroll` — JS-driven, continuous scroll for SystemLogFeed and SystemLogColumn
- `motion.geometry-rotate` — CSS animation, 8s continuous rotation for GeometricAnchor
- `motion.scanline` — CSS animation, 8s linear vertical sweep for CRT overlay (opacity 0.03)
- `motion.phase-in` — CSS transition, 300ms fade+translate for HeroTitle on mount

### 2.10 Surface Effects

N/A — theme uses opaque flat surfaces. Onyx Protocol does not employ backdrop-filter or translucency effects. Depth is communicated through borders only; shadows are mostly None for the flat tactical aesthetic.

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
  - `bg`: bg.subtle (#0D0D0D)
  - `fg`: fg.default (#FFFFFF)
  - `border`: border.subtle (bottom edge, #1A1A1A)
  - `brand`: accent.primary (#FF4B4B — ONYX_PROTOCOL text)
- **Motion consumed:** none
- **Behavioral notes:** Uses label typography for tab text. ONYX_PROTOCOL brand in red. Absent in Boot layout.

#### Component: BrandMark
- **Category:** os
- **Purpose:** Red "ONYX" pixel art logo in the TopAppBar.
- **Variants visible in this theme:**
  - Glyph-only (red pixel art icon, no wordmark text in TopAppBar)
- **States shown:** default
- **Tokens consumed:**
  - `glyph`: accent.primary (#FF4B4B)
- **Motion consumed:** none

#### Component: NavTabs
- **Category:** os
- **Purpose:** COMMAND, ASSETS, CRYPTO navigation tabs.
- **Variants visible in this theme:**
  - Three tabs: COMMAND, ASSETS, CRYPTO
- **States shown:** active (COMMAND shown active with red pill background), inactive
- **Tokens consumed:**
  - `tab.inactive`: fg.muted (#A3A3A3)
  - `tab.active`: fg.default (#FFFFFF) with bg.emphasis pill (#FF4B4B)
  - `indicator`: accent.primary (#FF4B4B — red active pill)
- **Motion consumed:** motion.hover

#### Component: UtilityCluster
- **Category:** os
- **Purpose:** Right-side cluster: SEC_EXON_01 badge, coordinates, clock, icons, SYS_OP button.
- **Variants visible in this theme:**
  - Full cluster visible: SEC_EXON_01 in red, coordinate text, clock in red, icons, SYS_OP button
- **States shown:** default
- **Tokens consumed:**
  - `sector`: accent.primary (#FF4B4B — SEC_EXON_01 badge)
  - `coordinates`: fg.muted (#A3A3A3)
  - `clock`: accent.primary (#FF4B4B)
  - `menu`: fg.default (#FFFFFF)
- **Motion consumed:** none

#### Component: StatusFooter
- **Category:** os
- **Purpose:** Bottom strip with ONYX_STREAM label, live log feed, CNFG_ACTIVE indicator.
- **Variants visible in this theme:**
  - Single-row footer: ONYX_STREAM label + scrolling log entries + CNFG_ACTIVE indicator
- **States shown:** default (always visible in Desktop layout)
- **Tokens consumed:**
  - `feed.label`: accent.primary (#FF4B4B — ONYX_STREAM label)
  - `feed.entries`: fg.muted (#A3A3A3 — timestamped log entries)
  - `indicator`: accent.primary (#FF4B4B — CNFG_ACTIVE)
- **Motion consumed:** motion.auto-scroll (feed ticker)

#### Component: Window
- **Category:** os
- **Purpose:** Draggable, resizable container for Terminal, MetricsCard, and other modules.
- **Variants visible in this theme:**
  - `default`, `focused`, `maximized`
  - `titleBarIntent`: default (most windows), accent-primary (SystemTerminal, DetailWindow)
- **States shown:** active, focused (red border + red glow), floating
- **Tokens consumed:**
  - `root.bg`: bg.subtle (#0D0D0D)
  - `root.border`: border.default (#262626); border.accent.primary (#FF4B4B) when focused
  - `root.shadow`: shadow.window (red glow, 0 0 40px rgba(255, 75, 75, 0.1))
  - `titlebar.bg`: resolved by titleBarIntent (default → bg.muted #1A1A1A)
  - `radius`: radius.none (0 — sharp edges throughout)
- **Motion consumed:** motion.window.open, motion.window.close

#### Component: WindowTitleBar
- **Category:** os
- **Purpose:** Chrome strip at top of a Window.
- **Variants visible in this theme:**
  - Standard: red leading dot + white title text + controls
  - Accent: full-width accent-primary bar (DetailWindow, SystemTerminal)
- **States shown:** default
- **Tokens consumed:**
  - `bg`: bg.muted (#1A1A1A default), accent.primary (#FF4B4B when titleBarIntent is accent-primary)
  - `fg`: fg.default (#FFFFFF default), fg.on-accent.primary (#050505 when accent)
  - `leading-dot`: accent.primary (#FF4B4B — red dot on standard titlebars)

#### Component: WindowControls
- **Category:** os
- **Purpose:** Minimize (—), maximize (□), close (×) controls.
- **Variants visible in this theme:**
  - `glyph` variant — text/icon buttons (—, □, ×)
- **States shown:** default, hover
- **Tokens consumed:**
  - `default`: fg.muted (#A3A3A3)
  - `hover`: fg.default (#FFFFFF)
  - `close.hover`: danger.solid (#FF4B4B)
- **Motion consumed:** motion.hover

#### Component: MiniWindow
- **Category:** os
- **Purpose:** Compact docked window for utility widgets.
- **Variants visible in this theme:**
  - Compact titlebar, limited controls
- **States shown:** default
- **Tokens consumed:** same as Window defaults
- **Motion consumed:** motion.window.open

#### Component: DetailWindow
- **Category:** os
- **Purpose:** Accent-titled window for detail overlay (TACTICAL_UNIT_03 // LEAD_ARCHITECT).
- **Variants visible in this theme:**
  - `titleBarIntent`: accent-primary (red titlebar with #FF4B4B background)
- **States shown:** default (open overlay)
- **Tokens consumed:**
  - `titlebar.bg`: accent.primary (#FF4B4B)
  - `titlebar.fg`: fg.on-accent.primary (#050505)
  - Rest: Window defaults

#### Component: Terminal
- **Category:** os
- **Purpose:** Interactive CLI rendered inside a Window.
- **Variants visible in this theme:**
  - **UserTerminal** — standard terminal with red accent prompt
  - **SystemTerminal** — full-width variant with accent-primary titlebar
- **States shown:** awaiting input, active
- **Tokens consumed:**
  - `root.bg`: bg.canvas (#050505)
  - `fg`: fg.default (#FFFFFF — body text, values), fg.muted (#A3A3A3 — labels)
  - `accent`: accent.primary (#FF4B4B — section headers, prompt prefix, caret)
- **Motion consumed:** motion.caret.blink

#### Component: AsciiArtBlock
- **Category:** primitive
- **Purpose:** Red ONYX pixel art glyph in the terminal header with [CORE_SYSTEM_ACTIVE] caption.
- **Variants visible in this theme:**
  - Red pixel art with caption below
- **States shown:** default
- **Tokens consumed:**
  - `art`: accent.primary (#FF4B4B — red pixel art)
  - `caption`: fg.muted (#A3A3A3 — [CORE_SYSTEM_ACTIVE] label)
- **Motion consumed:** optional motion.glitch on hover

#### Component: KeyValueList
- **Category:** primitive
- **Purpose:** Label + value pairs for system metadata.
- **Variants visible in this theme:**
  - Standard rows with gray keys and white values
- **States shown:** default
- **Tokens consumed:**
  - `key`: fg.muted (#A3A3A3)
  - `value`: fg.default (#FFFFFF)

#### Component: ColorChipRow
- **Category:** primitive
- **Purpose:** Row of 3 small colored squares under KeyValueList (monochrome palette display).
- **Variants visible in this theme:**
  - 3 chips: red (#FF4B4B), dark-red (#B32D2D), gray (#A3A3A3)
- **States shown:** default
- **Tokens consumed:**
  - Chips use accent.primary (#FF4B4B), alert-red (#B32D2D), fg.muted (#A3A3A3)

#### Component: SectionHeader
- **Category:** primitive
- **Purpose:** Terminal-style header with red `#` prefix and white label.
- **Variants visible in this theme:**
  - `#` prefix style (red prefix, white label text)
- **States shown:** default
- **Tokens consumed:**
  - `prefix`: accent.primary (#FF4B4B)
  - `label`: fg.default (#FFFFFF)

#### Component: PromptLine
- **Category:** primitive
- **Purpose:** Interactive command prompt: ONYX@TERMINAL:~$ prefix with blinking caret.
- **Variants visible in this theme:**
  - Full prompt: `ONYX@TERMINAL:~$` in red, white input text, red caret
- **States shown:** awaiting input
- **Tokens consumed:**
  - `prefix`: accent.primary (#FF4B4B)
  - `input`: fg.default (#FFFFFF)
  - `caret`: accent.primary (#FF4B4B — block cursor)
- **Motion consumed:** motion.caret.blink

#### Component: HeroTitle
- **Category:** primitive
- **Purpose:** Massive display text: NEO_ARCHITECT heading, LEAD_ARCHITECT variant.
- **Variants visible in this theme:**
  - fg.default variant (white — NEO_ARCHITECT)
  - accent.primary variant (red — LEAD_ARCHITECT)
- **States shown:** default
- **Tokens consumed:**
  - `text`: fg.default (#FFFFFF) or accent.primary (#FF4B4B) variant-dependent
- **Motion consumed:** optional motion.phase-in

#### Component: SectionDivider
- **Category:** primitive
- **Purpose:** Horizontal rule used as accent separator.
- **Variants visible in this theme:**
  - Accent variant (red line)
- **States shown:** default
- **Tokens consumed:**
  - `accent`: border.accent.primary (#FF4B4B)
  - `subtle`: border.subtle (#1A1A1A)

#### Component: KanjiCaption
N/A — `kanji_motif: disabled` for this theme. Component renders as `null`.

#### Component: Quotation
- **Category:** primitive
- **Purpose:** Left-bordered quote block.
- **Variants visible in this theme:**
  - Red left border, no KanjiCaption (kanji_motif disabled)
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary (#FF4B4B)
  - `quote`: fg.default (#FFFFFF)

#### Component: Button
- **Category:** primitive
- **Purpose:** Standard action button.
- **Variants visible in this theme:**
  - `primary`: red bg (#FF4B4B) + dark text (#050505) — ACCESS_FULL_INTELLIGENCE_LOGS
  - `outlined`: red border + red text (#FF4B4B)
- **States shown:** default, hover
- **Tokens consumed:**
  - `primary.bg`: accent.primary (#FF4B4B)
  - `primary.fg`: fg.on-accent.primary (#050505)
  - `outlined.border`: border.accent.primary (#FF4B4B)
  - `outlined.fg`: accent.primary (#FF4B4B)
- **Motion consumed:** motion.hover

#### Component: IconButton
- **Category:** primitive
- **Purpose:** Icon-only buttons in UtilityCluster and controls.
- **Variants visible in this theme:**
  - `ghost`: transparent bg, icon in fg.muted → fg.default on hover
  - `filled`: accent.primary bg (#FF4B4B)
- **States shown:** default, hover, active
- **Tokens consumed:**
  - `ghost`: fg.muted (#A3A3A3) → fg.default (#FFFFFF)
  - `filled.bg`: accent.primary (#FF4B4B)
  - `filled.fg`: fg.on-accent.primary (#050505)
- **Motion consumed:** motion.hover

#### Component: Input
N/A — not shown in this theme's designs.

#### Component: SearchInput
N/A — not shown in this theme's designs.

#### Component: Label
- **Category:** primitive
- **Purpose:** Small uppercase label text throughout the UI.
- **Variants visible in this theme:**
  - Standard muted labels (ghost-white)
- **States shown:** default
- **Tokens consumed:**
  - `fg`: fg.muted (#A3A3A3)

#### Component: Badge
- **Category:** primitive
- **Purpose:** Pill-shaped status label.
- **Variants visible in this theme:**
  - `accent`: active tab pill (red bg), READOUT active tab
- **States shown:** default
- **Tokens consumed:**
  - `accent.bg`: accent.primary (#FF4B4B), `accent.fg`: fg.on-accent.primary (#050505)

#### Component: Clock
- **Category:** primitive
- **Purpose:** Red time display in UtilityCluster.
- **Variants visible in this theme:**
  - Red time text
- **States shown:** default
- **Tokens consumed:**
  - `time`: accent.primary (#FF4B4B)

#### Component: LocaleSelector
N/A — not clearly visible in this theme's designs.

#### Component: VolumeSlider
- **Category:** primitive
- **Purpose:** Horizontal volume control with red fill.
- **Variants visible in this theme:**
  - Inline slider with red fill, percentage label
- **States shown:** default, interacting
- **Tokens consumed:**
  - `track`: bg.muted (#1A1A1A)
  - `fill`: accent.primary (#FF4B4B)
  - `label`: fg.muted (#A3A3A3)

### EXTENDED CANONICAL COMPONENTS

#### Component: IdentityCard
N/A — not clearly visible in examined screenshots.

#### Component: ScannerWidget
N/A — not clearly visible in examined screenshots.

#### Component: StandbyPulse
- **Category:** os
- **Purpose:** Centerpiece idle visualization: dark geometric shapes with faint red orb center, pentagonal/sacred geometry pattern, STANDBY_SEQUENCE label.
- **States shown:** idle (default desktop state)
- **Tokens consumed:**
  - `orb`: accent.primary (#FF4B4B — faint red glow center)
  - `rings`: border.subtle (#1A1A1A — dark geometric shapes) + border.accent.primary (#FF4B4B — faint red outline overlays)
  - `label`: fg.muted (#A3A3A3 — STANDBY_SEQUENCE)
- **Motion consumed:** motion.pulse (orb), motion.ring-expand (rings)

#### Component: MediaPlayer
N/A — not clearly visible in examined screenshots.

#### Component: MetricsCard
- **Category:** primitive
- **Purpose:** Telemetry cards: PROC_LOAD 24.8%, MEM_CACHE 12.4GB, etc.
- **Variants visible in this theme:**
  - `default`: red numeric value with red progress bar below
- **States shown:** default
- **Tokens consumed:**
  - `label`: fg.muted (#A3A3A3)
  - `value`: accent.primary (#FF4B4B — red numeric display)
  - `graph`: accent.primary (#FF4B4B — progress bar fill)
  - `bg`: bg.muted (#1A1A1A)

#### Component: ProgressBar
- **Category:** primitive
- **Purpose:** Horizontal progress in MetricsCards and stat displays.
- **Variants visible in this theme:**
  - Thin red bar on dark track
- **States shown:** default
- **Tokens consumed:**
  - `track`: bg.muted (#1A1A1A)
  - `fill`: accent.primary (#FF4B4B — monochrome, all bars red)

#### Component: StatBar
- **Category:** primitive
- **Purpose:** Labeled stat bars: ENERGY_CAPACITY, STRUCTURAL_INTEGRITY, REFLEX_COORDINATION.
- **Variants visible in this theme:**
  - ALL bars red (monochrome collapse — primary, secondary, tertiary all resolve to accent.primary)
- **States shown:** default
- **Tokens consumed:**
  - `intent: primary` → accent.primary (#FF4B4B — red)
  - `intent: secondary` → accent.primary (#FF4B4B — monochrome collapse)
  - `intent: tertiary` → accent.primary (#FF4B4B — monochrome collapse)
  - `intent: neutral` → fg.default (#FFFFFF — white)
  - `label`: fg.default (#FFFFFF)
  - `value`: fg.default (#FFFFFF)

#### Component: SkillRow
- **Category:** primitive
- **Purpose:** Skill rows: FULLSTACK_DEX MASTER, CLOUD_ARCH EXPERT, etc.
- **States shown:** default, active highlight
- **Tokens consumed:**
  - `row.bg`: alternating bg.subtle (#0D0D0D) / bg.muted (#1A1A1A)
  - `label`: fg.default (#FFFFFF)
  - `rank.active`: accent.primary (#FF4B4B — MASTER, EXPERT in red)
  - `rank.default`: fg.default (#FFFFFF)

#### Component: ProcessList
- **Category:** primitive
- **Purpose:** ACTIVE_THREADS with status badges.
- **States shown:** running, idle
- **Tokens consumed:**
  - `pid`: fg.muted (#A3A3A3)
  - `name`: fg.default (#FFFFFF)
  - `status.threat`: accent.primary (#FF4B4B — THREAT badge in red)
  - `status.secure`: fg.default (#FFFFFF — SECURE badge in white)
- **Behavioral notes:** Monochrome collapse — status colors limited to red and white.

#### Component: MiniChart
- **Category:** primitive
- **Purpose:** Small grouped bar chart.
- **States shown:** default
- **Tokens consumed:**
  - Bars: accent.primary (#FF4B4B — monochrome, all bars red)

#### Component: HexSnapshot
- **Category:** primitive
- **Purpose:** Boot screen hex byte grid.
- **States shown:** default, error highlight
- **Tokens consumed:**
  - `address`: fg.muted (#A3A3A3)
  - `bytes`: fg.default (#FFFFFF)
  - `error`: danger.solid (#FF4B4B)
- **Motion consumed:** motion.typewriter

#### Component: Timeline
- **Category:** os
- **Purpose:** Horizontal timeline with diamond nodes.
- **States shown:** default
- **Tokens consumed:**
  - `track`: border.subtle (#1A1A1A — connecting line)
  - `cursor`: accent.primary (#FF4B4B — active position marker)

#### Component: TimelineNode
- **Category:** primitive
- **Purpose:** Diamond nodes on the Timeline.
- **Variants visible in this theme:**
  - `idle`: hollow diamond, border.subtle
  - `active`: red filled diamond, accent.primary
- **States shown:** idle, active
- **Tokens consumed:**
  - `idle`: border.subtle (#1A1A1A), fg.muted (#A3A3A3 — label)
  - `active`: accent.primary (#FF4B4B — fill + glow)
  - `active.label`: accent.primary (#FF4B4B)

#### Component: MetadataTag
- **Category:** primitive
- **Purpose:** Red text tags throughout UI.
- **States shown:** default
- **Tokens consumed:**
  - `label`: accent.primary (#FF4B4B — red text)
  - `bg`: bg.muted (#1A1A1A — when pill-shaped)

#### Component: AccentBar
- **Category:** primitive
- **Purpose:** Small red accent lines used as decorations.
- **States shown:** default
- **Tokens consumed:**
  - accent.primary (#FF4B4B — red bar only, monochrome)

#### Component: TagChipRow
- **Category:** primitive
- **Purpose:** Red-bordered tag chips: DEEP_FUSION_07, DATA_STORM, CORAL_M02.
- **States shown:** default
- **Tokens consumed:**
  - `chip.border`: border.accent.primary (#FF4B4B — red borders)
  - `chip.fg`: fg.default (#FFFFFF)

#### Component: MetadataChipRow
- **Category:** primitive
- **Purpose:** PROJECTED / EXE_DATE / STATUS metadata chips.
- **States shown:** default
- **Tokens consumed:**
  - `chip.border`: border.default (#262626)
  - `key`: fg.muted (#A3A3A3)
  - `value`: fg.default (#FFFFFF)

#### Component: NavGridCard
- **Category:** os
- **Purpose:** Full-screen menu navigation cards: HOME, IDENTITY, MEDIA, ARCHIVES, LOGS, COMMS.
- **Variants visible in this theme:**
  - Red borders, red ID tags (NAV.01, EXE.02, etc.)
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary (#FF4B4B — red card borders)
  - `id`: accent.primary (#FF4B4B — NAV.01 corner tag)
  - `label`: fg.default (#FFFFFF — HOME, IDENTITY in white)
  - `icon`: accent.primary (#FF4B4B — red dot beside label)

#### Component: GeometricAnchor
- **Category:** primitive
- **Purpose:** Red/dark hexagonal wireframe shapes inside NavGridCards.
- **Variants visible in this theme:**
  - `wireframe`: red + dark wireframe shapes
- **States shown:** default (rotating)
- **Tokens consumed:**
  - `wireframe`: accent.primary (#FF4B4B — red lines)
  - `textured`: accent.primary (#FF4B4B — monochrome)
- **Motion consumed:** motion.geometry-rotate (textured variant)

#### Component: BlogCard
- **Category:** primitive
- **Purpose:** Blog entry cards with cover image, metadata, title.
- **States shown:** default
- **Tokens consumed:**
  - `cover`: image with MetadataTag overlay (red tag)
  - `meta`: fg.muted (#A3A3A3)
  - `title`: fg.default (#FFFFFF)
  - `description`: fg.muted (#A3A3A3)

#### Component: MissionBriefCard
- **Category:** primitive
- **Purpose:** Bordered card with OPERATIONAL_DIRECTIVES header.
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary (#FF4B4B — red left border)
  - `header`: fg.default (#FFFFFF — OPERATIONAL_DIRECTIVES)
  - `body`: fg.muted (#A3A3A3)

#### Component: CoreAttributesPanel
- **Category:** os
- **Purpose:** CORE_ATTRIBUTES panel with red header accent.
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary (#FF4B4B — red border)
  - `header`: fg.default (#FFFFFF — CORE_ATTRIBUTES), accent.primary (#FF4B4B — header accent)
  - `bg`: bg.subtle (#0D0D0D)

#### Component: SkillsLogPanel
- **Category:** os
- **Purpose:** SKILL_VECTOR_LOG panel with red active ranks.
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.default (#262626)
  - `header`: fg.default (#FFFFFF — SKILL_VECTOR_LOG)
  - `bg`: bg.subtle (#0D0D0D)

#### Component: SystemLogColumn
- **Category:** os
- **Purpose:** Left-side log column with red dot-prefix entries.
- **Variants visible in this theme:**
  - Red dot prefix log entries
- **States shown:** default (continuously scrolling)
- **Tokens consumed:**
  - `text`: fg.muted (#A3A3A3)
  - `prefix`: accent.primary (#FF4B4B — red dot prefix)
- **Motion consumed:** motion.auto-scroll

#### Component: TelemetryColumn
- **Category:** os
- **Purpose:** Right-side readout values.
- **States shown:** default
- **Tokens consumed:**
  - `key`: fg.muted (#A3A3A3)
  - `value`: fg.default (#FFFFFF)

#### Component: UserSignatureBar
- **Category:** os
- **Purpose:** Bottom bar: red dot, red name, muted role.
- **States shown:** default
- **Tokens consumed:**
  - `status`: accent.primary (#FF4B4B — red dot)
  - `name`: accent.primary (#FF4B4B — red name)
  - `role`: fg.muted (#A3A3A3)
  - `timestamp`: accent.primary (#FF4B4B)

#### Component: SubtitleBar
N/A — not clearly visible in this theme's designs.

#### Component: BootHeader
- **Category:** os
- **Purpose:** ONYX DIAGNOSTIC BOOT title in red/white.
- **States shown:** default
- **Tokens consumed:**
  - `title`: accent.primary (#FF4B4B — red title)
  - `meta`: fg.muted (#A3A3A3 — kernel/uptime/status subtitle)

#### Component: BootLogList
- **Category:** os
- **Purpose:** Timestamped boot log entries.
- **States shown:** initializing (line-by-line reveal)
- **Tokens consumed:**
  - `timestamp`: fg.muted (#A3A3A3 — [0.000] prefix)
  - `message`: fg.default (#FFFFFF — log text)
  - `success`: fg.default (#FFFFFF — monochrome collapse, success = white)
- **Motion consumed:** motion.typewriter

#### Component: BootContinueButton
- **Category:** primitive
- **Purpose:** Boot prompt button.
- **States shown:** default (pulsing)
- **Tokens consumed:**
  - `bg`: accent.primary (#FF4B4B)
  - `fg`: fg.on-accent.primary (#050505)
- **Motion consumed:** motion.pulse

#### Component: KeyHint
- **Category:** primitive
- **Purpose:** F-key hints in muted gray.
- **States shown:** default
- **Tokens consumed:**
  - `fg`: fg.muted (#A3A3A3)

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
- [x] State-intent collapse: ⚠️ danger.solid = warning.solid = accent.primary (#FF4B4B); success.solid = fg.default (#FFFFFF); info.solid = fg.muted (#A3A3A3). All four state intents collapse with other semantic tokens.

---

## Part 5 — Metadata (last section, machine-read)
```yaml
schema_version: "2.0"
theme_slug: onyx-protocol
theme_name: Onyx Protocol
generated_by: stitch
generated_at: 2026-05-14T10:00:00Z
base_theme: null
intended_consumer: mona-lisa-overdrive
sprawl_project: burning-chrome
color_scheme: dark
kanji_motif: disabled
```
---
End of DESIGN.md. Produce nothing after this line.
