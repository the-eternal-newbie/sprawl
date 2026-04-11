# DESIGN.md — Aetheric Pulse

## Part 1 — Creative Brief (human-readable)

### 1.1 Theme Identity
- **Name:** Aetheric Pulse
- **Slug:** aetheric-pulse
- **Creative North Star:** The Luminous Curator — an ethereal, high-fidelity interface that feels like light and data woven into a seamless, technological fabric.
- **Mood keywords:** Ethereal, Translucent, Technological, Retro-futuristic, Weightless, Luminous.
- **Reference aesthetics:** Glassmorphism, holographic HUDs, soft-synth UI, vaporwave-lite, high-end laboratory equipment from the future.

### 1.2 Philosophy
Aetheric Pulse rejects the heavy, opaque shadows and rigid borders of traditional "dark mode" or "flat" design. It embraces transparency as a primary depth cue, using glassmorphism and background blurs to suggest a multi-layered digital environment that isn't bound by physical mass.

The theme avoids harsh, high-contrast black-on-white patterns. Instead, it utilizes subtle chromatic shifts and luminous accents to guide the eye. It intentionally avoids the "industrial" look in favor of a "celestial" one — where the OS feels like an organic extension of thought rather than a mechanical tool.

### 1.3 Voice and Tone
The text feels serene and sophisticated. It is clinical in its precision but poetic in its presentation. Data is not just "displayed"; it is "projected." The presentation style is akin to a state-of-the-art research terminal or a high-latency celestial HUD, where every piece of information has room to breathe.

---

## Part 2 — Technical Specification (machine-readable)

### 2.1 Color Primitives
| Primitive name  | Value (hex)            | Scale step | Notes |
|-----------------|------------------------|------------|-------|
| aether-white    | #F8FAFC                | 50         | Canvas base (near-white) |
| aether-lavender | #D8B4FE                | 300        | Soft purple tint for surface washes |
| aether-violet   | #7C3AED                | 600        | Deep brand violet — primary interactive accent |
| aether-indigo   | #4338CA                | 700        | Secondary blue-indigo accent |
| space-slate     | #0F172A                | 900        | Dark text base |
| misty-grey      | #94A3B8                | 400        | Muted text |
| glass-white     | #FFFFFF                | N/A        | Glass surface base |
| signal-pink     | #F472B6                | 400        | Tertiary warm pink accent |
| signal-green    | #4ADE80                | 400        | Success state |
| signal-gold     | #FBBF24                | 400        | Warning state |
| signal-blue     | #38BDF8                | 400        | Info state |

### 2.2 Semantic Color Intents
| Intent                    | Primitive reference            | Final value |
|---------------------------|--------------------------------|-------------|
| bg.canvas                 | aether-white-50                | #F8FAFC     |
| bg.subtle                 | glass-white (10% opt)          | rgba(255,255,255,0.1) |
| bg.muted                  | misty-grey (5% opt)            | rgba(148,163,184,0.05) |
| bg.emphasis               | aether-lavender (20% opt)      | rgba(216,180,254,0.2) |
| fg.default                | space-slate-900                | #0F172A     |
| fg.muted                  | misty-grey-400                 | #94A3B8     |
| fg.subtle                 | aether-indigo (50% opt)        | rgba(67,56,202,0.5) |
| fg.on-accent.primary      | aether-white-50                | #F8FAFC     |
| fg.on-accent.secondary    | aether-white-50                | #F8FAFC     |
| fg.on-accent.tertiary     | space-slate-900                | #0F172A     |
| accent.primary            | aether-violet-600              | #7C3AED     |
| accent.secondary          | aether-indigo-700              | #4338CA     |
| accent.tertiary           | signal-pink-400                | #F472B6     |
| border.subtle             | glass-white (20% opt)          | rgba(255,255,255,0.2) |
| border.default            | misty-grey (30% opt)           | rgba(148,163,184,0.3) |
| border.strong             | aether-indigo-700              | #4338CA     |
| border.accent.primary     | aether-violet-600              | #7C3AED     |
| border.accent.secondary   | aether-indigo-700              | #4338CA     |
| border.accent.tertiary    | signal-pink-400                | #F472B6     |
| danger.solid              | signal-pink-400                | #F472B6     |
| success.solid             | signal-green-400               | #4ADE80     |
| warning.solid             | signal-gold-400                | #FBBF24     |
| info.solid                | signal-blue-400                | #38BDF8     |

### 2.3 Typography
| Role     | Font family     | Weight | Size     | Line-height | Letter-spacing |
|----------|-----------------|--------|----------|-------------|----------------|
| display  | Space Grotesk   | 700    | 4rem     | 1.1         | -0.02em        |
| headline | Space Grotesk   | 600    | 2.5rem   | 1.15        | -0.01em        |
| title    | Space Grotesk   | 600    | 1.5rem   | 1.2         | 0              |
| body     | Inter           | 400    | 1rem     | 1.5         | 0              |
| body-sm  | Inter           | 400    | 0.875rem | 1.45        | 0              |
| label    | Space Grotesk   | 500    | 0.75rem  | 1.3         | 0.05em         |
| mono     | JetBrains Mono  | 400    | 0.875rem | 1.5         | 0              |

