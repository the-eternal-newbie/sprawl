# Canonical Components

> The definitive list of every component Mona Lisa Overdrive must
> support. Derived from the Galactic Terminal theme, which serves
> as the structural reference for all other themes.
>
> This document is split into two tiers:
>
> - **Core canonical** — components that every theme must address in
>   its DESIGN.md, even if only to mark them N/A.
> - **Extended canonical** — components that exist in the system but
>   only need per-theme specs when a theme actually visualizes them.
>   Themes can omit extended components they do not use.
>
> Every canonical component entry includes: category, purpose,
> anatomy (with `data-slot` names), the semantic tokens it consumes,
> behavioral notes, and which motion primitives from `src/motion/`
> it uses.

## Semantic intent reference

The canonical semantic intent set that every theme must map values
for. Themes may declare any intent as `N/A — <reason>`.

### Surfaces
- `bg.canvas` — root application background
- `bg.subtle` — primary surface elevation above canvas
- `bg.muted` — secondary surface elevation
- `bg.emphasis` — highlighted surface (active tab pill, selection)

### Foreground
- `fg.default` — primary body text on canvas/subtle surfaces
- `fg.muted` — de-emphasized text
- `fg.subtle` — placeholder text, disabled text
- `fg.on-accent.primary` — text rendered on top of accent.primary
- `fg.on-accent.secondary` — text on top of accent.secondary
- `fg.on-accent.tertiary` — text on top of accent.tertiary

### Accents (three-accent schema)
- `accent.primary` — the theme's dominant brand hue
- `accent.secondary` — the theme's secondary brand hue (may be N/A)
- `accent.tertiary` — the theme's tertiary brand hue (may be N/A)

### Borders
- `border.subtle` — hairlines inside cards/panels
- `border.default` — default control borders
- `border.strong` — emphasized borders
- `border.accent.primary` — accent.primary borders
- `border.accent.secondary` — accent.secondary borders
- `border.accent.tertiary` — accent.tertiary borders

### States
- `danger.solid` — destructive actions, error states
- `success.solid` — success states
- `warning.solid` — warning states
- `info.solid` — informational states

---

## CORE canonical components

Every theme's DESIGN.md must include a component spec for every entry
in this section. Themes that do not visually use a core component
must explicitly mark it `N/A — not shown in this theme's designs`.

### OS Chrome

#### TopAppBar
- **Category:** os
- **Purpose:** Persistent top strip containing brand, navigation
  tabs, and utility cluster.
- **Anatomy:**
  - `root` — full-width strip
  - `brand` — BrandMark slot
  - `nav` — NavTabs slot
  - `utility` — UtilityCluster slot
- **Tokens consumed:** `bg.subtle`, `fg.default`, `border.default`
- **Motion:** none by default
- **Notes:** Fixed to top of viewport in Desktop layout. Absent in
  Boot layout.

#### BrandMark
- **Category:** os
- **Purpose:** Theme logo and wordmark.
- **Anatomy:**
  - `glyph` — icon/logo element
  - `wordmark` — theme name text
- **Tokens consumed:** `accent.primary`, `fg.default`
- **Motion:** none

#### NavTabs
- **Category:** os
- **Purpose:** Primary navigation between OS sections (TERM, ID,
  SCAN or equivalents).
- **Anatomy:**
  - `root` — tab list container
  - `tab` — individual tab with icon + label
  - `indicator` — active-state marker
- **Variants:** `theme-terminal` | `theme-id` | `theme-scan`
- **Tokens consumed:** `fg.muted` (inactive), `fg.default` (active),
  `accent.secondary` (indicator in Galactic Terminal),
  `bg.emphasis` (active pill in Aetheric Pulse)
- **Motion:** `motion.hover` for state transitions

#### UtilityCluster
- **Category:** os
- **Purpose:** Right side of TopAppBar — status, location, clock,
  locale, volume, menu.
- **Anatomy:**
  - `sector` — Badge slot showing sector ID
  - `coordinates` — coordinate text
  - `clock` — Clock slot
  - `locale` — LocaleSelector slot
  - `volume` — VolumeSlider slot
  - `icons` — IconButton slot group
  - `menu` — menu button
- **Tokens consumed:** `fg.default`, `fg.muted`, `accent.primary`

#### StatusFooter
- **Category:** os
- **Purpose:** Persistent bottom strip with kernel version, live
  feed, coordinates, sync indicator.
