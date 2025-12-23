# Verifiable Systems Group Website

The Infrastructure of Verifiable Autonomy

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind utilities
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with main CTA
│   ├── Problem.tsx      # Problem statement section
│   ├── WhoWeAre.tsx     # Company identity section
│   ├── Pillars.tsx      # Three pillars (Verification, Capital, Control)
│   ├── Products.tsx     # Product stack by layer
│   ├── Values.tsx       # Operating values/principles
│   ├── Future.tsx       # Vision section
│   ├── Footer.tsx       # Footer with navigation
│   └── index.ts         # Component exports
```

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Black | `#0a0a0a` | Primary background |
| Accent | `#3b82f6` | Primary accent (blue) |
| Verification | `#8b5cf6` | Verification pillar (purple) |
| Capital | `#10b981` | Capital pillar (green) |
| Control | `#f59e0b` | Control pillar (amber) |

## Sections Overview

1. **Hero** - Main headline "The Infrastructure of Verifiable Autonomy" with CTAs
2. **Problem** - Explains the trust tax and verification challenges in AI/crypto
3. **Who We Are** - Purpose, Vision, and Mission statements
4. **Three Pillars** - Verification, Capital, and Control infrastructure
5. **Products** - Full stack organized by layer (Axiom, Stackme, Helios, Sentinel, etc.)
6. **Values** - Six operating principles (Intelligence Augmented, Seek the Signal, etc.)
7. **Future** - Vision for verifiable, defended, controlled autonomy

## License

Copyright © 2024 Verifiable Systems Group. All rights reserved.
