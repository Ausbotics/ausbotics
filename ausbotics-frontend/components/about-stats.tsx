"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { animateSection } from "@/lib/gsap-utils"
import Link from "next/link"

const stats = [
  { value: "1,200+", label: "Calls Handled" },
  { value: "40+",    label: "Businesses Served" },
  { value: "0.8s",   label: "Avg Response Time" },
  { value: "24/7",   label: "Always Active" },
]

export function AboutStats() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) animateSection(sectionRef.current, "[data-animate]", 0.1)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 bg-background dark:bg-neutral-900 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left — text */}
          <div>
            <p data-animate className="text-primary text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              About AusBotics
            </p>
            <h2 data-animate className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-foreground leading-tight mb-6">
              Intelligent Automation for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
                Service Businesses
              </span>
            </h2>
            <p data-animate className="text-base text-muted-foreground leading-relaxed mb-4">
              AusBotics builds AI-powered calling agents, workflow automations, and live business
              dashboards that work around the clock — so your team can focus on what matters most.
            </p>
            <p data-animate className="text-base text-muted-foreground leading-relaxed mb-8">
              From trade services and health clinics to real estate agencies and professional firms,
              we deliver tailored solutions that are live in days, not months.
            </p>
            <div data-animate>
              <Button variant="outline-brand" size="lg" className="rounded-xl" asChild>
                <Link href="/how-it-works">Learn How It Works →</Link>
              </Button>
            </div>
          </div>

          {/* Right — stat cards */}
          <div data-animate className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-neutral-100 dark:bg-neutral-800
                  border border-neutral-200 dark:border-neutral-700
                  rounded-2xl p-7
                  shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.25)]
                  flex flex-col gap-1"
              >
                <span className="text-[2.4rem] font-black text-foreground leading-none tabular-nums">
                  {value}
                </span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