- **Anatomy:**
  - `root` — full-width strip
  - `kernel` — kernel version text
  - `feed` — SystemLogFeed slot showing live log stream
  - `metrics` — coordinates/metrics block
  - `sync` — sync status indicator
- **Tokens consumed:** `bg.canvas`, `fg.muted`, `border.subtle`,
  `accent.secondary`
- **Motion:** the `feed` slot uses `motion.auto-scroll` (shared
  primitive with SystemLogColumn)

### Window System

#### Window
- **Category:** os
- **Purpose:** Draggable, resizable container for OS modules.
- **Anatomy:**
  - `root` — outer frame
  - `titlebar` — WindowTitleBar slot
  - `controls` — WindowControls slot
  - `content` — inner scrollable area
- **Props:**
  - `titleBarIntent` — controls the titlebar's background color.
    Values: `default` | `accent-primary` | `accent-secondary` |
    `accent-tertiary`. Default: `default` (uses `bg.muted`).
    Window-based components (DetailWindow, IdentityCard,
    ScannerWidget, SystemTerminal) specify their titleBarIntent
    in per-theme DESIGN.md entries.
- **Variants:** `default` | `focused` | `minimized` | `maximized`
- **Tokens consumed:** `bg.subtle`, `border.default`,
  `border.accent.primary` (focused), shadow via `shadow.window`.
  Titlebar background resolved by `titleBarIntent`:
  - `default` → `bg.muted`
  - `accent-primary` → `accent.primary` bg + `fg.on-accent.primary`
  - `accent-secondary` → `accent.secondary` bg + `fg.on-accent.secondary`
  - `accent-tertiary` → `accent.tertiary` bg + `fg.on-accent.tertiary`
- **Motion:** `motion.window.open`, `motion.window.close`

#### WindowTitleBar
- **Category:** os
- **Purpose:** The chrome strip at the top of a Window.
- **Anatomy:**
  - `icon` — leading icon slot
  - `title` — window title text
  - `controls` — WindowControls slot
- **Tokens consumed:** `bg.muted`, `fg.default`

#### WindowControls
- **Category:** os
- **Purpose:** Minimize, maximize, close button cluster.
- **Anatomy:**
  - `minimize` — minimize control
  - `maximize` — maximize control
  - `close` — close control
- **Variants:**
  - `glyph` — text or icon buttons (default)
  - `traffic-lights` — macOS-style colored dots (used by Aetheric
    Pulse)
- **Tokens consumed:** `fg.muted`, `fg.default` (hover),
  `danger.solid` (close hover)

#### MiniWindow
- **Category:** os
- **Purpose:** Smaller docked Window variant for persistent widgets
  like the MediaPlayer.
- **Anatomy:** same as Window but with compact titlebar, no
  minimize/maximize controls, only close.
- **Tokens consumed:** same as Window

#### DetailWindow
- **Category:** os
- **Purpose:** A Window variant with an accent-colored header used
  for timeline detail views and content detail surfaces.
- **Anatomy:** same as Window.
- **Default `titleBarIntent`:** `accent-primary`. Per-theme specs
  may override this to any other titleBarIntent value.
- **Tokens consumed:** resolved via `titleBarIntent: accent-primary`
  → `accent.primary` bg + `fg.on-accent.primary` in the titlebar;
  otherwise Window defaults.

### Terminal Content

#### Terminal
- **Category:** os
- **Purpose:** Interactive command-line interface shown inside a
  Window.
- **Variants:**
  - **UserTerminal** — portfolio/biographical content. Three size
    variants: `compact`, `floating`, `maximized`.
  - **SystemTerminal** — system diagnostics, tech stack, app health,
    theme control. Distinguished by full-width accent titlebar
    (`titleBarIntent: accent-primary`) and bottom-docked four-tab
    nav (TERM, ID, SCAN, MEDIA).
- **Anatomy:**
  - `root` — terminal container
  - `header` — slot for AsciiArtBlock and KeyValueList
  - `body` — scrollable output area
  - `prompt` — PromptLine slot
- **Tokens consumed:** `bg.canvas`, `fg.default`, `accent.primary`
- **Motion:** `motion.caret.blink` (via PromptLine)

#### AsciiArtBlock
- **Category:** primitive
- **Purpose:** Pixel-art brand glyph rendered in the terminal header.
- **Anatomy:**
  - `root` — container
  - `art` — the pixel art itself
  - `caption` — optional caption below
