# Verified Systems Group (VSG) Marketing Site

## Overview

VSG is an AI-native finance R&D studio that builds governed rails for identity, treasury, and liquidity. This is the marketing and informational website showcasing VSG's ventures, governance principles, and institutional-grade approach to AI-ready finance primitives.

The site follows a "control room aesthetic" with a dark theme emphasizing institutional trust, technical credibility, and calm confidence. It features three core ventures: Uniqueness Engine (Sybil resistance), Helios (treasury management), and VSG Liquidity Engine (liquidity for long-term holders).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type safety and modern component patterns
- Vite as the build tool and dev server for fast HMR and optimized production builds
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query for server state management and data fetching

**UI Component System**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for styling with custom VSG dark theme
- Custom design system following Linear/Stripe aesthetic with Space Grotesk (headings) and Inter (body) typography
- Component-driven architecture with reusable cards, panels, and form elements

**Styling Approach**
- CSS variables for theming with HSL color values
- Utility-first Tailwind classes with custom extensions for VSG brand
- Dark-only theme optimized for "control room" aesthetic
- Responsive design using Tailwind breakpoints (mobile-first)

**Key Design Decisions**
- Chose Wouter over React Router for smaller bundle size and simpler API
- Used shadcn/ui for accessible, customizable components without framework lock-in
- Implemented custom ConsolePanel and PolicyChip components for financial data visualization
- Dark theme only (no light mode) to reinforce institutional/technical positioning

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- Separate dev (index-dev.ts) and production (index-prod.ts) entry points
- Vite middleware integration in development for HMR
- Static file serving in production from compiled dist/public

**Data Layer Design**
- In-memory storage implementation (MemStorage class) as baseline
- Interface-driven storage design (IStorage) for future database migration
- Drizzle ORM configured for PostgreSQL (ready for production database)
- User schema defined with Drizzle and Zod for validation

**Key Architectural Choices**
- Chose Express for simplicity and ecosystem maturity
- Separated dev/prod server logic to optimize development experience while keeping production lean
- Used interface pattern for storage to allow seamless transition from in-memory to database
- API routes prefixed with /api for clear separation from frontend routes

### Data Storage Solutions

**Current State**
- In-memory Map-based storage (development/prototype)
- User model with id, username, password fields
- UUID-based primary keys

**Planned Migration Path**
- Drizzle ORM already configured for PostgreSQL
- Schema defined in shared/schema.ts using drizzle-orm/pg-core
- Connection via @neondatabase/serverless for Neon PostgreSQL
- Migration files managed in /migrations directory

**Design Rationale**
- Started with in-memory storage for rapid prototyping
- IStorage interface allows adding real database without refactoring consumers
- Drizzle chosen for type-safe SQL queries and automatic migration generation
- Neon selected for serverless PostgreSQL with edge compatibility

**Contact Form Storage**
- Contact submissions saved to `data/contacts.json` (file-based persistence)
- Each entry has: id, timestamp, name, email, organization, role, subject, message, consent
- Retrieve all contacts via `GET /api/contacts` endpoint
- Future: Email notifications to andrew@steckme.co via Resend integration (deferred)

### External Dependencies

**Core Infrastructure**
- Neon PostgreSQL (configured but not yet provisioned) - Serverless PostgreSQL database
- Google Fonts API - Space Grotesk and Inter typography
- Static assets served from attached_assets directory

**UI Component Libraries**
- Radix UI primitives - Accessible headless components (accordion, dialog, dropdown, etc.)
- Embla Carousel - Carousel/slider functionality
- cmdk - Command palette component
- Lucide React - Icon library

**Developer Experience**
- Replit-specific plugins for vite (cartographer, dev-banner, runtime error modal)
- ESBuild for server-side bundling in production
- PostCSS with Tailwind and Autoprefixer

**Key Integration Points**
- Font loading from Google Fonts CDN (preconnect optimization in HTML)
- Static image assets referenced via @assets alias
- Form validation using react-hook-form with Zod resolvers
- Session management ready via connect-pg-simple (when database provisioned)

**Security & Compliance Considerations**
- Privacy-first design emphasized in brand messaging
- No PII retention as core principle
- Governance and policy enforcement as primary value proposition
- Exception routing and audit trail design patterns built into UI