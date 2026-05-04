Here is your **fully updated, structured, clean Markdown plan** — rewritten to enforce **non-AI design quality, proper UX flow, and a premium look**.

---

# 🚀 AusBotics Website — Premium Human-Crafted Redesign Plan (Final)

## 📌 Context

The current website suffers from:

* AI-generated feel (random sections, no flow)
* Weak visual hierarchy
* Poor CTA clarity
* Overuse of effects without purpose
* Lack of brand identity

---

## 🎯 Objective

Design a **premium, human-crafted landing page** that is:

* Intentional and structured
* Visually calm and polished
* Conversion-focused (strong CTA)
* Consistent across all pages
* Based on **60–30–10 color system**

---

# 🧠 Core Design Philosophy

## 1. Intentional > Decorative

Every section must answer:

> Why does this exist?

---

## 2. Simplicity Wins

* Fewer elements → stronger impact
* Avoid visual noise
* Prioritize clarity over creativity

---

## 3. Consistency = Quality

* Same spacing system
* Same card styles
* Same interaction patterns

---

## 4. Subtle > Flashy

* Smooth animations
* Soft glass effects
* No aggressive motion

---

# 🎨 Color System (STRICT 60–30–10 RULE)

## 🔹 60% — Neutral (Foundation)

```css
--bg: #0E0E10;
--surface: #16161A;
--border: rgba(255,255,255,0.06);   
--text-primary: #EDEDED;
--text-secondary: #A1A1AA;
```

Usage:

* Background
* Base UI
* Typography

---

## 🔹 30% — Contrast Layer

```css
--surface-soft: rgba(255,255,255,0.03);
--surface-elevated: rgba(255,255,255,0.05);
```

Usage:

* Cards
* Sections
* Depth

---

## 🔹 10% — Accent (Blue ONLY)

```css
--accent: #3B82F6;
--accent-hover: #2563EB;
--accent-glow: rgba(59,130,246,0.15);
```

Usage:

* Buttons
* Links
* Highlights
* CTA

🚫 Avoid adding random accent colors

---

# 🧊 Design Language

## Glassmorphism (Subtle)

```css
background: rgba(255,255,255,0.05);
backdrop-filter: blur(12px);
border: 1px solid rgba(255,255,255,0.1);
```

Rules:

* No heavy glow
* No strong gradients
* Keep it soft

---

## Typography System

### Headings

```css
font-weight: 700–800;
letter-spacing: -0.02em;
```

Sizes:

* Hero: `clamp(3rem, 6vw, 5rem)`
* Section: `2rem – 2.5rem`

---

### Body Text

```css
font-size: 1rem – 1.125rem;
line-height: 1.6;
color: var(--text-secondary);
```

---

# 📏 Spacing System

* Base unit: **8px**
* Section padding: `py-24`
* Container: `max-w-7xl mx-auto px-6`
* Gaps: 16 / 24 / 32

---

# ❌ What AI-Generated Design Looks Like (Avoid)

## 1. Random Section Order

* No narrative flow
* Sections feel disconnected

---

## 2. Color Chaos

* Multiple accent colors
* No hierarchy

---

## 3. Overuse of Gradients

* Everything glowing
* Distracting UI

---

## 4. Weak CTA

* Too many buttons
* No focus

---

## 5. Inconsistent UI

* Different card styles
* Different paddings
* No system

---

## 6. Over-animation

* Bouncing elements
* Distracting motion

---

# ✅ Correct Page Structure (MANDATORY FLOW)

## 1. Hero Section

Purpose: Capture attention instantly

Includes:

* Strong headline
* Short subtext
* 1–2 CTAs

---

## 2. Trust / Proof

* Metrics OR logos
* Clean horizontal strip

---

## 3. Features (3–4 max)

* Clear and focused
* Each solves one problem

---

## 4. How It Works

* 3 steps maximum
* Simple layout

---

## 5. Benefits / Outcomes

* Why user should care
* Result-focused

---

## 6. Final CTA (CRITICAL)

* Large
* Centered
* High contrast

---

# 🧱 Component System

## Cards

```css
bg-white/5
border border-white/10
backdrop-blur-md
rounded-2xl
```

---

## Buttons

### Primary

```css
background: var(--accent);
color: white;
```

Hover:

```css
background: var(--accent-hover);
transform: scale(1.03);
```

---

### Secondary

```css
border: 1px solid rgba(255,255,255,0.2);
background: transparent;
```

---

## Navbar

* Transparent initially
* Blur + background on scroll
* Sticky

---

# ⚡ Motion System (Subtle Only)

Allowed:

* Fade in
* Slight upward movement

```css
opacity: 0 → 1
transform: translateY(20px → 0)
duration: 0.3–0.5s
```

---

Avoid:

* Rotation
* Bounce
* Complex timelines

---

# 🌊 Smooth Scrolling

Option 1:

```css
scroll-behavior: smooth;
```

Option 2 (Recommended):

* Lenis smooth scroll

---

# 🧠 UX Rules

* One primary CTA repeated
* Clear visual hierarchy
* Easy to scan
* No clutter

---

# 🏗️ Implementation Plan

## Phase 1 — Reset

* Remove unnecessary styles
* Normalize spacing
* Fix typography

---

## Phase 2 — Layout

* Rebuild sections in correct order
* Apply consistent containers

---

## Phase 3 — Components

* Standardize:

  * Buttons
  * Cards
  * Navbar

---

## Phase 4 — Motion

* Add subtle animations only

---

## Phase 5 — Polish

* Align spacing
* Improve contrast
* Strengthen CTA visibility

---

# 🔥 Final Benchmark

Your site should feel like:

* Linear
* Stripe
* Vercel

---

# 🚨 Final Reality Check

If your design feels:

* Messy
* Overdone
* Confusing
* Template-like

👉 It still looks AI-generated.