- **Tokens consumed:** `accent.primary` (primary), `fg.muted`
  (caption)
- **Motion:** optional `motion.glitch` on hover/focus

#### KeyValueList
- **Category:** primitive
- **Purpose:** Right-aligned label + value pairs for system metadata
  (USER, HOST, KERNEL, OPERATOR, etc.).
- **Anatomy:**
  - `root` — list container
  - `row` — single key/value pair
  - `key` — label text
  - `value` — value text
- **Tokens consumed:** `fg.muted` (key), `fg.default` (value)

#### ColorChipRow
- **Category:** primitive
- **Purpose:** Row of small colored squares shown under KeyValueList.
  Decorative brand color preview.
- **Anatomy:**
  - `root` — row container
  - `chip` — single colored square
- **Tokens consumed:** `accent.primary`, `accent.secondary`,
  `accent.tertiary`, `fg.muted`

#### SectionHeader
- **Category:** primitive
- **Purpose:** Terminal-style section header prefixed with `#` or
  `[!]`.
- **Anatomy:**
  - `prefix` — marker (`#`, `[!]`, `>`)
  - `label` — header text
- **Tokens consumed:** `accent.primary` (prefix), `fg.default`
  (label)

#### PromptLine
- **Category:** primitive
- **Purpose:** Interactive command prompt with prefix, input, and
  blinking caret.
- **Anatomy:**
  - `prefix` — shell prefix
  - `input` — editable command text
  - `caret` — blinking cursor
- **Tokens consumed:** `accent.primary` (prefix, caret), `fg.default`
  (input)
- **Motion:** `motion.caret.blink`

### Typographic Primitives

#### HeroTitle
- **Category:** primitive
- **Purpose:** Massive display text for hero headers.
- **Anatomy:**
  - `root` — container
  - `text` — the title text
- **Tokens consumed:** `fg.default` or `accent.primary` depending
  on variant
- **Motion:** optional `motion.phase-in` on mount

#### SectionDivider
- **Category:** primitive
- **Purpose:** Horizontal rule under section headers.
- **Anatomy:**
  - `root` — line element
- **Tokens consumed:** `border.subtle`, `border.accent.primary` for
  accent variant

#### KanjiCaption
- **Category:** primitive
- **Purpose:** Recurring Japanese-character caption motif for the
  cyberpunk aesthetic. Examples: 起動 (kidō — "boot"), 端末
  (tanmatsu — "terminal").
- **Anatomy:**
  - `root` — container
  - `kanji` — the Japanese characters
  - `translation` — optional romanized/English caption
- **Tokens consumed:** `accent.secondary` or `fg.muted`
- **Opt-in:** Rendered only when the active theme declares
  `kanji_motif: enabled` in its DESIGN.md metadata. Themes with
  `kanji_motif: disabled` render this component as `null`.

#### Quotation
- **Category:** primitive
- **Purpose:** Left-bordered quote block with optional caption.
- **Anatomy:**
  - `root` — container
  - `caption` — KanjiCaption slot or plain caption text
  - `quote` — the quoted content
- **Tokens consumed:** `border.accent.primary`, `fg.default`

### Generic Primitives

#### Button
- **Category:** primitive
- **Purpose:** Standard interactive button.
- **Variants:** `primary` | `secondary` | `inverted` | `outlined`
- **Anatomy:**
  - `root` — button element
  - `icon` — optional leading icon
  - `label` — text content
- **Tokens consumed:** varies by variant; primary uses
  `accent.primary` + `fg.on-accent.primary`
- **Motion:** `motion.hover`

#### IconButton
- **Category:** primitive
- **Purpose:** Compact button with icon only.
- **Anatomy:**
  - `root` — button element
  - `icon` — the icon
- **Variants:** `ghost` | `filled` | `outlined`
- **Tokens consumed:** varies; ghost uses `fg.muted` → `fg.default`
  on hover

#### Input
- **Category:** primitive
- **Purpose:** Single-line text input.
- **Anatomy:**
  - `root` — wrapper
  - `field` — the input element
- **Tokens consumed:** `bg.muted`, `fg.default`, `border.default`,
  `border.accent.primary` (focus)

#### SearchInput
- **Category:** primitive
- **Purpose:** Input specialized for search with a leading icon.
- **Anatomy:**
  - `root` — wrapper
  - `icon` — leading search icon
  - `field` — input element
- **Tokens consumed:** same as Input

#### Label
- **Category:** primitive
- **Purpose:** Small uppercase label text.
- **Tokens consumed:** `fg.muted`

