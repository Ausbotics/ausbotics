"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap-utils"
import Link from "next/link"
import { Play, ArrowRight } from "iconsax-reactjs"
import { Button } from "@/components/ui/button"

export function HowItWorksHero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = [
        "[data-hiw='eyebrow']",
        "[data-hiw='heading']",
        "[data-hiw='sub']",
        "[data-hiw='ctas']",
      ]
      gsap.set(items, { opacity: 0, y: 24, filter: "blur(8px)" })
      const tl = gsap.timeline({ delay: 0.1 })
      items.forEach((sel, i) => {
        tl.to(sel, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.65, ease: "power3.out" }, i === 0 ? 0 : "-=0.4")
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[62vh] bg-background overflow-hidden flex items-center justify-center"
    >
      {/* Blobs */}
      <div className="absolute -top-16 -left-16 w-96 h-96 rounded-full bg-primary/15 blur-3xl -z-10 pointer-events-none animate-[blobFloat1_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 -right-16 w-80 h-80 rounded-full bg-blue-400/12 dark:bg-blue-500/18 blur-3xl -z-10 pointer-events-none animate-[blobFloat2_11s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[22rem] rounded-full bg-indigo-300/8 dark:bg-indigo-500/10 blur-3xl -z-10 pointer-events-none" />

      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, oklch(0.60 0.15 240 / 0.20), transparent)" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Live badge */}
      <div className="absolute top-8 right-8 hidden lg:flex items-center gap-2 rounded-full px-4 py-2 bg-white/60 dark:bg-white/5 border border-white/50 dark:border-white/10 backdrop-blur-sm">
        <span className="relative flex w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-emerald-500/60 animate-ping" />
          <span className="relative w-2 h-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[11px] font-semibold text-foreground/70">4 simple steps to launch</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        <p
          data-hiw="eyebrow"
          className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-5"
        >
          The Process
        </p>

        <h1
          data-hiw="heading"
          className="font-extrabold leading-[1.06] tracking-tight mb-6 text-foreground"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
        >
          How Our{" "}
          <span className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-300 dark:to-indigo-400 bg-clip-text text-transparent">
            AI Calling Agents
          </span>{" "}
          Work
        </h1>

        <p
          data-hiw="sub"
          className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed mb-10"
        >
          From setup to success in just 4 simple steps. Our streamlined process gets your AI agents
          up and running quickly, so you can start seeing results immediately.
        </p>

        <div data-hiw="ctas" className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="default" size="lg">
            <Link href="/book">
              <Play size={16} />
              Watch Demo
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              Get Started Today
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blobFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(18px, 22px) scale(1.04); }
        }
        @keyframes blobFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-20px, -16px) scale(1.05); }
        }
      `}</style>
    </section>
  )
}
