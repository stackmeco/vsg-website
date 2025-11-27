# VSG Marketing Site - Design Guidelines

## Design Philosophy

**Industrial Control Room Aesthetic**: Tier-1 institutional design inspired by Bloomberg Terminal precision, industrial control panels, and scientific instrument interfaces. This reflects VSG's positioning as a Truth Engineering Lab requiring absolute clarity, operational maturity, and zero ambiguity.

**Core Design Tenets**:
- "Bitcoin verifies Value, Axiom verifies Truth"
- Data changes value, never position (use `tabular-nums` for numbers)
- Only LIVE data animates; historical data must be static
- Active voice, technical terminology, zero marketing-speak
- Glow-only motion: 150ms mechanical timing, no translateY or shadows

---

## Color System: Tungsten & Signal Palette

### Primary Colors (index.css :root)
```css
/* THE VOID (Backgrounds) - Deep warm charcoal, NOT blue, NOT pure black */
--background: 222 15% 5%;
--foreground: 30 5% 90%;           /* Off-white/Silver */

/* SURFACE LAYERS (Panels) - Distinct via Lightness, not Hue */
--card: 222 15% 7%;
--card-border: 222 15% 12%;        /* Structural steel gray */

/* THE SIGNAL (Primary Action) - International Orange / Safety Amber */
--primary: 25 95% 53%;             /* #F26D21 - "High Voltage" indicator */
--primary-foreground: 222 47% 11%;

/* THE STRUCTURE (Secondary) - Functional mechanics */
--secondary: 222 15% 10%;
--secondary-foreground: 30 5% 80%;

/* METADATA & LABELS */
--muted: 222 15% 10%;
--muted-foreground: 220 5% 75%;    /* CALIBRATED: Boosted from 55% for legibility */
```

### Contrast Calibration (Critical)
**`--muted-foreground: 220 5% 75%`** — This value was calibrated from 55% to 75% to ensure readable metadata at the 14px base font size. This affects all descriptions, labels, timestamps, and secondary text site-wide.

---

## Typography System

### Font Stack
| Role | Font | Letter-Spacing |
|------|------|----------------|
| **Body** | Manrope | -0.015em (machined precision) |
| **Headings** | Space Grotesk | tracking-tight |
| **Code/Data** | IBM Plex Mono | default |

### Size Scale (14px Base)
| Token | Size | Usage |
|-------|------|-------|
| `text-2xs` | 10px | Micro-labels, ticker data |
| `text-xs` | 12px | Labels, metadata, chips |
| `text-sm` | 14px | **Base body text** |
| `text-base` | 16px | Emphasized body |
| `text-lg` | 18px | H3 headings |
| `text-xl` | 20px | Subheadings |
| `text-2xl` | 24px | H2 headings |
| `text-3xl` | 30px | Page H1 |
| `text-4xl` | 36px | Large display |
| `text-5xl` | 56px (3.5rem) | Hero H1 |

### Heading Hierarchy
| Level | Size | Font | Class |
|-------|------|------|-------|
| Hero H1 | 3.5rem (56px) | Space Grotesk | `font-heading font-bold text-5xl` |
| Page H1 | 2.5rem (40px) | Space Grotesk | `font-heading font-bold text-3xl sm:text-4xl` |
| H2 | 2rem (32px) | Space Grotesk | `font-heading font-semibold text-2xl sm:text-[2rem]` |
| H3 | 1.5rem (24px) | Space Grotesk | `font-heading font-semibold text-lg` |

---

## Interaction System

### Elevation Utilities (index.css)
**Never implement custom hover/active states on Buttons or Badges.** Use the built-in elevation system:

| Utility | Purpose |
|---------|---------|
| `hover-elevate` | Subtle background elevation on hover |
| `active-elevate-2` | Dramatic elevation on press/active |
| `toggle-elevate` + `toggle-elevated` | Toggle state styling |

### Acceptable Hover Patterns
These patterns are allowed on non-Button/Badge elements:
- `hover:bg-primary/5` — List item hover (e.g., project ticker)
- `hover:bg-card/50` — Table row hover
- `hover:text-primary` — Link text color change

### Forbidden Patterns
Never use these on Buttons or Badges:
- `hover:bg-*` (use `hover-elevate` instead)
- `hover:border-*` (let shadcn handle it)
- Custom active states

---

## Component Patterns

### StageChip Variants
| Variant | Color | Usage |
|---------|-------|-------|
| `default` | Muted | Research, early stages |
| `warning` | Warning yellow | Architecture, building |
| `info` | Blue tint | Internal Alpha |
| `success` | Green | Public Beta, Stable |
| `destructive` | Red | Deprecated |

### ValueCard (Operating Principles)
6 principles with icon system:
1. Eye — Radical Transparency
2. Coins — Aligned Incentives
3. Shield — Resilience Engineering
4. Search — First-Principles Thinking
5. Compass — Verification, Not Trust
6. ShieldCheck — Cognitive Security

### NextStepBlock
Uniform page-to-page navigation component. Always placed at section end.

---

## Layout System

### Spacing Primitives
- Component padding: `p-4`, `p-6`, `p-8`
- Section spacing: `py-16`, `py-20`, `py-24`
- Element gaps: `gap-4`, `gap-6`, `gap-8`

### Grid Structure
- Max container: `max-w-7xl` (1280px)
- Content width: `max-w-5xl` for text-heavy areas
- Prose width: `max-w-3xl` for long-form content

### Border Radius
**Machined edges only**: `--radius: 2px` or `rounded-[2px]`
No organic curves. Everything should feel precision-cut.

---

## Animation Rules

### Motion Philosophy
- Only LIVE data animates (real-time feeds, active states)
- Historical data must be STATIC
- Glow-only motion pattern: brightness/opacity changes, no translateY

### Timing
- Mechanical transitions: `150ms` or `duration-150`
- No easing curves that feel "bouncy" or organic

---

## Accessibility Compliance

### Contrast Ratios
- Body text (`--foreground`): Passes WCAG AA on `--background`
- Muted text (`--muted-foreground` at 75%): Passes WCAG AA at 14px+
- Primary orange on dark: High contrast, always legible

### Interactive Elements
- Minimum touch target: 44x44px (handled by Button sizing)
- Focus states: Orange ring (`--ring: 25 95% 53%`)
- Keyboard navigation: Supported via Link/Button components

---

## Content Guidelines

### Voice & Tone
- **Active voice only**: "We build" not "Systems are built"
- **Technical precision**: Use correct terminology
- **Zero marketing-speak**: No "revolutionary", "game-changing", "best-in-class"
- **Institutional restraint**: Facts over hype

### Section Headers
- Use imperative or declarative statements
- Examples: "Operating Principles", "Active Development Cycles", "Bitcoin is Reserve, Not Product"
