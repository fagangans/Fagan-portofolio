# Context Recovery — Duolingo Clone

## Product Goal
A production-ready Duolingo-clone language learning app built inside `/home/user/Fagan-portofolio/duolingo-clone/`. The reference design is Indonesian-locale Duolingo screenshots (5 screens). Target: 95%+ visual similarity to those screenshots.

## Tech Stack
- Next.js 14 App Router, TypeScript, Tailwind CSS (v4 with `@theme` in globals.css)
- Framer Motion (animations), Zustand + persist (game state)
- Mobile-first, max-width 390px centered, white container on gray desktop bg
- Inter font via `next/font/google`
- Branch: `claude/relaxed-thompson-jeUtl` on `fagangans/Fagan-portofolio`

## Design System
```
Primary:   #FF4FB3   (magenta — lesson nodes, XP banner)
Secondary: #58CC02   (green — correct answers, NPC label)
Accent:    #1CB0F6   (cyan — gems, buttons, nav active)
Warning:   #FF9600   (orange — streak, timer)
Danger:    #FF4B4B   (red — hearts, wrong answers)
Purple:    #9B59B6   (missions header, REKOMENDASI banner)
BG:        #FFFFFF   (learning path, subscription)
Muted:     #AFAFAF   (locked nodes, section labels)
```
All buttons: `rounded-full`, bottom box-shadow for 3D press effect (`0 4-5px 0 darkerColor`). Cards: `rounded-2xl` or `rounded-3xl`, subtle shadow.

---

## Screens Completed

| Route | File | Status |
|---|---|---|
| `/` | `app/page.tsx` | ✅ Done |
| `/missions` | `app/missions/page.tsx` | ✅ Done |
| `/practice` | `app/practice/page.tsx` | ✅ Done |
| `/profile` | `app/profile/page.tsx` | ✅ Done |
| `/subscription` | `app/subscription/page.tsx` | ✅ Done |
| `/lesson/[id]` | `app/lesson/[id]/page.tsx` | ✅ Done |
| `/leaderboard` | `app/leaderboard/page.tsx` | Stub only |
| `/social` | `app/social/page.tsx` | Stub only |

---

## Components Completed

| File | Purpose |
|---|---|
| `components/StatusBar.tsx` | Top bar: flag+XP, flame+streak, SVG gem, SVG heart |
| `components/XPBanner.tsx` | Pink magenta unit header with notes-icon button |
| `components/LessonPath.tsx` | 20-node S-curve path, ChestSVG, ChessRookSVG NPC |
| `components/LessonNode.tsx` | Circle node: completed/active/locked states, SVG icons, decoupled ring+bounce |
| `components/BottomNav.tsx` | 6-tab nav: Beranda/Misi/Liga/Sosial/Profil/Lainnya |
| `components/MissionCard.tsx` | Mission card: progress bar with fraction inside, gold chest SVG |
| `components/PlanCard.tsx` | Subscription plan card: REKOMENDASI banner, illustration slot, gray CTA |
| `components/PracticeCard.tsx` | Practice skill card: title left, colored icon circle right |
| `components/ProfileMenuItem.tsx` | Menu row: ReactNode icon + label (no chevron) |
| `components/ProgressBar.tsx` | Animated fill progress bar |
| `store/gameStore.ts` | Zustand: xp, streak, gems, hearts, completedLessons, activeLessonIndex |

---

## Current Audit Score: 80/100

### Per-screen scores after Phase 1 fixes:
- **Home / Learning Path**: 79/100
- **Missions**: 84/100
- **Practice**: 73/100 (not touched in Phase 1)
- **Subscription**: 84/100 (largest gain, was 42)
- **Profile/More**: 65/100

---

## Remaining Visual Differences (Top 10, Phase 2 targets)

### HIGH IMPACT

**1. XPBanner has side margins (`mx-3`)** — should be flush full-width with no horizontal margins, spanning edge to edge inside the scroll container. File: `components/XPBanner.tsx`, change `mx-3` to `mx-0` and add `rounded-none` or keep `rounded-2xl` only on the card content if desired.

**2. Practice screen "BARU" badge position** — currently `absolute -top-2.5 -right-2` (top-RIGHT of icon). Screenshot shows it at top-LEFT. File: `components/PracticeCard.tsx`, change to `-top-2.5 -left-2`.

**3. Practice header illustration** — currently `🎯` emoji. Screenshot shows a Duo bird character sitting on a spinning target/wheel. Should be a small SVG character in the top-right of the teal header. File: `app/practice/page.tsx`.

