# Hero Section Redesign: Maximalist Trust & Authority

## Context
The current hero section is functional but understated — a simple centered column with basic GSAP fade-up, minimal background, and a plain checkmark social-proof list. The goal is to elevate it to a maximalist B2B landing-page tier (think Intercom, Clay, Retool) with layered visual depth, a floating product preview panel, richer typography, and trust-forward metrics — for both light and dark mode.

---

## Files to Modify

1. `ausbotics-frontend/components/hero-section.tsx` — Full rewrite (primary)
2. `ausbotics-frontend/app/layout.tsx` — Add `${dmSans.variable}` to `<html>` className (1-line fix so DM Sans works)
3. `ausbotics-frontend/app/globals.css` — Add `@keyframes hero-blob-drift` + `.hero-aurora-animated` class

---

## Implementation Plan

### 1. layout.tsx fix (prerequisite)
Add `${dmSans.variable}` to `<html>`:
```tsx
// Before
<html suppressHydrationWarning lang="en" className={`${arimo.variable}`}>
// After
<html suppressHydrationWarning lang="en" className={`${arimo.variable} ${dmSans.variable}`}>
```

### 2. globals.css additions
```css
@keyframes hero-blob-drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(28px, -18px) scale(1.04); }
  66%       { transform: translate(-16px, 14px) scale(0.97); }
}
.hero-aurora-animated {
  animation: hero-blob-drift 20s ease-in-out infinite;
}
```

### 3. hero-section.tsx — Full Rewrite

#### Layout Change: Two-Column Grid
Switch from `max-w-4xl` centered text to a `max-w-7xl` two-column grid:
- Left column: all copy (eyebrow → heading → subtext → CTAs → metrics)
- Right column: floating dashboard panel (hidden below `lg:`)
- Mobile: single stacked column, centered

```
grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-center
```

#### Background System (5 Layers, all `absolute inset-0 pointer-events-none`)
- **Layer 2a/2b**: Dark/light aurora — 4 radial gradients, stronger in dark (38% opacity) vs light (10%)
  - Dark: `oklch(0.42 0.20 242 / 0.38)` top-center blob + 3 edge blobs
  - Light: `oklch(0.72 0.12 240 / 0.10)` subtle tints only
  - Add `.hero-aurora-animated` class for 20s drift on primary blob
- **Layer 3**: Dot grid — 24px spacing, mode-aware opacity via CSS variable
- **Layer 4a/4b**: Diagonal SVG line texture — `opacity-0.03` on light, `opacity-0.025` on dark (separate divs via `dark:hidden`/`hidden dark:block`)
- **Layer 5**: Edge vignette (`radial-gradient` from edges, ~15% opacity) + corner L-bracket accents (`border-t border-l/r border-blue-500/15`, `w-16 h-16`, positioned at all 4 corners)

#### Typography
- **Eyebrow badge**: Same pill style but with dual box-shadow ring: `ring-1 ring-blue-500/20 shadow-[0_0_0_3px_oklch(0.55_0.20_242_/_0.08)]`
- **Heading**: 
  - Font: `font-[family-name:var(--font-dm-sans)]` (requires layout fix above)
  - Size: `clamp(3rem,6.5vw,5.8rem)` (up from 2.8rem)
  - Split into 3 `<span data-hero="h1-line-N">` blocks for per-line GSAP timing
  - Gradient line 3: `from-blue-500 via-blue-600 to-indigo-600` light / `from-blue-300 via-blue-400 to-indigo-400` dark
- **Subtext**: `max-w-lg` (left-aligned on lg+)

#### CTAs
- Primary button: add `<svg>` sparkle star icon, stronger outer glow (`shadow-[0_8px_32px_rgba(59,130,246,0.45)]`), hover glow via `absolute -inset-1 rounded-2xl bg-blue-500/20 blur-md opacity-0 group-hover/btn:opacity-100`
- Add micro-text below: `"No credit card required · Live in 72 hours"` at `text-[11px] text-muted-foreground`

#### Social Proof: Avatar Stack + Metric Cards
Replace plain checkmarks with:
1. **Avatar stack row** (`data-hero="avatars"`): 4 colored avatar circles with initials + "+8" overflow, inline star SVGs, "40+ businesses trust AusBotics" text
2. **3-column metric cards** (`data-hero="metric-card"` on each):
   - `"2,400+"` / Conversations Handled
   - `"98%"` / Lead Capture Rate  
   - `"72 hrs"` / Avg. Time to Live
   - Each card: `bg-neutral-50 dark:bg-neutral-950/80`, `border border-neutral-200 dark:border-neutral-800`, top-`h-px` blue gradient line always-on + `h-[2px]` accent on hover, `hover:-translate-y-1 transition-all duration-300`

