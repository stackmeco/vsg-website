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
- **Navigation**: Enterprise-grade unified navigation system using shadcn NavigationMenu, with a single source of truth in `client/src/config/navigation.ts`. Desktop navigation features hover dropdowns, while mobile uses collapsible accordions.
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
- **Brand Lint Script**: `scripts/brandLint.js` scans `client/src` for banned phrases from the v3.0 Brand & Voice System. Run with `node scripts/brandLint.js`. Detects deprecated language patterns like "AI-powered", "game-changing", old pillar references ("Signal / Value / Human"), legacy brand names (Stackme, Axiom), and anti-patterns.

### Brand v3.0 Alignment (December 2024)
- **Legacy Names Removed**: Stackme venture deleted, Axiom references replaced with Lumina
- **Domain Mappings**: Truth (Lumina), Capital (Helios), Dignity (Uniqueness Engine)
- **studio.ts Updated**: Pillars array uses Truth/Capital/Dignity; "Seek the Signal" replaced with "Anchor to Evidence"
- **PageMeta Compliance**: All 11 pages have exact v3.0 titles/descriptions with em-dash format
- **Banned Phrases**: No banned phrases remain in client/src per brand lint validation
- **Canonical Purpose/Vision/Mission Pages**: Updated with exact v3.0 canonical headings:
  - Purpose: "To democratize institutional-grade leverage." (explicit exception for "democratize" per spec directive)
  - Vision: "A future where 'trust' is an engineered feature, not a gamble."
  - Mission: "We engineer the infrastructure of verifiable autonomy."
- **Page Structure**: Each page now includes hero, "what this means", Truth/Capital/Dignity domain mapping, and disclaimer sections