**4. Star ratings fill state** — currently shows 1 gold + 2 gray stars. Screenshot shows all 3 as hollow/outlined stars `☆☆☆` (none filled — they're unearned bonus slots). File: `components/LessonPath.tsx`, change `fill={s === 0 ? "#FFD700" : "#E0E0E0"}` to `fill="none" stroke="#E0C000"` for all three.

### MEDIUM IMPACT

**5. NPC label side** — CATUR green label is to the RIGHT of the chess rook SVG. In the screenshot the NPC label sits BELOW the character (green rounded pill). File: `components/LessonPath.tsx`, restructure NPC section to column layout.

**6. "AKAN DATANG" teaser card** — currently plain white card with gray text. Screenshot shows a partially visible locked chest/reward illustration (teaser). File: `app/missions/page.tsx`.

**7. Profile menu context** — the profile screenshot is actually the "More/···" menu (6th bottom nav tab active). The profile tab (5th) navigates there. This is a routing/active-state issue more than a visual one.

**8. Practice icon circles** — cards use emoji (📹, 🔄, 📝, 🔊, 🎤) inside colored circles. Screenshot shows styled illustrated icons. Low effort improvement: replace with SVG icons matching the shape (camera, circular arrows, card/diamond, speaker, microphone).

### MINOR

**9. Duo mascot SVG brow angle** on subscription page makes it look surprised. Flatten the inner brow angle for a calmer expression.

**10. GolemScene SVG trees** are simple ellipses. Adding more angular/triangular tree silhouettes would improve the scene.

---

## Implementation Details — Critical Facts

### LessonNode active state
The active node uses a **two-layer wrapper** to decouple the ring from the bounce:
```tsx
// Outer div: static, holds ring via boxShadow
const ringStyle = state === "active" ? {
  borderRadius: "9999px", padding: 5,
  background: "white", boxShadow: "0 0 0 4px #FF4FB3",
  display: "inline-flex"
} : { display: "inline-flex" };

// Inner motion.div: bounces y:[0,-8,0], repeat:Infinity
```
Do NOT put both the ring and the `animate={{ y }}` on the same element — the bottom shadow will appear displaced during upward travel.

### LessonPath geometry
S-curve uses `marginLeft` pixel offsets on a 390px container:
```ts
const POSITIONS = [180, 240, 270, 240, 180, 110, 60, 110]; // cycle of 8
```
Node height slot: `height: 96px`. Stagger: `delay: Math.min(i * 0.03, 0.3)`.

### PlanCard interface
```ts
interface PlanCardProps {
  name: string; tagline: string; features: string[];
  ctaText: string; popular?: boolean; illustration?: ReactNode;
}
```
CTA button is **white bg, gray border, blue text** — NOT a filled colored button. The `color`/`shadowColor` props from the original interface have been removed.

### MissionCard interface (simplified in Phase 1)
```ts
interface MissionCardProps {
  title: string; current: number; total: number; color?: string;
}
```
The `description`, `timer`, and `reward` props were removed. Timer now lives only in the section header, not inside the card.

### ProfileMenuItem interface
```ts
interface ProfileMenuItemProps {
  icon: ReactNode; // colored SVG badge, NOT emoji string
  label: string;
  onClick?: () => void;
}
```
No chevron `›` — removed in Phase 1.

### BottomNav tabs (6 total)
```
1. /           → Beranda    (house, red #FF4B4B)
2. /missions   → Misi       (chest, orange #FF9600)
3. /leaderboard→ Liga       (trophy, cyan #1CB0F6)
4. /social     → Sosial     (heart, pink #FF4FB3)
5. /profile    → Profil     (person, green #58CC02)
6. /subscription→ Lainnya  (three dots, purple #A56BFF)
```
Active tab: `background: #E8F9FF` rounded rect. No background on inactive tabs.

### Tailwind v4 note
This project uses Tailwind v4 with `@theme` blocks in `globals.css`, not `tailwind.config.ts` extend. Both files exist but the v4 CSS variables take precedence. Custom color tokens like `bg-primary` may not resolve — use inline hex values or `style={}` props.

---

## Next Priorities (Phase 2)

1. Fix XPBanner margins (5 min)
2. Fix BARU badge position in PracticeCard (2 min)
3. Fix star fill state in LessonPath (2 min)
4. Add SVG practice header character in practice/page.tsx (20 min)
5. Improve "AKAN DATANG" teaser card in missions/page.tsx (15 min)
6. Replace practice card emoji icons with SVG (30 min)
7. Fix NPC label to sit below character (5 min)

After Phase 2, estimated score: **90/100**.
