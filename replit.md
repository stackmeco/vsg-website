# Verified Systems Group (VSG) Marketing Site

## Overview
The VSG marketing site showcases an AI-native finance R&D studio, focusing on governed rails for identity, treasury, and liquidity. The site aims to establish VSG as a leader in verifiable systems for autonomous finance, targeting institutional clients, technical collaborators, and policy-adjacent readers. It features a "control room aesthetic" with a dark theme, emphasizing trust, technical credibility, and confidence. Key capabilities include highlighting three core ventures: Lumina (evidence-backed grading), Helios (treasury management), and Uniqueness Engine (personhood).

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Frameworks**: React 18 (TypeScript), Vite, Wouter (routing), TanStack Query (data fetching).
- **UI/UX**: shadcn/ui (Radix UI), Tailwind CSS (custom dark theme), Space Grotesk and Inter fonts. Features a "control room" aesthetic, dark mode only, with custom components like `ConsolePanel` and `PolicyChip`. Emphasizes accessibility and responsive design.

### Backend
- **Server**: Express.js for API and HTTP serving.
- **Data Layer**: Initially in-memory storage, transitioning to PostgreSQL via Drizzle ORM and Neon. Zod for validation.
- **Contact Form**: Submissions saved to `data/contacts.json` with rate limiting and origin validation.

### System Design Choices
- **Navigation**: Config-driven, unified navigation (`client/src/config/navigation.ts`) with desktop hover dropdowns and mobile accordions, full keyboard navigation, and ARIA support.
- **Typography**: 15px base with `rem` units and semantic tokens for consistent scaling.
- **Performance**: Lazy loading for audio, image preloading, `ErrorBoundary` for error recovery.
- **Security**: CSP headers, rate limiting, origin validation, `ALLOWED_ORIGIN` env variable, JSON-LD for SEO, PWA support.
- **Accessibility**: Comprehensive `aria-labels`, `role="status"`, keyboard navigation.
- **Brand Alignment**: Adherence to Brand & Voice System v3.0, including title patterns, meta descriptions, and core brand pillars ("Truth · Capital · Dignity").
- **Motion Protocol**: Uses a mechanical easing curve (`cubic-bezier(0.4, 0, 0.2, 1)`) and 150ms transitions.

## External Dependencies

### Core Infrastructure
- **Neon PostgreSQL**: Serverless PostgreSQL database.
- **Google Fonts API**: For Space Grotesk and Inter.
- **Static Assets**: Served from `attached_assets`.

### UI Component Libraries
- **Radix UI**: Headless component primitives.
- **shadcn/ui**: Component library.
- **Embla Carousel**: Carousel functionality.
- **cmdk**: Command palette.
- **Lucide React**: Icon library.

### Integration Points
- **Form Validation**: `react-hook-form` with Zod resolvers.
- **Session Management**: `connect-pg-simple`.

## Recent Changes

- **P/V/M Anchors on Studio Page** (December 2024):
  - Added anchor IDs (#purpose, #vision, #mission) to P/V/M section for deep linking
  - Updated P/V/M labels with sublabels per v3.0 spec (Purpose — Why we exist, etc.)
  - Removed separate /studio/purpose, /studio/vision, /studio/mission routes
  - Deleted Purpose.tsx, Vision.tsx, Mission.tsx files
  - Updated navigation.ts, studio.ts, searchIndex.ts to use anchor links
  - Added 9 new tests for P/V/M anchors and route cleanup
  - 266 passing tests as of December 2024
- **Helios Page v3.0 Polish** (December 2024):
  - PageMeta: title="Helios", description on internal execution engine for digital asset treasury
  - Hero: "Helios: governed capital under constraints." with "Capital · Internal treasury engine" overline
  - Hero body: Two paragraphs (only one warmth line with "you"), CTAs to /approach and /standards
  - "What Helios is" section with heliosIs/heliosIsNot arrays
  - "Where Helios sits in the studio" section with Capital beam/Truth and telemetry/Dignity and control cards
  - "How Helios runs" section with two paragraphs and howHeliosRuns array
  - "Governance and standards" section with paragraph and governanceItems array
  - "What Helios refuses to do" section with refusals array
  - Disclaimer section, NextStepBlock points to /insights
  - Old content removed: whatHeliosDoesBullets, mechanismCards, heliosDomains, whatHeliosIsItems, whatHeliosIsNotItems
  - 23 v3.0 assertions added to brand-compliance.test.ts
- **Insights Page v3.0 Polish** (December 2024):
  - PageMeta: title="Insights", description on notes/memos/logs across Truth, Capital, and Dignity
  - Hero: "Insights from systems that have to hold up." with "Notes from the studio" overline
  - Hero body: Two paragraphs (only one warmth line with "you"), CTAs to /approach and /standards
  - "What you'll find here" section with bullet list (4 items)
  - "Recent notes" section with static insightsEntries array (3 entries mapped to Truth/Capital/Dignity)
  - "All notes" section with filter controls
  - "How we choose what to publish" section (two paragraphs, no "you" language)
  - "Tying back to the rest of the studio" section with Pillars/Process/Standards cards
  - Disclaimer section, NextStepBlock points to /studio
  - Old content removed: whatYoullFindHere, whatCountsAsInsight, howToRead, whatInsightsAre, whatInsightsAreNot
  - 22 v3.0 assertions added to brand-compliance.test.ts
  - 257 passing tests as of December 2024