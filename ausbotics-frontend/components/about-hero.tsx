"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "iconsax-reactjs"
import Link from "next/link"
import { gsap } from "@/lib/gsap-utils"
import { Button } from "@/components/ui/button"

export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = [
        "[data-about='eyebrow']",
        "[data-about='heading']",
        "[data-about='sub']",
        "[data-about='cta']",
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
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/15 blur-3xl -z-10 pointer-events-none animate-[blobFloat1_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 -right-16 w-80 h-80 rounded-full bg-blue-400/15 dark:bg-blue-500/20 blur-3xl -z-10 pointer-events-none animate-[blobFloat2_10s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[22rem] rounded-full bg-blue-300/10 dark:bg-blue-500/10 blur-3xl -z-10 pointer-events-none" />

      {/* Top rule */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, oklch(0.60 0.15 240 / 0.20), transparent)" }}
      />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        <p
          data-about="eyebrow"
          className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-5"
        >
          Our Story
        </p>

        <h1
          data-about="heading"
          className="font-extrabold leading-[1.06] tracking-tight mb-6 text-foreground"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
        >
          Bringing the Power of{" "}
          <span className="bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
            AI Automation
          </span>{" "}
          to Everyone
        </h1>

        <p
          data-about="sub"
          className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed mb-10"
        >
          At Ausbotics, we're on a mission to bring the power of AI automation to everyone — from
          growing startups to everyday businesses. We believe technology should make life easier, not harder.
        </p>

        <div data-about="cta" className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="default" size="lg">
            <Link href="/book">
              See Our Technology in Action
              <ArrowRight size={16} />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              Contact Us
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
