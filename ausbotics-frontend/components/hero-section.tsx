
// "use client"

// import { useEffect, useRef } from "react"
// import { ArrowRight } from "iconsax-reactjs"
// import { gsap } from "@/lib/gsap-utils"
// import Link from "next/link"

// export function HeroSection() {
//   const sectionRef = useRef<HTMLElement>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.set("[data-hero]", { opacity: 0, y: 20 })

//       const tl = gsap.timeline({ delay: 0.1 })

//       tl.to("[data-hero='eyebrow']", {
//         opacity: 1, y: 0, duration: 0.55, ease: "back.out(1.4)",
//       })
//         .to("[data-hero='h1']", {
//           opacity: 1, y: 0, duration: 0.65, ease: "back.out(1.2)",
//         }, "-=0.3")
//         .to("[data-hero='subtext']", {
//           opacity: 1, y: 0, duration: 0.55, ease: "power3.out",
//         }, "-=0.35")
//         .to("[data-hero='ctas']", {
//           opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.3)",
//         }, "-=0.3")
//         .to("[data-hero='proof']", {
//           opacity: 1, y: 0, duration: 0.45, ease: "power3.out",
//         }, "-=0.2")
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-[96vh] bg-background overflow-hidden flex items-center justify-center"
//     >

//       {/* ── Backgrounds ────────────────────────────────── */}

//       {/* Aurora — dark */}
//       <div
//         className="absolute inset-0 hidden dark:block pointer-events-none"
//         style={{
//           background: [
//             "radial-gradient(ellipse 70% 50% at 50% -10%, oklch(0.42 0.20 242 / 0.32) 0%, transparent 62%)",
//             "radial-gradient(ellipse 40% 35% at 10% 80%,  oklch(0.45 0.16 250 / 0.10) 0%, transparent 55%)",
//             "radial-gradient(ellipse 30% 30% at 92% 70%,  oklch(0.40 0.18 230 / 0.08) 0%, transparent 50%)",
//           ].join(", "),
//         }}
//       />

//       {/* Aurora — light */}
//       <div
//         className="absolute inset-0 dark:hidden pointer-events-none"
//         style={{
//           background: [
//             "radial-gradient(ellipse 65% 45% at 50% -8%, oklch(0.74 0.10 240 / 0.11) 0%, transparent 60%)",
//             "radial-gradient(ellipse 35% 30% at 90% 75%,  oklch(0.70 0.08 245 / 0.06) 0%, transparent 50%)",
//           ].join(", "),
//         }}
//       />

//       {/* Dot grid */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: "radial-gradient(circle, rgba(100,130,200,0.055) 1px, transparent 1px)",
//           backgroundSize: "24px 24px",
//         }}
//       />

//       {/* Top rule */}
//       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

//       {/* ── Content ────────────────────────────────────── */}
//       <div className="relative w-full max-w-3xl mx-auto px-6 sm:px-10 py-32 flex flex-col items-center text-center">

//         {/* Eyebrow */}
//         <div
//           data-hero="eyebrow"
//           className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8
//             bg-primary/[0.07] dark:bg-primary/[0.12]
//             border border-primary/20
//             text-primary text-[11px] font-semibold uppercase tracking-[0.20em]"
//         >
//           <span className="relative flex w-2 h-2">
//             <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
//             <span className="relative w-2 h-2 rounded-full bg-primary" />
//           </span>
//           Intelligent Automation Platform
//         </div>

//         {/* Heading */}
//         <h1
//           data-hero="h1"
//           className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-extrabold leading-[1.07] tracking-tight mb-6"
//         >
//           <span className="text-foreground">Replace manual work</span>
//           <br />
//           <span className="text-foreground">with </span>
//           <span className="relative inline-block">
//             {/* Glow echo */}
//             <span
//               aria-hidden
//               className="absolute inset-0 blur-2xl opacity-20 pointer-events-none select-none
//                 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-400
//                 bg-clip-text text-transparent"
//             >
//               AI that runs 24/7.
//             </span>
//             <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 dark:from-blue-300 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
//               AI that runs 24/7.
//             </span>
//           </span>
//         </h1>

