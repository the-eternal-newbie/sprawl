# /normalize-design-specs

Establish canonical documentation for Mona Lisa Overdrive, normalize
every theme's DESIGN.md against that canon, and generate missing specs
from screenshots. Produces the clean foundation that
`/import-stitch-theme` will later consume to generate TypeScript
tokens, theme CSS files, and component scaffolds.

## Usage

`/normalize-design-specs`

No arguments. This command operates on every theme it finds under
`packages/mona-lisa-overdrive/design-refs/<slug>/`.

## Context to read first

1. `AGENTS.md`
2. `docs/PROJECT_OVERVIEW.md`
3. `docs/ARCHITECTURE.md`
4. `docs/TOKENS.md`
5. `docs/COMPONENT_AUTHORING.md`
6. `docs/VERSIONS.md`
7. `.cursor/rules/00-core.mdc`
8. `.cursor/rules/10-tokens.mdc`
9. `.cursor/rules/20-components.mdc`
10. `.cursor/rules/30-os-components.mdc`
11. Every file under `packages/mona-lisa-overdrive/design-refs/`,
    including DESIGN.md files and all PNG screenshots under each
    theme's `img/` directory.

You MUST examine the screenshots with vision, not just read the
DESIGN.md files. The DESIGN.md files contain errors the screenshots
disprove.

## Background and prior decisions

This command is the output of a long architectural conversation. The
decisions below are locked and must not be relitigated.

**Decision 1 — Primitives live in CSS only.** Design token primitives
(raw color values, raw spacing values) do NOT appear in any shared
TypeScript file. They exist only inside each theme's own CSS file as
scoped custom properties. Components consume semantic tokens, never
primitives.

**Decision 2 — Galactic Terminal is the canonical reference.** When
any ambiguity arises about component anatomy, structure, or naming,
Galactic Terminal wins. However, Galactic Terminal's own DESIGN.md
contains errors that this command must fix before using it as the
reference.

**Decision 3 — Three-accent semantic intent schema.** The canonical
semantic intent list is expanded to include `accent.primary`,
`accent.secondary`, and `accent.tertiary` as separate slots, replacing
the old single `accent.solid / accent.emphasis / accent.muted` group.
Secondary and tertiary are allowed to be `N/A — theme is monochrome`
for themes that only use one accent hue.

**Decision 4 — Split canonical docs.** There are two canonical docs:
- `docs/CANONICAL_COMPONENTS.md` — components organized as Core
  (required for every theme) and Extended (opt-in based on what each
  theme visualizes).
- `docs/CANONICAL_LAYOUTS.md` — layout modes (Desktop, Immersive Deck,
  Boot) as compositions.

**Decision 5 — Kanji motif as an opt-in primitive.** Japanese
characters and phrases are a core aesthetic motif for the cyberpunk
themes. A `<KanjiCaption>` primitive exists in the core canonical
list. Each theme declares `kanji_motif: enabled | disabled` in its
metadata. Themes with it disabled render the slot as `null`; themes
with it enabled render the Japanese caption text.

**Decision 6 — Two terminal variants.**
- **UserTerminal** — dynamic content about the portfolio owner
  (mission statement, projects, bio, contact). This is the default
  terminal seen in Galactic Terminal images 14 and 18.
- **SystemTerminal** — system diagnostics, tech stack display, app
  health, theme control panel. Derived from the GalacticOS_v1.0
  variant visible in the older full-width accent titlebar screen
  (image 15 in the Galactic Terminal set). Distinguished by a
  prominent accent-colored titlebar and a bottom-docked four-tab nav
  with a fourth `MEDIA` tab.
- Both variants render via the same underlying `<Terminal>`
  primitive. They differ in which content slot is injected and which
  chrome variant wraps them.

**Decision 7 — State-intent collapse warnings.** When a theme maps
multiple state intents (success, warning, info, danger) to the same
color value, emit a warning in the normalized spec but do not reject
the theme. Monochrome themes legitimately collapse these intents and
must differentiate state through non-color affordances.

