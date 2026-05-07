"use client"

import { useEffect, useRef } from "react"
import { ArrowRight2 } from "iconsax-reactjs"
import { gsap, ScrollTrigger } from "@/lib/gsap-utils"
import Link from "next/link"

// ── Clay buttons ─────────────────────────────────────────────────────────────

function ClayPrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="flex-1 sm:flex-none">
      <span
        role="button"
        tabIndex={0}
        className="group flex w-full sm:w-auto items-center justify-center gap-1.5 cursor-pointer select-none text-white font-bold rounded-xl px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm bg-gradient-to-b from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 shadow-[0_4px_0_#1d4ed8,0_6px_16px_rgba(59,130,246,0.18),inset_0_1px_0_rgba(255,255,255,0.35)] dark:shadow-[0_4px_0_#1e40af,0_6px_16px_rgba(96,165,250,0.15),inset_0_1px_0_rgba(255,255,255,0.20)] hover:translate-y-[2px] hover:shadow-[0_2px_0_#1d4ed8,0_3px_8px_rgba(59,130,246,0.14),inset_0_1px_0_rgba(255,255,255,0.35)] dark:hover:shadow-[0_2px_0_#1e40af,0_3px_8px_rgba(96,165,250,0.12),inset_0_1px_0_rgba(255,255,255,0.20)] active:translate-y-[4px] active:shadow-[0_0px_0_#1d4ed8,inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-100"
      >
        {children}
      </span>
    </Link>
  )
}

function ClaySecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="flex-1 sm:flex-none">
      <span
        role="button"
        tabIndex={0}
        className="group flex w-full sm:w-auto items-center justify-center gap-1.5 cursor-pointer select-none font-bold rounded-xl px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm text-slate-800 dark:text-white bg-gradient-to-b from-white to-slate-100 dark:from-slate-700 dark:to-slate-800 border border-slate-200 dark:border-slate-500 shadow-[0_4px_0_#cbd5e1,0_6px_18px_rgba(15,23,42,0.10),inset_0_1px_0_white] dark:shadow-[0_4px_0_#1e293b,0_6px_18px_rgba(0,0,0,0.40),inset_0_1px_0_rgba(255,255,255,0.12)] hover:translate-y-[2px] hover:shadow-[0_2px_0_#cbd5e1,0_3px_10px_rgba(15,23,42,0.08),inset_0_1px_0_white] dark:hover:shadow-[0_2px_0_#1e293b,0_3px_10px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] active:translate-y-[4px] active:shadow-[0_0px_0_#cbd5e1,inset_0_1px_0_white] dark:active:shadow-[0_0px_0_#1e293b,inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-100"
      >
        {children}
      </span>
    </Link>
  )
}

export function HeroButtons() {
  return (
    <div className="flex flex-row w-full items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-2">
      <ClayPrimaryButton href="/book">
        <span className="text-xs sm:text-sm">Request a Demo</span>
        <span className="inline-flex transition-transform duration-150 group-hover:translate-x-1">
          <ArrowRight2 size={12} className="sm:hidden" />
          <ArrowRight2 size={13} className="hidden sm:block" />
        </span>
      </ClayPrimaryButton>
      <ClaySecondaryButton href="/contact">
        <span className="text-xs sm:text-sm">Contact us</span>
        <span className="inline-flex transition-transform duration-150 group-hover:translate-x-1">
          <ArrowRight2 size={12} className="sm:hidden" />
          <ArrowRight2 size={13} className="hidden sm:block" />
        </span>
      </ClaySecondaryButton>
    </div>
  )
}