//         {/* Subtext */}
//         <p
//           data-hero="subtext"
//           className="text-[1.05rem] text-muted-foreground leading-relaxed max-w-xl mb-10"
//         >
//           AusBotics delivers intelligent calling agents, live business dashboards,
//           and custom web platforms — fully built, integrated, and ready to deploy
//           for service businesses.
//         </p>

//         {/* CTAs */}
//         <div data-hero="ctas" className="flex flex-col sm:flex-row justify-center gap-3 mb-12">

//           {/* Primary */}
//           <Link href="/demo" className="inline-flex justify-center">
//             <div className="group/btn relative inline-flex cursor-pointer select-none">
//               {/* 3D base */}
//               <div className="absolute inset-0 translate-y-[3px] rounded-xl bg-blue-800/80 dark:bg-blue-900" />
//               {/* Outer glow on hover */}
//               <div className="absolute -inset-1 rounded-2xl bg-blue-500/20 blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none" />
//               <div
//                 className="relative z-10 flex items-center gap-2 px-7 py-3.5 rounded-xl
//                   bg-gradient-to-b from-blue-500 to-blue-700
//                   border-t border-white/20
//                   text-white font-semibold text-[15px]
//                   shadow-[0_6px_28px_rgba(59,130,246,0.38)]
//                   transition-transform duration-100
//                   group-hover/btn:translate-y-[1.5px]
//                   group-active/btn:translate-y-[3px]"
//               >
//                 See the Demo
//                 <ArrowRight size="15" />
//               </div>
//             </div>
//           </Link>

//           {/* Secondary */}
//           <Link href="/how-it-works" className="inline-flex justify-center">
//             <div className="group/btn2 relative inline-flex cursor-pointer select-none">
//               <div
//                 className="relative z-10 flex items-center gap-2 px-7 py-3.5 rounded-xl
//                   bg-neutral-100 dark:bg-neutral-800
//                   border border-neutral-200 dark:border-neutral-700
//                   border-b-[3px] border-b-neutral-300 dark:border-b-neutral-600
//                   text-foreground font-semibold text-[15px]
//                   shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.25)]
//                   transition-all duration-100
//                   group-hover/btn2:translate-y-[1px] group-hover/btn2:border-b-[2px]
//                   group-active/btn2:translate-y-[2px] group-active/btn2:border-b-[1px]"
//               >
//                 How It Works
//                 <ArrowRight size="15" className="transition-transform duration-200 group-hover/btn2:translate-x-0.5" />
//               </div>
//             </div>
//           </Link>
//         </div>

//         {/* Micro-text */}
//         <p className="text-[11px] text-muted-foreground/60 mb-10 tracking-wide -mt-8">
//           No credit card required · Live in 72 hours
//         </p>

//         {/* Social proof — clean pill row */}
//         <div
//           data-hero="proof"
//           className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[13px] text-muted-foreground"
//         >
//           {[
//             { stat: "2,400+", label: "Conversations handled" },
//             { stat: "98%",    label: "Lead capture rate" },
//             { stat: "72 hrs", label: "Average time to live" },
//           ].map(({ stat, label }) => (
//             <span key={stat} className="flex items-center gap-2">
//               <span className="font-semibold text-foreground tabular-nums">{stat}</span>
//               <span className="text-muted-foreground/60">{label}</span>
//             </span>
//           ))}
//         </div>

//       </div>

//       {/* Bottom fade */}
//       <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent pointer-events-none" />
//     </section>
//   )
// }
"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "iconsax-reactjs"
import { gsap } from "@/lib/gsap-utils"
import Link from "next/link"
import { LightRays } from "@/components/ui/light-rays"



interface ClayButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

