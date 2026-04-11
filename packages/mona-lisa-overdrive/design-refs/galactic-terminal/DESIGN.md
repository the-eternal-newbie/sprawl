# DESIGN.md — Galactic Terminal

## Part 1 — Creative Brief (human-readable)

### 1.1 Theme Identity
- **Name:** Galactic Terminal
- **Slug:** galactic-terminal
- **Creative North Star:** The "Ghost in the Machine" — a high-frequency digital autopsy of a high-performance system.
- **Mood keywords:** Glitch, Brutalist, Maximalist, Cybernetic, High-Contrast, Kinetic.
- **Reference aesthetics:** 80s Anime Vaporwave, FUI (Fictional User Interface), Retro-computing BIOS, Command Line Interfaces.

### 1.2 Philosophy
Galactic Terminal rejects the "softness" and "friendliness" of modern consumer SaaS. It embraces the raw, unpolished, and often intimidating aesthetic of low-level system kernels. It intentionally avoids rounded corners, excessive whitespace, and muted tones in favor of a "Corrupted Grid" that feels alive and potentially unstable.

The theme embraces informational density, treating every pixel as a data point. It uses "Modular Corruption" where the Swiss Grid foundation is mathematically present but visually disrupted by glitch effects, dithered gradients, and overlapping containers. The goal is to make the user feel like an operator navigating a powerful, possibly clandestine, deep-space network.

### 1.3 Voice and Tone
The text in this theme is authoritative, clinical, and technical. It reads like a system log or a military briefing rather than marketing copy. Data is never just "displayed"; it is "rendered," "scanned," or "decrypted." The UI behaves like a high-performance HUD, prioritizing telemetry and real-time status indicators over traditional navigational metaphors.

---

## Part 2 — Technical Specification (machine-readable)

### 2.1 Color Primitives
| Primitive name  | Value (hex) | Scale step | Notes |
|-----------------|-------------|------------|-------|
| terminal-onyx   | #120422     | 950        | Deepest background |
| terminal-onyx   | #1B0C2B     | 900        | Surface elevation |
| terminal-onyx   | #2A1540     | 800        | Muted surface |
| neon-fuchsia    | #FF00FF     | 500        | Primary accent |
| neon-fuchsia    | #CC00CC     | 600        | Accent hover/emphasis |
| neon-fuchsia    | #800080     | 800        | Darkened accent |
| electric-cyan   | #00F3FF     | 500        | Secondary accent |
| acid-lime       | #DFFF00     | 500        | Tertiary accent |
| phantom-white   | #F0E6F6     | 50         | Primary text (near-white with purple tint) |
| twilight-gray   | #7A6B8A     | 400        | Muted text |
| void-gray       | #4A3B5C     | 600        | Subtle/disabled text |
| signal-red      | #FF3B30     | 500        | Danger state |
| data-green      | #00FF41     | 500        | Success state |

### 2.2 Semantic Color Intents
| Intent                    | Primitive reference     | Final value |
|---------------------------|-------------------------|-------------|
| bg.canvas                 | terminal-onyx-950       | #120422     |
| bg.subtle                 | terminal-onyx-900       | #1B0C2B     |
| bg.muted                  | terminal-onyx-800       | #2A1540     |
| bg.emphasis               | neon-fuchsia-500        | #FF00FF     |
| fg.default                | phantom-white-50        | #F0E6F6     |
| fg.muted                  | twilight-gray-400       | #7A6B8A     |
| fg.subtle                 | void-gray-600           | #4A3B5C     |
| fg.on-accent.primary      | terminal-onyx-950       | #120422     |
| fg.on-accent.secondary    | terminal-onyx-950       | #120422     |
| fg.on-accent.tertiary     | terminal-onyx-950       | #120422     |
| accent.primary            | neon-fuchsia-500        | #FF00FF     |
| accent.secondary          | electric-cyan-500       | #00F3FF     |
| accent.tertiary           | acid-lime-500           | #DFFF00     |
| border.subtle             | terminal-onyx-800       | #2A1540     |
| border.default            | neon-fuchsia-800        | #800080     |
| border.strong             | phantom-white-50        | #F0E6F6     |
| border.accent.primary     | neon-fuchsia-500        | #FF00FF     |
| border.accent.secondary   | electric-cyan-500       | #00F3FF     |
| border.accent.tertiary    | acid-lime-500           | #DFFF00     |
| danger.solid              | signal-red-500          | #FF3B30     |
| success.solid             | data-green-500          | #00FF41     |
| warning.solid             | acid-lime-500           | #DFFF00     |
| info.solid                | electric-cyan-500       | #00F3FF     |

### 2.3 Typography
| Role     | Font family     | Weight | Size     | Line-height | Letter-spacing |
|----------|-----------------|--------|----------|-------------|----------------|
| display  | Space Grotesk   | 900    | 4rem     | 1.0         | -0.05em        |
| headline | Space Grotesk   | 700    | 2.5rem   | 1.1         | -0.02em        |
| title    | Space Grotesk   | 600    | 1.5rem   | 1.2         | 0              |
| body     | Inter           | 400    | 1rem     | 1.5         | 0              |
| body-sm  | JetBrains Mono  | 400    | 0.875rem | 1.4         | 0              |
| label    | Space Grotesk   | 500    | 0.75rem  | 1.3         | 0.1em          |
| mono     | JetBrains Mono  | 500    | 0.9rem   | 1.2         | 0.05em         |

