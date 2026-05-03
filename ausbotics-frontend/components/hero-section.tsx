"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Flash, Messages1, Chart, Clock, ArrowRight, TickCircle } from "iconsax-reactjs"
import { gsap } from "@/lib/gsap-utils"
import Link from "next/link"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero]",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.11, ease: "power2.out", delay: 0.15 }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const metrics = [
    { label: "Calls Handled Today", value: "1,247", change: "+24%", bar: 82 },
    { label: "Leads Booked",         value: "89",    change: "+12%", bar: 65 },
    { label: "Avg Response Time",    value: "0.8s",  change: "−94%", bar: 95 },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] bg-background overflow-hidden flex items-center"
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-grid-dots pointer-events-none opacity-100" />

      {/* Soft ambient glow — accent colour, very low opacity */}
      <div className="absolute -top-40 right-0 w-[520px] h-[520px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Left Column ── */}
          <div className="max-w-[560px]">

            {/* Eyebrow pill */}
            <div
              data-hero
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/8 text-primary text-[11px] font-semibold uppercase tracking-[0.2em] mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Intelligent Automation Platform
            </div>

            {/* Heading */}
            <h1
              data-hero
              className="text-[clamp(2.6rem,5vw,4.8rem)] font-extrabold leading-[1.06] tracking-tight text-foreground mb-6"
            >
              Replace manual work with{" "}
              <span className="text-primary">AI that runs 24/7.</span>
            </h1>

            {/* Subtext */}
            <p data-hero className="text-lg text-muted-foreground leading-relaxed mb-10">
              AusBotics delivers intelligent calling agents, live business dashboards,
              and custom web platforms — fully built, integrated, and ready to deploy
              for service businesses.
            </p>

            {/* CTAs */}
            <div data-hero className="flex flex-col sm:flex-row gap-3 mb-12">
              <Button
                size="lg"
                variant="brand"
                className="rounded-xl font-semibold px-7 h-12 text-[15px] gap-2"
                asChild
              >
                <Link href="/demo">
                  See the Demo
                  <ArrowRight size="16" color="white" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline-brand"
                className="rounded-xl font-semibold px-7 h-12 text-[15px]"
                asChild
              >
                <Link href="/how-it-works">How It Works</Link>
              </Button>
            </div>

            {/* Social proof line */}
            <div data-hero className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              {[
                "2,000+ conversations handled",
                "Zero missed leads",
                "Live in days, not months",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <TickCircle size="14" className="text-sage" variant="Bold" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right Column — Dashboard card ── */}
          <div data-hero className="hidden lg:block">
            <div className="relative pl-6 pb-6">

              {/* Main card */}
              <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-[0_20px_60px_-10px_oklch(0.13_0.045_243/12%)] dark:shadow-[0_20px_60px_-10px_oklch(0_0_0/50%)]">

                {/* Card header — uses ink (30%) for the dark bar */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-ink dark:bg-bg-subtle">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                    <span className="text-sm font-semibold text-background dark:text-foreground">
                      Operations Dashboard
                    </span>
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-background/50 dark:text-muted-foreground">
                    Live
                  </span>
                </div>

                {/* Metrics body */}
                <div className="px-5 py-5 space-y-5 bg-card">
                  {metrics.map((m, i) => (
                    <div key={i}>
                      <div className="flex items-baseline justify-between mb-1.5">
                        <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                          {m.label}
                        </span>
                        <span className="text-[11px] font-semibold text-sage">{m.change}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[1.6rem] font-bold text-foreground tabular-nums w-20 leading-none">
                          {m.value}
                        </span>
                        <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${m.bar}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-5 py-3.5 border-t border-border bg-secondary flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flash size="12" className="text-terracotta" />
                    <span className="text-xs text-muted-foreground">3 automations active</span>
                  </div>
                  <span className="text-xs font-medium text-primary">Today ↑</span>
                </div>
              </div>

              {/* Floating chips — positioned relative to the card */}
              <div className="absolute top-0 right-0 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-terracotta shadow-lg shadow-terracotta/25">
                <Clock size="12" color="white" />
                <span className="text-white text-[11px] font-semibold">24 / 7 Active</span>
              </div>
              <div className="absolute bottom-0 left-0 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sage shadow-lg shadow-sage/25">
                <Messages1 size="12" color="white" />
                <span className="text-white text-[11px] font-semibold">2,000+ Calls</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