const primaryStyles = {
  base: {
    padding: "14px 30px",
    borderRadius: "16px",
    fontSize: "15px",
    fontWeight: 700,
    color: "white",
    background: "linear-gradient(180deg, oklch(0.58 0.22 242) 0%, oklch(0.48 0.22 242) 100%)",
    boxShadow: [
      "0 4px 0 oklch(0.36 0.20 244)",
      "0 8px 24px oklch(0.48 0.20 242 / 0.35)",
      "inset 0 1px 0 oklch(0.75 0.15 240 / 0.45)",
    ].join(", "),
    border: "none",
    transition: "transform 110ms ease, box-shadow 110ms ease",
  },
  hover: {
    transform: "translateY(2px)",
    boxShadow: [
      "0 2px 0 oklch(0.36 0.20 244)",
      "0 4px 12px oklch(0.48 0.20 242 / 0.28)",
      "inset 0 1px 0 oklch(0.75 0.15 240 / 0.45)",
    ].join(", "),
  },
  down: {
    transform: "translateY(4px)",
    boxShadow: [
      "0 0px 0 oklch(0.36 0.20 244)",
      "0 2px 6px oklch(0.48 0.20 242 / 0.18)",
      "inset 0 1px 0 oklch(0.75 0.15 240 / 0.45)",
    ].join(", "),
  },
}

const secondaryStyles = {
  base: {
    padding: "14px 30px",
    borderRadius: "16px",
    fontSize: "15px",
    fontWeight: 700,
    transition: "transform 110ms ease, box-shadow 110ms ease",
  },
}

function ClayPrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-block">
      <span
        role="button"
        tabIndex={0}
        className="inline-flex items-center gap-2 cursor-pointer select-none"
        style={primaryStyles.base}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.transform = primaryStyles.hover.transform
          el.style.boxShadow = primaryStyles.hover.boxShadow
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.transform = ""
          el.style.boxShadow = primaryStyles.base.boxShadow
        }}
        onMouseDown={e => {
          const el = e.currentTarget
          el.style.transform = primaryStyles.down.transform
          el.style.boxShadow = primaryStyles.down.boxShadow
        }}
        onMouseUp={e => {
          const el = e.currentTarget
          el.style.transform = primaryStyles.hover.transform
          el.style.boxShadow = primaryStyles.hover.boxShadow
        }}
      >
        {children}
      </span>
    </Link>
  )
}

function ClaySecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-block">
      <span
        role="button"
        tabIndex={0}
        className="inline-flex items-center gap-2 cursor-pointer select-none
          text-[oklch(0.25_0.06_240)] dark:text-[oklch(0.90_0.04_240)]
          bg-gradient-to-b
          from-[oklch(1.00_0.00_240)] to-[oklch(0.93_0.01_240)]
          dark:from-[oklch(0.26_0.03_242)] dark:to-[oklch(0.20_0.03_242)]
          border border-[oklch(0.86_0.04_240)]
          dark:border-[oklch(0.36_0.05_242)]
          shadow-[0_4px_0_oklch(0.80_0.05_240),0_6px_20px_oklch(0.50_0.06_240/0.14),inset_0_1px_0_white]
          dark:shadow-[0_4px_0_oklch(0.14_0.02_242),0_8px_24px_oklch(0_0_0/0.50),inset_0_1px_0_oklch(0.50_0.06_242/0.25)]"
        style={secondaryStyles.base}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.transform = "translateY(2px)"
          const isDark = document.documentElement.classList.contains("dark")
          el.style.boxShadow = isDark
            ? [
                "0 2px 0 oklch(0.14 0.02 242)",
                "0 4px 12px oklch(0 0 0 / 0.40)",
                "inset 0 1px 0 oklch(0.50 0.06 242 / 0.25)",
              ].join(", ")
            : [
                "0 2px 0 oklch(0.80 0.05 240)",
                "0 3px 10px oklch(0.50 0.06 240 / 0.10)",
                "inset 0 1px 0 white",
              ].join(", ")
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.transform = ""
          el.style.boxShadow = ""
        }}
        onMouseDown={e => {
          const el = e.currentTarget
          el.style.transform = "translateY(4px)"
          const isDark = document.documentElement.classList.contains("dark")
          el.style.boxShadow = isDark
            ? [
                "0 0px 0 oklch(0.14 0.02 242)",
                "0 2px 6px oklch(0 0 0 / 0.30)",
                "inset 0 1px 0 oklch(0.50 0.06 242 / 0.20)",
              ].join(", ")
            : [
                "0 0px 0 oklch(0.80 0.05 240)",
                "0 2px 6px oklch(0.50 0.06 240 / 0.07)",
                "inset 0 1px 0 white",
              ].join(", ")
        }}
        onMouseUp={e => {
          const el = e.currentTarget
          el.style.transform = "translateY(2px)"
          el.style.boxShadow = ""
        }}
      >
        {children}
      </span>
    </Link>
  )
}