**Decision 8 — Motion lives inside MLO.** Text stream effects,
decorative animations, and OS motion all live under
`packages/mona-lisa-overdrive/src/motion/` as hooks and components.
No separate package. Themes reference motion via token names defined
in their `2.7 Motion` section, and specs must list which motion
primitives each component consumes.

**Decision 9 — Five themes total.**
| Slug              | Color scheme | DESIGN.md status | Notes |
|-------------------|--------------|------------------|-------|
| galactic-terminal | dark         | Exists, has errors (three-accent reference) | The canonical reference for structure after fixes |
| helion-nine       | dark         | Exists, has errors (wrong fg.default, wrong mono font) | Monochrome |
| onyx-protocol     | dark         | Exists, minor errors (accent.emphasis = accent.solid) | Monochrome |
| aetheric-pulse    | light        | Exists, needs surface effects section | Glassmorphic, light theme |
| sector-zero       | dark         | No DESIGN.md — generate from screenshots | Orange industrial, new fifth theme |

---

## Your job, in five phases

You operate in five strictly sequential phases. **You must stop at
the end of each phase and wait for human review before proceeding.**
Never proceed to the next phase on your own.

Work non-destructively: all output goes to `normalized/`
subdirectories or to new doc files. The original DESIGN.md files and
original screenshots must never be modified.

---

### Phase 0 — Establish canonical docs and the updated Stitch template

This is the foundation everything else depends on. Work carefully.

#### Phase 0.1 — Produce `docs/CANONICAL_COMPONENTS.md`

Examine every screenshot under
`design-refs/galactic-terminal/img/` before writing anything. You
need a complete mental inventory of what components exist before
deciding which are Core and which are Extended.

Write `packages/mona-lisa-overdrive/docs/CANONICAL_COMPONENTS.md`
with this structure:

```markdown
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

### Window System

#### Window
- **Category:** os
- **Purpose:** Draggable, resizable container for OS modules.
- **Anatomy:**
  - `root` — outer frame
  - `titlebar` — WindowTitleBar slot
  - `controls` — WindowControls slot
  - `content` — inner scrollable area
- **Variants:** `default` | `focused` | `minimized` | `maximized`
- **Tokens consumed:** `bg.subtle`, `border.default`,
  `border.accent.primary` (focused), shadow via `shadow.window`
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
- **Anatomy:** same as Window, with the titlebar rendering with
  `bg.accent.primary` background and `fg.on-accent.primary`
  foreground.
- **Tokens consumed:** `bg.accent.primary`, `fg.on-accent.primary`
  in the titlebar; otherwise Window defaults.

### Terminal Content

#### Terminal
- **Category:** os
- **Purpose:** Interactive command-line interface shown inside a
  Window.
- **Variants:**
  - **UserTerminal** — portfolio/biographical content. Three size
    variants: `compact`, `floating`, `maximized`.
  - **SystemTerminal** — system diagnostics, tech stack, app health,
    theme control. Distinguished by full-width accent titlebar and
    bottom-docked four-tab nav (TERM, ID, SCAN, MEDIA).
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
- **Tokens consumed:** Window defaults + `accent.secondary` (active
  titlebar in Galactic Terminal)

#### ScannerWidget
- **Category:** os (Window variant)
- **Purpose:** Small floating Window showing a circular radar plot
  with moving markers.
- **Anatomy:**
  - `root` — Window wrapper
  - `display` — radar circle
  - `markers` — data points
  - `readout` — stats text below
- **Tokens consumed:** `border.subtle`, `accent.primary`,
  `accent.secondary`
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
- **Tokens consumed:** accent variants differ per bar (STAMINA uses
  primary, HEALTH uses secondary, DEXTERITY uses tertiary, LUCK
  uses fg.default)

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
```

#### Phase 0.2 — Produce `docs/CANONICAL_LAYOUTS.md`

Write `packages/mona-lisa-overdrive/docs/CANONICAL_LAYOUTS.md`
describing the layout modes as compositions:

```markdown
# Canonical Layouts

> Layout modes are compositions of canonical components that form
> complete application surfaces. Each theme may visualize any
> combination of these layouts; they are not required.

## DesktopLayout

- **Structure:** TopAppBar + desktop canvas + floating Windows +
  StatusFooter
- **Window positioning:** free-form z-stacked, draggable
- **Used for:** home screen, default OS interaction
- **Required components:** TopAppBar, StatusFooter, Window (zero or
  more instances)
- **Optional widgets:** StandbyPulse (shown when no windows are
  open), MediaPlayer as MiniWindow in bottom-left

## ImmersiveDeckLayout

A family of rigid-grid layouts that replace the desktop when the
user enters a specific mode. Each sub-layout is its own composition.

### ImmersiveDeckLayout.Timeline

- **Structure:** minimal top log stream + centered horizontal
  Timeline + centered ProgressIndicator
- **Used for:** portfolio timeline navigation
- **Required components:** Timeline, TimelineNode
- **Detail overlay:** opens DetailWindow on TimelineNode activation

### ImmersiveDeckLayout.CharacterSheet

- **Structure:** split pane — left column with CharacterNameBadge +
  LevelRankBadges, right column with HeroMetric +
  CoreAttributesPanel + MissionBriefCard + SkillsLogPanel, bottom
  LoadoutSelector row
- **Used for:** professional profile display
- **Required components:** CoreAttributesPanel, SkillsLogPanel,
  MissionBriefCard

### ImmersiveDeckLayout.Reading

- **Structure:** split pane — left illustration, right content
  column with MetadataTag + HeroTitle + MetadataChipRow + Quotation
  + BodyProse + SectionDivider
- **Used for:** blog post detail view
- **Required components:** HeroTitle, Quotation, SectionDivider

### ImmersiveDeckLayout.FullScreenMenu

- **Structure:** CloseMenu button top-left, SystemLogColumn
  top-left, TelemetryColumn top-right, centered NavGridCard grid,
  UserSignatureBar bottom
- **Used for:** full-screen navigation menu
- **Required components:** NavGridCard, SystemLogColumn,
  TelemetryColumn, UserSignatureBar

### ImmersiveDeckLayout.BlogFeed

- **Structure:** CloseButton top-right, HeroTitle + SubtitleBar top,
  BlogCardGrid below
- **Used for:** blog listing
- **Required components:** HeroTitle, SubtitleBar, BlogCard

## BootLayout

- **Structure:** BootHeader + BootLogList + HexSnapshot +
  BootContinueButton + KeyHint row (no TopAppBar, no StatusFooter)
- **Used for:** BIOS-style startup sequence
- **Required components:** BootHeader, BootLogList,
  BootContinueButton
```

#### Phase 0.3 — Produce `docs/STITCH_TEMPLATE.md`

Write `packages/mona-lisa-overdrive/docs/STITCH_TEMPLATE.md`
containing the updated Stitch prompt template. Start from the
original Stitch template used to generate the current DESIGN.md
files (reconstruct from the existing files) and apply the following
modifications:

1. Section 2.2 must list the full three-accent semantic intent set:
   - `accent.primary`, `accent.secondary`, `accent.tertiary`
   - `fg.on-accent.primary`, `fg.on-accent.secondary`,
     `fg.on-accent.tertiary`
   - `border.accent.primary`, `border.accent.secondary`,
     `border.accent.tertiary`
   - `N/A — theme is monochrome` is explicitly allowed for secondary
     and tertiary accents.

2. Add a new section `2.10 — Surface Effects` for translucency/
   backdrop filters. Required fields: which intents apply a
   backdrop-filter, at what blur radius.

3. Part 3 must be structured against a canonical component list.
   The prompt should instruct Stitch to read
   `docs/CANONICAL_COMPONENTS.md` and produce one entry per core
   canonical component, plus one entry for each extended canonical
   component the theme actually visualizes. Entries for components
   not visualized must be marked
   `N/A — not shown in this theme's designs`.

4. Part 5 metadata must include:
   - `color_scheme: light | dark`
   - `kanji_motif: enabled | disabled`
   - `sprawl_project: burning-chrome` (fixed value)

