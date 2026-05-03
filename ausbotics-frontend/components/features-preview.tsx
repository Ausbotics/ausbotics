"use client"

import { useEffect, useRef } from "react"
import { Flash, ShieldTick, Global, Headphone } from "iconsax-reactjs"
import { Button } from "@/components/ui/button"
import { gsap, animateSection } from "@/lib/gsap-utils"
import Link from "next/link"

const features = [
  {
    num: "01",
    Icon: Flash,
    title: "From Idea to Impact",
    description:
      "Share your business problem. We transform it into a tailored AI automation designed, built, and ready to deliver real results.",
    accent: "bg-ink",          // 30% dark section card
  },
  {
    num: "02",
    Icon: ShieldTick,
    title: "Your Workflow, Your Way",
    description:
      "Every solution is crafted to match your exact work processes — no cookie-cutter templates, no bloated tools.",
    accent: "bg-primary",      // 10% accent card
  },
  {
    num: "03",
    Icon: Global,
    title: "Built for Every Business",
    description:
      "No matter your size, our automations are designed to grow with you — from early-stage to enterprise.",
    accent: "bg-ink",
  },
  {
    num: "04",
    Icon: Headphone,
    title: "Custom Voice Options",
    description:
      "Choose from professional voice options that perfectly match your brand identity and communication style.",
    accent: "bg-primary",
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
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Faint section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Section header */}
        <div data-animate className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-[0.25em] mb-3">
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

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ num, Icon, title, description, accent }) => (
            <div
              key={num}
              data-animate
              className={`relative rounded-2xl p-7 overflow-hidden group cursor-default transition-transform duration-300 hover:-translate-y-1 ${accent}`}
            >
              {/* Faded number watermark */}
              <span className="absolute -bottom-3 -right-1 text-[5.5rem] font-black text-white/8 leading-none select-none pointer-events-none">
                {num}
              </span>

              {/* Icon */}
              <div className="relative z-10 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Icon size="22" color="white" />
              </div>

              {/* Text */}
              <h3 className="relative z-10 text-[15px] font-bold text-white mb-2.5">{title}</h3>
              <p className="relative z-10 text-[13px] text-white/65 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