// ── Main export — drop-in replacement for your hero buttons ──────────────────
export function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <ClayPrimaryButton href="/demo">
        See the Demo
        <ArrowRight size={15} />
      </ClayPrimaryButton>

      <ClaySecondaryButton href="/how-it-works">
        How It Works
        <ArrowRight size={15} />
      </ClaySecondaryButton>
    </div>
  )
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const typedRef = useRef<HTMLSpanElement>(null)
  const caretRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-hero]", { opacity: 0, y: 22 })

      const tl = gsap.timeline({ delay: 0.15 })

      tl.to("[data-hero='eyebrow']", {
        opacity: 1, y: 0, duration: 0.55, ease: "power3.out",
      })
        .to("[data-hero='h1']", {
          opacity: 1, y: 0, duration: 0.70, ease: "power3.out",
        }, "-=0.28")
        .to("[data-hero='subtext']", {
          opacity: 1, y: 0, duration: 0.55, ease: "power3.out",
        }, "-=0.38")
        .to("[data-hero='ctas']", {
          opacity: 1, y: 0, duration: 0.50, ease: "power3.out",
        }, "-=0.28")
        .to("[data-hero='proof']", {
          opacity: 1, y: 0, duration: 0.45, ease: "power3.out",
        }, "-=0.18")
        .to("[data-hero='visual']", {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
        }, "-=0.5")
        .add(() => {
          // Smooth typing animation for "AI that runs 24/7."
          const target = typedRef.current
          const caret = caretRef.current
          if (!target) return
          const text = "AI that runs 24/7."
          const chars = text.split("")
          let i = 0
          let last = performance.now()
          // variable delay - faster on common letters/spaces
          const delayFor = (c: string) => {
            if (c === " ") return 22
            if (/[aeiouist]/i.test(c)) return 28
            return 34
          }
          let nextDelay = delayFor(chars[0] || "")
          const tick = (now: number) => {
            if (now - last >= nextDelay) {
              target.textContent = chars.slice(0, ++i).join("")
              last = now
              if (i < chars.length) nextDelay = delayFor(chars[i] || "")
            }
            if (i < chars.length) {
              requestAnimationFrame(tick)
            } else if (caret) {
              gsap.to(caret, { opacity: 0, duration: 0.6, delay: 0.4, ease: "power2.out" })
            }
          }
          requestAnimationFrame(tick)
        })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[96vh] overflow-hidden flex items-center justify-center bg-[oklch(0.97_0.008_240)] dark:bg-[oklch(0.10_0_0)]"
    >

      {/* Light rays — ambient overhead glow (light mode) */}
      <div className="absolute inset-0 dark:hidden">
        <LightRays
          count={9}
          color="rgba(120, 170, 255, 0.28)"
          blur={42}
          speed={16}
          length="85vh"
        />
      </div>
      {/* Light rays — ambient overhead glow (dark mode, brighter) */}
      <div className="absolute inset-0 hidden dark:block">
        <LightRays
          count={11}
          color="rgba(140, 180, 255, 0.55)"
          blur={48}
          speed={16}
          length="90vh"
        />
      </div>


   

      {/* Top rule */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, oklch(0.60 0.15 240 / 0.20), transparent)" }}
      />

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 lg:py-32 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 lg:gap-16">

        {/* Left column — copy */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

        {/* Heading */}
        <h1
          data-hero="h1"
          className="font-extrabold leading-[1.06] tracking-tight mb-5 text-[oklch(0.18_0.02_240)] dark:text-[oklch(0.96_0_0)]"
          style={{ fontSize: "clamp(2.4rem, 5.2vw, 4.4rem)" }}
        >
          Replace manual work
          <br />
          with{" "}
          <span className="relative inline-block bg-gradient-to-br from-[oklch(0.50_0.22_242)] to-[oklch(0.42_0.20_270)] dark:from-[oklch(0.78_0.18_242)] dark:to-[oklch(0.70_0.18_270)] bg-clip-text text-transparent">
            <span ref={typedRef} aria-hidden />
            <span
              ref={caretRef}
              aria-hidden
              className="inline-block w-[3px] h-[0.9em] -mb-[0.08em] ml-1 bg-blue-500 dark:bg-blue-400 align-middle"
            />
            <span className="sr-only">AI that runs 24/7.</span>
          </span>
        </h1>

        {/* Subtext */}
        <p
          data-hero="subtext"
          className="max-w-lg mb-10 text-[oklch(0.48_0.04_240)] dark:text-[oklch(0.72_0.02_240)] text-base md:text-lg leading-relaxed"
        >
          AusBotics delivers intelligent calling agents, live business dashboards,
          and custom web platforms — fully built, integrated, and ready to deploy
          for service businesses.
        </p>

        {/* ── CTAs ─────────────────────────────────────── */}
        <div data-hero="ctas" className="flex flex-col sm:flex-row lg:justify-start justify-center gap-3.5 mb-3">
<HeroButtons />
          {/* Primary clay button */}
          {/* <Link href="/demo">
            <button
              className="inline-flex items-center gap-2 cursor-pointer select-none"
              style={{
                padding: "14px 30px",
                borderRadius: "16px",
                fontSize: "15px",
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(180deg, oklch(0.58 0.22 242) 0%, oklch(0.48 0.22 242) 100%)",
                boxShadow: [
                  "0 4px 0 oklch(0.36 0.20 244)",
                  "0 8px 24px oklch(0.48 0.20 242 / 0.22)",
                  "inset 0 1px 0 oklch(0.75 0.15 240 / 0.35)",
                ].join(", "),
                border: "none",
                transition: "transform 110ms ease, box-shadow 110ms ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.transform = "translateY(2px)"
                el.style.boxShadow = [
                  "0 2px 0 oklch(0.36 0.20 244)",
                  "0 4px 12px oklch(0.48 0.20 242 / 0.16)",
                  "inset 0 1px 0 oklch(0.75 0.15 240 / 0.35)",
                ].join(", ")
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.transform = ""
                el.style.boxShadow = [
                  "0 4px 0 oklch(0.36 0.20 244)",
                  "0 8px 24px oklch(0.48 0.20 242 / 0.22)",
                  "inset 0 1px 0 oklch(0.75 0.15 240 / 0.35)",
                ].join(", ")
              }}
              onMouseDown={e => {
                const el = e.currentTarget
                el.style.transform = "translateY(4px)"
                el.style.boxShadow = [
                  "0 0px 0 oklch(0.36 0.20 244)",
                  "0 2px 6px oklch(0.48 0.20 242 / 0.12)",
                  "inset 0 1px 0 oklch(0.75 0.15 240 / 0.35)",
                ].join(", ")
              }}
              onMouseUp={e => {
                const el = e.currentTarget
                el.style.transform = "translateY(2px)"
                el.style.boxShadow = [
                  "0 2px 0 oklch(0.36 0.20 244)",
                  "0 4px 12px oklch(0.48 0.20 242 / 0.16)",
                  "inset 0 1px 0 oklch(0.75 0.15 240 / 0.35)",
                ].join(", ")
              }}
            >
              See the Demo
              <ArrowRight size="15" />
            </button>
          </Link> */}

          {/* Secondary clay button */}
          {/* <Link href="/how-it-works">
            <button
              className="inline-flex items-center gap-2 cursor-pointer select-none
                text-[oklch(0.28_0.06_240)] dark:text-[oklch(0.92_0.02_240)]
                bg-gradient-to-b from-[oklch(0.99_0.00_240)] to-[oklch(0.94_0.01_240)]
                dark:from-[oklch(0.20_0.01_240)] dark:to-[oklch(0.16_0.01_240)]
                border border-[oklch(0.88_0.03_240)] dark:border-[oklch(0.30_0.02_240)]
                shadow-[0_4px_0_oklch(0.82_0.04_240),0_6px_18px_oklch(0.50_0.06_240/0.12),inset_0_1px_0_white]
                dark:shadow-[0_4px_0_oklch(0.10_0.01_240),0_6px_18px_oklch(0_0_0/0.40),inset_0_1px_0_oklch(0.40_0.02_240/0.30)]"
              style={{
                padding: "14px 30px",
                borderRadius: "16px",
                fontSize: "15px",
                fontWeight: 700,
                transition: "transform 110ms ease, box-shadow 110ms ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.transform = "translateY(2px)"
                el.style.boxShadow = [
                  "0 2px 0 oklch(0.82 0.04 240)",
                  "0 3px 10px oklch(0.50 0.06 240 / 0.08)",
                  "inset 0 1px 0 white",
                ].join(", ")
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.transform = ""
                el.style.boxShadow = [
                  "0 4px 0 oklch(0.82 0.04 240)",
                  "0 6px 18px oklch(0.50 0.06 240 / 0.12)",
                  "inset 0 1px 0 white",
                ].join(", ")
              }}
              onMouseDown={e => {
                const el = e.currentTarget
                el.style.transform = "translateY(4px)"
                el.style.boxShadow = [
                  "0 0px 0 oklch(0.82 0.04 240)",
                  "0 2px 6px oklch(0.50 0.06 240 / 0.06)",
                  "inset 0 1px 0 white",
                ].join(", ")
              }}
              onMouseUp={e => {
                const el = e.currentTarget
                el.style.transform = "translateY(2px)"
                el.style.boxShadow = [
                  "0 2px 0 oklch(0.82 0.04 240)",
                  "0 3px 10px oklch(0.50 0.06 240 / 0.08)",
                  "inset 0 1px 0 white",
                ].join(", ")
              }}
            >
              How It Works
              <ArrowRight size="15" />
            </button>
          </Link> */}
        </div>

        {/* Micro-text */}
        <p
          className="mb-12 text-[oklch(0.62_0.04_240)] dark:text-[oklch(0.60_0.02_240)]"
          style={{ fontSize: "11px", letterSpacing: "0.04em" }}
        >
          No credit card required · Live in 72 hours
        </p>

        {/* ── Social proof — clay chips ─────────────────── */}
        <div
          data-hero="proof"
          className="flex flex-wrap lg:justify-start justify-center items-center gap-2"
        >
          {[
            { stat: "2,400+", label: "Conversations handled" },
            { stat: "98%",    label: "Lead capture rate" },
            { stat: "72 hrs", label: "Avg. time to live" },
          ].map(({ stat, label }, i, arr) => (
            <span key={stat} className="inline-flex items-center gap-2">
              <span
                className="inline-flex items-center gap-2 rounded-2xl
                  bg-[oklch(0.96_0.015_240)] dark:bg-[oklch(0.16_0.01_240)]
                  border border-[oklch(0.90_0.03_240)] dark:border-[oklch(0.26_0.02_240)]
                  shadow-[0_2px_0_oklch(0.86_0.04_240),inset_0_1px_0_white]
                  dark:shadow-[0_2px_0_oklch(0.10_0.01_240),inset_0_1px_0_oklch(0.35_0.02_240/0.25)]"
                style={{ padding: "8px 14px" }}
              >
                <span className="text-[oklch(0.36_0.18_242)] dark:text-[oklch(0.78_0.16_242)]" style={{ fontSize: "13px", fontWeight: 800 }}>
                  {stat}
                </span>
                <span className="text-[oklch(0.52_0.04_240)] dark:text-[oklch(0.72_0.02_240)]" style={{ fontSize: "12px" }}>
                  {label}
                </span>
              </span>
              {i < arr.length - 1 && (
                <span className="text-[oklch(0.78_0.04_240)] dark:text-[oklch(0.40_0.02_240)]" style={{ fontSize: "13px" }}>·</span>
              )}
            </span>
          ))}
        </div>

        </div>

        {/* Right column — glassmorphic AI agent preview */}
        <div data-hero="visual" className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto opacity-100">
          <HeroAgentPreview />
        </div>

      </div>


    </section>
  )
}

