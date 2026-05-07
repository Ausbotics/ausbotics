"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { gsap, animateSectionBlur } from "@/lib/gsap-utils"
import Link from "next/link"

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      animateSectionBlur(sectionRef.current!, "[data-animate]", 0.13)
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-neutral-950 dark:bg-neutral-950"
    >
      {/* Animated pulsing glow rings */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-blue-600/[0.12] blur-[100px] pointer-events-none animate-[ctaGlow_4s_ease-in-out_infinite]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-indigo-500/[0.10] blur-[80px] pointer-events-none animate-[ctaGlow_4s_ease-in-out_1.5s_infinite]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-blue-400/[0.06] blur-[90px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <style jsx global>{`
        @keyframes ctaGlow {
          0%, 100% { opacity: 0.12; transform: translateX(-50%) scale(1); }
          50%       { opacity: 0.22; transform: translateX(-50%) scale(1.12); }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <p data-animate className="text-blue-400 text-[11px] font-semibold tracking-[0.25em] mb-4">
          Get Started
        </p>

        <h2 data-animate className="text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold text-white leading-tight mb-4">
          Ready to Get Started?
        </h2>

        <p data-animate className="text-base text-white/50 max-w-xl mx-auto mb-10">
          Book your free, no-obligation demo with our automation team and see what&apos;s possible
          for your business.
        </p>

        <div data-animate className="flex flex-col sm:flex-row justify-center gap-3">
          <Button
            variant="brand"
            size="lg"
            className="rounded-xl font-semibold px-8 h-12 text-[15px]"
            asChild
          >
            <Link href="/demo">Request a Demo</Link>
          </Button>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 h-12 rounded-xl
              font-semibold text-[15px] text-white/85 select-none
              bg-white/10 backdrop-blur-xl hover:bg-white/15
              border border-white/15
              shadow-[inset_0_1px_0_rgba(255,255,255,0.20),0_8px_32px_rgba(0,0,0,0.30)]
              hover:-translate-y-[1px] active:translate-y-[2px]
              transition-all duration-200 ease-out"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
