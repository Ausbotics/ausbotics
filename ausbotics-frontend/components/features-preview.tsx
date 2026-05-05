"use client"

import { useEffect, useRef } from "react"
import { Flash, ShieldTick, Global, Headphone } from "iconsax-reactjs"
import { Button } from "@/components/ui/button"
import { gsap, animateSection } from "@/lib/gsap-utils"
import { GlareHover } from "@/components/ui/glare-hover"
import Link from "next/link"

const features = [
  {
    num: "01",
    Icon: Flash,
    title: "From Idea to Impact",
    description:
      "Share your business problem. We transform it into a tailored AI automation designed, built, and ready to deliver real results.",
  },
  {
    num: "02",
    Icon: ShieldTick,
    title: "Your Workflow, Your Way",
    description:
      "Every solution is crafted to match your exact work processes — no cookie-cutter templates, no bloated tools.",
  },
  {
    num: "03",
    Icon: Global,
    title: "Built for Every Business",
    description:
      "No matter your size, our automations are designed to grow with you — from early-stage to enterprise.",
  },
  {
    num: "04",
    Icon: Headphone,
    title: "Custom Voice Options",
    description:
      "Choose from professional voice options that perfectly match your brand identity and communication style.",
  },
]

export function FeaturesPreview() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      animateSection(sectionRef.current, "[data-animate]", 0.1)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        <div data-animate className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-primary text-[11px] font-semibold tracking-[0.25em] mb-3">
              What We Build
            </p>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-foreground leading-tight">
              Why AusBotics?
            </h2>
          </div>
          <Button variant="outline-brand" size="lg" className="rounded-xl shrink-0" asChild>
            <Link href="/features">View All Features →</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ num, Icon, title, description }) => (
            <GlareHover
              key={num}
              glareColor="rgba(255,255,255,0.20)"
              glareSize={240}
              className="rounded-2xl"
            >
              <div
                data-animate
                className="relative rounded-2xl p-7 overflow-hidden group cursor-default
                  bg-white dark:bg-neutral-800
                  border border-neutral-200 dark:border-neutral-700
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.06)]
                  dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_24px_-8px_rgba(0,0,0,0.5)]
                  hover:-translate-y-1
                  hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_12px_28px_-8px_rgba(15,23,42,0.12)]
                  dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_36px_-10px_rgba(0,0,0,0.6)]
                  transition-all duration-300 ease-out"
              >
                <span className="absolute -bottom-3 -right-1 text-[5.5rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">
                  {num}
                </span>

                <div className="relative z-10 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <Icon size="22" className="text-primary" />
                </div>

                <h3 className="relative z-10 text-[15px] font-bold text-foreground mb-2.5">{title}</h3>
                <p className="relative z-10 text-[13px] text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  )
}
