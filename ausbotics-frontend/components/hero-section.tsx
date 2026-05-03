"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Flash, Messages1, Chart, Clock } from "iconsax-reactjs"
import { gsap, animateHeadingChars, animateSection } from "@/lib/gsap-utils"
import Link from "next/link"

export function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (headingRef.current) {
      animateHeadingChars(headingRef.current, 0.1)
    }
    if (sectionRef.current) {
      animateSection(sectionRef.current, "[data-animate]", 0.1)
    }
    return () => {
      gsap.killTweensOf("*")
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] bg-grid-blueprint overflow-hidden flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-28 w-full">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-center">
          {/* Left Column */}
          <div>
            {/* Eyebrow Label */}
            <div
              data-animate
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-8"
            >
              <Flash size="12" />
              Intelligent Automation Systems
            </div>

            {/* Main Heading */}
            <h1
              ref={headingRef}
              className="text-[clamp(3.5rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-tight text-navy dark:text-cream mb-8"
            >
              Automate. Grow. Lead.
            </h1>

            {/* Subheading */}
            <p
              data-animate
              className="text-xl text-steel dark:text-cream/70 max-w-xl leading-relaxed mb-10"
            >
              <span className="text-brand-blue font-semibold">AusBotics</span>{" "}
              builds intelligent automation systems — AI calling agents, business
              dashboards, and custom web platforms for SMBs that want to scale
              without scaling their headcount.
            </p>

            {/* CTAs */}
            <div
              data-animate
              className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12"
            >
              <Button
                size="lg"
                variant="brand"
                className="text-base px-8 py-5 rounded-xl font-bold shadow-lg shadow-terracotta/25 hover:shadow-terracotta/40 transition-shadow"
                asChild
              >
                <Link href="/demo">See the Demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline-brand"
                className="text-base px-8 py-5 rounded-xl font-bold"
                asChild
              >
                <Link href="/how-it-works">How It Works</Link>
              </Button>
            </div>

            {/* Floating Stat Badges */}
            <div data-animate className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-sage/15 rounded-full border border-sage/30">
                <Messages1 size="16" className="text-sage" />
                <span className="text-sm font-semibold text-navy dark:text-cream">
                  2,000+ Conversations
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-navy/8 rounded-full border border-navy/15">
                <Clock size="16" className="text-brand-blue" />
                <span className="text-sm font-semibold text-navy dark:text-cream">
                  24/7 Availability
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-terracotta/10 rounded-full border border-terracotta/25">
                <Chart size="16" className="text-terracotta" />
                <span className="text-sm font-semibold text-navy dark:text-cream">
                  Zero Missed Leads
                </span>
              </div>
            </div>
          </div>

          {/* Right Column — CSS Isometric Block Diagram */}
          <div
            data-animate
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative w-80 h-80">
              {/* Outer Frame — Blueprint Style */}
              <div className="absolute inset-0 rounded-2xl border-2 border-navy/15 bg-cream-surface/50 dark:bg-[oklch(0.14_0_0)/50] backdrop-blur-sm">
                {/* Corner + Markers */}
                <span className="absolute top-2 left-3 text-navy/30 dark:text-cream/15 text-xs font-bold">
                  +
                </span>
                <span className="absolute top-2 right-3 text-navy/30 dark:text-cream/15 text-xs font-bold">
                  +
                </span>
                <span className="absolute bottom-2 left-3 text-navy/30 dark:text-cream/15 text-xs font-bold">
                  +
                </span>
                <span className="absolute bottom-2 right-3 text-navy/30 dark:text-cream/15 text-xs font-bold">
                  +
                </span>
              </div>

              {/* Central Navy Block */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-navy rounded-xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <Flash size="40" color="var(--cream)" />
              </div>

              {/* Orbiting Mini-Blocks */}
              <div className="absolute top-6 right-8 w-16 h-16 bg-terracotta rounded-lg flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <Messages1 size="20" color="white" />
              </div>
              <div className="absolute bottom-6 left-8 w-16 h-16 bg-brand-blue rounded-lg flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <Chart size="20" color="white" />
              </div>
              <div className="absolute bottom-8 right-12 w-12 h-12 bg-sage rounded-lg flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <Clock size="16" color="white" />
              </div>

              {/* Connecting Lines */}
              <div className="absolute top-[calc(50%+0px)] left-[calc(50%+0px)] w-px h-16 bg-navy/20 dark:bg-cream/10 origin-top rotate-45" />
              <div className="absolute top-[calc(50%+0px)] left-[calc(50%-16px)] w-16 h-px bg-navy/20 dark:bg-cream/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-40 -right-32 w-96 h-96 bg-brand-blue/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-terracotta/6 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