#### Badge
- **Category:** primitive
- **Purpose:** Pill-shaped label for status, sector ID, etc.
- **Variants:** `default` | `accent` | `danger` | `success`
- **Tokens consumed:** varies

#### Clock
- **Category:** primitive
- **Purpose:** Time display in the UtilityCluster.
- **Anatomy:**
  - `root` — container
  - `time` — time text
- **Tokens consumed:** `accent.primary`, `fg.default`
- **Motion:** none (ticks via state, not CSS)

#### LocaleSelector
- **Category:** primitive
- **Purpose:** Dropdown for switching locale (EN_US, JP_TYO,
  ES_MAD).
- **Anatomy:**
  - `trigger` — globe IconButton
  - `menu` — DropdownMenu slot
  - `option` — locale option row
- **Tokens consumed:** `bg.subtle`, `fg.default`,
  `border.accent.primary`

#### VolumeSlider
- **Category:** primitive
- **Purpose:** Inline horizontal volume control in UtilityCluster.
- **Anatomy:**
  - `track` — slider track
  - `fill` — filled portion
  - `label` — percentage text
- **Tokens consumed:** `accent.primary`, `fg.muted`

---

## EXTENDED canonical components

Themes only need to provide specs for extended components they
actually visualize in their designs. Themes that don't use an
extended component omit it from their DESIGN.md entirely.

### Floating Utility Widgets

#### IdentityCard
- **Category:** os (Window variant)
- **Purpose:** Small floating Window showing an identity portrait
  with metadata footer.
- **Anatomy:**
  - `root` — Window wrapper
  - `portrait` — image
  - `footer` — KeyValueList for NAME, TYPE, CLASS
- **Default `titleBarIntent`:** `accent-secondary`. Per-theme specs
  may override (e.g. Galactic Terminal uses `accent-secondary` for
  the lime/yellow titlebar on the ID card).
- **Tokens consumed:** Window defaults; titlebar resolved via
  `titleBarIntent`.

#### ScannerWidget
- **Category:** os (Window variant)
- **Purpose:** Small floating Window showing a circular radar plot
  with moving markers.
- **Anatomy:**
  - `root` — Window wrapper
  - `display` — radar circle
  - `markers` — data points
  - `readout` — stats text below
- **Default `titleBarIntent`:** `default`. Per-theme specs may
  override.
- **Tokens consumed:** Window defaults; display uses
  `border.subtle`, `accent.primary`, `accent.secondary`.
- **Motion:** `motion.radar-sweep`

#### StandbyPulse
- **Category:** os
- **Purpose:** Centerpiece idle visualization on clean-desktop
  states. Concentric rings around a pulsing orb.
- **Anatomy:**
  - `root` — container
  - `rings` — concentric ring elements
  - `orb` — center pulse
  - `label` — status text (SYSTEM_STANDBY, PULSE_STANDBY)
- **Tokens consumed:** `accent.secondary` (orb), `border.subtle`
  (rings), `fg.muted` (label)
- **Motion:** `motion.pulse` (orb), `motion.ring-expand` (rings)

#### MediaPlayer
- **Category:** os (Window variant)
- **Purpose:** Media playback widget. Exists as MiniWindow (docked
  bottom-left) or floating Window (centered).
- **Anatomy:**
  - `root` — Window wrapper
  - `cover` — album art / video thumb
  - `title` — track title
  - `progress` — ProgressBar
  - `controls` — prev/play/next IconButton row
  - `meta` — bitrate/encode/node info
- **Tokens consumed:** `accent.primary`, `fg.default`, `fg.muted`
- **Motion:** `motion.hover` on controls

#### MetricsCard
- **Category:** primitive
- **Purpose:** High-density telemetry card with a large numeric
  readout and optional inline chart.
- **Anatomy:**
  - `root` — container
  - `label` — metric name
  - `value` — large numeric display
  - `graph` — inline sparkline or bar chart
- **Variants:** `default` | `critical`
- **Tokens consumed:** `bg.muted`, `fg.default`, `accent.primary`

### Data Display Primitives

#### ProgressBar
- **Category:** primitive
- **Purpose:** Horizontal progress indicator.
- **Anatomy:**
  - `track` — background
  - `fill` — filled portion
- **Tokens consumed:** `bg.muted`, `accent.primary`

#### StatBar
- **Category:** primitive
- **Purpose:** Labeled horizontal bar with right-aligned numeric
  value, used in CoreAttributesPanel.
