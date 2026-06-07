# DECISION_LOG.md

Chronological record of every architectural and design decision made in this project. Each entry explains the context, the choice made, and the reasoning. Refer to this before reversing any decision.

---

## D-001 — Framework: Next.js App Router over Vite/CRA

**Date:** Project start
**Context:** Needed a React framework with routing, SSR capability, and a well-supported deployment path.
**Decision:** Next.js 14 with App Router.
**Reason:** App Router gives file-system routing that directly maps to screen names (`/missions`, `/practice`, etc.), matching the Duolingo tab structure. Built-in font optimization via `next/font/google` handles Inter loading with no FOUT. Better than Vite for this use case since routing is a core requirement.

---

## D-002 — Styling: Tailwind CSS v4

**Date:** Project start
**Context:** Needed utility-first CSS with custom color tokens.
**Decision:** Tailwind CSS v4 using `@theme {}` blocks in `globals.css`.
**Reason:** v4 ships with the project's Next.js version. Custom colors are defined as CSS variables via `@theme` rather than `tailwind.config.ts` extend.
**Warning:** The `tailwind.config.ts` file also has `extend.colors` entries but class-name resolution may be inconsistent in v4. Always use inline hex values (`text-[#FF4FB3]`) or `style={}` props rather than relying on custom color class names like `text-primary`.

---

## D-003 — Animation: Framer Motion

**Date:** Project start
**Context:** Needed smooth animations for node bouncing, progress fills, slide-in panels.
**Decision:** Framer Motion for all UI animations.
**Reason:** The `animate`, `whileHover`, `whileTap`, `AnimatePresence` APIs cover every needed animation pattern. `initial`/`animate`/`exit` on lesson feedback panel, stagger via `transition.delay`, spring physics for node entrance — all handled cleanly.
**Note:** CSS animation classes (`bounce-node`, `pulse-ring`) that existed in early versions were removed in favor of Framer Motion only. Do not reintroduce CSS keyframe animations on elements that also use Framer Motion — they conflict.

---

## D-004 — State: Zustand with persist

**Date:** Project start
**Context:** Needed shared game state (XP, streak, hearts, gems, lesson progress) accessible across all screens.
**Decision:** Zustand with `persist` middleware, key `"duolingo-clone-store"`.
**Reason:** Lightweight, no Provider wrapper needed, works naturally with Next.js App Router client components. Persist keeps game state across page refreshes which is essential for a gamified app.

---

## D-005 — Active node: two-wrapper pattern

**Date:** Phase 1 audit
**Context:** The active lesson node needed both a visible pink ring AND a vertical bounce animation. First implementation put both on a single `motion.div`. The 3D bottom shadow (`0 5px 0 #CC0093`) visually displaced during upward travel because the shadow is part of the same element.
**Decision:** Split into outer static div (holds ring via `boxShadow: "0 0 0 4px #FF4FB3"`) and inner `motion.div` (holds bottom shadow + bounce animation).
**Reason:** The ring stays fixed in space. Only the node circle moves. Shadow and ring appear correctly at all animation frames.
**Rule:** Never merge these two wrappers. This is the most subtle breakage risk in the codebase.

---

## D-006 — Learning path geometry: pixel offset S-curve

**Date:** Phase 1
**Context:** Initial implementation used 3 snap positions (left/center/right with `margin: auto`). This created a rigid 3-column grid instead of an organic winding path.
**Decision:** Replace with 6 explicit `marginLeft` pixel values cycling through 8 positions:
```ts
const POSITIONS = [180, 240, 270, 240, 180, 110, 60, 110];
```
**Reason:** These values produce positions across a 390px container that visually match the S-curve rhythm in the screenshots. The cycle of 8 ensures a smooth wave pattern over the 20-node path without repeating too quickly.
**Note:** All values assume a 390px container and 66px node width. If the container width changes, all values need recalculation.

---

## D-007 — Subscription screen: rebuilt from scratch

**Date:** Phase 1
**Context:** Original subscription screen had a large purple/blue gradient hero header with a floating 🦜 emoji. The actual screenshot shows an iOS-style `◀ App Store` navigation header and a plain white background with the Duo mascot sitting above the plan cards.
**Decision:** Complete rewrite. Remove gradient hero. Add iOS nav bar. White background. Animated Duo owl SVG mascot. Inline illustrations (BatteryInfinity, FamilyIllustration) passed as `ReactNode` to PlanCard.
**Rule:** Do not revert to the gradient hero. Do not add a colored hero section to this screen.

---

## D-008 — PlanCard CTA button: white/gray, not filled color

**Date:** Phase 1
**Context:** Original PlanCard had `color="#FF9600"` and `shadowColor="#CC7800"` for orange filled buttons. The screenshot clearly shows gray-bordered white buttons with blue text reading "COBA SEHARGA RP0".
**Decision:** Remove `color`/`shadowColor` props. CTA is always: `background: white`, `border: 2px solid #E0E0E0`, `color: #1CB0F6`, `boxShadow: "0 2px 0 #E0E0E0"`.
**Reason:** The gray button signals a free trial (zero-cost action), not a purchase. Duolingo deliberately uses a subdued button style here.
**Rule:** Do not make the subscription CTA buttons orange or purple filled.