5. Add a hard validation: the `mono` typography role must reference
   a font family that is actually monospace (JetBrains Mono, Fira
   Code, IBM Plex Mono, Space Mono, Geist Mono). Space Grotesk and
   Inter are explicitly NOT monospace.

6. Require the spacing scale in section 2.4 to be contiguous from
   step 0 through step 8 at minimum. No gaps allowed.

7. Section 2.9 (Deviations and Notes) must include a declaration
   of any motion effects referenced by components in Part 3.

Output the full prompt text, ready to be pasted into Stitch.

#### Phase 0.4 — STOP

Produce a summary report listing:
- Components found in Galactic Terminal screens but NOT yet in the
  canonical doc (if any — you should have captured all of them)
- Any ambiguity about component naming or categorization
- Any canonical tokens you were uncertain about

Wait for human review before proceeding to Phase 1.

---

### Phase 1 — Fix Galactic Terminal (the reference)

Only proceed after Phase 0 is reviewed and approved.

Create `design-refs/galactic-terminal/normalized/DESIGN.md` by
copying the original and applying these corrections. Verify every
color change against the actual PNG screenshots in
`design-refs/galactic-terminal/img/`.

**Critical color corrections:**
- `fg.default` must be white or near-white (sample from body text
  in images 13, 14, 18). Not magenta.
- `fg.muted` must be a neutral gray (sample from muted labels like
  `HOST:`, `KERNEL:`, `PKT_LOSS:`).
- `fg.subtle` must be a darker gray, not acid lime.

**Three-accent promotion:**
- `accent.primary` = magenta (`#FF00FF` or the hex sampled from the
  brand wordmark and active nav tab)
- `accent.secondary` = cyan (sample from the StandbyPulse orb, the
  NavTabs indicator underline, the CORE_02 health bar, the STAMP
  metadata chip)
- `accent.tertiary` = acid lime (sample from `[SYSTEM_LIVE]`,
  `SYNC_ACTIVE`, `STREAM_ACTIVE` status indicators, and the
  DEXTERITY stat bar)
- Delete the old `accent.solid / accent.emphasis / accent.muted`
  triplet and replace with the three-accent schema.

**Fg-on-accent additions:**
- `fg.on-accent.primary` = black or near-black (for text on magenta
  backgrounds like the DetailWindow titlebar)
- `fg.on-accent.secondary` = dark for cyan backgrounds
- `fg.on-accent.tertiary` = dark for lime backgrounds

**Border accent promotions:**
- Split `border.accent` into `border.accent.primary`,
  `border.accent.secondary`, `border.accent.tertiary` matching the
  accent slots.

**Metadata corrections:**
- `sprawl_project` = `burning-chrome` (fix drift from
  `sprawl-portfolio`)
- Add `color_scheme: dark`
- Add `kanji_motif: enabled` (Galactic Terminal is the cyberpunk
  reference; it embraces the motif)

**Spacing scale:**
- Fill in contiguous steps 0 through 8. The current scale skips
  several steps.

**Component inventory:**
- Replace Part 3 entirely. For every Core canonical component, write
  a theme-specific entry following the canonical anatomy. For
  Extended canonical components visible in any Galactic Terminal
  screenshot, also write an entry. Mark anything not visualized as
  `N/A — not shown in this theme's designs`.
- The entries must reference the canonical component by name and
  list theme-specific variant/state/token-consumption details only.
  Do not redefine anatomy — it's in the canonical doc.

**State-intent collapse check:**
- If any of `success.solid`, `warning.solid`, `info.solid`,
  `danger.solid` resolve to the same value, add the warning block
  at the top of the normalized file.

**Terminal variant clarification:**
- Galactic Terminal visualizes UserTerminal in compact, floating,
  and maximized variants. Add SystemTerminal to the inventory only
  if a Galactic Terminal screenshot shows the GalacticOS_v1.0
  variant (full-width accent titlebar, bottom-docked four-tab nav
  with MEDIA tab).

Write the normalized file and produce
`design-refs/galactic-terminal/normalized/DIFF.md` explaining every
change made with line references to the original.

**STOP.** Wait for human review before proceeding.

---

### Phase 2 — Normalize the other existing themes

