---
name: MTH Studio
description: A cultivated digital workshop where technical clarity meets organic warmth.
colors:
  morning-mist: "#f3f6f2"
  evergreen-ink: "#15211c"
  studio-pine: "#153d33"
  porcelain: "#f8fbf9"
  glass-white: "rgb(255 255 255 / 0.58)"
  soft-sage: "#dfe9e3"
  quiet-stone: "#e4eae6"
  weathered-leaf: "#5b6b64"
  electric-sprout: "#caff79"
  deep-sprout: "#163128"
  focus-fern: "#4b806e"
  soft-moss: "#8da579"
  vapor-mint: "#d5e7df"
  warm-clay: "#de8a61"
  signal-red: "#ad3837"
typography:
  display:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "clamp(4.5rem, 8vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.82
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.1
  title:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.375
  body:
    fontFamily: "Geist, ui-sans-serif, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  body-large:
    fontFamily: "Geist, ui-sans-serif, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Geist, ui-sans-serif, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
rounded:
  sm: "0.45rem"
  md: "0.6rem"
  lg: "0.75rem"
  xl: "1.05rem"
  2xl: "1.35rem"
  pill: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  section: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.studio-pine}"
    textColor: "{colors.porcelain}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "0.5rem 0.75rem"
    height: "2.5rem"
  button-accent:
    backgroundColor: "{colors.electric-sprout}"
    textColor: "{colors.deep-sprout}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "0.5rem 0.75rem"
    height: "2.5rem"
  card-glass:
    backgroundColor: "{colors.glass-white}"
    textColor: "{colors.evergreen-ink}"
    rounded: "{rounded.xl}"
    padding: "1rem"
  input-default:
    backgroundColor: "rgb(243 246 242 / 0.6)"
    textColor: "{colors.evergreen-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "0.5rem 0.75rem"
    height: "2.5rem"
  badge-outline:
    textColor: "{colors.evergreen-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.125rem 0.5rem"
    height: "1.25rem"
---

# Design System: MTH Studio

## Overview

**Creative North Star: "The Digital Greenhouse"**

MTH Studio's interface is a cultivated technical environment: transparent enough to feel understandable, structured enough to feel capable, and softened by an organic palette and slow atmospheric movement. The system combines the clarity of a digital workshop with the ease of a garden—calm, precise, practical, warm, trustworthy, and quietly bold.

The composition is spacious and optimistic rather than corporate or clinical. Dense green anchors the work, electric chartreuse creates decisive moments, and translucent surfaces let the pale environmental color remain present. Technical credibility comes through mono display type, exact grids, and explicit process language; approachability comes through rounded forms, natural imagery, blurred organic shapes, and unhurried motion.

**Key Characteristics:**

- Deep evergreen structure against pale botanical backgrounds.
- Electric chartreuse reserved for high-value emphasis and action.
- Geist Mono for expressive hierarchy; Geist Sans for effortless reading.
- Frosted, softly bordered surfaces with ambient rather than dramatic depth.
- Spacious section rhythm, rounded geometry, and slow organic motion.
- Direct, practical visual communication with visible technical competence.

## Colors

The palette moves from misty off-white through sage and evergreen, with Electric Sprout providing a sharp living accent and Warm Clay appearing only as atmospheric warmth.

### Primary

- **Studio Pine** (`#153d33`): The primary structural color for dark regions, core actions, and high-contrast brand moments.
- **Electric Sprout** (`#caff79`): The decisive accent for calls to action, highlighted phrases, selection, and compact emphasis.

### Secondary

- **Soft Sage** (`#dfe9e3`): A supportive fill behind icons, secondary controls, and quiet grouped content.
- **Soft Moss** (`#8da579`): A natural supporting color available for environmental detail rather than primary interaction.
- **Vapor Mint** (`#d5e7df`): A light atmospheric color used in blurred organic backdrops.
- **Warm Clay** (`#de8a61`): A restrained warm counterpoint used at low opacity for background atmosphere.

### Neutral

