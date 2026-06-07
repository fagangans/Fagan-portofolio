# PROJECT_STATUS.md

Last updated after Phase 2 polish pass.

---

## Goal

Build a Duolingo-inspired language learning app matching Indonesian-locale Duolingo screenshots at 95%+ visual similarity. Mobile-first, gamified, production-ready.

---

## Similarity Score History

| Phase | Score | Key Work |
|---|---|---|
| Initial build | 52/100 | All screens scaffolded, basic layout, emoji icons |
| Audit + fix pass 1 | 62/100 | SVG icons, Inter font, active node ring, 6-tab nav |
| Phase 1 | 80/100 | S-curve path, subscription rebuild, missions header + scene |
| Phase 2 | 88–90/100 | SVG practice icons, badge positions, hollow stars, illustrations |

**Current: 88–90 / 100**

---

## Screen Status

### ✅ Home — Learning Path
- 20-node zigzag S-curve path
- 6-position horizontal rhythm cycling through 8 steps
- Node states: completed (pink filled), active (pink + white ring + bounce), locked (gray)
- Node types: book, headphone, translate (circular arrows), dumbbell, video, speaking
- SVG chest nodes every 8th lesson
- SVG chess rook NPC with "CATUR" green pill label
- Stagger entrance animation (capped at 300ms)
- Star ratings (☆☆☆ hollow) beside milestone nodes
- XPBanner full-width magenta header with unit info
- StatusBar: flag+XP, flame+streak, SVG gem, SVG heart

### ✅ Missions
- Purple gradient header, left-aligned title, Duo bird SVG right side
- Weekend mission: GolemScene SVG illustration (stone warrior in green forest with triangle trees)
- Progress bar with `1 / 3` fraction inside the colored fill
- Section labels: muted gray, 11px, uppercase, wide tracking
- SVG clock icon for timers
- Daily mission card with gold chest SVG
- "AKAN DATANG" teaser with locked chest SVG

### ✅ Practice
- Teal header with Duo bird on target SVG illustration
- Floating CTA card overlapping header bottom
- PERCAKAPAN section with MAX badge
- Panggilan Video card with BARU badge at top-LEFT of icon
- LATIHAN KEAHLIAN: Kesalahan, Kata, Mendengar, Berbicara
- All icons are SVGs (camera, circular arrows, stacked cards, speaker, microphone)

### ✅ Profile / More Menu
- Username top-left with gear icon
- Blue-gray gradient background behind avatar circle
- Dashed teal avatar ring with head silhouette SVG + plus button
- `@USERNAME · BERGABUNG SEJAK 2025` handle row
- Stats row: Kursus (flag) / Mengikuti (0) / Pengikut (2)
- Gray-bordered "TAMBAHKAN TEMAN" button + QR code SVG button
- Menu items with colored SVG icon badges: Profil, Bunyi, Panggilan Video, Latihan

### ✅ Subscription
- iOS-style `◀ App Store` back nav + "Langganan" title
- Duo owl SVG mascot floating above cards (gentle bob animation)
- Super plan: REKOMENDASI purple→cyan gradient banner, battery+infinity SVG illustration
- Keluarga Super: jumping family characters SVG illustration
- Feature list: plain cyan `✓` checkmarks, no circles
- CTA: white background, gray border, cyan text — NOT filled buttons

### ✅ Lesson (functional)
- 5 multiple-choice questions
- Progress bar at top
- Slide-in result feedback panel (green correct, red wrong)
- XP reward screen on completion
- Routes to `/lesson/[id]`

### 🔲 Leaderboard — stub only
- Route exists at `/leaderboard`
- Shows "Segera hadir!" placeholder
- Needs: weekly league table, tier badges, ranking rows

### 🔲 Social — stub only
- Route exists at `/social`
- Shows "Segera hadir!" placeholder
- Needs: friends list, streak badges, follow UI

---

## Component Status

| Component | Complete | Notes |
|---|---|---|
| StatusBar | ✅ | SVG icons, correct colors |
| XPBanner | ✅ | Full-width, no margins |
| LessonPath | ✅ | S-curve, all node types |
| LessonNode | ✅ | Two-wrapper active pattern |
| BottomNav | ✅ | 6 tabs, correct icons |
| MissionCard | ✅ | Fraction inside bar, chest SVG |
| PlanCard | ✅ | Illustration slot, gray CTA |
| PracticeCard | ✅ | SVG icons, badge top-left |
| ProfileMenuItem | ✅ | ReactNode icon, no chevron |
| ProgressBar | ✅ | Animated fill |

---

## Gamification State

| Feature | Implemented | Notes |
|---|---|---|
| XP system | ✅ | Earned on lesson complete (+20 per correct answer) |
| Streak counter | ✅ | Stored in Zustand, displayed in StatusBar |
| Hearts/Energy | ✅ | Displayed; loss mechanic not wired to wrong answers yet |
| Gems | ✅ | Displayed; spending mechanic not implemented |
| Lesson completion | ✅ | Updates completedLessons + activeLessonIndex |
| Daily missions | ✅ | Visual only; not wired to real progress |
| Achievements | ❌ | Not built |
| Leaderboard ranks | ❌ | Not built |

---

## What Remains for 95/100

### Visual gaps
- [ ] Leaderboard screen built out
- [ ] Social screen built out
- [ ] Lesson screen: floating "+20 XP" animation on correct answer
- [ ] Lesson screen: confetti/star burst on completion
- [ ] Heart loss animation when answering wrong
- [ ] Mascot illustrations closer to original character art

### Functional gaps
- [ ] Hearts decrease on wrong answers
- [ ] Daily mission progress updates from real lesson activity
- [ ] Gem spending (heart refill)
- [ ] Streak increment on daily completion

---

## Build Status

`npm run build` — ✅ passes clean. 10 routes generated (8 static, 1 dynamic `/lesson/[id]`, 1 not-found).

---

## Design Rules — Do Not Revert

These were deliberate decisions that match the screenshots. Do not change without explicit instruction:

- S-curve POSITIONS array: `[180, 240, 270, 240, 180, 110, 60, 110]`
- Active node two-wrapper pattern (outer ring + inner bounce)
- White subscription background
- iOS-style subscription header (`◀ App Store`)
- White/gray CTA buttons on PlanCard (NOT filled orange/purple)
- BottomNav 6th tab label: "Lainnya" (not "Mais")
- Section labels: `text-[11px] font-bold text-[#AFAFAF] uppercase tracking-widest`
- MissionCard has no `description`/`timer` props (removed in Phase 1)
- ProfileMenuItem has no chevron (removed in Phase 1)
