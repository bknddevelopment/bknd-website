# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production (static export)
pnpm start        # Serve production build
pnpm lint         # Run ESLint
```

**Important:** Use `pnpm` (not npm/yarn).

## Architecture

**Stack:** Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion

**Deployment:** Static export (`output: 'export'`) - deploys to Vercel (production) or GitHub Pages.

- `DEPLOY_TARGET=github-pages` enables `/bknd-website` basePath
- Vercel uses root path (no basePath)

### Directory Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout (metadata, JSON-LD schema, GA4)
│   ├── globals.css        # Design system CSS variables
│   ├── page.tsx           # Homepage (composed of section components)
│   ├── blog/[slug]/       # Dynamic blog routes
│   └── services/          # Nested service pages (ai/, seo/, content/, etc.)
├── components/            # React components (mostly 'use client')
│   ├── AnimateOnScroll.tsx  # Reusable scroll animation wrapper
│   └── ...                # Header, Hero, Services, Footer, etc.
└── lib/
    └── blog.ts            # Blog post data (large file, ~8k lines)
```

### Key Patterns

- **'use client'** on components using Framer Motion or useState
- **AnimateOnScroll** wrapper for scroll-triggered animations
- **Custom SVG icons** in Services component (black lines + cyan accent dots)
- **JSON-LD schema** in root layout (Organization, LocalBusiness, WebSite)
- **Google Analytics 4** integrated in root layout

## Design System

**Apple-inspired minimalism** - clean, white space, sharp corners.

| Element    | Border Radius    |
| ---------- | ---------------- |
| Buttons    | 2px (very sharp) |
| Cards      | 4px              |
| Inputs     | 4px              |
| Pills/tags | 20-30px          |

**Colors:**

- Primary: `#FFFFFF` (white), `#1D1D1F` (black)
- Accent: `#00D4FF` (cyan) - used sparingly
- Grays: `#F5F5F7` (light), `#86868B` (medium)

**Typography:** Inter font via next/font

## Path Aliases

```typescript
@/* → ./src/*
```

## Notes

- Images in `/public/images/` - reference as `/images/filename.png`
- Sitemap at `/public/sitemap.xml` - uses `bknddevelopment.com` domain
- Static export means no API routes or server-side features