- **Fallback stacks:** 'Space Grotesk', sans-serif; 'Inter', sans-serif; 'JetBrains Mono', monospace
- **Font sources:** Google Fonts

### 2.4 Spacing Scale
| Step | Value   | Typical usage in this theme |
|------|---------|-----------------------------|
| 0    | 0       | —                           |
| 1    | 0.25rem | Internal button spacing     |
| 2    | 0.5rem  | Component internal padding  |
| 3    | 0.75rem | Stacked element gaps        |
| 4    | 1rem    | Default layout padding      |
| 5    | 1.5rem  | Window section spacing      |
| 6    | 2rem    | Hero element spacing        |
| 7    | 2.5rem  | Large section spacing       |
| 8    | 3rem    | Layout margins              |

### 2.5 Radii
| Token       | Value   | Usage                         |
|-------------|---------|-------------------------------|
| radius.none | 0       | Hard-coded terminal grids     |
| radius.sm   | 4px     | Small system widgets          |
| radius.md   | 12px    | Buttons, internal components  |
| radius.lg   | 24px    | Main OS Windows, panels       |
| radius.full | 9999px  | Pills, status indicators      |

### 2.6 Elevation / Shadows
| Token         | Value                                   | Usage                |
|---------------|-----------------------------------------|----------------------|
| shadow.sm     | 0 2px 4px rgba(0,0,0,0.05)              | Hovered small icons  |
| shadow.window | 0 20px 40px -10px rgba(124,58,237,0.15) | Floating aether windows |
| shadow.inset  | inset 0 2px 4px rgba(0,0,0,0.02)        | Terminal inputs      |

### 2.7 Motion
| Token                  | Duration    | Easing                         | Usage              |
|------------------------|-------------|--------------------------------|--------------------|
| motion.window.open     | 350ms       | cubic-bezier(0.16, 1, 0.3, 1) | Soft scale up & fade |
| motion.window.close    | 250ms       | cubic-bezier(0.16, 1, 0.3, 1) | Soft scale down & fade |
| motion.hover           | 200ms       | ease-out                       | Opacity shifts     |
| motion.caret.blink     | 1200ms      | steps(1, end)                  | Calm terminal pulse |
| motion.glitch          | N/A         | —                              | Not used in this ethereal theme |
| motion.pulse           | 2s          | ease-in-out                    | Accent glows       |
| motion.ring-expand     | 4s          | ease-out                       | StandbyPulse ring expansion |
| motion.radar-sweep     | 3s          | linear                         | Scanner rotation   |
| motion.typewriter      | 50ms/char   | linear                         | Boot log reveal    |
| motion.auto-scroll     | continuous  | linear                         | Log feed ticker    |
| motion.geometry-rotate | 8s          | linear                         | NavGridCard shape rotation |
| motion.scanline        | N/A         | —                              | Not used in this light theme |
| motion.phase-in        | 300ms       | ease-out                       | HeroTitle mount    |

### 2.8 OS-Specific Tokens
| Token                    | Value   | Notes                  |
|--------------------------|---------|------------------------|
| window.chrome.height     | 48px    | Thick glass titlebar   |
| window.body.padding      | 24px    | Airy internal content  |
| window.border.width      | 1.5px   | Luminous white outline |
| taskbar.height           | 64px    | Bottom navigation bar  |
| dock.icon.size           | 40px    | System dock icons      |
| desktop.icon.grid        | 100px   | Wide icon distribution |
| boot.scanline.opacity    | 0.02    | Extremely faint light effect |
| terminal.caret.blink     | 1.2s    | Calm pulse rate        |

