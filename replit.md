# Verified Systems Group (VSG) Marketing Site

## Overview
VSG is an AI-native finance R&D studio building governed rails for identity, treasury, and liquidity. This marketing site showcases VSG's ventures, governance principles, and institutional approach to AI-ready finance primitives. The site features a "control room aesthetic" with a dark theme emphasizing institutional trust, technical credibility, and calm confidence. It highlights three core ventures aligned with v3.0 domains: Lumina (Truth — evidence-backed grading), Helios (Capital — treasury management), and Uniqueness Engine (Dignity — personhood without exposure). The project's ambition is to establish VSG as a leader in verifiable systems for autonomous finance, targeting high-agency individuals, institutional stewards, technical collaborators, and policy-adjacent readers.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Frameworks**: React 18 with TypeScript, Vite for build and dev server, Wouter for client-side routing, TanStack Query for data fetching.
- **UI/UX**: shadcn/ui components (built on Radix UI), Tailwind CSS with a custom dark theme, Space Grotesk (headings) and Inter (body) typography. The aesthetic is inspired by Linear/Stripe with a "control room" feel, enforcing a dark-only mode. Custom components like `ConsolePanel` and `PolicyChip` are used for financial data visualization.
- **Design Decisions**: Emphasis on accessibility, customizability, and a lightweight routing solution (Wouter). Responsive design is implemented using Tailwind breakpoints.

### Backend Architecture
- **Server**: Express.js for the HTTP server and API routing. Separate entry points for development and production, with Vite middleware integration for HMR in development.
- **Data Layer**: Interface-driven storage design (`IStorage`) initially using in-memory (Map-based) storage. Drizzle ORM is configured for PostgreSQL (via `@neondatabase/serverless`) for future production use. User schema is defined with Drizzle and Zod for validation.
- **Contact Form**: Submissions are saved to `data/contacts.json`, with POST-only access, rate limiting (10 requests/15min/IP), and origin header validation.

### Data Storage Solutions
- **Current**: In-memory Map-based storage for rapid prototyping.
- **Planned**: Migration to PostgreSQL using Drizzle ORM, with schema defined in `shared/schema.ts` and connection via Neon PostgreSQL. Migration files are managed in `/migrations`.
- **Rationale**: Start with in-memory for speed, use an interface for seamless database integration later. Drizzle for type-safety, Neon for serverless PostgreSQL.