- **Morning Mist** (`#f3f6f2`): The page canvas; softer and more natural than pure white.
- **Evergreen Ink** (`#15211c`): Default text and the deepest neutral.
- **Porcelain** (`#f8fbf9`): Text on dark surfaces and a clean near-white highlight.
- **Glass White** (`rgb(255 255 255 / 0.58)`): The translucent card surface.
- **Quiet Stone** (`#e4eae6`): Muted fills and low-emphasis states.
- **Weathered Leaf** (`#5b6b64`): Secondary copy and supporting labels.
- **Focus Fern** (`#4b806e`): Focus indication and interactive clarity.
- **Signal Red** (`#ad3837`): Destructive and validation-error states only.

### Named Rules

**The Living Accent Rule.** Electric Sprout marks a decision, a result, or a purposeful highlight; it is not a general-purpose section background.

**The Botanical Neutral Rule.** Prefer Morning Mist, sage, translucent white, and evergreen-tinted borders over stark white, neutral gray, or pure black.

## Typography

**Display Font:** Geist Mono (with `ui-monospace, monospace` fallback)  
**Body Font:** Geist (with `ui-sans-serif, sans-serif` fallback)  
**Label Font:** Geist, with Geist Mono used selectively for sectional and component titles

**Character:** Geist Mono makes large statements feel engineered and unmistakable without becoming cold. Geist Sans keeps descriptions, form content, and supporting copy open and conversational.

### Hierarchy

- **Display** (600, `clamp(4.5rem, 8vw, 6rem)`, `0.82`): Hero statements with tightly tracked, compact lines; balance manually and use sparingly.
- **Headline** (600, `clamp(1.875rem, 4vw, 2.25rem)`, about `1.1`): Mono section headings, usually constrained to a balanced two-to-three-line block.
- **Title** (600, `1.25rem`, `1.375`): Card titles, process steps, and substantial component labels.
- **Body Large** (400, `1.125rem`, `1.75rem`): Section introductions and high-value explanatory copy, generally under `680px` wide.
- **Body** (400, `1rem`, `1.5`): Default reading and component descriptions with balanced or pretty wrapping.
- **Label** (600, `0.875rem`, `1.25rem`): Buttons, navigation, metadata, and compact interface language.

### Named Rules

**The Engineered Headline Rule.** Mono type carries the product's technical confidence at display, section-heading, and card-title levels; long explanatory copy remains sans-serif.

## Layout

The site uses a centered `max-width: 80rem` section shell with responsive gutters of `1rem`, `1.5rem`, and `2rem` at the base, `640px`, and `1024px` breakpoints. Major sections typically use `5rem` vertical padding, increasing to `6rem` on large screens. Content groups work from a compact spacing scale—`0.5rem`, `0.75rem`, `1rem`, `1.5rem`, `2rem`, and `3rem`—rather than arbitrary gaps.

The default composition is a generous single-column narrative that resolves into two- or three-column grids at medium and large widths. Headings are normally limited to `42rem`; explanatory prose stays around `680px`. Cards use equal-height grid behavior where comparison matters. On small screens, navigation becomes a full-screen menu, grids collapse in reading order, and touch targets remain at least `2.5rem` for primary actions.

The hero intentionally breaks the section-shell constraint: it occupies at least one viewport height and places a centered, tightly composed display statement over full-bleed imagery. Organic backdrop shapes may sit outside the grid, but functional content remains aligned to the section shell.

## Elevation & Depth

The system is ambiently layered. Depth comes from translucent surfaces, backdrop blur, subtle green-tinted borders, background imagery, and a single broad shadow rather than multiple hard elevation tiers. Dark glass sections use the same logic with a translucent Studio Pine surface. Controls add only modest shadow changes on hover.

### Shadow Vocabulary

- **Ambient Glass** (`0 24px 80px rgb(21 33 28 / 0.12)`): Broad environmental separation for glass cards, the floating navigation, and dark glass regions.
- **Control Rest** (`0 1px 2px rgb(0 0 0 / 0.05)`): A restrained resting shadow for accent controls.
- **Control Hover** (`0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`): Brief tactile lift for interactive emphasis.

### Named Rules

**The Ambient Layer Rule.** Shadows describe atmosphere, not stacked application chrome; use translucent fill and border contrast before adding elevation.

## Shapes