- **Anatomy:**
  - `root` — row container
  - `label` — left label
  - `bar` — ProgressBar
  - `value` — right-aligned numeric rank (LV.85)
- **Props:**
  - `intent` — controls the bar fill color. Values: `primary` |
    `secondary` | `tertiary` | `neutral`. Default: `primary`.
    Monochrome themes collapse all non-neutral values to
    `accent.primary`. Polychromatic themes map each intent to its
    respective accent slot.
- **Tokens consumed:**
  - `intent: primary` → `accent.primary` fill
  - `intent: secondary` → `accent.secondary` fill
  - `intent: tertiary` → `accent.tertiary` fill
  - `intent: neutral` → `fg.default` fill
  - Label always uses `fg.default`; value always uses `fg.default`.

#### SkillRow
- **Category:** primitive
- **Purpose:** Left-label right-rank row used in SkillsLogPanel.
- **Anatomy:**
  - `label` — skill name
  - `rank` — rank text (MASTER, EXPERT, ADVANCED)
- **Tokens consumed:** `bg.subtle`, `fg.default`, `accent.primary`
  (active rank)

#### ProcessList
- **Category:** primitive
- **Purpose:** PID + status list for maximized terminal.
- **Anatomy:**
  - `root` — list
  - `row` — PID entry
  - `pid` — PID label
  - `name` — process name
  - `status` — RUNNING/IDLE status
- **Tokens consumed:** `fg.muted`, `fg.default`, `accent.tertiary`
  (active status)

#### MiniChart
- **Category:** primitive
- **Purpose:** Small grouped bar chart.
- **Tokens consumed:** `accent.primary`, `accent.secondary`,
  `accent.tertiary`

#### HexSnapshot
- **Category:** primitive
- **Purpose:** Hex byte grid for boot screen diagnostics.
- **Anatomy:**
  - `root` — grid
  - `row` — hex row with address + bytes
- **Tokens consumed:** `fg.muted`, `fg.default`
- **Motion:** `motion.typewriter` on mount

#### Timeline
- **Category:** os
- **Purpose:** Horizontal chain of diamond nodes for portfolio
  timeline.
- **Anatomy:**
  - `root` — container
  - `track` — connecting line
  - `node` — TimelineNode slot
  - `cursor` — active position marker
- **Tokens consumed:** `border.subtle`, `accent.primary`

#### TimelineNode
- **Category:** primitive
- **Purpose:** Diamond node on the Timeline.
- **Variants:** `idle` | `active` | `visited`
- **Anatomy:**
  - `root` — diamond shape
  - `indicator` — glowing core (active only)
  - `label` — node name
  - `year` — year label (active only)
- **Tokens consumed:** `border.subtle`, `accent.primary` (active),
  `fg.muted` (label)

### Decoration and Motifs

#### MetadataTag
- **Category:** primitive
- **Purpose:** Corner tag like `MODULE_03:`, `LOG_001`,
  `PROJECT_LOG_FILE: 4492-B`.
- **Anatomy:**
  - `root` — container
  - `label` — text
- **Tokens consumed:** `accent.tertiary` (Galactic Terminal uses
  lime for these), `bg.muted`

#### AccentBar
- **Category:** primitive
- **Purpose:** Small accent-colored line used as corner marker.
- **Tokens consumed:** `accent.primary`

#### TagChipRow
- **Category:** primitive
- **Purpose:** Row of bordered tag chips (RUST_ENGINE, QUANTUM_DB).
- **Anatomy:**
  - `root` — row
  - `chip` — individual chip
- **Tokens consumed:** `border.default`, `fg.default`

#### MetadataChipRow
- **Category:** primitive
- **Purpose:** Row of labeled metadata chips (COORD / STAMP /
  STATUS) with key + value pairs.
- **Anatomy:**
  - `root` — row
  - `chip` — chip with key + value
- **Tokens consumed:** `border.default`, `fg.muted` (key),
  `fg.default` (value)

### Navigation & Layout Cards

#### NavGridCard
- **Category:** os
- **Purpose:** Full-screen menu navigation card.
- **Anatomy:**
  - `root` — card container
  - `id` — corner MetadataTag (LOC_01, USR_02)
  - `anchor` — GeometricAnchor slot
  - `label` — large label with icon
  - `status` — optional status indicator