// ── Hero section ─────────────────────────────────────────────────────────────

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = [
        "[data-hero='eyebrow']",
        "[data-hero='h1-line1']",
        "[data-hero='h1-line2']",
        "[data-hero='subtext']",
        "[data-hero='ctas']",
        "[data-hero='proof']",
        "[data-hero='visual']",
      ]

      gsap.set(items, { opacity: 0, y: 24, filter: "blur(10px)" })

      const tl = gsap.timeline({ delay: 0.15 })
      items.forEach((sel, i) => {
        tl.to(
          sel,
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.65, ease: "power3.out" },
          i === 0 ? 0 : "-=0.40",
        )
      })

      // Blob parallax on scroll
      const section = sectionRef.current
      if (section) {
        gsap.to(section.querySelector(".blob-1"), {
          y: -90,
          scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 1.8 },
        })
        gsap.to(section.querySelector(".blob-2"), {
          y: 70,
          scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 1.5 },
        })
        gsap.to(section.querySelector(".blob-3"), {
          y: -50,
          x: 30,
          scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 2.0 },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[96vh] bg-background overflow-hidden flex items-center justify-center"
    >
      {/* ── Floating blobs (about-section style) ── */}
      <div className="blob-1 absolute -top-16 -left-16 w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-primary/15 blur-3xl -z-10 pointer-events-none" />
      <div className="blob-2 absolute bottom-0 -right-16 w-96 h-96 sm:w-[32rem] sm:h-[32rem] rounded-full bg-blue-400/15 dark:bg-blue-500/20 blur-3xl -z-10 pointer-events-none" />
      <div className="blob-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[20rem] rounded-full bg-indigo-300/10 dark:bg-indigo-500/10 blur-3xl -z-10 pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(100,130,200,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top rule */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, oklch(0.60 0.15 240 / 0.20), transparent)" }}
      />

      {/* ── Content ── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 lg:py-32 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 lg:gap-16">

        {/* Left column */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">



          {/* Heading — each line fades in separately */}
          <h1
            className="font-extrabold leading-[1.06] tracking-tight mb-5 text-foreground"
            style={{ fontSize: "clamp(1.7rem, 3.8vw, 3.2rem)" }}
          >
            <span data-hero="h1-line1" className="block">Replace manual work  with{" "}</span>

            <span className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-300 dark:to-indigo-400 bg-clip-text text-transparent">
              AI that runs 24/7.

            </span>
          </h1>

          {/* Subtext */}
          <p
            data-hero="subtext"
            className="max-w-lg mb-10 text-muted-foreground text-sm md:text-base leading-relaxed"
          >
            AusBotics delivers intelligent calling agents, live business dashboards,
            and custom web platforms — fully built, integrated, and ready to deploy
            for service businesses.
          </p>

          {/* CTAs */}
          <div data-hero="ctas" className="mb-3 w-full">
            <HeroButtons />
          </div>



        </div>

        {/* Right column — AI agent preview */}
        <div data-hero="visual" className="relative w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:ml-auto">
          <HeroAgentPreview />
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <style jsx global>{`
        @keyframes blobFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(18px, 22px) scale(1.04); }
        }
        @keyframes blobFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-20px, -16px) scale(1.05); }
        }
        .blob-1 { animation: blobFloat1 8s ease-in-out infinite; }
        .blob-2 { animation: blobFloat2 10s ease-in-out infinite; }
        .blob-3 { animation: blobFloat1 12s ease-in-out infinite reverse; }
        @keyframes heroWave {
          0%   { transform: scaleY(0.55); opacity: 0.6; }
          100% { transform: scaleY(1.2);  opacity: 1; }
        }
      `}</style>
    </section>
  )
}

// ── Glassmorphic AI agent preview ─────────────────────────────────────────────
function HeroAgentPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-400/10 via-indigo-400/8 to-transparent blur-2xl pointer-events-none" />

      <div className="relative rounded-2xl p-5 md:p-6 backdrop-blur-xl bg-white/50 dark:bg-white/[0.05] border border-white/50  ">

        {/* Header */}
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
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-2.5 text-[13px] leading-relaxed bg-white/70 dark:bg-white/[0.07] border border-white/50 dark:border-white/10 text-foreground/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
            Hi! I&apos;d like to book a plumbing inspection for tomorrow morning.
          </div>
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm px-4 py-2.5 text-[13px] leading-relaxed bg-blue-500/90 dark:bg-blue-500/80 border border-white/30 text-white shadow-[0_8px_24px_-8px_rgba(59,130,246,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]">
            Of course — I have 9:00am or 11:30am tomorrow. Which works better?
          </div>
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-2.5 text-[13px] leading-relaxed bg-white/70 dark:bg-white/[0.07] border border-white/50 dark:border-white/10 text-foreground/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
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
    </div>
  )
}