Only proceed after Phase 1 is reviewed and approved.

For each of `helion-nine`, `onyx-protocol`, `aetheric-pulse`, in
order:

Create `design-refs/<slug>/normalized/DESIGN.md` starting from the
original.

**Universal corrections for all three:**
1. Verify `fg.default` against screenshots. If the original says
   the accent color but the screenshots show white/near-white body
   text, fix it. Helion-Nine is the known offender.
2. Promote to the three-accent schema. If the theme is monochrome
   (Helion-Nine, Onyx Protocol), mark `accent.secondary` and
   `accent.tertiary` as `N/A — theme is monochrome`. For
   Aetheric Pulse, identify whether it has secondary/tertiary
   accents by sampling the screenshots.
3. Split `border.accent` and `fg.on-accent` into primary/secondary/
   tertiary forms.
4. Fill in contiguous spacing scale 0–8.
5. Add `color_scheme`, `kanji_motif`, and `sprawl_project` to Part
   5 metadata. Decide `kanji_motif` per theme:
   - Helion-Nine: `enabled` (industrial tech-noir fits the motif)
   - Onyx Protocol: `enabled` (tactical cyberpunk fits the motif)
   - Aetheric Pulse: decide based on whether the screenshots show
     Japanese characters. If unclear, default to `enabled` and
     flag for human review.
6. Replace Part 3 with entries referencing the canonical component
   list, same rules as Phase 1.
7. Detect state-intent collapse and emit the warning block if
   triggered.

**Helion-Nine specific fix:**
- `mono` typography role is currently Space Grotesk. Change it to
  JetBrains Mono (matching the other dark themes). Do NOT change
  any other typography roles — this is the only typography fix
  for Helion-Nine per the user's explicit instruction.

**Onyx Protocol specific fix:**
- `accent.emphasis` is currently identical to `accent.solid`. In
  the three-accent promotion, set `accent.primary` to the signal
  red, mark `accent.secondary` and `accent.tertiary` as N/A, and
  introduce a hover/focus differentiation via a brighter variant
  stored inside the theme's CSS only (not as a separate semantic
  intent).

**Aetheric Pulse specific fixes:**
- Add section `2.10 — Surface Effects` with:
```
  | Surface intent | Effect                          |
  |----------------|---------------------------------|
  | bg.canvas      | backdrop-filter: blur(12px)     |
  | bg.subtle      | backdrop-filter: blur(8px)      |
```
- In the WindowControls component entry, note that Aetheric Pulse
  uses the `traffic-lights` variant (macOS-style dots), not the
  default `glyph` variant.
- Sample the screenshots for Aetheric Pulse's accent colors. The
  theme may have a secondary accent (mint/cyan) and tertiary (gold/
  lime) visible in the ColorChipRow. If so, fill those slots
  instead of marking them N/A.

For each theme, write the normalized file and produce a
`DIFF.md` in the same directory.

**STOP.** Wait for human review before proceeding.

---

### Phase 3 — Generate Sector Zero from screenshots

Only proceed after Phase 2 is reviewed and approved.

Sector Zero has screenshots under
`design-refs/sector-zero/img/` but no DESIGN.md. Generate one from
scratch.

1. Examine every screenshot carefully. Sample colors directly from
   the pixels. The theme's visible characteristics:
   - Canvas background: charcoal (sample to confirm, not pure
     black)
   - Primary accent: industrial orange (roughly `#FF4500` range)
   - Typography: consistent with other dark themes
   - Brand: `SECTOR_ZERO`, `SZ`, `ZERO_PROTOCOL`, `INDUSTRIAL
     ZONE`, `SYSTEM@SZ:~$`

2. Write `design-refs/sector-zero/normalized/DESIGN.md` following
   the exact structure of the Stitch template from Phase 0.3 (which
   is the updated canonical structure).

3. Part 1 creative brief: infer a tone consistent with the visible
   brand. "Heavy-engineering tech-noir for industrial-zone
   operations" is a reasonable direction. Final wording is yours.

