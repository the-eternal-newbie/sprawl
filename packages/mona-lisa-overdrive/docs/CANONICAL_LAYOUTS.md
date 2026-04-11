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

- **Structure:** split pane — left identity column, right stats
  column, bottom loadout row
- **Used for:** professional profile display
- **Required components:** CoreAttributesPanel, SkillsLogPanel,
  MissionBriefCard

**Composition-level arrangements** (not standalone primitives):

- **CharacterNameBadge:** A HeroTitle displaying the character name
  (e.g. `NEO_ARCHITECT`) with a Label underneath showing the UID.
  Tokens: `accent.primary` (name), `fg.muted` (UID). This is a
  layout-specific arrangement of HeroTitle + Label, not a separate
  component.
- **LevelRankBadges:** A row of two Badge components — one showing
  level (`LVL: 99`), one showing rank (`RANK_S`). Placed below the
  portrait in the left column. Uses Badge `accent` variant.
- **HeroMetric:** A large numeric readout (e.g. `TOTAL_XP 849,200`)
  composed of a Label (metric name, top-right aligned) and a
  HeroTitle (numeric value). Tokens: `fg.muted` (label),
  `accent.primary` (value). This is a composition of Label +
  HeroTitle, not a standalone component.
- **LoadoutSelector:** A bottom-docked row containing a Label
  (`SELECT_ACTIVE_LOADOUT`) followed by a group of IconButton
  components (filled variant for active, ghost for inactive). This
  is a layout-level arrangement of Label + IconButton group.

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

---

## Recurring Button patterns

The following are recurring compositions of the core Button
component (with its four variants: `primary`, `secondary`,
`inverted`, `outlined`) that appear across multiple layouts. They
are NOT standalone primitives — they are Button with specific
icon + size + intent combinations.

- **CloseMenuButton:** Button `outlined` variant with leading `×`
  icon and label `CLOSE MENU`. Used in
  ImmersiveDeckLayout.FullScreenMenu (top-left).
- **CloseModuleButton:** Button `outlined` variant with label
  `CLOSE_MODULE` and trailing `×` icon. Used in
  ImmersiveDeckLayout.Reading (top-right).
- **DownloadCTA:** Button `primary` variant, full-width, with label
  like `DOWNLOAD_FULL_LOGS`. Used in DetailWindow content areas.
- **BootPrompt:** Button `primary` variant, large size, with label
  `PRESS ANY KEY TO BOOT →|`. Modeled as BootContinueButton in the
  canonical component list because it carries unique motion
  (`motion.pulse`) and appears exclusively in BootLayout.