Rounded geometry is consistent and calm. Standard controls use `0.75rem` corners, cards and glass containers use roughly `1.05rem` to `1.35rem`, and navigation or badges use pill geometry. Borders are thin and evergreen-tinted; translucent surfaces may use a brighter white edge. Organic background blobs are deliberately irregular and heavily blurred, acting as atmosphere rather than content.

Avoid mixing sharp rectangles into the core interface. The one deliberate exception is the chartreuse hero highlight, whose compact rectangular silhouette creates a crisp typographic interruption against the organic backdrop.

## Components

Components feel tactile, calm, and confidently practical. State changes are clear but unhurried, using the standard `700ms` transition and the expressive `cubic-bezier(0.32, 0.72, 0, 1)` curve where motion is prominent.

### Buttons

- **Shape:** Rounded rectangle (`0.75rem`), with pill geometry permitted in the floating navigation.
- **Primary:** Studio Pine with Porcelain text; standard actions are compact, while lead actions use a `2.5rem` height and `0.75rem` horizontal padding.
- **Accent:** Electric Sprout with Deep Sprout text and a restrained resting shadow; reserved for the clearest next action.
- **Hover / Focus:** Hover lifts by `0.125rem`, slightly softens the fill, and may nudge a directional icon by `0.125rem`. Focus uses a three-pixel, 50%-opacity Focus Fern ring. Active state returns to baseline and scales to `0.98`.
- **Outline / Ghost:** Morning Mist or transparent surfaces with botanical borders and Quiet Stone hover fills.

### Chips

- **Style:** `1.25rem`-high pill with compact `0.5rem` horizontal padding and `0.75rem` text. Outline chips use an evergreen-tinted border; filled chips use Studio Pine or Soft Sage.
- **State:** Interactive chips inherit the standard focus ring and shift toward Quiet Stone or a softened semantic fill on hover.

### Cards / Containers

- **Corner Style:** `1.05rem` rounded cards; prominent containing regions may use `1.35rem`.
- **Background:** Translucent Glass White for default cards, or translucent Studio Pine for inverse sections.
- **Shadow Strategy:** Ambient Glass only; hover may add lift through translation rather than a harder shadow.
- **Border:** One-pixel evergreen tint or soft white edge on glass.
- **Internal Padding:** Usually `1rem`; major grouped regions use `1.5rem` to `3rem` responsively.

### Inputs / Fields

- **Style:** `2.5rem` minimum height, `0.75rem` corners, evergreen-tinted border, and 60%-opaque Morning Mist fill.
- **Focus:** Border shifts to Focus Fern with a three-pixel translucent ring.
- **Error / Disabled:** Signal Red border and faint red ring for errors; disabled controls lower opacity and use a muted fill without removing legibility.

### Navigation

The desktop navigation floats inside a centered, pill-shaped glass surface capped at `64rem`. The logo sits left, low-emphasis links sit centrally, and a single accent action sits right. Links use compact sans-serif labels and Soft Sage hover fills. On mobile, a simple two-line menu trigger opens a full-screen frosted overlay with large mono links and staggered vertical reveals.

### Reveal Motion

Section content enters once with a `64px` upward offset, `12px` blur, and opacity fade over `900ms`. The hero uses a slightly smaller offset. Ambient shapes move slowly with scroll; the word-reveal passage increases opacity sequentially. All animation collapses to effectively zero duration under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:

- **Do** use Studio Pine for structural confidence and Electric Sprout for the one action or phrase that should command attention.
- **Do** pair mono headlines with readable sans-serif explanations.
- **Do** keep translucent surfaces visibly connected to the environmental background.
- **Do** use spacious section rhythm and constrained text widths to make the offer easy to scan.
- **Do** preserve clear hover, focus, error, disabled, and reduced-motion states.
- **Do** use real project imagery and approved MTH Studio brand assets where evidence is required.

### Don't:

- **Don't** spread Electric Sprout across large passive surfaces or multiple competing actions.
- **Don't** introduce pure black, stark white, or generic neutral-gray UI where botanical neutrals already serve the role.
- **Don't** use heavy, tight shadows or stack many elevation tiers.
- **Don't** set long paragraphs in Geist Mono.
- **Don't** add fast, bouncy, or ornamental motion that competes with the slow atmospheric cadence.
- **Don't** fabricate testimonials, customer logos, performance data, or other proof.