// ── Glassmorphic AI agent preview ────────────────────────────────────────────
function HeroAgentPreview() {
  return (
    <div className="relative">
      {/* Outer glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-400/20 via-indigo-400/15 to-transparent blur-2xl pointer-events-none" />

      <div
        className="relative rounded-2xl p-5 md:p-6
          backdrop-blur-xl
          bg-white/40 dark:bg-white/[0.04]
          border border-white/40 dark:border-white/10
          shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_20px_60px_-20px_rgba(15,23,42,0.30)]
          dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_-20px_rgba(0,0,0,0.7)]"
      >
        {/* Header pill */}
        <div className="flex items-center justify-between mb-5">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/60 dark:bg-white/5 border border-white/50 dark:border-white/10 text-foreground/80">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-emerald-500/60 animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            Live Agent
          </span>
          <span className="text-[11px] text-muted-foreground tabular-nums">00:24</span>
        </div>

        {/* Messages */}
        <div className="space-y-3 mb-5">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-2.5 text-[13px] leading-relaxed
            bg-white/70 dark:bg-white/[0.06]
            border border-white/50 dark:border-white/10
            text-foreground/90
            shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
            Hi! I'd like to book a plumbing inspection for tomorrow morning.
          </div>

          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm px-4 py-2.5 text-[13px] leading-relaxed
            bg-blue-500/85 backdrop-blur-md
            border border-white/30
            text-white
            shadow-[0_8px_24px_-8px_rgba(59,130,246,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]">
            Of course — I have 9:00am or 11:30am tomorrow. Which works better?
          </div>

          <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-2.5 text-[13px] leading-relaxed
            bg-white/70 dark:bg-white/[0.06]
            border border-white/50 dark:border-white/10
            text-foreground/90
            shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
            9am works. Confirm please.
          </div>
        </div>

        {/* Waveform */}
        <div className="rounded-xl px-4 py-3 bg-white/50 dark:bg-white/[0.04] border border-white/40 dark:border-white/10 flex items-center gap-1.5">
          {Array.from({ length: 26 }).map((_, i) => (
            <span
              key={i}
              className="block w-[3px] rounded-full bg-blue-500/70 dark:bg-blue-400/70"
              style={{
                height: `${10 + Math.abs(Math.sin(i * 0.7)) * 18}px`,
                animation: `heroWave 1.2s ease-in-out ${i * 0.04}s infinite alternate`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes heroWave {
          0%   { transform: scaleY(0.55); opacity: 0.6; }
          100% { transform: scaleY(1.2);  opacity: 1; }
        }
      `}</style>
    </div>
  )
}