- **Fallback stacks:** 'Space Grotesk', sans-serif; 'JetBrains Mono', monospace;
- **Font sources:** Google Fonts

### 2.4 Spacing Scale
| Step | Value   | Typical usage in this theme |
|------|---------|-----------------------------|
| 0    | 0       | —                           |
| 1    | 0.25rem | Glitch offsets              |
| 2    | 0.5rem  | Compact terminal lines      |
| 3    | 0.75rem | Component internal padding  |
| 4    | 1rem    | Window body padding         |
| 5    | 1.25rem | Card internal gaps          |
| 6    | 1.5rem  | Panel section spacing       |
| 7    | 1.75rem | Large component gaps        |
| 8    | 2rem    | Section gaps                |

### 2.5 Radii
| Token       | Value   | Usage                         |
|-------------|---------|-------------------------------|
| radius.none | 0       | Hard brutalist edges          |
| radius.sm   | 0       | N/A — Theme is 100% sharp     |
| radius.md   | 0       | N/A — Theme is 100% sharp     |
| radius.lg   | 0       | N/A — Theme is 100% sharp     |
| radius.full | 9999px  | Rare avatars                  |

### 2.6 Elevation / Shadows
| Token         | Value                                | Usage                |
|---------------|--------------------------------------|----------------------|
| shadow.sm     | 0 0 10px rgba(255, 0, 255, 0.2)      | Neon glow (soft)     |
| shadow.window | 0 0 40px rgba(255, 0, 255, 0.1)      | Window depth glow    |
| shadow.inset  | inset 0 0 20px rgba(0, 0, 0, 0.5)    | Recessed terminal    |

### 2.7 Motion
| Token                | Duration | Easing             | Usage              |
|----------------------|----------|--------------------|--------------------|
| motion.window.open   | 150ms    | linear             | Rapid OS response  |
| motion.window.close  | 100ms    | linear             | Rapid dismiss      |
| motion.hover         | 50ms     | ease-in            | Glitch flicker     |
| motion.caret.blink   | 500ms    | steps(1, end)      | Terminal cursor blink |
| motion.glitch        | 200ms    | steps(3, end)      | Chromatic aberration shift |
| motion.pulse         | 2s       | ease-in-out        | Orb/button pulse   |
| motion.ring-expand   | 4s       | ease-out           | StandbyPulse ring expansion |
| motion.radar-sweep   | 3s       | linear             | Scanner rotation   |
| motion.typewriter    | 50ms/char| linear             | Line-by-line reveal |
| motion.auto-scroll   | continuous | linear            | Log feed ticker    |
| motion.geometry-rotate | 8s     | linear             | NavGridCard shape spin |
| motion.scanline      | 8000ms   | linear             | CRT background sweep |
| motion.phase-in      | 300ms    | ease-out           | HeroTitle mount    |

### 2.8 OS-Specific Tokens
| Token                 | Value | Notes                  |
|-----------------------|-------|------------------------|
| window.chrome.height  | 32px  | Rigid titlebar         |
| window.body.padding   | 16px  | Data-dense margin      |
| window.border.width   | 1px   | High-contrast stroke   |
| taskbar.height        | 48px  | Top navigation         |
| dock.icon.size        | 40px  | Square task indicators |
| desktop.icon.grid     | 120px | Desktop icon spacing   |
| boot.scanline.opacity | 0.15  | Aggressive CRT feel    |
| terminal.caret.blink  | 0.5s  | Rapid cursor           |

### 2.9 Deviations and Notes
- **Corner Notches:** Windows and cards use a custom `clip-path` to create 45-degree corner notches rather than border-radii.
- **RGB Split:** Accent text occasionally features a 1px offset shadow in Cyan and Fuchsia to simulate chromatic aberration.
- **Dithered Gradients:** Gradients are not smooth; they use 8-bit dithering patterns.

Motion primitives used by this theme:
- `motion.window.open` / `motion.window.close` — CSS transition, rapid snap open/dismiss
- `motion.hover` — CSS transition, 50ms glitch flicker on state change
- `motion.caret.blink` — CSS animation, 0.5s step blink for terminal cursor
- `motion.glitch` — CSS animation, 200ms chromatic-aberration shift on accent text
- `motion.pulse` — CSS animation, 2s ease-in-out scale + opacity for StandbyPulse orb and BootContinueButton
- `motion.ring-expand` — CSS animation, 4s expanding concentric rings on StandbyPulse
- `motion.radar-sweep` — CSS animation, 3s rotating sweep line on ScannerWidget
- `motion.typewriter` — JS-driven, line-by-line reveal at 50ms/char for BootLogList and HexSnapshot
- `motion.auto-scroll` — JS-driven, continuous left-scroll for SystemLogFeed and SystemLogColumn
- `motion.geometry-rotate` — CSS animation, 8s continuous rotation for textured GeometricAnchor
- `motion.scanline` — CSS animation, 8s linear vertical sweep for CRT overlay
- `motion.phase-in` — CSS transition, 300ms fade+translate for HeroTitle on mount