- **Variants:** `clean` | `textured` (animated geometry)
- **Tokens consumed:** `bg.subtle`, `border.subtle`, `accent.primary`

#### GeometricAnchor
- **Category:** primitive
- **Purpose:** Wireframe/geometric shape slot inside NavGridCard.
- **Variants:** `wireframe` | `textured`
- **Tokens consumed:** `accent.primary`, `accent.secondary`
- **Motion:** `motion.geometry-rotate` (textured variant)

#### BlogCard
- **Category:** primitive
- **Purpose:** Card for blog feed entries.
- **Anatomy:**
  - `root` — container
  - `cover` — image with MetadataTag overlay
  - `meta` — date + status + KanjiCaption slot
  - `title` — card title
  - `description` — short description
- **Tokens consumed:** `bg.subtle`, `fg.default`, `fg.muted`,
  `accent.primary`

#### MissionBriefCard
- **Category:** primitive
- **Purpose:** Bordered card with checkmark header and body prose.
- **Anatomy:**
  - `root` — container
  - `header` — label with checkmark icon
  - `body` — prose content
- **Tokens consumed:** `border.accent.primary`, `fg.default`

#### CoreAttributesPanel
- **Category:** os
- **Purpose:** Grouped StatBar container for character sheet.
- **Anatomy:**
  - `root` — panel
  - `header` — title + AUTO_CALC indicator
  - `bars` — StatBar group
- **Tokens consumed:** `bg.subtle`, `border.accent.primary`

#### SkillsLogPanel
- **Category:** os
- **Purpose:** Grouped SkillRow container for character sheet.
- **Anatomy:**
  - `root` — panel
  - `header` — title
  - `rows` — SkillRow group
  - `chart` — MiniChart slot
- **Tokens consumed:** `bg.subtle`, `border.default`

### System Readout Columns

#### SystemLogColumn
- **Category:** os
- **Purpose:** Bracketed `[OK]` status column (left side of
  full-screen menu, or `//` comment-style on timeline).
- **Anatomy:**
  - `root` — column
  - `row` — log entry
- **Variants:** `bracket-status` | `comment-prefix`
- **Tokens consumed:** `fg.muted`, `accent.tertiary` (OK status)
- **Motion:** `motion.auto-scroll` for continuously appended entries

#### TelemetryColumn
- **Category:** os
- **Purpose:** `COORD_X / PWR_LVL / THERM` readout column (right
  side of full-screen menu).
- **Anatomy:**
  - `root` — column
  - `row` — key + value entry
- **Tokens consumed:** `fg.muted`, `fg.default`

#### UserSignatureBar
- **Category:** os
- **Purpose:** `CARLOS VARA // FULL STACK DEVELOPER` bottom bar on
  full-screen menu.
- **Anatomy:**
  - `root` — bar
  - `status` — status dot
  - `name` — user name
  - `role` — role text
  - `timestamp` — right-aligned timestamp
- **Tokens consumed:** `fg.muted`, `accent.tertiary` (status dot),
  `accent.primary` (name)

#### SubtitleBar
- **Category:** primitive
- **Purpose:** Under-header metadata line (VIEWING ALL DECRYPTED
  FILES // TOTAL: 042).
- **Tokens consumed:** `fg.muted`

### Boot Screen

#### BootHeader
- **Category:** os
- **Purpose:** `AETHERSYSTEM BIOS v4.0.2` header with kernel/
  uptime/ID/status subtitle.
- **Anatomy:**
  - `title` — BIOS title
  - `meta` — subtitle with kernel/uptime/ID/status
- **Tokens consumed:** `accent.primary`, `fg.muted`

#### BootLogList
- **Category:** os
- **Purpose:** Long list of `[0.000] Initializing system kernel...`
  entries.
- **Anatomy:**
  - `root` — list
  - `row` — log entry
  - `timestamp` — `[0.000]` prefix
  - `message` — log message
- **Tokens consumed:** `fg.muted`, `fg.default`
- **Motion:** `motion.typewriter` for line-by-line reveal during
  boot

#### BootContinueButton
- **Category:** primitive
- **Purpose:** `PRESS ANY KEY TO BOOT →` prompt button.
- **Tokens consumed:** `accent.primary`, `fg.on-accent.primary`
- **Motion:** `motion.pulse`

#### KeyHint
- **Category:** primitive
- **Purpose:** `[F2: SETUP]` `[F12: BOOT MENU]` keyboard hint
  indicator.
- **Tokens consumed:** `fg.muted`