---

## D-009 — MissionCard: simplified interface

**Date:** Phase 1
**Context:** Original MissionCard had `description`, `timer`, `reward` props. Timer was shown inside each card. Screenshot shows timer only in the section header, not per-card. Reward icon was replaced with a standalone chest SVG.
**Decision:** Remove `description`, `timer`, `reward` from MissionCard interface. Card only needs `title`, `current`, `total`, `color`.
**Reason:** Simplification matches the visual — timer is a section-level concern, not per-mission. The chest reward is always the same visual and doesn't need a prop.

---

## D-010 — ProfileMenuItem: ReactNode icon, no chevron

**Date:** Phase 1 → Phase 2
**Context:** Original used emoji strings as icons and had a `›` chevron on the right. Screenshot shows colored SVG icon badges on the left and no right-side chevron.
**Decision:** Change `icon` prop from `string` to `ReactNode`. Remove chevron span.
**Reason:** Emoji render inconsistently across platforms and at wrong sizes. The screenshot icons are styled colored squares with SVG shapes inside — cannot be reproduced with emoji.

---

## D-011 — Section header labels: muted gray

**Date:** Phase 1
**Context:** Original section headers (e.g., "MISI AKHIR MINGGU") used `font-black text-gray-800 text-base` — too bold, too dark, too large.
**Decision:** All section labels use `text-[11px] font-bold text-[#AFAFAF] uppercase tracking-widest`.
**Reason:** The screenshots show these as small, muted, wide-tracked uppercase labels — a secondary typographic level that recedes behind the content cards. The original styling made them compete with card titles.

---

## D-012 — Bottom nav: 6 tabs, "Lainnya" label

**Date:** Phase 1
**Context:** Initial implementation had 5 tabs. Screenshots clearly show 6 icons. The 6th was labeled "Mais" (Portuguese — incorrect).
**Decision:** Add 6th tab at `/subscription`. Label: "Lainnya" (Indonesian for "More").
**Reason:** Matches the screenshot count. "Lainnya" is correct Indonesian.
**Rule:** Do not change the 6th tab label back to "Mais".

---

## D-013 — Practice screen: BARU badge position

**Date:** Phase 2
**Context:** Badge was placed at `-top-2.5 -right-2` (top-right of icon circle). Screenshot shows it at the top-LEFT corner of the icon area.
**Decision:** Change to `-top-2.5 -left-2`.
**Reason:** Direct comparison with the screenshot — badge overlaps from the left side, not the right.

---

## D-014 — Star ratings: all hollow

**Date:** Phase 2
**Context:** Star ratings showed 1 gold + 2 gray stars. The screenshot shows all 3 as hollow outlined stars with no fill — they represent unearned bonus slots beside lesson nodes.
**Decision:** All 3 stars rendered with `fill="none" stroke="#CCCCCC"` — no gold fill on any star.
**Reason:** The stars in the screenshots indicate a bonus challenge that hasn't been attempted, not a partial completion. They are uniformly unearned.

---

## D-015 — GolemScene: SVG illustration over image placeholder

**Date:** Phase 1
**Context:** The weekend mission card in the screenshots shows a large full-width scene image of a stone golem in a green forest. No actual image asset is available.
**Decision:** Build the scene as inline SVG: gradient green background, ellipse trees, rectangular stone golem body with face, arms, stone texture lines, plus added triangular tree silhouettes in Phase 2.
**Reason:** Avoids external asset dependency. The SVG approximates the scene well enough for the visual target. Triangular trees added in Phase 2 for more illustrated depth.

---

## D-016 — Mascot illustrations: inline SVG

**Date:** Phase 1
**Context:** No actual Duolingo character assets available. Subscription and Missions screens need the Duo owl mascot.
**Decision:** Build all mascots as inline SVG components (DuoMascot, DuoBirdSmall, DuoOnTarget, ChessRookSVG, BatteryInfinity, FamilyIllustration).
**Reason:** Self-contained, no external dependencies, can be refined incrementally.
**Limitation:** SVG mascots are approximately correct in shape and color but cannot match the quality of professionally illustrated Duolingo character art. This is the primary reason the similarity ceiling is ~90-92% rather than 100%.

---

## D-017 — Lesson screen: questions inline, not fetched

**Date:** Project start
**Context:** No backend available.
**Decision:** 5 hardcoded questions in `app/lesson/[id]/page.tsx` in a `QUESTIONS` array.
**Reason:** Sufficient for demonstrating the lesson UI flow. All lesson IDs route to the same question set.

---

## D-018 — Font: Inter via next/font/google

**Date:** Phase 1 fix
**Context:** Inter was specified in `globals.css` as a Google Fonts import but wasn't being loaded by Next.js properly. Text was falling back to system-ui.
**Decision:** Replace with `next/font/google` in `app/layout.tsx` with `subsets: ["latin"]`, weights `["400","600","700","800","900"]`.
**Reason:** Next.js font optimization provides zero-FOUT loading, automatic preloading, and subsetting. The 900 weight is needed for `font-black` headings.