#### Floating Dashboard Panel (Right Column)
A `rounded-2xl` card with heavy box-shadow (`shadow-[0_24px_80px_rgba(0,0,0,0.12)]` light / `rgba(0,0,0,0.60)` dark):
- **Header bar**: green live dot + "Live Agent Status" label + static time "Today · 9:42 AM"
- **Stats row** (3-col divide): 24 Active Today / 98% Answer Rate / 3.2m Avg Duration
- **Activity feed**: 3 mock entries (name, note, relative time) with green/blue icon chips
- **Progress footer**: "Booking Rate" label + "89% this week" + animated progress bar

All data is **static strings** (no `new Date()`) for SSR safety.

#### GSAP Animation Timeline (7 Phases)
Single `gsap.timeline()` replacing the current `gsap.fromTo`:

| Phase | Target | Start (s) | Duration |
|-------|--------|-----------|----------|
| 0 | `gsap.set` initial states (opacity 0, y 32) | — | — |
| 1 | `.hero-aurora` scale + fade in | 0.0 | 0.9s |
| 1b | `.hero-corner-accent` fade in stagger | 0.1 | 0.6s |
| 2 | `[data-hero="eyebrow"]` | 0.3 | 0.6s `back.out(1.5)` |
| 3 | `[data-hero="h1-line-1/2/3"]` stagger | 0.50/0.65/0.80 | 0.65s each |
| 4 | `[data-hero="subtext"]` | 0.9 | 0.55s |
| 5 | `[data-hero="ctas"]` | 1.05 | 0.5s `back.out(1.2)` |
| 5b | `[data-hero="micro-text"]` | 1.15 | 0.4s |
| 6 | `[data-hero="avatars"]` | 1.20 | 0.5s |
| 6b | `[data-hero="metric-card"]` stagger | 1.28 | 0.5s `back.out(1.3)` |
| 7 | `[data-hero-visual]` (panel) | 0.60 | 0.85s `power4.out` |

Post-entrance continuous animations:
- Dashboard panel: `gsap.to` float `-8px` yoyo, 3.5s sine.inOut, repeat -1, delay 2.2s
- Live dot: scale pulse 1→1.15, 1.2s sine.inOut, repeat -1 yoyo

---

## Light vs Dark Mode Summary

| Element | Light | Dark |
|---|---|---|
| Section bg | `bg-background` (white) | `bg-[oklch(0.10_0_0)]` |
| Aurora | 10% opacity cool tints | 38% saturated blue-indigo |
| Diagonal lines | `stroke-black opacity-3%` | `stroke-white opacity-2.5%` |
| Metric cards | `bg-neutral-50 border-neutral-200` | `bg-neutral-950/80 border-neutral-800` |
| Dashboard | `bg-white` + light borders | `bg-neutral-950` + dark borders |
| Gradient heading | `blue-500 → indigo-600` | `blue-300 → indigo-400` |
| Button glow | `rgba(59,130,246,0.35)` | `rgba(59,130,246,0.55)` |
| Corner accents | `border-blue-500/10` | `border-blue-500/20` |
| Bottom fade | `from-background` | `from-[oklch(0.10_0_0)]` |

---

## Design Patterns to Reuse from Codebase
- `[data-hero]` GSAP context scoped to `sectionRef` — preserved, extended with value variants
- Card hover pattern: `hover:-translate-y-1 hover:shadow-[...] transition-all duration-200` from `services-section.tsx`
- 3D button technique (translate-y base div + face div) — preserved, enhanced with outer glow
- `hidden dark:block` / `dark:hidden` for mode-specific elements — used for aurora and diagonal layers
- `iconsax-reactjs` TickCircle (Bold variant) for activity feed icons

---

## Verification
1. Run `npm run dev` in `ausbotics-frontend`
2. Visit `http://localhost:3000` — check hero renders with two columns at ≥1024px, single column below
3. Toggle dark mode — verify distinct aurora treatment and card backgrounds
4. Watch entrance animation — should be 7-phase sequence, ~2.2s total, dashboard floats in from right
5. Hover metric cards — verify lift + top accent line reveal
6. Hover primary CTA — verify outer glow appears
7. Run `npx tsc --noEmit` from `ausbotics-frontend` — no type errors