### 2.10 Surface Effects

N/A — theme uses opaque surfaces. Galactic Terminal does not employ backdrop-filter or translucency effects. Depth is communicated through borders, glow shadows, and tonal layering.

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
  - `bg`: bg.subtle with 80% opacity
  - `fg`: fg.default
  - `border`: border.subtle (bottom edge)
- **Motion consumed:** none
- **Behavioral notes:** Uses mono typography for all text elements within. Absent in Boot layout.

#### Component: BrandMark
- **Category:** os
- **Purpose:** Magenta hexagon glyph + theme wordmark in the TopAppBar.
- **Variants visible in this theme:**
  - Glyph-only (hexagon icon, no wordmark text in TopAppBar)
- **States shown:** default
- **Tokens consumed:**
  - `glyph`: accent.primary (#FF00FF)
- **Motion consumed:** none

#### Component: NavTabs
- **Category:** os
- **Purpose:** TERM, ID, SCAN navigation tabs.
- **Variants visible in this theme:**
  - Three tabs: TERM (terminal icon), ID (eye icon), SCAN (radar icon)
- **States shown:** active (TERM shown active with magenta pill background), inactive
- **Tokens consumed:**
  - `tab.inactive`: fg.muted
  - `tab.active`: fg.default with bg.emphasis pill
  - `indicator`: accent.secondary (cyan underline on active tab — visible in image 03)
- **Motion consumed:** motion.hover

#### Component: UtilityCluster
- **Category:** os
- **Purpose:** Right-side cluster: sector badge, coordinates, clock, locale, volume, icons, menu.
- **Variants visible in this theme:**
  - Full cluster visible: TOKYO_SEC_01 badge, COORD text, clock (cyan), globe, volume, menu
- **States shown:** default, locale-dropdown-open (image 07), volume-expanded (image 17)
- **Tokens consumed:**
  - `sector`: fg.default (sector name), accent.primary (sector badge)
  - `coordinates`: fg.muted
  - `clock`: accent.secondary (#00F3FF)
  - `menu`: fg.default
- **Motion consumed:** none

#### Component: StatusFooter
- **Category:** os
- **Purpose:** Bottom strip with kernel info, live system log feed, metrics, sync indicator.
- **Variants visible in this theme:**
  - Two-row footer: upper row = SystemLogFeed ticker, lower row = kernel + metrics + sync
- **States shown:** default (always visible in Desktop layout)
- **Tokens consumed:**
  - `kernel`: fg.muted (KERNEL_v4.0.0-X86_64 text)
  - `feed.label`: accent.secondary (SYSTEM_LOGS: label in cyan)
  - `feed.entries`: fg.muted (timestamped log entries)
  - `metrics`: fg.muted (coordinates, CPU, MEM)
  - `sync`: accent.tertiary (SYNC_ACTIVE ● in lime green)
- **Motion consumed:** motion.auto-scroll (feed ticker)

#### Component: Window
- **Category:** os
- **Purpose:** Draggable, resizable container for Terminal, MediaPlayer, and other modules.
- **Variants visible in this theme:**
  - `default`, `focused`, `maximized`
  - `titleBarIntent`: default (most windows), accent-primary (SystemTerminal), accent-secondary (IdentityCard)
- **States shown:** active, floating, maximized
- **Tokens consumed:**
  - `root.bg`: bg.subtle
  - `root.border`: border.default; border.accent.primary when focused
  - `root.shadow`: shadow.window
  - `titlebar.bg`: resolved by titleBarIntent (default → bg.muted)
- **Motion consumed:** motion.window.open, motion.window.close
- **Behavioral notes:** Uses clip-path for 45-degree corner notches instead of border-radius.

#### Component: WindowTitleBar
- **Category:** os
- **Purpose:** Chrome strip at top of a Window.
- **Variants visible in this theme:**
  - Standard: icon + title text + controls (images 09, 10, 14)
  - Accent: full-width accent-colored bar (SystemTerminal in image 11)
- **States shown:** default
- **Tokens consumed:**
  - `bg`: bg.muted (default), accent.primary (when titleBarIntent is accent-primary)
  - `fg`: fg.default (default), fg.on-accent.primary (when accent)
  - Leading red dot visible on UserTerminal titlebar (danger.solid)

#### Component: WindowControls
- **Category:** os
- **Purpose:** Minimize (—), maximize (□), close (×) controls.
- **Variants visible in this theme:**
  - `glyph` variant — text/icon buttons (—, □, ×)
- **States shown:** default, hover
- **Tokens consumed:**
  - `default`: fg.muted
  - `hover`: fg.default
  - `close.hover`: danger.solid
- **Motion consumed:** motion.hover

#### Component: MiniWindow
- **Category:** os
- **Purpose:** Compact docked window for MediaPlayer (image 18).
- **Variants visible in this theme:**
  - Bottom-left docked position, compact titlebar with □ and ■ controls only
- **States shown:** default
- **Tokens consumed:** same as Window defaults
- **Motion consumed:** motion.window.open

#### Component: DetailWindow
- **Category:** os
- **Purpose:** Accent-titled window for timeline detail overlay (image 16).
- **Variants visible in this theme:**
  - `titleBarIntent`: accent-primary (magenta titlebar with MODULE_03: DEEP_SPACE_RESEARCH)
- **States shown:** default (open overlay)
- **Tokens consumed:**
  - `titlebar.bg`: accent.primary
  - `titlebar.fg`: fg.on-accent.primary
  - Rest: Window defaults

#### Component: Terminal
- **Category:** os
- **Purpose:** Interactive CLI rendered inside a Window.
- **Variants visible in this theme:**
  - **UserTerminal** — compact (image 14), floating (image 10), maximized (image 09)
  - **SystemTerminal** — full-screen variant (image 11) with accent-primary titlebar (GALACTIC_OS_V1.0), SYSTEM/LOGS/NETWORK nav, bottom four-tab nav (TERM, ID, SCAN, MEDIA)
- **States shown:** awaiting input, active
- **Tokens consumed:**
  - `root.bg`: bg.canvas
  - `fg`: fg.default (body text, values), fg.muted (labels)
  - `accent`: accent.primary (section headers, prompt prefix, caret)
- **Motion consumed:** motion.caret.blink

#### Component: AsciiArtBlock
- **Category:** primitive
- **Purpose:** Pixel-art house/building glyph in the terminal header.
- **Variants visible in this theme:**
  - Small glyph (floating/compact terminal), large glyph (maximized terminal, SystemTerminal)
- **States shown:** default
- **Tokens consumed:**
  - `art`: accent.primary (#FF00FF — magenta pixel art)
  - `caption`: fg.muted ([SYSTEM_OS_KERNEL] label below)
- **Motion consumed:** optional motion.glitch on hover

#### Component: KeyValueList
- **Category:** primitive
- **Purpose:** Label + value pairs: USER, HOST, KERNEL, UPTIME (and extended set in SystemTerminal).
- **Variants visible in this theme:**
  - Standard 3–4 rows (UserTerminal), extended 10+ rows (SystemTerminal: USER, OS, HOST, UPTIME, PACKAGES, SHELL, RESOLUTION, CPU, GPU, MEMORY)
- **States shown:** default
- **Tokens consumed:**
  - `key`: fg.muted (#7A6B8A — e.g. "USER:", "HOST:")
  - `value`: fg.default (#F0E6F6 — e.g. "ARCHITECT@GALACTIC_OS")

#### Component: ColorChipRow
- **Category:** primitive
- **Purpose:** Row of 4–5 small colored squares under KeyValueList.
- **Variants visible in this theme:**
  - 4 chips in compact terminal (magenta, pink, yellow, cyan)
  - 5 chips in SystemTerminal (gray, magenta, yellow, cyan, gray)
- **States shown:** default
- **Tokens consumed:**
  - Chips use accent.primary, accent.secondary, accent.tertiary, fg.muted

#### Component: SectionHeader
- **Category:** primitive
- **Purpose:** Terminal-style header with `#` prefix (e.g. `# INITIALIZING PROTOCOL: MISSION_STATEMENT...`).
- **Variants visible in this theme:**
  - `#` prefix (maximized terminal), `[ACTIVE_PROCESSES]` bracket style, `--- HEADING ---` rule style (boot)
- **States shown:** default
- **Tokens consumed:**
  - `prefix`: accent.primary
  - `label`: fg.default

#### Component: PromptLine
- **Category:** primitive
- **Purpose:** Interactive command prompt.
- **Variants visible in this theme:**
  - Full prompt: `ARCHITECT@VOID:~$` (maximized), `>` prefix (floating), `_ AWAITING COMMAND...` (SystemTerminal)
- **States shown:** awaiting input
- **Tokens consumed:**
  - `prefix`: accent.primary (magenta)
  - `input`: fg.default
  - `caret`: accent.primary (magenta block cursor)
- **Motion consumed:** motion.caret.blink

#### Component: HeroTitle
- **Category:** primitive
- **Purpose:** Massive display text: CHARACTER_STATS, ARCHIVE_LOGS, NEBULA_CORE RECONSTRUCTION, LEAD_ARCHITECT.
- **Variants visible in this theme:**
  - accent.primary variant (magenta — CHARACTER_STATS, LEAD_ARCHITECT)
  - fg.default variant (white — section headings in reading layout)
- **States shown:** default
- **Tokens consumed:**
  - `text`: accent.primary or fg.default (variant-dependent)
- **Motion consumed:** optional motion.phase-in

#### Component: SectionDivider
- **Category:** primitive
- **Purpose:** Horizontal rule visible below blog card grid (image 02), within reading layout.
- **Variants visible in this theme:**
  - Accent variant (magenta line), subtle variant (muted line)
- **States shown:** default
- **Tokens consumed:**
  - `accent`: border.accent.primary
  - `subtle`: border.subtle

#### Component: KanjiCaption
- **Category:** primitive
- **Purpose:** Japanese-character caption — 起動 (kidō) visible in blog detail (image 01) and timeline detail (image 16).
- **Variants visible in this theme:**
  - With translation: `起動 - INITIALIZING_READER` (image 01), `起動 Terminal_Access: Granted` (image 16)
- **States shown:** default
- **Tokens consumed:**
  - `kanji`: accent.secondary or fg.muted
  - `translation`: fg.muted
- **Behavioral notes:** Rendered because this theme declares `kanji_motif: enabled`.

#### Component: Quotation
- **Category:** primitive
- **Purpose:** Left-bordered quote block with KanjiCaption caption (image 01).
- **Variants visible in this theme:**
  - With KanjiCaption above, magenta left border
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary
  - `quote`: fg.default

#### Component: Button
- **Category:** primitive
- **Purpose:** Standard action button.
- **Variants visible in this theme:**
  - `primary`: magenta bg + dark text (DOWNLOAD_FULL_LOGS in image 16)
  - `outlined`: magenta border + magenta text (× CLOSE MENU in images 12–13)
- **States shown:** default, hover
- **Tokens consumed:**
  - `primary.bg`: accent.primary
  - `primary.fg`: fg.on-accent.primary
  - `outlined.border`: border.accent.primary
  - `outlined.fg`: accent.primary
- **Motion consumed:** motion.hover

#### Component: IconButton
- **Category:** primitive
- **Purpose:** Icon-only buttons: globe, volume, clock icons in UtilityCluster; media controls.
- **Variants visible in this theme:**
  - `ghost`: transparent bg, icon in fg.muted → fg.default on hover
  - `filled`: accent.primary bg (play button in MediaPlayer)
- **States shown:** default, hover, active
- **Tokens consumed:**
  - `ghost`: fg.muted → fg.default
  - `filled.bg`: accent.primary
  - `filled.fg`: fg.on-accent.primary
- **Motion consumed:** motion.hover

#### Component: Input
N/A — not shown in this theme's designs.

#### Component: SearchInput
N/A — not shown in this theme's designs.

#### Component: Label
- **Category:** primitive
- **Purpose:** Small uppercase label text throughout the UI.
- **Variants visible in this theme:**
  - Standard muted labels (CPU_LOAD, MEM_USAGE, TOTAL_XP, etc.)
- **States shown:** default
- **Tokens consumed:**
  - `fg`: fg.muted

#### Component: Badge
- **Category:** primitive
- **Purpose:** Pill-shaped status label.
- **Variants visible in this theme:**
  - `accent`: TERM tab active pill (magenta bg)
  - `success`: STREAMING_LIVE (lime/green in image 08), LVL: 99, RANK_S (image 03)
- **States shown:** default
- **Tokens consumed:**
  - `accent.bg`: accent.primary, `accent.fg`: fg.on-accent.primary
  - `success.bg`: accent.tertiary, `success.fg`: fg.on-accent.tertiary

#### Component: Clock
- **Category:** primitive
- **Purpose:** Time display: `22:41:04 UTC` in cyan.
- **Variants visible in this theme:**
  - Cyan time text in UtilityCluster
- **States shown:** default
- **Tokens consumed:**
  - `time`: accent.secondary (#00F3FF)

#### Component: LocaleSelector
- **Category:** primitive
- **Purpose:** Locale dropdown: EN_US, JP_TYO (highlighted), ES_MAD (image 07).
- **Variants visible in this theme:**
  - Globe trigger icon, dropdown with three locale rows
- **States shown:** closed, open
- **Tokens consumed:**
  - `trigger`: fg.muted (globe icon)
  - `menu.bg`: bg.subtle
  - `menu.border`: border.accent.primary
  - `option.active.bg`: accent.primary
  - `option.fg`: fg.default

#### Component: VolumeSlider
- **Category:** primitive
- **Purpose:** Horizontal volume control (image 17) showing 76% fill.
- **Variants visible in this theme:**
  - Inline slider with magenta fill, percentage label
- **States shown:** default, interacting
- **Tokens consumed:**
  - `track`: bg.muted
  - `fill`: accent.primary
  - `label`: fg.muted

### EXTENDED CANONICAL COMPONENTS

#### Component: IdentityCard
- **Category:** os (Window variant)
- **Purpose:** Floating ID portrait card (image 14): ID_IDENTIFIER: 09 with portrait and NAME/TYPE footer.
- **Variants visible in this theme:**
  - `titleBarIntent`: accent-secondary (canonical default)
- **States shown:** default
- **Tokens consumed:**
  - `titlebar.bg`: accent.secondary (#00F3FF — resolved via titleBarIntent)
  - `titlebar.fg`: fg.on-accent.secondary
  - `portrait`: fills card body
  - `footer`: fg.default (NAME: K0-HANA), fg.muted (TYPE: CYBORG_AEROSPACE)

#### Component: ScannerWidget
- **Category:** os (Window variant)
- **Purpose:** Circular radar plot (image 14): SCANNING_SECTOR_01.
- **Variants visible in this theme:**
  - `titleBarIntent`: default (dark titlebar with muted text)
- **States shown:** scanning (active)
- **Tokens consumed:**
  - `display.border`: border.subtle (radar circles)
  - `display.sweep`: accent.secondary (cyan sweep line)
  - `markers`: accent.primary (magenta dot), accent.tertiary (lime dot)
  - `readout`: fg.muted (HDG: 214.4°, SPD: MACH_0.82)
- **Motion consumed:** motion.radar-sweep

#### Component: StandbyPulse
- **Category:** os
- **Purpose:** Centerpiece idle viz (images 04–07, 17–18): concentric rings + cyan orb + SYSTEM_STANDBY label.
- **States shown:** idle (default desktop state)
- **Tokens consumed:**
  - `orb`: accent.secondary (#00F3FF — cyan glow)
  - `rings`: border.subtle (concentric circles) + border.accent.primary (faint magenta diamond overlays)
  - `label`: fg.muted (SYSTEM_STANDBY, WAITING FOR USER INPUT...)
- **Motion consumed:** motion.pulse (orb), motion.ring-expand (rings)

#### Component: MediaPlayer
- **Category:** os (Window variant)
- **Purpose:** Media playback — floating Window (image 08: MEDIA_MODULE // V2.4) and MiniWindow (image 18: MEDIA_LINK_V.01).
- **Variants visible in this theme:**
  - Floating: cover art, progress bar, full transport controls, metadata
  - Mini: compact title + time, prev/play/next, waveform visualizer
- **States shown:** playing, streaming
- **Tokens consumed:**
  - `title`: fg.default
  - `meta`: fg.muted (BITRATE, ENCODE, NODE)
  - `progress.fill`: accent.primary (magenta)
  - `controls.play`: accent.primary bg (filled IconButton)
  - `badge`: accent.tertiary (STREAMING_LIVE lime badge)
  - `waveform`: accent.tertiary (lime bars in MiniWindow)
- **Motion consumed:** motion.hover (controls)

#### Component: MetricsCard
- **Category:** primitive
- **Purpose:** Telemetry cards: CPU_LOAD 24.8%, MEM_USAGE 12.4GB, NET_TRAFFIC 442 kb/s, PULSE_RATE 72 BPM (image 09).
- **Variants visible in this theme:**
  - `default`: large green numeric value with progress bar below
- **States shown:** default
- **Tokens consumed:**
  - `label`: fg.muted (CPU_LOAD etc.)
  - `value`: accent.tertiary (#DFFF00 — lime/green numeric display)
  - `graph`: accent.tertiary (progress bar fill)
  - `bg`: bg.muted

#### Component: ProgressBar
- **Category:** primitive
- **Purpose:** Horizontal progress in MetricsCards and SystemHealth section.
- **Variants visible in this theme:**
  - Thin bar below MetricsCard values, wider bars in SystemHealth
- **States shown:** default
- **Tokens consumed:**
  - `track`: bg.muted
  - `fill`: varies — accent.secondary (CORE_01 cyan), accent.tertiary (CORE_02 yellow), accent.primary (CORE_03 magenta)

#### Component: StatBar
- **Category:** primitive
- **Purpose:** Labeled stat bars in CoreAttributesPanel (image 03).
- **Variants visible in this theme:**
  - STAMINA (`intent: primary`), HEALTH (`intent: secondary`), DEXTERITY (`intent: tertiary`), LUCK (`intent: neutral`)
- **States shown:** default
- **Tokens consumed:**
  - `intent: primary` → accent.primary (#FF00FF — magenta, STAMINA)
  - `intent: secondary` → accent.secondary (#00F3FF — cyan, HEALTH)
  - `intent: tertiary` → accent.tertiary (#DFFF00 — lime, DEXTERITY)
  - `intent: neutral` → fg.default (#F0E6F6 — white, LUCK)
  - `label`: fg.default
  - `value`: fg.default (LV.85 etc.)

#### Component: SkillRow
- **Category:** primitive
- **Purpose:** Skill rows in SkillsLogPanel (image 03): FULLSTACK_DEV MASTER, CLOUD_ARCH EXPERT, etc.
- **States shown:** default, active highlight (alternating row bg)
- **Tokens consumed:**
  - `row.bg`: alternating bg.subtle / bg.muted
  - `label`: fg.default
  - `rank.active`: accent.primary (MASTER, ELITE in magenta)
  - `rank.default`: fg.default

#### Component: ProcessList
- **Category:** primitive
- **Purpose:** PID status list in maximized terminal (image 09).
- **States shown:** running, idle
- **Tokens consumed:**
  - `pid`: fg.muted
  - `name`: fg.default
  - `status.running`: accent.tertiary (#DFFF00 — RUNNING in lime)
  - `status.idle`: accent.secondary (#00F3FF — IDLE in cyan)

#### Component: MiniChart
- **Category:** primitive
- **Purpose:** Small grouped bar chart in SkillsLogPanel (image 03).
- **States shown:** default
- **Tokens consumed:**
  - Bars: accent.primary, accent.secondary, accent.tertiary

#### Component: HexSnapshot
- **Category:** primitive
- **Purpose:** Hex byte grid in boot screen (image 19).
- **States shown:** default, error highlight
- **Tokens consumed:**
  - `address`: fg.muted
  - `bytes`: fg.default
  - `error`: danger.solid (! ERROR ! critical in red)
- **Motion consumed:** motion.typewriter

#### Component: Timeline
- **Category:** os
- **Purpose:** Horizontal timeline with diamond nodes (image 15).
- **States shown:** default
- **Tokens consumed:**
  - `track`: border.subtle (connecting line)
  - `cursor`: accent.primary (active position marker/progress bar below)

#### Component: TimelineNode
- **Category:** primitive
- **Purpose:** Diamond nodes: INIT_MISSION, ORBIT_CORE, DEEP_SPACE (active), NEBULA_GEN, SIGNAL_LOST.
- **Variants visible in this theme:**
  - `idle`: hollow diamond, border.subtle
  - `active`: filled magenta diamond with glow (DEEP_SPACE), accent.primary
  - `visited`: small filled diamond, accent.primary dimmed
- **States shown:** idle, active, visited
- **Tokens consumed:**
  - `idle`: border.subtle, fg.muted (label)
  - `active`: accent.primary (fill + glow), accent.tertiary (year label 2023.01 in lime)
  - `active.label`: accent.primary (DEEP_SPACE in magenta)

#### Component: MetadataTag
- **Category:** primitive
- **Purpose:** Corner tags: LOG_001/002/003 (image 02), MODULE_03: (image 16), PROJECT_LOG_FILE: 4492-B (image 01), LOC_01/USR_02/AUD_03/ARC_04/LOG_05/NET_06 (images 12–13).
- **States shown:** default
- **Tokens consumed:**
  - `label`: accent.tertiary (#DFFF00 — lime text on blog cards), accent.primary (magenta on reading layout)
  - `bg`: bg.muted (when pill-shaped)

#### Component: AccentBar
- **Category:** primitive
- **Purpose:** Small colored accent lines used as corner decorations (visible in images 02, bottom-right).
- **States shown:** default
- **Tokens consumed:**
  - accent.primary (magenta bar), accent.tertiary (lime bar)

#### Component: TagChipRow
- **Category:** primitive
- **Purpose:** Bordered tech tag chips: RUST_ENGINE, QUANTUM_DB, PROTO_42 (image 16).
- **States shown:** default
- **Tokens consumed:**
  - `chip.border`: border.default
  - `chip.fg`: fg.default

#### Component: MetadataChipRow
- **Category:** primitive
- **Purpose:** Key+value metadata chips: COORD: 40.7128° N / STAMP: 2184.09.12 / STATUS: ENCRYPTED (image 01).
- **States shown:** default
- **Tokens consumed:**
  - `chip.border`: border.default
  - `key`: fg.muted
  - `value`: fg.default

#### Component: NavGridCard
- **Category:** os
- **Purpose:** Full-screen menu navigation cards (images 12–13): HOME, ABOUT ME, MUSIC, PORTFOLIO, BLOG, CONTACT.
- **Variants visible in this theme:**
  - `clean` (image 13 — simplified geometry)
  - `textured` (image 12 — animated wireframe 3D shapes)
- **States shown:** default, active (SYN_ID_ACTIVE indicator)
- **Tokens consumed:**
  - `border`: border.subtle (lime/yellow card border)
  - `id`: accent.tertiary (LOC_01 corner tag in lime)
  - `label`: fg.default (HOME, ABOUT ME in white)
  - `icon`: accent.primary (magenta dot beside label)

#### Component: GeometricAnchor
- **Category:** primitive
- **Purpose:** Wireframe/textured shapes inside NavGridCards (images 12–13).
- **Variants visible in this theme:**
  - `wireframe`: cyan 3D wireframe shapes (cubes, hexagons)
  - `textured`: simpler outlined/dotted shapes
- **States shown:** default (rotating)
- **Tokens consumed:**
  - `wireframe`: accent.secondary (#00F3FF — cyan lines)
  - `textured`: accent.primary + accent.secondary
- **Motion consumed:** motion.geometry-rotate (textured variant)

#### Component: BlogCard
- **Category:** primitive
- **Purpose:** Blog entry cards (image 02): cover image, metadata, title, description.
- **States shown:** default
- **Tokens consumed:**
  - `cover`: image with MetadataTag overlay (LOG_001 in lime)
  - `meta`: fg.muted (DATE: 2184.09.12 // ENCRYPTED), KanjiCaption slot
  - `title`: fg.default (NEURAL_LINKAGE PROTOCOLS)
  - `description`: fg.muted

#### Component: MissionBriefCard
- **Category:** primitive
- **Purpose:** Bordered card with ☑ MISSION_BRIEF header and prose body (image 03).
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary (magenta left border)
  - `header`: fg.default (MISSION_BRIEF with checkmark icon)
  - `body`: fg.muted (prose content)

#### Component: CoreAttributesPanel
- **Category:** os
- **Purpose:** CORE_ATTRIBUTES panel with AUTO_CALC: ON header (image 03).
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.secondary (#00F3FF — cyan border visible in image 03)
  - `header`: fg.default (CORE_ATTRIBUTES), fg.muted (AUTO_CALC: ON)
  - `bg`: bg.subtle

#### Component: SkillsLogPanel
- **Category:** os
- **Purpose:** SKILLS_LOG panel with skill rows and MiniChart (image 03).
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.default
  - `header`: fg.default (SKILLS_LOG)
  - `bg`: bg.subtle

#### Component: SystemLogColumn
- **Category:** os
- **Purpose:** Left-side log column: bracketed `[OK]` entries (images 12–13), `//` comment-prefix entries (image 15).
- **Variants visible in this theme:**
  - `bracket-status`: SYS_INIT... [OK], MEM_MAP_8930... LOADED (full-screen menu)
  - `comment-prefix`: // LOG_STREAM_INITIATED, // STATUS: STABLE_ORBIT (timeline)
- **States shown:** default (continuously scrolling)
- **Tokens consumed:**
  - `text`: fg.muted
  - `status`: accent.tertiary ([OK] in lime)
  - `comment-prefix.text`: accent.tertiary (lime // prefix text on timeline)
- **Motion consumed:** motion.auto-scroll

#### Component: TelemetryColumn
- **Category:** os
- **Purpose:** Right-side readout: COORD_X, COORD_Y, COORD_Z, ST_MODE, PWR_LVL, THERM (images 12–13).
- **States shown:** default
- **Tokens consumed:**
  - `key`: fg.muted
  - `value`: fg.default

#### Component: UserSignatureBar
- **Category:** os
- **Purpose:** Bottom bar: ● CARLOS VARA // FULL STACK DEVELOPER ... 22:41:04 > MON_MAR_13.25 (images 12–13).
- **States shown:** default
- **Tokens consumed:**
  - `status`: accent.tertiary (green dot)
  - `name`: accent.primary (magenta — CARLOS VARA not present in GT; may be fg.default)
  - `role`: fg.muted
  - `timestamp`: accent.primary

#### Component: SubtitleBar
- **Category:** primitive
- **Purpose:** VIEWING ALL DECRYPTED FILES // TOTAL: 042 (image 02).
- **States shown:** default
- **Tokens consumed:**
  - `fg`: fg.muted

#### Component: BootHeader
- **Category:** os
- **Purpose:** AETHERSYSTEM BIOS v4.0.2 header (image 19).
- **States shown:** default
- **Tokens consumed:**
  - `title`: accent.primary (#FF00FF — magenta)
  - `meta`: fg.muted (KERNEL: STABLE 4.0.2-RELEASE  UPTIME: 00:00:14:22 ...)

#### Component: BootLogList
- **Category:** os
- **Purpose:** Timestamped boot log entries [0.000] through [1.250] (image 19).
- **States shown:** initializing (line-by-line reveal)
- **Tokens consumed:**
  - `timestamp`: fg.muted ([0.000] prefix)
  - `message`: fg.default (log text)
  - `success`: accent.tertiary (green-tinted success lines)
- **Motion consumed:** motion.typewriter

#### Component: BootContinueButton
- **Category:** primitive
- **Purpose:** PRESS ANY KEY TO BOOT →| (image 19).
- **States shown:** default (pulsing)
- **Tokens consumed:**
  - `bg`: accent.primary (#FF00FF)
  - `fg`: fg.on-accent.primary (#120422)
- **Motion consumed:** motion.pulse

#### Component: KeyHint
- **Category:** primitive
- **Purpose:** [F2: SETUP] [F12: BOOT MENU] [ESC: EXIT] at bottom of boot screen (image 19).
- **States shown:** default
- **Tokens consumed:**
  - `fg`: fg.muted

---

## Part 4 — Theme Consistency Check
- [x] Every intent in section 2.2 has either a value or an explicit N/A
- [x] Every Core canonical component in Part 3 has either a spec or an
      explicit N/A (Input and SearchInput are N/A)
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
- [x] State-intent collapse warning is NOT required (all four state
      intents resolve to distinct values)

---

## Part 5 — Metadata (last section, machine-read)
```yaml
schema_version: "2.0"
theme_slug: galactic-terminal
theme_name: Galactic Terminal
generated_by: stitch
generated_at: 2024-05-22T14:30:00Z
base_theme: null
intended_consumer: mona-lisa-overdrive
sprawl_project: burning-chrome
color_scheme: dark
kanji_motif: enabled
```
---
End of DESIGN.md. Produce nothing after this line.