### System Design Choices
- **Navigation**: Enterprise-grade unified navigation system with config-driven architecture:
  - Single source of truth in `client/src/config/navigation.ts` with key, label, href, description, children fields
  - Desktop: Hover dropdowns (320px wide) with click/keyboard support, ChevronDown rotation, premium bullet styling
  - Mobile: Collapsible accordions with CSS transitions (max-h, opacity), touch-friendly 44px min targets
  - Accessibility: Full keyboard navigation (ArrowUp/Down, Escape, Enter/Space), focus-visible indicators, ARIA attributes
  - Route aliases: /pillars, /process, /standards redirect to /approach/* equivalents
  - Styling: INSIGHTS uppercase with 0.2em tracking, CONNECT primary CTA with uppercase
  - Component: `client/src/components/layout/GlobalNav.tsx` (551 lines, 35 dedicated tests)
- **Typography**: 15px base with all sizes proportional via rem. Semantic tokens (`text-telemetry`, `text-eyebrow`, `text-caption`, `text-body`, `text-body-lg`) ensure consistent scaling.
- **Performance**: Lazy loading for audio, image preloading for hero textures to prevent flashes, and an `ErrorBoundary` for graceful error recovery.
- **Security**: CSP headers, rate limiting on contact forms, origin header validation, environment variable for `ALLOWED_ORIGIN`, JSON-LD for SEO, and PWA support with a manifest.json.
- **Accessibility**: Comprehensive `aria-labels`, `role="status"`, and proper keyboard navigation support.
- **Brand Alignment**: Global text cleanup and content rewriting to align with Brand & Voice System v3.0, including title patterns, meta descriptions, keywords, and domain labels. "Truth · Capital · Dignity" are core brand pillars.
- **Motion Protocol**: Uses a mechanical easing curve (`cubic-bezier(0.4, 0, 0.2, 1)`) and 150ms transitions for hover states, with pulsing cursor states instead of spinners.

## External Dependencies

### Core Infrastructure
- **Neon PostgreSQL**: Configured for serverless PostgreSQL database (future integration).
- **Google Fonts API**: For Space Grotesk and Inter fonts.
- **Static Assets**: Served from the `attached_assets` directory.

### UI Component Libraries
- **Radix UI**: Primitives for accessible headless components (accordion, dialog, dropdown, etc.).
- **shadcn/ui**: Component library built on Radix UI.
- **Embla Carousel**: For carousel/slider functionality.
- **cmdk**: Command palette component.
- **Lucide React**: Icon library.

### Developer Experience
- **Replit-specific plugins**: For Vite (cartographer, dev-banner, runtime error modal).
- **ESBuild**: For server-side bundling in production.
- **PostCSS**: With Tailwind CSS and Autoprefixer.

### Integration Points
- **Form Validation**: `react-hook-form` with Zod resolvers.
- **Session Management**: `connect-pg-simple` (ready for database provisioning).

### Brand & Voice Tooling
- **Brand Lint Script**: `scripts/brandLint.js` scans `client/src` for banned phrases from the v3.0 Brand & Voice System. Run with `node scripts/brandLint.js`. Detects deprecated language patterns like "AI-powered", "game-changing", "the human" (except in canonical v3.0 phrases), old pillar references ("Signal / Value / Human"), legacy brand names (Stackme, Axiom), and anti-patterns. The script supports `CANONICAL_EXCEPTIONS` for exact v3.0 phrases that would otherwise be banned.

### Testing Infrastructure
- **Testing Framework**: Vitest with React Testing Library for component and integration tests
- **Test Configuration**: `vitest.config.ts` configures jsdom environment, path aliases, and coverage reporting
- **Test Setup**: `client/src/test/setup.ts` provides mocks for window.matchMedia, scrollTo, and wouter routing
- **Test Suites**:
  - `client/src/test/brand-compliance.test.ts`: Brand lint validation, domain label checks, disclaimer presence, six-stage runway verification, page-specific v3.0 compliance tests for all major pages
  - `client/src/test/components.test.tsx`: Component rendering tests for PageMeta, NextStepBlock, and data-testid convention validation
  - `client/src/test/global-nav.test.tsx`: Comprehensive GlobalNav component tests covering desktop dropdowns, mobile accordion, keyboard interaction, and accessibility attributes
- **Test Count**: 162 passing tests as of December 2024
- **Running Tests**: `npx vitest run` for single run, `npx vitest` for watch mode, `npx vitest run --coverage` for coverage report
- **Coverage**: V8 provider with text, json, and html reporters; covers all `client/src/**/*.{ts,tsx}` files

### Brand v3.0 Alignment (December 2024)
- **Legacy Names Removed**: Stackme venture deleted, Axiom references replaced with Lumina
- **Domain Mappings**: Truth (Lumina), Capital (Helios), Dignity (Uniqueness Engine)
- **studio.ts Updated**: Pillars array uses Truth/Capital/Dignity; "Seek the Signal" replaced with "Anchor to Evidence"
- **PageMeta Compliance**: All pages have exact v3.0 titles/descriptions with em-dash format
- **Banned Phrases**: No banned phrases remain in client/src per brand lint validation
- **Canonical Purpose/Vision/Mission Pages**: Updated with exact v3.0 canonical headings:
  - Purpose: "To democratize institutional-grade leverage." (explicit exception for "democratize" per spec directive)
  - Vision: "A future where 'trust' is an engineered feature, not a gamble."
  - Mission: "We engineer the infrastructure of verifiable autonomy."
- **Page Structure**: Each page now includes hero, "what this means", Truth/Capital/Dignity domain mapping, and disclaimer sections
- **Connect Page**: Updated to v3.0 Architect/Judge voice with precise, non-hype copy
- **Ventures Index Page**: Added "Three questions, three proof points" section with v3.0 domain labels
- **Overview Page v3.0 Polish** (December 2024):
  - Hero updated with canonical heading "The infrastructure of verifiable autonomy." and "Verifiable Systems Group · Studio" overline
  - "Three questions we organize around" section with problem-framing titles (Truth · What can be trusted? / Capital · How should value move? / Dignity · How do people participate?)
  - "What VSG is" section emphasizes infrastructure-grade design
  - "How the studio fits together" section with 5 navigation cards: Ventures, Approach, Process, Standards, Insights
- **Connect Page v3.0 Polish** (December 2024):
  - Hero: "Talk to us when verification matters." with "Connect · Verifiable Systems Group" overline
  - Body copy emphasizes limited conversations and structural problems (truth, capital, dignity)
  - Sidebar with guidance text, topic examples, and expectations section
  - Clear disclaimer about not providing investment, legal, or tax advice
- **404 Page v3.0 Polish** (December 2024):
  - Heading: "This page isn't wired up."
  - Calm, architectural tone with two-paragraph explanation
  - Navigation: "Go to overview", "Explore ventures", "See how we build"
- **Standards Page v3.0 Polish** (December 2024):
  - PageMeta: title="Standards & Guardrails", description on guardrails/limits/stewards
  - Hero: "Standards and guardrails for verifiable systems." with "Standards · Governance" overline
  - "What these standards are for" section on preventing silent failure
  - "Core dimensions of our standards" with 4 cards: Limits, Stewards, Evidence, Escalation
  - "How standards relate to Truth, Capital, and Dignity" section with exact v3.0 copy
  - "Internal-first, not advice" disclaimer section
  - NextStepBlock points to /insights with v3.0 copy
- **Values Page v3.0 Polish** (December 2024):
  - Route: /values with lazy loading in App.tsx
  - PageMeta: title="Values & Operating Code", description on how VSG designs, ships, and governs
  - Hero: "How we operate when it actually matters." with "Values · Operating Code" overline
  - Six values grid with v3.0 canonical copy from studio.ts: Intelligence Augmented, Seek the Signal, Engineered Ambition, Own the Engine, Value is a Mirror, Force Multiplier
  - "How these values show up in decisions" section
  - "How values relate to Truth, Capital, and Dignity" section with three domain cards
  - Cross-links to approach, ventures, and standards
  - NextStepBlock points to /approach with six-stage runway reference
  - Brand lint updated with CANONICAL_EXCEPTIONS for "Let the machine compute. Let the human connect."
- **Lumina Page v3.0 Polish** (December 2024):
  - PageMeta: title="Lumina · Truth", infrastructure-first description
  - Hero: "Grading that starts with evidence." with "Lumina · Truth venture" overline
  - Hero CTAs: "Back to ventures" + "Read field notes" pointing to /ventures and /insights
  - "What Lumina is" section with Truth question framing for physical assets
  - "How Lumina works" section with Capture/Compute/Share/Re-check phases (4 cards)
  - "Who Lumina is for" section describing graders, marketplaces, insurers, vaults, collectors
  - "What Lumina is / is not" section with v3.0 items (not a grading house, not a marketplace, not investment advice)
  - "Where Lumina sits in the studio" section with Truth lane framing and canonical bar sentence
  - Cross-links to ventures and insights
  - Disclaimer includes "investment, legal, tax, or compliance advice"
  - NextStepBlock points to /ventures with Truth, Capital, Dignity proof points copy
- **Pillars Page v3.0 Polish** (December 2024):
  - PageMeta: title="Pillars", description on AI-native, non-custodial systems across Truth, Capital, and Dignity
  - Hero: "Pillars that hold under stress." with "What we will not trade away" overline
  - Hero body: Two paragraphs (only one warmth line with "you"), CTAs to /approach and /process
  - "How to read these pillars" explainer section
  - Six pillar cards grid (md:2-col, xl:3-col): Intelligence Augmented (IA), Seek the Signal, Engineered Ambition, Own the Engine, Value is a Mirror, Force Multiplier
  - Each pillar card shows: name, mantra (italic primary), description
  - "Where these pillars show up" section with Truth/Capital/Dignity domain items (inline flex)
  - "What these pillars rule out" section with 5 constraint bullets (destructive bullet color)
  - NextStepBlock points to /approach
  - Brand lint updated with CANONICAL_EXCEPTIONS for "Let the human decide." pillar mantra
  - Brand lint now excludes test files from scanning
  - Old content removed: Verifiable Systems, Non-custodial Rails, Governed Experiments sections
- **Test Count**: 201 passing tests as of December 2024