### 2.9 Deviations and Notes
- **Glassmorphism:** All window and panel surfaces implement backdrop-filter blur (see section 2.10). This is the defining visual characteristic of Aetheric Pulse.
- **Accents:** This theme relies on soft gradients (aether-lavender → aether-violet) for decorative borders and hover states. Interactive elements use the deep aether-violet (#7C3AED), not the light lavender (#D8B4FE).
- **Typography:** Display roles are exclusively Space Grotesk; body text uses Inter for readability on the light canvas.
- **Polychromatic palette:** Three distinct accent hues (violet, indigo, pink) are used for data-viz differentiation (StatBar intents, ColorChipRow, MiniChart).
- **Light theme inversion:** Unlike other Sprawl themes, fg.default is dark (#0F172A) and bg.canvas is near-white (#F8FAFC). All accent/border values must maintain sufficient contrast against a light background.
- **WindowControls:** This theme uses the `traffic-lights` variant (macOS-style colored dots: red/yellow/green) rather than the glyph variant used by other themes.

Motion primitives used by this theme:
- `motion.window.open` / `motion.window.close` — CSS transition, soft spring ease for open, slightly faster dismiss
- `motion.hover` — CSS transition, 200ms ease-out opacity shift on state change
- `motion.caret.blink` — CSS animation, 1.2s step blink for terminal cursor (slower, calmer than GT)
- `motion.glitch` — N/A (not used — this ethereal theme has no chromatic aberration effects)
- `motion.pulse` — CSS animation, 2s ease-in-out scale + opacity for StandbyPulse orb and BootContinueButton
- `motion.ring-expand` — CSS animation, 4s expanding concentric rings on StandbyPulse
- `motion.radar-sweep` — CSS animation, 3s rotating sweep line on ScannerWidget (if used)
- `motion.typewriter` — JS-driven, character-by-character reveal at 50ms/char for BootLogList and HexSnapshot
- `motion.auto-scroll` — JS-driven, continuous scroll for SystemLogFeed and SystemLogColumn
- `motion.geometry-rotate` — CSS animation, 8s continuous rotation for GeometricAnchor shapes
- `motion.scanline` — N/A (not used — light theme has no CRT overlay)
- `motion.phase-in` — CSS transition, 300ms fade+translate for HeroTitle on mount

### 2.10 Surface Effects

This theme uses glassmorphism as its primary depth mechanism.

| Surface role     | backdrop-filter          | background                | Notes |
|------------------|--------------------------|---------------------------|-------|
| Window (default) | blur(12px) saturate(1.2) | rgba(255,255,255,0.6)     | Primary glass surface |
| Window (focused) | blur(16px) saturate(1.3) | rgba(255,255,255,0.75)    | Increased clarity when focused |
| TopAppBar        | blur(12px)               | rgba(248,250,252,0.8)     | Semi-opaque navigation |
| StatusFooter     | blur(8px)                | rgba(248,250,252,0.7)     | Bottom glass strip |
| Dropdown/Menu    | blur(12px)               | rgba(255,255,255,0.85)    | Popup menus |

All glassmorphic surfaces include a 1.5px border using `border.subtle` (rgba(255,255,255,0.2)) for edge definition.
Gradient accents: Some surfaces use a subtle aether-lavender → aether-violet gradient on borders or hover states.

---

## Part 3 — Component Inventory

### CORE CANONICAL COMPONENTS

#### Component: TopAppBar
- **Category:** os
- **Purpose:** Persistent top strip containing brand, nav tabs, and utility cluster.
- **Variants visible in this theme:**
  - Fixed full-width glassmorphic bar at viewport top, centered layout
- **States shown:** default (always visible in Desktop/Immersive layouts)
- **Tokens consumed:**
  - `bg`: bg.canvas with backdrop-filter blur(12px) per section 2.10
  - `fg`: fg.default
  - `border`: border.subtle (bottom edge)
- **Motion consumed:** none
- **Behavioral notes:** Pastel-on-light aesthetic. Absent in Boot layout. Glassmorphic — see section 2.10.

#### Component: BrandMark
- **Category:** os
- **Purpose:** Sparkle/atom icon + "AETHERIC_OS" wordmark in violet.
- **Variants visible in this theme:**
  - Glyph + wordmark (sparkle icon, AETHERIC_OS text)
- **States shown:** default
- **Tokens consumed:**
  - `glyph`: accent.primary (#7C3AED)
  - `wordmark`: accent.primary (#7C3AED)
- **Motion consumed:** none

#### Component: NavTabs
- **Category:** os
- **Purpose:** TERMINAL, IDENTITY, SCANNER navigation tabs.
- **Variants visible in this theme:**
  - Three tabs: TERMINAL (active, violet pill background), IDENTITY, SCANNER
- **States shown:** active (TERMINAL shown active with violet pill), inactive
- **Tokens consumed:**
  - `tab.inactive`: fg.muted (#94A3B8)
  - `tab.active`: fg.on-accent.primary (#F8FAFC) with bg.emphasis pill or accent.primary pill
  - `indicator`: accent.primary (#7C3AED — violet active indicator)
- **Motion consumed:** motion.hover

#### Component: UtilityCluster
- **Category:** os
- **Purpose:** Right-side cluster: sector badge, coordinates, clock, icons, menu.
- **Variants visible in this theme:**
  - CORE_NEBULA_01 badge in violet, coordinates in muted, clock in muted, icons, MENU button
- **States shown:** default
- **Tokens consumed:**
  - `sector`: accent.primary (#7C3AED — sector badge)
  - `coordinates`: fg.muted (#94A3B8)
  - `clock`: fg.muted (#94A3B8)
  - `menu`: fg.default (#0F172A)
- **Motion consumed:** none

#### Component: StatusFooter
- **Category:** os
- **Purpose:** Bottom glassmorphic strip with streaming label, log entries, sync indicator.
- **Variants visible in this theme:**
  - Single-row footer: STREAMING_LOAD label, log entries, RESONANCE_ACTIVE sync indicator
- **States shown:** default (always visible in Desktop layout)
- **Tokens consumed:**
  - `feed.label`: accent.primary (#7C3AED — STREAMING_LOAD label)
  - `feed.entries`: fg.muted (#94A3B8 — timestamped log entries)
  - `sync`: accent.primary (#7C3AED — RESONANCE_ACTIVE ●)
- **Motion consumed:** motion.auto-scroll (feed ticker)
- **Behavioral notes:** Glassmorphic surface — see section 2.10.

#### Component: Window
- **Category:** os
- **Purpose:** Draggable, resizable glassmorphic container for Terminal and other modules.
- **Variants visible in this theme:**
  - `default`, `focused`, `maximized`
  - `titleBarIntent`: default (most windows), accent-primary (DetailWindow)
- **States shown:** active, floating, maximized
- **Tokens consumed:**
  - `root.bg`: glassmorphic — see section 2.10
  - `root.border`: border.subtle; border.accent.primary (#7C3AED) when focused
  - `root.shadow`: shadow.window (violet-tinted glow)
  - `root.radius`: radius.lg (24px — soft rounded corners)
  - `titlebar.bg`: resolved by titleBarIntent (default → glassmorphic surface)
- **Motion consumed:** motion.window.open, motion.window.close
- **Behavioral notes:** Uses rounded corners (radius.lg = 24px), not clip-path. Glassmorphic — see section 2.10.

#### Component: WindowTitleBar
- **Category:** os
- **Purpose:** Glassmorphic chrome strip at top of a Window.
- **Variants visible in this theme:**
  - Standard: traffic-light dots + title text (most windows)
  - Accent: violet-tinted titlebar (DetailWindow with accent-primary intent)
- **States shown:** default
- **Tokens consumed:**
  - `bg`: glassmorphic (default), accent.primary (#7C3AED when titleBarIntent is accent-primary)
  - `fg`: fg.default (#0F172A default), fg.on-accent.primary (#F8FAFC when accent)
  - Traffic-light dots visible at top-left (WindowControls traffic-lights variant)

#### Component: WindowControls
- **Category:** os
- **Purpose:** Minimize, maximize, close controls.
- **Variants visible in this theme:**
  - `traffic-lights` variant — macOS-style colored dots (red/yellow/green)
- **States shown:** default, hover
- **Tokens consumed:**
  - `close`: danger.solid (#F472B6 — red dot)
  - `minimize`: warning.solid (#FBBF24 — yellow dot)
  - `maximize`: success.solid (#4ADE80 — green dot)
- **Motion consumed:** motion.hover
- **Behavioral notes:** This theme exclusively uses the `traffic-lights` variant, not the glyph variant.

#### Component: MiniWindow
- **Category:** os
- **Purpose:** Compact glassmorphic widget for persistent modules.
- **Variants visible in this theme:**
  - Small docked position, compact titlebar with close control only
- **States shown:** default
- **Tokens consumed:** same as Window defaults (glassmorphic, rounded corners)
- **Motion consumed:** motion.window.open

#### Component: DetailWindow
- **Category:** os
- **Purpose:** Accent-titled window for content detail views.
- **Variants visible in this theme:**
  - `titleBarIntent`: accent-primary (violet-tinted titlebar)
- **States shown:** default (open overlay)
- **Tokens consumed:**
  - `titlebar.bg`: accent.primary (#7C3AED)
  - `titlebar.fg`: fg.on-accent.primary (#F8FAFC)
  - Rest: Window defaults (glassmorphic body)

#### Component: Terminal
- **Category:** os
- **Purpose:** Interactive CLI rendered inside a Window.
- **Variants visible in this theme:**
  - **UserTerminal** — light-background terminal with dark text. ASCII art, KV list, prompt.
  - **SystemTerminal** — (if present) full-screen variant with accent-primary titlebar
- **States shown:** awaiting input, active
- **Tokens consumed:**
  - `root.bg`: bg.canvas (#F8FAFC — light background, consistent with this light theme)
  - `fg`: fg.default (#0F172A — dark body text), fg.muted (#94A3B8 — labels)
  - `accent`: accent.primary (#7C3AED — section headers, prompt prefix, caret)
- **Motion consumed:** motion.caret.blink
- **Behavioral notes:** Light-on-light terminal. Text is dark on a white/near-white surface, consistent with the overall light theme identity.

#### Component: AsciiArtBlock
- **Category:** primitive
- **Purpose:** Line-art building illustration (outlined/wireframe style) in terminal header.
- **Variants visible in this theme:**
  - Wireframe/outlined building art, AETHER_CORE1 caption in violet
- **States shown:** default
- **Tokens consumed:**
  - `art`: accent.primary (#7C3AED — violet line art)
  - `caption`: fg.muted (#94A3B8 — label below)
- **Motion consumed:** none (no glitch in this theme)

#### Component: KeyValueList
- **Category:** primitive
- **Purpose:** Label + value pairs: USER, HOST, KERNEL, OPERATOR, etc.
- **Variants visible in this theme:**
  - Standard rows with muted keys and dark values
- **States shown:** default
- **Tokens consumed:**
  - `key`: fg.muted (#94A3B8)
  - `value`: fg.default (#0F172A)

#### Component: ColorChipRow
- **Category:** primitive
- **Purpose:** Row of 4 small colored squares under KeyValueList.
- **Variants visible in this theme:**
  - 4 chips in polychromatic colors: blue, teal, pink, green
- **States shown:** default
- **Tokens consumed:**
  - Chips use accent.primary (#7C3AED), accent.secondary (#4338CA), accent.tertiary (#F472B6), success.solid (#4ADE80)

#### Component: SectionHeader
- **Category:** primitive
- **Purpose:** Terminal-style header with `#` prefix.
- **Variants visible in this theme:**
  - `#` prefix in violet + dark label text
- **States shown:** default
- **Tokens consumed:**
  - `prefix`: accent.primary (#7C3AED)
  - `label`: fg.default (#0F172A)

#### Component: PromptLine
- **Category:** primitive
- **Purpose:** Interactive command prompt.
- **Variants visible in this theme:**
  - Full prompt: `ARCHITECT@AETHER:~$` in violet, dark input text, violet caret
- **States shown:** awaiting input
- **Tokens consumed:**
  - `prefix`: accent.primary (#7C3AED — violet prompt)
  - `input`: fg.default (#0F172A)
  - `caret`: accent.primary (#7C3AED — violet block cursor)
- **Motion consumed:** motion.caret.blink (1200ms — calm pulse)

#### Component: HeroTitle
- **Category:** primitive
- **Purpose:** Massive display text: SYSTEM_STATISTICS, CORE_ATTRIBUTES.
- **Variants visible in this theme:**
  - fg.default variant (dark text on light canvas — SYSTEM_STATISTICS)
- **States shown:** default
- **Tokens consumed:**
  - `text`: fg.default (#0F172A)
- **Motion consumed:** optional motion.phase-in

#### Component: SectionDivider
- **Category:** primitive
- **Purpose:** Horizontal rule between content sections.
- **Variants visible in this theme:**
  - Subtle variant (light divider line)
- **States shown:** default
- **Tokens consumed:**
  - `subtle`: border.subtle (rgba(255,255,255,0.2))
  - `accent`: border.accent.primary (#7C3AED)

#### Component: KanjiCaption
N/A — this theme declares `kanji_motif: disabled`. No Japanese text visible in designs.

#### Component: Quotation
- **Category:** primitive
- **Purpose:** Left-bordered quote block.
- **Variants visible in this theme:**
  - Violet left border, no KanjiCaption (kanji_motif disabled)
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary (#7C3AED)
  - `quote`: fg.default (#0F172A)

#### Component: Button
- **Category:** primitive
- **Purpose:** Standard action button.
- **Variants visible in this theme:**
  - `primary`: violet bg + white text (PRESS ANY KEY TO BOOT visible in boot screen)
  - `outlined`: violet border + violet text
- **States shown:** default, hover
- **Tokens consumed:**
  - `primary.bg`: accent.primary (#7C3AED)
  - `primary.fg`: fg.on-accent.primary (#F8FAFC)
  - `outlined.border`: border.accent.primary (#7C3AED)
  - `outlined.fg`: accent.primary (#7C3AED)
- **Motion consumed:** motion.hover

#### Component: IconButton
- **Category:** primitive
- **Purpose:** Icon-only buttons: icons in UtilityCluster, media controls.
- **Variants visible in this theme:**
  - `ghost`: transparent bg, icon in fg.muted → fg.default on hover
  - `filled`: accent.primary bg (#7C3AED) for play button
- **States shown:** default, hover, active
- **Tokens consumed:**
  - `ghost`: fg.muted (#94A3B8) → fg.default (#0F172A)
  - `filled.bg`: accent.primary (#7C3AED)
  - `filled.fg`: fg.on-accent.primary (#F8FAFC)
- **Motion consumed:** motion.hover

#### Component: Input
- **Category:** primitive
- **Purpose:** Single-line text input with glassmorphic background.
- **Variants visible in this theme:**
  - Light glassmorphic input field
- **States shown:** default, focus
- **Tokens consumed:**
  - `bg`: bg.muted (glassmorphic)
  - `fg`: fg.default (#0F172A)
  - `border`: border.default; border.accent.primary (#7C3AED) on focus
- **Behavioral notes:** Glassmorphic — backdrop-filter inherited from parent surface.

#### Component: SearchInput
N/A — not shown in this theme's designs.

#### Component: Label
- **Category:** primitive
- **Purpose:** Small uppercase label text throughout the UI.
- **Variants visible in this theme:**
  - Standard muted labels (CPU_LOAD, RES_USAGE, etc.)
- **States shown:** default
- **Tokens consumed:**
  - `fg`: fg.muted (#94A3B8)

#### Component: Badge
- **Category:** primitive
- **Purpose:** Pill-shaped status label.
- **Variants visible in this theme:**
  - `accent`: FLOWING badge (violet bg, white text)
- **States shown:** default
- **Tokens consumed:**
  - `accent.bg`: accent.primary (#7C3AED), `accent.fg`: fg.on-accent.primary (#F8FAFC)

#### Component: Clock
- **Category:** primitive
- **Purpose:** Time display in UtilityCluster.
- **Variants visible in this theme:**
  - Muted or violet time text
- **States shown:** default
- **Tokens consumed:**
  - `time`: fg.muted (#94A3B8) or accent.primary (#7C3AED)

#### Component: LocaleSelector
N/A — not clearly visible in this theme's designs.

#### Component: VolumeSlider
- **Category:** primitive
- **Purpose:** Horizontal volume control.
- **Variants visible in this theme:**
  - Inline slider with violet fill
- **States shown:** default, interacting
- **Tokens consumed:**
  - `track`: bg.muted
  - `fill`: accent.primary (#7C3AED)
  - `label`: fg.muted (#94A3B8)

### EXTENDED CANONICAL COMPONENTS

#### Component: IdentityCard
- **Category:** os (Window variant)
- **Purpose:** Floating ID card with portrait and metadata footer.
- **Variants visible in this theme:**
  - `titleBarIntent`: accent-secondary (indigo titlebar)
- **States shown:** default
- **Tokens consumed:**
  - `titlebar.bg`: accent.secondary (#4338CA — resolved via titleBarIntent)
  - `titlebar.fg`: fg.on-accent.secondary (#F8FAFC)
  - `footer`: fg.default (#0F172A — NAME), fg.muted (#94A3B8 — TYPE)
- **Behavioral notes:** Glassmorphic body, rounded corners per Window defaults.

#### Component: ScannerWidget
- **Category:** os (Window variant)
- **Purpose:** Circular radar plot: SCANNING_SECTOR.
- **Variants visible in this theme:**
  - `titleBarIntent`: default (glassmorphic titlebar)
- **States shown:** scanning (active)
- **Tokens consumed:**
  - `display.border`: border.subtle (radar circles)
  - `display.sweep`: accent.secondary (#4338CA — indigo sweep line)
  - `markers`: accent.primary (#7C3AED — violet dot), accent.tertiary (#F472B6 — pink dot)
  - `readout`: fg.muted (#94A3B8)
- **Motion consumed:** motion.radar-sweep

#### Component: StandbyPulse
- **Category:** os
- **Purpose:** Centerpiece idle visualization: concentric rings + soft lavender/blue orb + PULSE SYNCHRONIZATION ACTIVE label.
- **States shown:** idle (default desktop state)
- **Tokens consumed:**
  - `orb`: accent.primary (#7C3AED — soft violet/lavender glow center)
  - `rings`: border.subtle (concentric circles in soft gray/lavender)
  - `label`: fg.muted (#94A3B8 — PULSE SYNCHRONIZATION ACTIVE)
- **Motion consumed:** motion.pulse (orb), motion.ring-expand (rings)
- **Behavioral notes:** Very soft, ethereal effect. Rings are translucent lavender, not harsh neon. The orb uses a gradient from aether-lavender to aether-violet.

#### Component: MediaPlayer
- **Category:** os (Window variant)
- **Purpose:** Media playback — floating Window or MiniWindow variant.
- **Variants visible in this theme:**
  - Glassmorphic floating player with cover art, progress bar, transport controls
- **States shown:** playing
- **Tokens consumed:**
  - `title`: fg.default (#0F172A)
  - `meta`: fg.muted (#94A3B8)
  - `progress.fill`: accent.primary (#7C3AED — violet)
  - `controls.play`: accent.primary bg (filled IconButton)
- **Motion consumed:** motion.hover (controls)

#### Component: MetricsCard
- **Category:** primitive
- **Purpose:** Telemetry cards: CPU_LOAD 24.8%, RES_USAGE 12.4GB, etc.
- **Variants visible in this theme:**
  - Dark text values, violet/blue progress bars beneath
- **States shown:** default
- **Tokens consumed:**
  - `label`: fg.muted (#94A3B8)
  - `value`: fg.default (#0F172A — dark numeric display)
  - `graph`: accent.primary (#7C3AED — violet progress bar fill)
  - `bg`: bg.muted (glassmorphic)

#### Component: ProgressBar
- **Category:** primitive
- **Purpose:** Horizontal progress in MetricsCards and stat sections.
- **Variants visible in this theme:**
  - Thin bar below MetricsCard values, wider bars in stats
- **States shown:** default
- **Tokens consumed:**
  - `track`: bg.muted (light track)
  - `fill`: varies — accent.primary (#7C3AED violet), accent.secondary (#4338CA indigo), accent.tertiary (#F472B6 pink)

#### Component: StatBar
- **Category:** primitive
- **Purpose:** Labeled stat bars in CoreAttributesPanel and RESONANCE_CHANNELS.
- **Variants visible in this theme:**
  - POLYCHROMATIC bars:
    - ALPHA_1 / STAMINA (`intent: primary` → accent.primary #7C3AED — violet)
    - BETA_V / DEXTERITY (`intent: secondary` → accent.secondary #4338CA — indigo)
    - GAMMA_S / AGILITY (`intent: tertiary` → accent.tertiary #F472B6 — hot pink)
    - PROBABILITY (`intent: neutral` → fg.default #0F172A)
- **States shown:** default
- **Tokens consumed:**
  - `intent: primary` → accent.primary (#7C3AED — violet)
  - `intent: secondary` → accent.secondary (#4338CA — indigo)
  - `intent: tertiary` → accent.tertiary (#F472B6 — pink)
  - `intent: neutral` → fg.default (#0F172A)
  - `label`: fg.default (#0F172A)
  - `value`: fg.default (#0F172A)

#### Component: SkillRow
- **Category:** primitive
- **Purpose:** Skill rows: AETHERIC_360 MASTER, CLOUD_INFRA EXPERT, etc.
- **States shown:** default, active highlight
- **Tokens consumed:**
  - `row.bg`: alternating bg.subtle / bg.muted (glassmorphic)
  - `label`: fg.default (#0F172A)
  - `rank.active`: accent.primary (#7C3AED — MASTER, EXPERT in violet)
  - `rank.default`: fg.default (#0F172A)

#### Component: ProcessList
- **Category:** primitive
- **Purpose:** ACTIVE_FLOWS with status badges.
- **States shown:** running, idle
- **Tokens consumed:**
  - `pid`: fg.muted (#94A3B8)
  - `name`: fg.default (#0F172A)
  - `status.running`: accent.primary (#7C3AED — FLOWING in violet)
  - `badge`: accent.primary bg (FLOWING badge)

#### Component: MiniChart
- **Category:** primitive
- **Purpose:** Small grouped bar chart with polychromatic bars.
- **States shown:** default
- **Tokens consumed:**
  - Bars: accent.primary (#7C3AED), accent.secondary (#4338CA), accent.tertiary (#F472B6)
- **Behavioral notes:** Multi-colored bars: blue, teal, pink — reflecting the polychromatic palette.

#### Component: HexSnapshot
- **Category:** primitive
- **Purpose:** Hex byte grid in boot screen.
- **States shown:** default, error highlight
- **Tokens consumed:**
  - `address`: fg.muted (#94A3B8)
  - `bytes`: fg.default (#0F172A)
  - `error`: danger.solid (#F472B6)
- **Motion consumed:** motion.typewriter

#### Component: Timeline
- **Category:** os
- **Purpose:** Horizontal timeline with nodes.
- **States shown:** default
- **Tokens consumed:**
  - `track`: border.subtle (connecting line)
  - `cursor`: accent.primary (#7C3AED — active position marker)

#### Component: TimelineNode
- **Category:** primitive
- **Purpose:** Nodes on Timeline for portfolio entries.
- **Variants visible in this theme:**
  - `idle`: hollow shape, border.subtle
  - `active`: filled violet shape with soft glow, accent.primary
  - `visited`: small filled shape, accent.primary dimmed
- **States shown:** idle, active, visited
- **Tokens consumed:**
  - `idle`: border.subtle, fg.muted (#94A3B8 — label)
  - `active`: accent.primary (#7C3AED — fill + glow)
  - `active.label`: accent.primary (#7C3AED)

#### Component: MetadataTag
- **Category:** primitive
- **Purpose:** Corner tags and labels.
- **States shown:** default
- **Tokens consumed:**
  - `label`: accent.primary (#7C3AED — violet text)
  - `bg`: bg.muted (when pill-shaped)

#### Component: AccentBar
- **Category:** primitive
- **Purpose:** Small colored accent lines as corner decorations.
- **States shown:** default
- **Tokens consumed:**
  - accent.primary (#7C3AED — violet bar)

#### Component: TagChipRow
- **Category:** primitive
- **Purpose:** Bordered tech tag chips.
- **States shown:** default
- **Tokens consumed:**
  - `chip.border`: border.default
  - `chip.fg`: fg.default (#0F172A)

#### Component: MetadataChipRow
- **Category:** primitive
- **Purpose:** Key+value metadata chips.
- **States shown:** default
- **Tokens consumed:**
  - `chip.border`: border.default
  - `key`: fg.muted (#94A3B8)
  - `value`: fg.default (#0F172A)

#### Component: NavGridCard
- **Category:** os
- **Purpose:** Full-screen menu navigation cards: Sanctum, Essence, Rhythm, Archives, Journal, Contact.
- **Variants visible in this theme:**
  - Soft glassmorphic cards with light borders, animated geometric shapes inside
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.subtle (light card border)
  - `id`: fg.muted (#94A3B8 — corner tag)
  - `label`: fg.default (#0F172A — card label)
  - `icon`: accent.primary (#7C3AED — violet dot beside label)
- **Behavioral notes:** Glassmorphic surface, rounded corners. Geometric shapes rotate inside.

#### Component: GeometricAnchor
- **Category:** primitive
- **Purpose:** Soft outlined shapes (circles, diamonds, ellipses) inside NavGridCards.
- **Variants visible in this theme:**
  - Outlined shapes in light gray/violet — soft, ethereal style (not harsh wireframes)
- **States shown:** default (rotating)
- **Tokens consumed:**
  - `shapes`: fg.muted (#94A3B8) or accent.primary (#7C3AED — soft violet outlines)
- **Motion consumed:** motion.geometry-rotate

#### Component: BlogCard
- **Category:** primitive
- **Purpose:** Blog entry cards with cover image, metadata, title, description.
- **States shown:** default
- **Tokens consumed:**
  - `cover`: image with MetadataTag overlay
  - `meta`: fg.muted (#94A3B8)
  - `title`: fg.default (#0F172A)
  - `description`: fg.muted (#94A3B8)

#### Component: MissionBriefCard
- **Category:** primitive
- **Purpose:** Bordered card with MISSION_OPS_SUMMARY header and body.
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary (#7C3AED — violet left border)
  - `header`: fg.default (#0F172A)
  - `body`: fg.muted (#94A3B8)

#### Component: CoreAttributesPanel
- **Category:** os
- **Purpose:** CORE_ATTRIBUTES panel with stat bars and header.
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.accent.primary (#7C3AED — violet border)
  - `header`: fg.default (#0F172A — CORE_ATTRIBUTES), fg.muted (#94A3B8 — subtitle)
  - `bg`: bg.subtle (glassmorphic)

#### Component: SkillsLogPanel
- **Category:** os
- **Purpose:** TECHNICAL_PROFICIENCY panel with skill rows and MiniChart.
- **States shown:** default
- **Tokens consumed:**
  - `border`: border.default
  - `header`: fg.default (#0F172A)
  - `bg`: bg.subtle (glassmorphic)
  - `rank.active`: accent.primary (#7C3AED — violet active ranks)

#### Component: SystemLogColumn
- **Category:** os
- **Purpose:** Left-side log text in muted purple/gray.
- **Variants visible in this theme:**
  - `bracket-status`: [OK] entries in muted text
  - `comment-prefix`: // log entries
- **States shown:** default (continuously scrolling)
- **Tokens consumed:**
  - `text`: fg.muted (#94A3B8)
  - `status`: accent.primary (#7C3AED — [OK] in violet)
- **Motion consumed:** motion.auto-scroll

#### Component: TelemetryColumn
- **Category:** os
- **Purpose:** Right-side readout column.
- **States shown:** default
- **Tokens consumed:**
  - `key`: fg.muted (#94A3B8)
  - `value`: fg.default (#0F172A)

#### Component: UserSignatureBar
- **Category:** os
- **Purpose:** Bottom bar: CARLOS VARA — AETHERIC ENTITY, violet accent.
- **States shown:** default
- **Tokens consumed:**
  - `status`: accent.primary (#7C3AED — violet dot)
  - `name`: accent.primary (#7C3AED)
  - `role`: fg.muted (#94A3B8)
  - `timestamp`: accent.primary (#7C3AED)

#### Component: SubtitleBar
- **Category:** primitive
- **Purpose:** Under-header metadata line.
- **States shown:** default
- **Tokens consumed:**
  - `fg`: fg.muted (#94A3B8)

#### Component: BootHeader
- **Category:** os
- **Purpose:** AETHERSYSTEM BIOS v4.0.2 header in violet text on light background.
- **States shown:** default
- **Tokens consumed:**
  - `title`: accent.primary (#7C3AED — violet text)
  - `meta`: fg.muted (#94A3B8 — KERNEL, UPTIME, etc.)

#### Component: BootLogList
- **Category:** os
- **Purpose:** Timestamped boot log entries with purple timestamps and dark text.
- **States shown:** initializing (line-by-line reveal)
- **Tokens consumed:**
  - `timestamp`: accent.primary (#7C3AED — purple timestamps)
  - `message`: fg.default (#0F172A — dark log text)
  - `success`: success.solid (#4ADE80 — green success lines)
- **Motion consumed:** motion.typewriter

#### Component: BootContinueButton
- **Category:** primitive
- **Purpose:** PRESS ANY KEY TO BOOT →| in violet bg with white text.
- **States shown:** default (pulsing)
- **Tokens consumed:**
  - `bg`: accent.primary (#7C3AED)
  - `fg`: fg.on-accent.primary (#F8FAFC)
- **Motion consumed:** motion.pulse

#### Component: KeyHint
- **Category:** primitive
- **Purpose:** F3: SETUP, F10: BOOT MENU, DEL: EXIT in muted gray.
- **States shown:** default
- **Tokens consumed:**
  - `fg`: fg.muted (#94A3B8)

---

## Part 4 — Theme Consistency Check
- [x] Every intent in section 2.2 has either a value or an explicit N/A
- [x] Every Core canonical component in Part 3 has either a spec or an
      explicit N/A (SearchInput and LocaleSelector are N/A; KanjiCaption is
      N/A due to kanji_motif: disabled)
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
      resolve to distinct values). Note: danger.solid coincides with
      accent.tertiary (#F472B6) by design.

---

## Part 5 — Metadata (last section, machine-read)
```yaml
schema_version: "2.0"
theme_slug: aetheric-pulse
theme_name: Aetheric Pulse
generated_by: stitch
generated_at: 2026-03-13T10:00:00Z
base_theme: null
intended_consumer: mona-lisa-overdrive
sprawl_project: burning-chrome
color_scheme: light
kanji_motif: disabled
```
---
End of DESIGN.md. Produce nothing after this line.
