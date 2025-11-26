# VSG Marketing Site - Design Guidelines

## Design Approach

**Hybrid Approach**: Drawing from Linear's typographic precision + Stripe's institutional restraint + modern B2B SaaS patterns. This reflects VSG's positioning as an institutional-grade R&D studio requiring trust, clarity, and operational maturity.

**Core Principles**:
- Institutional trust through visual restraint and precision
- Technical credibility via clear hierarchy and structured layouts
- Calm confidence—no aggressive sales tactics or flashy animations
- Information architecture that reveals complexity progressively

---

## Typography System

**Primary Font**: Inter (Google Fonts) - for UI, body, and technical content
**Display Font**: Space Grotesk (Google Fonts) - for headlines and emphasis

**Hierarchy**:
- Hero H1: Space Grotesk, 3.5rem (56px), font-bold, tracking-tight, leading-tight
- Page H1: Space Grotesk, 2.5rem (40px), font-bold, tracking-tight
- H2: Space Grotesk, 2rem (32px), font-semibold
- H3: Inter, 1.5rem (24px), font-semibold
- Body Large: Inter, 1.125rem (18px), font-normal, leading-relaxed
- Body: Inter, 1rem (16px), font-normal, leading-relaxed
- Small/Caption: Inter, 0.875rem (14px), font-medium
- Labels/Tags: Inter, 0.75rem (12px), font-semibold, uppercase, tracking-wide

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-6, p-8, p-12
- Section spacing: py-16, py-20, py-24, py-32
- Element gaps: gap-4, gap-6, gap-8, gap-12
- Margins: m-2, m-4, m-8

**Grid Structure**:
- Max container width: max-w-7xl (1280px) for most sections
- Content width: max-w-5xl for text-heavy areas
- Prose width: max-w-3xl for long-form content (governance, insights)

**Responsive Breakpoints**:
- Mobile: base (single column)
- Tablet: md (2 columns where appropriate)
- Desktop: lg (3-4 columns for cards/features)

---

## Component Library

### Navigation
- Fixed header with backdrop blur on scroll
- Logo left, navigation center-right
- Desktop: horizontal menu with dropdown for Ventures
- Mobile: hamburger menu with slide-out drawer
- Header height: h-16 with py-4
- Sticky positioning with subtle border on scroll

### Hero Sections
**Homepage Hero**:
- Large hero image: Full-width panoramic shot of abstract data visualization, clean server infrastructure, or geometric architectural pattern suggesting precision and systems
- Image treatment: Subtle gradient overlay (dark to transparent) for text legibility
- Height: 85vh on desktop, 70vh on mobile
- Content overlay positioned left or center-left
- Primary tagline + supporting message + two CTA buttons (primary "Get Started", secondary "View Ventures")
- Buttons with blur background treatment for contrast

**Venture Page Heroes**:
- Medium hero images specific to each venture:
  - Uniqueness Engine: Abstract identity/biometric patterns, neural networks
  - Helios: Treasury vault imagery, financial infrastructure, secure systems
  - Liquidity Engine: Flowing liquidity visualization, market depth charts
- Height: 60vh with venture name, one-liner, and single CTA

### Feature Cards
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Card structure: icon/graphic + heading + description + optional link
- Padding: p-8
- Rounded corners: rounded-xl
- Subtle border treatment
- Hover state: subtle lift (translate-y-1)

### Content Sections
**Trust Foundations Section** (Homepage):
- Three-column grid featuring Security, Privacy, Fairness
- Each with icon, heading, and 2-3 sentence explanation
- Equal height cards with consistent padding

**Ventures Overview** (Homepage):
- Three venture cards in horizontal layout on desktop
- Each card: venture logo/icon, name, one-liner, key benefits (3-4 bullets), "Learn More" link
- Full-width cards on mobile, stacked

**Process/How It Works**:
- Numbered steps (1-4) in horizontal timeline layout
- Each step: number badge, heading, description
- Connecting lines between steps (desktop only)

### Governance Display
- Public change log with timestamp, version, description in table format
- Policy documentation with expandable sections
- Status indicators with subtle icon + text labels

### Testimonials/Social Proof
- Logo wall: Partner/client logos in grid (grayscale treatment)
- Stat blocks: Large number + label, arranged in 3-4 column grid
- Quote cards: Quote text + attribution with subtle left border accent

### Footer
- Multi-column layout (4 columns on desktop)
- Columns: Studio, Ventures, Resources, Company
- Newsletter signup embedded in footer
- Social links with icons
- Status page indicator
- Legal links in bottom bar
- Generous padding: pt-20, pb-12

### Forms (Contact, Careers)
- Two-column layout: Form on left (60%), context/info on right (40%)
- Input fields: Large touch targets (h-12), clear labels above fields
- Button: Full-width on mobile, fixed-width on desktop
- Field spacing: gap-6
- Clear validation states

---

## Imagery Strategy

**Primary Hero**: Large, high-impact image showing abstract systems, data flows, or precision infrastructure (NOT generic stock photos)

**Venture Pages**: Each venture has distinct hero image matching its domain (identity systems, treasury infrastructure, liquidity visualization)

**Supporting Images**: 
- Diagrams explaining governance flows
- System architecture visualizations
- Abstract representations of AI/automation with human oversight
- NO: Generic business handshakes, people in meetings, stock finance imagery

---

## Interaction Patterns

**Animations**: Minimal, purposeful only
- Fade-in on scroll for content sections (subtle, once)
- Smooth scroll behavior for anchor links
- Hover states on cards/links (transform-based, no color changes)
- NO: Parallax, elaborate scroll-triggered animations, auto-playing carousels

**Navigation Behavior**:
- Dropdown menus appear on hover (desktop) with slight delay
- Active page indicator in navigation
- Smooth scroll to sections with offset for fixed header

**CTAs**:
- Primary: Solid button with medium-high visual weight
- Secondary: Outline button with hover fill
- Tertiary: Text link with arrow icon
- Spacing between CTA pairs: gap-4

---

## Page-Specific Layouts

**Homepage**: Hero → Trust Foundations (3 cards) → Ventures Overview (3 large cards) → How VSG Works (4-step process) → Stats/Social Proof → CTA Section → Footer

**Studio Page**: Hero → Mission/Vision/Purpose (side-by-side layout) → Positioning → Values (6 cards in 2x3 grid) → Team CTA

**Venture Pages**: Hero → Overview → Key Features (3-4 cards) → How It Works (numbered steps) → Use Cases (2-column grid) → Integration/Technical Details → CTA

**Governance**: No hero image. Content-first layout → Change Log Table → Policy Documents (expandable sections) → Transparency Commitments → Contact for Questions

**Insights**: No hero. Blog-style grid (2-3 columns) of article cards with image, title, excerpt, date, read time

**Careers**: Medium hero → Company Culture → Open Roles (list with expandable details) → Application Process → Benefits