# PROJECT CONTEXT — Fagan Fabian Altair Portfolio

**Repository:** `fagangans/Fagan-portofolio`  
**Branch:** `main`  
**Last updated:** June 2026  
**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · React Three Fiber  

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Folder Structure](#2-folder-structure)
3. [Dependencies](#3-dependencies)
4. [Features](#4-features)
5. [Content Configuration](#5-content-configuration)
6. [Known Issues & Fixes Applied](#6-known-issues--fixes-applied)
7. [Deployment Setup](#7-deployment-setup)
8. [Future Roadmap](#8-future-roadmap)

---

## 1. Architecture Overview

### Rendering Strategy

The site uses **Next.js 15 App Router** with **static prerendering** (SSG). Every route is fully static — no server-side runtime is required at request time.

```
Request → CDN (Vercel Edge) → Prerendered HTML → Client hydration
```

### Component Model

The App Router splits components into two categories:

| Type | Directive | Used for |
|---|---|---|
| Server Component | *(none)* | `page.tsx`, `layout.tsx` — layout shells with no browser APIs |
| Client Component | `"use client"` | Every interactive or animated component |

All 24 components in `src/components/` are Client Components. They are imported by the Server Component `page.tsx`, which is valid in the App Router — the server renders the initial HTML shell, then React hydrates the client.

### 3D Rendering

The Hero 3D scene (`HeroScene.tsx`) is loaded via `next/dynamic` with `{ ssr: false }`:

```
page.tsx (Server)
  └─ HeroSection.tsx ("use client")
       └─ dynamic(() => HeroScene, { ssr: false })
            └─ @react-three/fiber Canvas
                 ├─ Particle field (1,000 points)
                 ├─ FloatingShape × 4 (torus, icosahedron, octahedron)
                 └─ Rig (mouse-parallax camera)
```

The Canvas is isolated in its own React reconciler (`react-reconciler@0.27.0`). Two error boundaries protect the page: `SceneErrorBoundary` (inside `HeroScene.tsx`) and `HeroSceneBoundary` (in `HeroSection.tsx`). If WebGL fails for any reason, the page degrades gracefully to a static gradient background.

### Animation Stack

| Library | Role |
|---|---|
| **Framer Motion** | Page entrance animations, scroll-reveal (`whileInView`), layout animations, spring physics (cursor) |
| **Lenis** | Smooth inertial scroll — replaces native scroll on all devices |
| **GSAP** | Installed and available; not yet used in production code |
| **React Three Fiber** | 3D WebGL scene in the hero |

---

## 2. Folder Structure

```
Fagan-portofolio/
├── public/
│   ├── manifest.json          # PWA manifest
│   └── icon.svg               # Site icon
│
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind base + CSS variables + utility classes
│   │   ├── layout.tsx         # Root layout: fonts, ThemeProvider, global UI
│   │   ├── page.tsx           # Home page — assembles all sections
│   │   └── error.tsx          # Next.js page-level error boundary
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Fixed top nav, mobile menu, theme toggle
│   │   │   └── Footer.tsx     # Footer with nav links and social icons
│   │   │
│   │   ├── sections/          # One file per page section
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroScene.tsx  # React Three Fiber canvas (dynamically imported)
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── AchievementsSection.tsx
│   │   │   ├── BlogSection.tsx
│   │   │   └── ContactSection.tsx
│   │   │
│   │   └── ui/                # Reusable primitives
│   │       ├── CustomCursor.tsx    # Dot + spring-follow ring cursor
│   │       ├── GlassCard.tsx       # Glassmorphism card wrapper
│   │       ├── LoadingScreen.tsx   # Fullscreen intro animation (2.5 s)
│   │       ├── Marquee.tsx         # Infinite horizontal text ticker
│   │       ├── ScrollProgress.tsx  # Gold top-bar scroll indicator
│   │       ├── SectionHeading.tsx  # Eyebrow + title + gold highlight
│   │       ├── SmoothScroll.tsx    # Lenis initializer (renders null)
│   │       └── ThemeProvider.tsx   # next-themes wrapper
│   │
│   ├── data/
│   │   └── portfolio.ts       # ★ SINGLE SOURCE OF TRUTH for all content
│   │
│   ├── hooks/
│   │   ├── useMousePosition.ts
│   │   └── useScrollAnimation.ts
│   │
│   ├── lib/
│   │   ├── data.ts            # Re-exports from @/data/portfolio (backward compat)
│   │   ├── icons.tsx          # Lucide icon name → component map
│   │   └── utils.ts           # cn() — clsx + tailwind-merge
│   │
│   └── types/
│       └── index.ts           # Re-exports types from @/data/portfolio (backward compat)
│
├── tailwind.config.ts         # Custom colors, fonts, keyframes, animations
├── next.config.ts             # transpilePackages: ["three"]
├── tsconfig.json              # Path alias: @/* → ./src/*
├── postcss.config.mjs
├── .gitignore
└── PROJECT_CONTEXT.md         # This file
```

---

## 3. Dependencies

### Runtime Dependencies

| Package | Version | Purpose |
|---|---|---|
| `next` | ^15.5.19 | Framework — App Router, SSG, image optimization |
| `react` | ^18.3.1 | UI library |
| `react-dom` | ^18.3.1 | DOM renderer |
| `framer-motion` | ^12.40.0 | Animations — motion components, springs, scroll hooks |
| `@react-three/fiber` | ^8.18.0 | React renderer for Three.js WebGL scenes |
| `@react-three/drei` | ^9.122.0 | R3F helpers — `Float`, cameras, controls |
| `three` | ^0.176.0 | WebGL math and geometry (pinned — see §6) |
| `@studio-freight/lenis` | ^1.0.42 | Smooth inertial scrolling |
| `gsap` | ^3.15.0 | Animation library (installed, not yet used) |
| `@gsap/react` | ^2.1.2 | React hooks for GSAP |
| `next-themes` | ^0.4.6 | Dark/light mode with system detection |
| `lucide-react` | ^0.460.0 | Icon set |
| `clsx` | ^2.1.1 | Conditional class utility |
| `tailwind-merge` | ^3.6.0 | Tailwind class merging (deduplication) |
| `class-variance-authority` | ^0.7.1 | Component variant system |
| `@radix-ui/react-dialog` | ^1.1.16 | Accessible modal (used in Projects section) |
| `@radix-ui/react-tabs` | ^1.1.14 | Accessible tabs (available for use) |
| `@radix-ui/react-tooltip` | ^1.2.9 | Accessible tooltips (available for use) |

### Dev Dependencies

| Package | Version | Purpose |
|---|---|---|
| `typescript` | ^5.9.3 | Type checking |
| `tailwindcss` | ^3.4.19 | Utility-first CSS |
| `autoprefixer` | ^10.5.0 | CSS vendor prefixes |
| `postcss` | ^8.5.15 | CSS processing pipeline |
| `eslint` | ^8.57.1 | Linting |
| `eslint-config-next` | ^15.5.19 | Next.js ESLint rules |
| `@types/three` | ^0.176.0 | Three.js TypeScript types |
| `@types/react` | ^18.3.31 | React TypeScript types |
| `@types/react-dom` | ^18.3.7 | React DOM TypeScript types |
| `@types/node` | ^20.19.42 | Node.js TypeScript types |

### Version Constraints (Critical)

- **`three` must stay at `^0.176.x`** — `@react-three/fiber@8` is incompatible with Three.js 0.177+. Do not upgrade `three` without simultaneously upgrading R3F to v9 (which requires React 19).
- **`tailwind-merge@^3.x`** was designed for Tailwind CSS v4. The project uses Tailwind v3. Upgrade both together or stay on `tailwind-merge@^2.x`.
- **`react` must stay at `^18.x`** until `@react-three/fiber` is upgraded to v9 (peer dep: `react: ">=18 <19"`).

---

## 4. Features

### Sections (in page order)

| Section | Component | Key Features |
|---|---|---|
| **Hero** | `HeroSection` + `HeroScene` | Fullscreen WebGL scene, particle field, floating 3D shapes, mouse-parallax camera, per-character name animation, animated stats |
| **Marquee** | `Marquee` | Infinite CSS-animated horizontal ticker |
| **About** | `AboutSection` | 3D-perspective photo card, biography from config, experience timeline, animated counters |
| **Skills** | `SkillsSection` | 6 tilt cards, animated progress bars, Lucide icons |
| **Projects** | `ProjectsSection` | Category filter tabs, 6 project cards, detail modal, Live + GitHub buttons |
| **Services** | `ServicesSection` | 5 service cards with gold glow on hover |
| **Testimonials** | `TestimonialsSection` | Infinite CSS auto-scroll slider, glassmorphism cards, star ratings |
| **Achievements** | `AchievementsSection` | Alternating vertical timeline with type icons |
| **Blog** | `BlogSection` | 3 article cards with category badges and reading time |
| **Contact** | `ContactSection` | Animated gold-underline form, email/phone/location from config, social icon links |

### Global UI

| Feature | Component | Notes |
|---|---|---|
| Custom cursor | `CustomCursor` | Dot + spring-follow ring; scales on hover over interactive elements; hidden on touch devices |
| Loading screen | `LoadingScreen` | Fullscreen black overlay with FFA monogram + progress bar; auto-dismisses at 2.5 s |
| Scroll progress | `ScrollProgress` | Gold 2 px bar fixed at top of viewport |
| Smooth scroll | `SmoothScroll` | Lenis instance initialized in `useEffect`; RAF loop; destroyed on unmount |
| Dark/light toggle | `Navbar` + `ThemeProvider` | Defaults to dark; system detection disabled; `suppressHydrationWarning` on `<html>` |
| Navbar | `Navbar` | Shrinks + blurs on scroll; mobile hamburger with animated drawer |
| Error boundary | `error.tsx` | Branded fallback for any unhandled page-level React error |

### Design Tokens (Tailwind)

| Token | Value |
|---|---|
| `black` | `#050505` |
| `charcoal` | `#111111` |
| `silver` | `#A0A0A0` |
| `gold` | `#C9A84C` |
| `gold-light` | `#E0C77A` |
| `gold-dark` | `#9C8033` |
| `font-sans` | Inter (variable font via `next/font`) |
| `font-serif` | Playfair Display (variable font via `next/font`) |

---

## 5. Content Configuration

**All editable content lives in one file: `src/data/portfolio.ts`**

To update the website, only this file needs to be modified. No component code needs to change.

### What is configurable

```typescript
// Personal
name        // Full name — used in hero, footer, SEO, metadata
tagline     // One-line descriptor — hero subtitle, page title
shortBio    // One sentence — hero paragraph, footer tagline, SEO description
biography   // Multi-paragraph — About section (split on double newline)
email       // Contact section + mailto link
phone       // Contact section + WhatsApp link (digits extracted automatically)
location    // Contact section label

// Navigation
navLinks    // { label, href }[] — Navbar and Footer

// Social
socials     // { label, href, icon }[] — Contact section + Footer
            // icon must be a key in src/lib/icons.tsx

// Hero
stats       // { value, label }[] — animated stat counters

// Skills
skillCategories  // { category, icon, skills: { name, level }[] }[]

// Projects
projects    // { id, title, description, longDescription, category,
            //   tech, gradient, liveUrl, githubUrl }[]

// Services
services    // { id, title, description, icon, features }[]

// Testimonials
testimonials // { id, name, role, company, content, rating, gradient }[]

// Achievements
achievements // { id, year, title, description, type }[]

// Blog posts
blogPosts    // { id, title, excerpt, category, readTime, date, gradient }[]
```

### Backward compatibility

`src/lib/data.ts` and `src/types/index.ts` both re-export everything from `portfolio.ts`. Any existing import from either of those paths continues to work unchanged.

---

## 6. Known Issues & Fixes Applied

### Issue 1 — `bufferAttribute count` TypeError (FIXED)

**Symptom:** Vercel production showed "Application error: a client-side exception has occurred." The branded `error.tsx` boundary rendered instead of the page.

**Root cause:** `THREE.BufferAttribute.count` is a getter-only property (no setter). The `<bufferAttribute count={count} />` prop caused React Three Fiber's reconciler to execute `instance.count = 1000` in ES module strict mode, throwing `TypeError: Cannot set property count of #<BufferAttribute> which has only a getter`. Because R3F runs in a **separate React reconciler root**, this error bypassed the inner `SceneErrorBoundary` and surfaced at the Next.js page level.

**Fix:** Removed the `count` prop — it is redundant (`count` is derived automatically from `array.length / itemSize`). Added `HeroSceneBoundary` in `HeroSection.tsx` as a second error boundary wrapping the dynamic import.

**Files changed:** `HeroScene.tsx`, `HeroSection.tsx`

---

### Issue 2 — Three.js version pinned to 0.176.0 (ACTIVE CONSTRAINT)

**Symptom:** Original install used `three@^0.184.0`. R3F v8 relies on APIs removed in Three.js 0.177+ (`sRGBEncoding`, `LinearEncoding`, etc.), causing silent WebGL failures.

**Fix:** Pinned to `three@^0.176.0` and `@types/three@^0.176.0`.

**Do not upgrade `three`** without upgrading `@react-three/fiber` to v9 simultaneously. R3F v9 requires React 19.

---

### Issue 3 — Build verification marker (RESOLVED)

The "HERO SCENE BUILD v2" badge has been removed from `HeroSection.tsx`. The debug `console.error` in `error.tsx` and development comments in `HeroScene.tsx` / `HeroSection.tsx` have also been removed.

---

## 7. Deployment Setup

### Platform: Vercel

The project is configured for zero-config Vercel deployment.

**Connect and deploy:**
1. Go to [vercel.com](https://vercel.com) → Add New Project → Import from GitHub (`fagangans/Fagan-portofolio`)
2. Framework: Next.js (auto-detected)
3. Root directory: `/` (default)
4. Build command: `npm run build` (default)
5. Output directory: `.next` (default)
6. No environment variables required for base functionality

**Auto-deploy:** Every push to `main` triggers a new Vercel production deployment.

### Build commands

```bash
npm run dev      # Development server — http://localhost:3000
npm run build    # Production build — outputs to .next/
npm run start    # Serve the production build locally
npm run lint     # ESLint check
```

### Environment variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | For contact form | API key from [resend.com](https://resend.com). Without it the `/api/contact` route returns HTTP 503 but the rest of the site works fine. |

Add variables via the Vercel dashboard → Project → Settings → Environment Variables. Never commit secrets to the repository.

### PWA

`public/manifest.json` is present and linked in `layout.tsx`. To fully enable PWA offline support, add a service worker (e.g. via `next-pwa` package).

---

## 8. Future Roadmap

### High priority

- [x] **Remove build marker** — Deleted from `HeroSection.tsx`; debug `console.error` removed from `error.tsx`
- [x] **Real contact form backend** — `POST /api/contact` route added (`src/app/api/contact/route.ts`); uses Resend SDK; requires `RESEND_API_KEY` env var in Vercel dashboard; returns structured errors; form shows success/error states with animation
- [x] **WhatsApp link** — `whatsappNumber` field added to `portfolio.ts`; set it to override the auto-derived number from `phone`; contact section uses it automatically
- [x] **Real project URLs** — All six projects marked with `// TODO` comments in `portfolio.ts`; buttons in the modal are hidden when URL is `""` or `"#"` so no broken links ship
- [x] **Replace photo placeholder** — `AboutSection.tsx` now uses `next/image` when `profilePhoto` is set in `portfolio.ts`; falls back to the styled placeholder icon when empty

### Medium priority

- [ ] **Upgrade to React 19 + R3F v9** — Unlocks Three.js 0.177+, React Server Components with async/await, and `use()` hook. Requires updating `@react-three/fiber` to `^9.x`, `@react-three/drei` to `^10.x`, and `react`/`react-dom` to `^19.x`
- [ ] **GSAP integration** — GSAP is installed but unused. Candidate uses: scroll-triggered text reveals, section transitions, pinned scroll sequences
- [ ] **Blog CMS** — Connect `blogPosts` to a headless CMS (Sanity, Contentful, or a local MDX file system) so posts can be written without code changes
- [ ] **Analytics** — Add Vercel Analytics (`@vercel/analytics`) or Plausible; one import in `layout.tsx`
- [ ] **Upgrade `tailwind-merge`** — Either pin to `^2.x` (safe with Tailwind v3) or upgrade the full CSS stack to Tailwind v4 + `tailwind-merge@^3.x`

### Low priority / enhancements

- [ ] **PWA service worker** — Add `next-pwa` for offline support and installability
- [ ] **Dark/light theme polish** — Light mode palette currently uses Tailwind defaults; define explicit light-mode design tokens in `globals.css`
- [ ] **Project image assets** — Replace gradient placeholders in project cards with real screenshots using `next/image`
- [ ] **Blog search + filtering** — `BlogSection.tsx` is currently static; add client-side search and category filtering
- [ ] **Testimonials pagination** — The infinite slider clones items; switch to a proper carousel library if testimonial count grows large
- [ ] **Accessibility audit** — Run axe or Lighthouse accessibility scan; add `aria-label` to all icon-only buttons, ensure focus rings are visible in both themes
- [ ] **i18n** — If a multilingual audience is needed, Next.js App Router has built-in i18n routing; content strings in `portfolio.ts` make extraction straightforward

---

*Generated from source at commit `e48df59` — June 2026.*
