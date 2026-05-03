# AusBotics Website — Awwwards Maximalist Redesign Plan

## Context
The current site is purely neutral-gray with zero brand identity. Goal: transform it into a polished Awwwards-level maximalist site using the AusBotics brand palette extracted from the Engineering Execution pitch deck, GSAP animations, iconsax-reactjs icons, and a dark mode using neutral shades with brand accents.

---

## Color System

### Light Mode (Warm Parchment + Brand)
| Token | Hex | oklch |
|---|---|---|
| `--cream` (background) | #F2EDE3 | `oklch(0.936 0.018 80)` |
| `--cream-surface` (card) | #EAE4D6 | `oklch(0.921 0.020 78)` |
| `--navy` (primary text/dominant) | #1C3049 | `oklch(0.234 0.058 243)` |
| `--brand-blue` (primary action) | #3B72B0 | `oklch(0.510 0.120 240)` |
| `--steel` (secondary text) | #4A657A | `oklch(0.440 0.050 232)` |
| `--sage` (success/positive) | #7E9E85 | `oklch(0.640 0.060 155)` |
| `--terracotta` (accent/CTA) | #C4603A | `oklch(0.550 0.140 38)` |

### Dark Mode (Neutral + Brand Accents)
- Background: `oklch(0.070 0 0)` (#0A0A0A)
- Surface/Card: `oklch(0.140 0 0)` (#1C1C1C)
- Foreground: `oklch(0.936 0.018 80)` (warm cream)
- Muted: `oklch(0.540 0 0)` (#8A8A8A)
- Brand Blue (adjusted): `oklch(0.600 0.120 240)` (#5B8FCE)
- Terracotta (adjusted): `oklch(0.590 0.140 38)` (#D4714A)
- Border: `oklch(1 0 0 / 7%)`

---

## Design Language (Maximalism)
- **Blueprint grid**: SVG dot-grid background on cream sections (`.bg-grid-blueprint` CSS class)
- **Editorial typography**: `text-[clamp(3.5rem,8vw,7rem)]` headings, `font-extrabold`, tight leading
- **Blueprint card corners**: CSS `::before`/`::after` with `+` markers (`.blueprint-corners` class)
- **Section alternation**: cream → navy → cream-surface → terracotta → cream
- **Watermark text**: Giant faded text behind section headings (opacity-3)
- **Numbered cards**: Large faded `01`–`04` behind card content
- **Measurement lines**: Thin `h-px` dividers with tick marks between stats
- **Eyebrow labels**: Small `uppercase tracking-[0.25em]` labels in brand colors above every heading

---

## GSAP Animation Strategy
Install: `npm install gsap` in `ausbotics-frontend/`

**New file: `lib/gsap-utils.ts`** — exports:
- `animateSection(container, '[data-animate]', stagger)` — fade+slide children on ScrollTrigger
- `animateHeadingChars(el, delay)` — manual char split into spans, stagger rotate-in
- `createMarquee(track, speed)` — GSAP modifiers infinite loop
- `animateCountTo(el, target, duration)` — counter animation on scroll
- `drawConnectingLine(pathEl, trigger)` — SVG strokeDashoffset scrub
- `initScrollProgressBar(barEl)` — scaleX 0→1 based on page scroll

**SSR guard**: `if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger, ScrollToPlugin) }`

---

## Implementation Order (strict — each depends on prior)

### Phase 1 — Foundation
1. **`ausbotics-frontend/app/globals.css`** — Complete rewrite:
   - Replace all `:root` tokens with brand palette (see Color System above)
   - Map CSS vars to Tailwind via `@theme inline` block: add `--color-navy`, `--color-cream`, `--color-cream-surface`, `--color-brand-blue`, `--color-steel`, `--color-sage`, `--color-terracotta`
   - Fix `--font-sans: var(--font-arimo)` (currently circular reference)
   - Add `.bg-grid-blueprint` utility with radial-gradient dot pattern
   - Add `.blueprint-corners` with `::before`/`::after` `+` markers
   - Add `@keyframes marquee`, `shimmer`, `fade-up`

2. **`ausbotics-frontend/lib/gsap-utils.ts`** — Create new file with all helpers above

3. **`ausbotics-frontend/components/ui/button.tsx`** — Add 3 new variants to `buttonVariants` object:
   - `brand`: `bg-terracotta text-cream hover:bg-terracotta/90`
   - `navy`: `bg-navy text-cream hover:bg-navy/90`
   - `outline-brand`: `border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-cream`

### Phase 2 — Navigation
4. **`components/navigation.tsx`**:
   - Add thin `div ref={progressBarRef}` scroll progress bar (brand-blue, `origin-left scale-x-0`)
   - `useEffect` → `initScrollProgressBar(progressBarRef.current)` + scroll listener for `isScrolled` state
   - Nav bg: `isScrolled ? "bg-navy/90" : "bg-cream/90"` + `backdrop-blur-xl`
   - Logo: `Cpu` icon from iconsax, "Aus" in navy/cream + "Botics" in terracotta
   - Link hover: CSS `after::` underline that grows from left in brand-blue
   - Mobile menu: full-screen `bg-navy/98` overlay with Framer Motion stagger on links (keep AnimatePresence)

### Phase 3 — Home Page
5. **`components/hero-section.tsx`** — Full rewrite:
   - Background: `bg-grid-blueprint` (cream + dot grid)
   - Layout: `grid lg:grid-cols-[3fr_2fr]` — text left, CSS block diagram right
   - H1: `text-[clamp(3.5rem,8vw,7rem)] font-extrabold` — GSAP `animateHeadingChars`
   - CTAs: `variant="brand"` (terracotta) + `variant="outline-brand"` (navy outline)
   - 3 floating badge pills: sage (conversations), brand-blue (24/7), terracotta (zero leads)
   - Right column: CSS isometric block diagram — navy center block + terracotta/blue/sage orbiting cubes
   - Icons: `Flash, Messages1, Chart, Clock` from iconsax
   - `data-animate` on sub-elements for GSAP stagger

6. **`components/marquee-ticker.tsx`** — NEW file:
   - `bg-navy py-4 border-y border-cream/10`
   - Double the items array for seamless loop
   - GSAP `modifiers` for infinite scroll, pause on hover
   - Items: `INTELLIGENT AUTOMATION ◆ BUSINESS DASHBOARDS ◆ WEB PLATFORMS ◆ AI WORKFLOWS ◆ ...`

7. **`components/features-preview.tsx`** — Redesign:
   - Background: `bg-navy`
   - Giant faded `FEATURES` watermark behind section
   - 4 cards: `bg-terracotta`, `bg-sage`, `bg-brand-blue`, `bg-steel` backgrounds
   - Each card: faded `01`–`04` number behind content, `blueprint-corners`, icon in white rounded box
   - Icons: `Flash, ShieldTick, Global, Headphone` from iconsax
   - GSAP `animateSection` on scroll

8. **`components/stats-section.tsx`** — NEW file:
   - `bg-cream`, 4-column grid with `lg:divide-x lg:divide-navy/10`
   - Giant numbers with GSAP `animateCountTo`: `2000+`, `24/7`, `3`, `0`
   - Terracotta suffixes, navy/cream labels, steel sublabels

9. **`components/process-teaser.tsx`** — NEW file:
   - `bg-cream-surface`, 3-column grid
   - Step cards: `bg-navy`, `bg-terracotta`, `bg-sage`
   - SVG `<path>` connector between steps, GSAP `drawConnectingLine` scrub
   - Icons: `Flash, Chart, Global` from iconsax

10. **`components/cta-section.tsx`** — NEW file:
    - Full-bleed `bg-terracotta`, dot grid overlay
    - Giant quote: `"The gap is in execution — and that's where we lead."`
    - CTAs: `bg-white text-terracotta` + `border-2 border-white`

11. **`app/page.tsx`** — Add all sections: `Navigation → HeroSection → MarqueeTicker → FeaturesPreview → StatsSection → ProcessTeaser → CTASection`

### Phase 4 — Secondary Pages
Apply consistent treatment to all page components:

12. **Pricing** (`pricing-tiers.tsx`, `pricing-hero.tsx`, `pricing-cta.tsx`):
    - Featured tier card: `bg-navy text-cream blueprint-corners`
    - Other tiers: `bg-cream-surface border-2 border-navy/10`
    - Icons: `ShieldTick` (for Check), `Star1` from iconsax
    - Hero: `bg-grid-blueprint`, eyebrow in terracotta, GSAP heading

13. **How It Works** (`how-it-works-hero.tsx`, `process-steps.tsx`, `process-benefits.tsx`):
    - Hero: `bg-grid-blueprint`, GSAP `animateHeadingChars`
    - Steps: badge colors cycle navy/terracotta/sage, SVG line animation
    - Icons: `Import, Setting2, CallCalling, Chart` from iconsax (fallback to lucide if not available)

14. **Features** (`features-hero.tsx`, `core-features.tsx`, `advanced-capabilities.tsx`):
    - Hero: `bg-grid-blueprint`
    - Core features: `bg-navy` section, 6 colored cards
    - Icons: `Messages1, Global, Chart, Clock, ShieldTick` from iconsax

15. **About** (`about-hero.tsx`, `problem-solution.tsx`, `company-values.tsx`):
    - Hero: `bg-grid-blueprint`, keep Framer Motion entrance
    - Problem/solution: `bg-cream-surface` / `bg-navy` split
    - Values: cycle through `bg-terracotta/10`, `bg-brand-blue/10`, `bg-sage/10`, `bg-navy/8`

16. **Contact** (`contact-hero.tsx`, `contact-form.tsx`):
    - Hero: `bg-grid-blueprint`, icons `Message, CallCalling, Sms, Clock` from iconsax
    - Form: `bg-cream-surface border-2 border-navy/8`, sage focus states, `variant="brand"` submit

17. **`components/Modetoggle.tsx`** — Pill-shaped, sun in terracotta, moon (iconsax already used) in brand-blue

---

## Icon Replacement Reference
| Context | Lucide → iconsax |
|---|---|
| Bot | `Cpu` |
| MessageSquare / MessageCircle | `Messages1` / `Message` |
| BarChart3 | `Chart` |
| Clock | `Clock` (same name) |
| Zap | `Flash` |
| Shield / ShieldCheck | `ShieldTick` |
| Globe | `Global` |
| Headphones | `Headphone` |
| Phone | `CallCalling` |
| Mail | `Sms` |
| Check | `TickCircle` |
| Upload | `Import` |
| Settings | `Setting2` |

**Verify uncertain iconsax names before implementation:**
```bash
grep -i "CallCalling\|TickCircle\|Star1\|Sms\|Import" node_modules/iconsax-reactjs/dist/index.d.ts
```

---

## Key Pitfalls to Avoid
- `animateHeadingChars` replaces `innerHTML` — heading must be static text (no child `<span>` for colored words — handle colored words in sibling elements)
- `createMarquee`: call in `useEffect` (not `useLayoutEffect`) — `scrollWidth` must be available after paint
- GSAP cleanup: in every `useEffect`, kill specific tweens in the cleanup function — do NOT use `ScrollTrigger.getAll().forEach(t => t.kill())` globally
- `bg-navy` / `text-terracotta` classes only work if `@theme inline` block has the entries — this is the most likely failure point
- Framer Motion stays for mobile menu `AnimatePresence` — GSAP coexists safely on separate elements

---

## Verification
1. `cd ausbotics-frontend && npm install gsap && npm run dev`
2. Check http://localhost:3000 — hero renders with dot grid, marquee scrolls, brand colors applied
3. Scroll down — verify GSAP animations trigger (cards fade in, stats count up, process line draws)
4. Toggle dark mode — neutral dark background + brand-blue/terracotta accents visible
5. Visit /features, /pricing, /how-it-works, /about, /contact — consistent design system
6. `npx tsc --noEmit` — no TypeScript errors
