# VSG Visual Operating System (VOS) v3.0 - Design Guidelines

**Classification:** INDUSTRIAL / HIGH-FREQUENCY / INSTITUTIONAL
**Core Tenant:** "We do not sell software. We grant access to infrastructure."

---

## 1.0 Physics Engine (Motion & Interaction)

### 1.1 Latency & Timing
- **Global Speed Limit:** 150ms (human threshold for "instantaneous")
- **Easing Curve:** `cubic-bezier(0.2, 0, 0, 1)` - Starts fast, stops hard. No wobble.
- **"No Lift" Rule:** Elements never move on Y-axis when hovered. They ENERGIZE (borders brighten, backgrounds tint).

### 1.2 Loading States (Anti-Spinner)
Circular spinners signal "waiting." VOS uses **System Heartbeats**:
- Pulsing opacity bars (`opacity-30` ↔ `opacity-100`)
- Blinking cursor `_`
- Meaning: "Processing Data," not "Downloading Assets"

### 1.3 Animation Classes
| Class | Effect | Usage |
|-------|--------|-------|
| `animate-heartbeat` | Opacity pulse 0.3→1→0.3 | Loading indicators |
| `animate-glow-pulse` | Box-shadow pulse | Status indicators |
| `animate-data-tick` | Brightness flash | Value updates |
| `animate-flash` | Text flash | Timestamps |

---

## 2.0 Material Library (Tungsten Palette)

### 2.1 The Void (Backgrounds)
Deep, warm charcoal. NOT blue. NOT pure black.

| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| `--background` | 222 15% 5% | #0B0C10 | Global background (The Chassis) |
| `--card` | 222 15% 7% | #131419 | Cards, Sidebars (The Panel) |
| `--border` | 222 15% 12% | #1F2128 | Borders, Dividers (The Bezel) |
| `--input` | 222 15% 10% | - | Form fields (The Input) |

### 2.2 The Signal (International Orange)
Used strictly for Active State, Navigation, Verification.

| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| `--primary` | 25 95% 53% | #F26D21 | Buttons, Active tabs (Live Current) |
| Primary/10 | - | - | Background tints, Hover fills (Standby) |

### 2.3 Text Colors
| Token | HSL | Usage |
|-------|-----|-------|
| `--foreground` | 30 5% 90% | Primary text (off-white/silver) |
| `--muted-foreground` | 220 5% 75% | Metadata, labels |

---

## 3.0 Typography Architecture

**Base Unit:** 15px (Balanced - technical density with readability)
**Minimum Readable Size:** 13px (enforced at Tailwind layer)

### 3.1 Font Stacks
| Role | Font | Tracking | Weight |
|------|------|----------|--------|
| Body (Context) | Manrope | -0.015em | 400 |
| Headlines (Signal) | Space Grotesk | -0.02em | 600 |
| Data (Telemetry) | IBM Plex Mono | 0em | tabular-nums |

### 3.2 Proportional Typography Scale
All sizes use rem units calculated from the 15px base: `desired_px / 15 = rem`

**CRITICAL:** fontSize is defined at `theme` level (NOT `extend`) to REPLACE Tailwind defaults.

| Token | Pixels | Rem | Purpose |
|-------|--------|-----|---------|
| `text-telemetry` | 12px | 0.8rem | Clocks, timestamps, kbd ONLY |
| `text-eyebrow` | 14px | 0.9333rem | Readable uppercase mono labels |
| `text-caption` | 13px | 0.8667rem | Minimum readable (metadata) |
| `text-body` | 14px | 0.9333rem | Standard body text |
| `text-body-lg` | 16px | 1.0667rem | Prominent paragraphs |

### 3.3 Standard Tailwind Scale (REPLACES defaults for 15px base)

| Utility | Pixels | Rem | Notes |
|---------|--------|-----|-------|
| `text-xs` | 13px | 0.8667rem | **Safe minimum readable** |
| `text-sm` | 14px | 0.9333rem | Standard body / eyebrows |
| `text-base` | 15px | 1rem | Base size |
| `text-lg` | 18px | 1.2rem | Large text |
| `text-xl` | 20px | 1.3333rem | Subheadings |
| `text-2xl` | 24px | 1.6rem | Section headers |
| `text-3xl` | 30px | 2rem | Page headers |
| `text-4xl` | 36px | 2.4rem | Hero subheads |
| `text-5xl` | 48px | 3.2rem | Hero headlines |

### 3.4 Typography Rules

**Eyebrow Labels** (uppercase mono with tracking):
- Use `text-sm font-mono uppercase tracking-widest` (14px)
- NEVER use text-xs for readable eyebrow labels