4. Part 2 technical specification:
   - Extract primitives directly from sampled pixels.
   - Map to the three-accent schema. Sector Zero appears
     monochrome — mark secondary and tertiary as
     `N/A — theme is monochrome` unless screenshots disprove this.
   - For values you cannot determine (specific motion timings,
     exact shadows), use conservative defaults and flag them in
     section 2.9 as `INFERRED — needs human confirmation`.

5. Part 3 component inventory: address every Core canonical
   component. For Extended canonical components, only include
   those visible in Sector Zero screenshots.

6. Part 5 metadata:
   - `color_scheme: dark`
   - `kanji_motif: enabled` (industrial cyberpunk fits the motif)
   - `sprawl_project: burning-chrome`
   - `base_theme: null`

7. Produce
   `design-refs/sector-zero/normalized/GENERATION_NOTES.md`
   listing every value that was sampled directly vs. every value
   that was inferred. This is the review document for the human.

**STOP.** Wait for human review before proceeding.

---

### Phase 4 — Cross-theme consistency audit

Only proceed after Phase 3 is reviewed and approved.

Produce `design-refs/AUDIT.md` with:

1. A matrix of every canonical semantic intent × every theme,
   showing what value each theme assigned. This is the quickest
   way to spot inconsistencies.

2. A matrix of every canonical component × every theme, showing
   presence (`✓`), absence (`✗ N/A`), or missing (`? not
   addressed`). Any `? not addressed` cell is a bug.

3. A list of themes that triggered state-intent collapse warnings.

4. A list of themes that use `kanji_motif: enabled` vs. `disabled`.

5. A list of any theme that references a token name that doesn't
   exist in the canonical intent set.

6. Any other cross-theme anomaly you notice.

No file modifications in this phase. It's an audit only.

**STOP.** The command ends here. The human reviews AUDIT.md and
decides whether to re-run earlier phases with corrections.

---

## Global rules

- **Non-destructive.** Never modify original DESIGN.md files or
  original PNGs. All output goes to `normalized/` subdirectories
  or new doc files under `docs/`.
- **Verify against pixels.** When in doubt about a color, open the
  PNG and sample it. Never trust the existing DESIGN.md blindly.
- **Flag inferences.** Anything you guessed must be labeled as
  inferred, not presented as fact.
- **No code generation.** This command produces documentation and
  normalized specs only. TypeScript tokens, theme CSS, and React
  components are generated by a separate command
  (`/import-stitch-theme`) that runs after all normalized specs
  are approved.
- **Stop at phase boundaries.** Do not proceed past a `STOP.`
  marker without explicit human confirmation.
- **One phase per session if needed.** If a phase is large, it is
  acceptable to complete it in multiple turns within the same
  phase, but do not cross a phase boundary.

## Output structure after the command completes

```
packages/mona-lisa-overdrive/
├── docs/
│   ├── CANONICAL_COMPONENTS.md         ← new, Phase 0
│   ├── CANONICAL_LAYOUTS.md            ← new, Phase 0
│   └── STITCH_TEMPLATE.md              ← new, Phase 0
└── design-refs/
    ├── AUDIT.md                         ← new, Phase 4
    ├── galactic-terminal/
    │   ├── DESIGN.md                    ← untouched
    │   ├── img/                         ← untouched
    │   └── normalized/
    │       ├── DESIGN.md                ← new, Phase 1
    │       └── DIFF.md                  ← new, Phase 1
    ├── helion-nine/
    │   └── normalized/
    │       ├── DESIGN.md                ← new, Phase 2
    │       └── DIFF.md                  ← new, Phase 2
    ├── onyx-protocol/
    │   └── normalized/
    │       ├── DESIGN.md                ← new, Phase 2
    │       └── DIFF.md                  ← new, Phase 2
    ├── aetheric-pulse/
    │   └── normalized/
    │       ├── DESIGN.md                ← new, Phase 2
    │       └── DIFF.md                  ← new, Phase 2
    └── sector-zero/
        ├── img/                         ← untouched
        └── normalized/
            ├── DESIGN.md                ← new, Phase 3
            └── GENERATION_NOTES.md      ← new, Phase 3
```