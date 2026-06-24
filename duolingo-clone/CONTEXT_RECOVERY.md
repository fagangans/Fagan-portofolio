# CONTEXT_RECOVERY.md

A new Claude Code session can read this file and continue the project immediately.

---

## What This Project Is

A Duolingo-inspired language learning application cloned from Indonesian-locale Duolingo screenshots. The goal is 95% visual similarity to 5 reference screenshots. The app is built inside `/home/user/Fagan-portofolio/duolingo-clone/` on the branch `claude/relaxed-thompson-jeUtl` of the repo `fagangans/Fagan-portofolio`.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (uses `@theme` in globals.css, not `tailwind.config.ts` extend) |
| Animation | Framer Motion |
| State | Zustand with `persist` middleware |
| Font | Inter via `next/font/google` |

**Mobile-first.** The app container is fixed at `max-width: 390px`, centered on desktop with a box-shadow. Background outside the container is `#E5E5E5`.

---

## Design System

```
Primary:    #FF4FB3   pink/magenta — lesson nodes, XP banner, active states
Secondary:  #58CC02   green — correct answers, NPC labels, checkmarks
Accent:     #1CB0F6   cyan — gems, nav active, buttons
Warning:    #FF9600   orange — streak, timers, warnings
Danger:     #FF4B4B   red — hearts, wrong answers, BARU badge
Purple:     #9B59B6   missions header, REKOMENDASI banner
Background: #FFFFFF   lesson path, subscription screen
Gray BG:    #F7F7F7   missions, practice, profile backgrounds
Muted:      #AFAFAF   locked nodes, section header labels
```

**Buttons:** `rounded-full`, bottom 3D shadow (`0 4-5px 0 darkerShade`), `whileTap={{ scale: 0.97, y: 3 }}` to simulate physical press.

**Cards:** `rounded-2xl` or `rounded-3xl`, subtle `box-shadow`, white background.

**Section labels:** `text-[11px] font-bold text-[#AFAFAF] uppercase tracking-widest` — muted, small, wide-spaced.

---

## Screens

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Learning path with zigzag lesson nodes |
| `/missions` | `app/missions/page.tsx` | Weekly + daily missions with progress |
| `/practice` | `app/practice/page.tsx` | Practice skill categories |
| `/profile` | `app/profile/page.tsx` | User profile and settings menu |
| `/subscription` | `app/subscription/page.tsx` | Super and Keluarga Super plans |
| `/lesson/[id]` | `app/lesson/[id]/page.tsx` | Multiple-choice lesson exercise |
| `/leaderboard` | `app/leaderboard/page.tsx` | Stub — not yet built |
| `/social` | `app/social/page.tsx` | Stub — not yet built |

---

## Components

| File | Purpose |
|---|---|
| `StatusBar.tsx` | Top bar: flag+XP, flame+streak, SVG gem cube, SVG heart |
| `XPBanner.tsx` | Full-width magenta unit header with hamburger icon button |
| `LessonPath.tsx` | 20 nodes, S-curve geometry, ChestSVG, ChessRookSVG NPC |
| `LessonNode.tsx` | Circle node: completed / active / locked, SVG icons per type |
| `BottomNav.tsx` | 6-tab navigation bar |
| `MissionCard.tsx` | Mission card: progress bar with fraction inside, gold chest SVG |
| `PlanCard.tsx` | Subscription plan card with illustration slot and gray CTA |
| `PracticeCard.tsx` | Skill practice card: SVG icon right, title left, badge top-left |
| `ProfileMenuItem.tsx` | Menu row: ReactNode SVG icon badge + label |
| `ProgressBar.tsx` | Animated fill bar (used in lesson screen) |

---

## Game State (Zustand — `store/gameStore.ts`)

```ts
{
  xp: 10,
  streak: 1,
  gems: 274,
  hearts: 25,
  username: "Fagan",
  level: 2,
  currentUnit: 2,
  completedLessons: [0, 1, 2, 3],
  activeLessonIndex: 4
}
```

Persisted to `localStorage` under key `"duolingo-clone-store"`.

---

## Critical Implementation Details

### Active node — two-wrapper pattern (DO NOT MERGE)

The active lesson node uses two separate elements to prevent the 3D bottom shadow from visually displacing during the bounce animation:

```tsx
// Outer div: static position — holds the pink ring via boxShadow
const ringStyle = state === "active" ? {
  borderRadius: "9999px",
  padding: 5,
  background: "white",
  boxShadow: "0 0 0 4px #FF4FB3",
  display: "inline-flex",
} : { display: "inline-flex" };

// Inner motion.div: animates y:[0,-8,0] repeat:Infinity
// holds the bottom shadow "0 5px 0 #CC0093"
```

If you merge these into one element, the shadow moves with the bounce and looks broken.

### Learning path S-curve geometry

```ts
const POSITIONS = [180, 240, 270, 240, 180, 110, 60, 110]; // px, cycle of 8
```

These are `marginLeft` values in a 390px container for 66px nodes. They produce the organic zigzag seen in the screenshots. Each node slot is `height: 96px`.

### Tailwind v4 note

CSS variables are defined via `@theme { }` in `app/globals.css`. The `tailwind.config.ts` file also has `extend.colors` entries but they may not resolve as class names. Use `style={{ color: "#FF4FB3" }}` or `className="text-[#FF4FB3]"` with inline hex values — do not rely on `text-primary` classes.

### Bottom nav — 6 tabs

```
1. /            Beranda    house icon      red    #FF4B4B
2. /missions    Misi       chest icon      orange #FF9600
3. /leaderboard Liga       trophy icon     cyan   #1CB0F6
4. /social      Sosial     heart icon      pink   #FF4FB3
5. /profile     Profil     person icon     green  #58CC02
6. /subscription Lainnya   three-dots icon purple #A56BFF
```

Active tab background: `#E8F9FF` rounded rect. No background on inactive tabs.

### PlanCard interface

```ts
interface PlanCardProps {
  name: string;
  tagline: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
  illustration?: ReactNode;
}
```

CTA button is **white background + gray border + cyan text** — NOT a filled colored button. The old `color`/`shadowColor` props were removed.

### MissionCard interface (simplified)

```ts
interface MissionCardProps {
  title: string;
  current: number;
  total: number;
  color?: string;
}
```

Timer lives in the section header only. No `description`, `timer`, or `reward` props.

### ProfileMenuItem interface

```ts
interface ProfileMenuItemProps {
  icon: ReactNode;  // colored SVG badge — NOT an emoji string
  label: string;
  onClick?: () => void;
}
```

No chevron arrow — removed.

---

## Current Similarity Score: 88–90 / 100

### Achieved in 3 phases:
- Phase 0 (initial build): 52/100
- Phase 1 (geometry, subscription rebuild, missions header): 80/100
- Phase 2 (SVG icons, badge positions, star states, illustrations): 88–90/100

### Remaining gap to 95/100:

1. **Leaderboard and Social screens** — stubs only, need full UI
2. **Practice header illustration** — Duo bird SVG present but lower fidelity than original
3. **Lesson exercise flow** — functional but visual polish of question/result screens needs work
4. **Character illustrations fidelity** — SVG mascots approximate the originals; closing the last 5% requires asset-quality illustrations
5. **Micro-animations** — XP floating text, confetti on lesson complete, heart refill animation not yet implemented

---

## Next Steps

1. Build `/leaderboard` — ranking table with league tiers (Bronze, Silver, Gold)
2. Build `/social` — friends list with streak badges
3. Polish lesson screen — add XP float animation, star burst on completion
4. Add confetti/particle animation to level-complete screen
5. Refine mascot SVGs for higher fidelity
