"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, TickCircle } from "iconsax-reactjs"
import { gsap } from "@/lib/gsap-utils"
import Link from "next/link"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero]",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.13, ease: "back.out(1.4)", delay: 0.1 }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[96vh] bg-background dark:bg-neutral-900 overflow-hidden flex items-center justify-center text-center"
    >
      {/* Dark mode: subtle blue aurora */}
      <div
        className="absolute inset-0 hidden dark:block pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% -5%, oklch(0.45 0.18 240 / 0.28) 0%, transparent 60%), radial-gradient(ellipse 45% 40% at 15% 85%, oklch(0.48 0.16 245 / 0.12) 0%, transparent 55%)",
        }}
      />

      {/* Light mode: very faint blue tint */}
      <div
        className="absolute inset-0 dark:hidden pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, oklch(0.75 0.10 240 / 0.12) 0%, transparent 55%), radial-gradient(ellipse 40% 35% at 90% 80%, oklch(0.72 0.09 245 / 0.07) 0%, transparent 50%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(100,130,200,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow orb — top center */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[380px] rounded-full bg-blue-500/[0.07] dark:bg-blue-500/[0.12] blur-[100px] pointer-events-none" />
      {/* Glow orb — bottom left */}
      <div className="absolute bottom-0 -left-20 w-[380px] h-[380px] rounded-full bg-blue-400/[0.05] dark:bg-blue-400/[0.08] blur-[90px] pointer-events-none" />

      {/* Top border line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-32 w-full">

        {/* Eyebrow badge */}
        <div
          data-hero
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-8
            bg-primary/[0.08] dark:bg-primary/[0.12]
            border border-primary/20
            text-primary text-[11px] font-semibold uppercase tracking-[0.22em]
            shadow-[0_2px_12px_rgba(59,130,246,0.12)]"
        >
          <span className="relative flex items-center justify-center w-3 h-3">
            <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
            <span className="relative w-1.5 h-1.5 rounded-full bg-primary" />
          </span>
          Intelligent Automation Platform
        </div>

        {/* Heading */}
        <h1
          data-hero
          className="text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[1.06] tracking-tight mb-6"
        >
          <span className="text-foreground">Replace manual work with</span>
          <br />
          <span className="relative inline-block">
            {/* Soft glow behind */}
            <span
              aria-hidden
              className="absolute inset-0 pointer-events-none select-none blur-xl opacity-25
                bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-500
                bg-clip-text text-transparent"
            >
              AI that runs 24/7.
            </span>
            <span className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
              AI that runs 24/7.
            </span>
          </span>
        </h1>

        {/* Subtext */}
        <p data-hero className="text-[1.05rem] text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          AusBotics delivers intelligent calling agents, live business dashboards,
          and custom web platforms — fully built, integrated, and ready to deploy
          for service businesses.
        </p>

        {/* CTAs */}
        <div data-hero className="flex flex-col sm:flex-row justify-center gap-3 mb-14">

          {/* Primary */}
          <Link href="/demo" className="inline-flex justify-center">
            <div className="group/btn relative inline-flex cursor-pointer select-none">
              <div className="absolute inset-0 translate-y-[4px] rounded-xl bg-blue-800" />
              <div
                className="relative z-10 flex items-center gap-2 px-8 py-3.5 rounded-xl
                  bg-gradient-to-b from-blue-500 to-blue-700
                  border-t border-white/25
                  text-white font-semibold text-[15px]
                  shadow-[0_6px_24px_rgba(59,130,246,0.35)]
                  transition-transform duration-100
                  group-hover/btn:translate-y-[2px]
                  group-active/btn:translate-y-[4px]"
              >
                See the Demo
                <ArrowRight size="16" />
              </div>
            </div>
          </Link>

          {/* Secondary */}
          <Link href="/how-it-works" className="inline-flex justify-center">
            <div className="group/btn2 relative inline-flex cursor-pointer select-none">
              <div
                className="relative z-10 flex items-center gap-2 px-8 py-3.5 rounded-xl
                  bg-neutral-100 dark:bg-neutral-800
                  border border-neutral-200 dark:border-neutral-700
                  border-b-[3px] border-b-neutral-300 dark:border-b-neutral-600
                  text-foreground font-semibold text-[15px]
                  shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.25)]
                  transition-all duration-100
                  group-hover/btn2:translate-y-[1px] group-hover/btn2:border-b-[2px]
                  group-active/btn2:translate-y-[2px] group-active/btn2:border-b-[1px]"
              >
                How It Works
                <ArrowRight size="16" className="transition-transform duration-200 group-hover/btn2:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>

        {/* Social proof */}
        <div data-hero className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
          {[
            "2,000+ conversations handled",
            "Zero missed leads",
            "Live in days, not months",
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <TickCircle size="14" className="text-primary" variant="Bold" />
              {t}
            </span>
          ))}
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