**Telemetry/Status** (clocks, timestamps, kbd):
- Use `text-telemetry` (12px) - ONLY non-essential display data

### 3.5 Component Typography Classes (index.css)
Pre-composed classes with proper color and spacing:

| Class | Size | Effect |
|-------|------|--------|
| `.type-eyebrow` | 14px | mono uppercase muted (readable labels) |
| `.type-telemetry` | 12px | mono tabular-nums muted (clocks only) |
| `.type-caption` | 13px | muted foreground |
| `.type-body` | 14px | foreground relaxed |
| `.type-body-lg` | 16px | foreground relaxed |

### 3.6 12px Text Rule
**Only `text-telemetry` renders at 12px.** Reserved for timestamps/clocks. All readable text is 13px minimum, eyebrow labels are 14px.

### 3.7 Heading Hierarchy
| Element | Pixels | Rem | Class |
|---------|--------|-----|-------|
| Section Header | 24px | 1.6rem | `text-2xl font-heading` |
| Page Header | 30px | 2rem | `text-3xl font-heading` |
| Hero Display | 48px | 3.2rem | `text-5xl font-heading` |

---

## 4.0 Data Visualization Standards

1. **No Smoothing:** Linear interpolation only. Truth is jagged.
2. **Grid Lines:** Visible but faint (`--border` color). Oscilloscope aesthetic.
3. **Colors:**
   - Series A (Primary): Signal Orange
   - Series B (Secondary): Cool Silver (#94A3B8)
   - Threshold/Limit: Critical Red (Dashed)
4. **Values:** Always `font-mono tabular-nums`, right-aligned.
5. **Empty States:** Never "0" or "No Data." Show "WAITING FOR SIGNAL" or "--".

---

## 5.0 Component Specifications

### 5.1 The Button (The Trigger)
- **Shape:** Rectangular. 2px radius (`rounded-sm`)
- **Text:** Uppercase. Uses `text-xs` (13px with tracking). Font Mono. Medium weight.
- **Primary:** Solid orange background. Dark text.
- **Secondary:** Transparent background. Orange border. Orange text.

### 5.2 The Badge/Chip (The Status)
- **Shape:** 2px radius
- **Text:** Uses `text-xs` (13px Mono with tracking)
- **Variants:** default, secondary, destructive, outline

### 5.3 The Card (The Unit of Containment)
- **Border:** 1px solid `--border`
- **Background:** `--card`
- **Radius:** 2px (Machined)
- **Hover:** Border color shifts to `primary/50`. Background tint `primary/5`.

---

## 6.0 Interaction System

### Elevation Utilities
**Never implement custom hover/active states on Buttons or Badges.** Use built-in:

| Utility | Purpose |
|---------|---------|
| `hover-elevate` | Subtle background elevation on hover |
| `active-elevate-2` | Dramatic elevation on press |
| `toggle-elevate` + `toggle-elevated` | Toggle state styling |

### Acceptable Hover Patterns (non-Button/Badge elements)
- `hover:bg-primary/5` — List item hover
- `hover:bg-card/50` — Table row hover
- `hover:text-primary` — Link text color change

### Forbidden Patterns
- `animate-spin` (use `animate-heartbeat` instead)
- `translateY` on hover (use opacity/brightness)
- `rounded-full` on control elements (use `rounded-sm`)
- Transitions > 200ms

---

## 7.0 Mobile "Field Unit" Specification

- **Concept:** Mobile is a "Datapad" for monitoring, not configuration.
- **Base font:** 16px for readability (exception to 14px rule)
- **Touch Targets:** Minimum 44px height
- **PWA Ready:**
  - `theme_color`: #0B0C10 (Tungsten)
  - Icons: Orange square on black (192x192, 512x512)

---

## 8.0 Copywriting Protocol

### Voice Rules
1. **Active over Passive:** "System enforces..." not "This is verified by..."
2. **Precision over Emotion:** "Mitigates overnight liquidity risk" not "Helps you sleep at night"
3. **Banned words:** Seamless, Effortless, Magic, Revolution, Democratize
4. **Required words:** Deterministic, Latency, Protocol, Solvent, Verified

---

## 9.0 QA Checklist

Before deployment, verify:
- [ ] **Is it Tungsten?** No blue backgrounds.
- [ ] **Is it Sharp?** No rounded corners > 4px.
- [ ] **Is it Fast?** No transitions > 200ms.
- [ ] **Is it Dense?** No "airy" marketing whitespace.
- [ ] **Is it True?** No placeholder text. No "Coming Soon" without data.
- [ ] **Is it Static?** Only LIVE data animates; historical data is static.
