"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap-utils"
import Link from "next/link"
import { ArrowRight } from "iconsax-reactjs"
import { Button } from "@/components/ui/button"

export function PricingHero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = [
        "[data-pricing='eyebrow']",
        "[data-pricing='heading']",
        "[data-pricing='sub']",
        "[data-pricing='cta']",
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
      className="relative min-h-[60vh] bg-background overflow-hidden flex items-center justify-center"
    >
      {/* Blobs */}
      <div className="absolute -top-16 -right-16 w-96 h-96 rounded-full bg-primary/15 blur-3xl -z-10 pointer-events-none animate-[blobFloat1_9s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-blue-400/12 dark:bg-blue-500/18 blur-3xl -z-10 pointer-events-none animate-[blobFloat2_11s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[20rem] rounded-full bg-blue-300/8 dark:bg-blue-500/10 blur-3xl -z-10 pointer-events-none" />

      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, oklch(0.60 0.15 240 / 0.20), transparent)" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        <p
          data-pricing="eyebrow"
          className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-5"
        >
          Transparent Pricing
        </p>

        <h1
          data-pricing="heading"
          className="font-extrabold leading-[1.06] tracking-tight mb-6 text-foreground"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
        >
          Dual Engagement Models for{" "}
          <span className="bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
            Flexible Scaling
          </span>
        </h1>

        <p
          data-pricing="sub"
          className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed mb-10"
        >
          Choose the model that fits your business — a recurring subscription for ongoing automation
          support, or a one-time deployment for full ownership from day one.
        </p>

        <div data-pricing="cta" className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="default" size="lg">
            <Link href="/book">
              Get Started
              <ArrowRight size={16} />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              Talk to Sales
            </Link>
          </Button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blobFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-16px, 20px) scale(1.04); }
        }
        @keyframes blobFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(18px, -14px) scale(1.05); }
        }
      `}</style>
    </section>
  )
}
