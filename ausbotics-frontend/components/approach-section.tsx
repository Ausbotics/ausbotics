"use client"

import { useEffect, useRef } from "react"
import { SearchNormal1, Brush2, Code, Send2 } from "iconsax-reactjs"
import { animateSection } from "@/lib/gsap-utils"

const steps = [
  {
    num: "01",
    Icon: SearchNormal1,
    title: "Discovery",
    description: "Workshops and consultations to map your business challenges and automation goals.",
  },
  {
    num: "02",
    Icon: Brush2,
    title: "Design",
    description: "Blueprints, conversation flows, and interactive prototypes reviewed with your team.",
  },
  {
    num: "03",
    Icon: Code,
    title: "Develop",
    description: "Agile, feedback-driven delivery — we build, test, and iterate until it's right.",
  },
  {
    num: "04",
    Icon: Send2,
    title: "Deploy",
    description: "Full launch with team training, ongoing optimisation, and dedicated support.",
  },
]

export function ApproachSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) animateSection(sectionRef.current, "[data-animate]", 0.1)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        <div data-animate className="text-center mb-16">
          <p className="text-primary text-[11px] font-semibold uppercase tracking-[0.25em] mb-3">
            Our Approach
          </p>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-foreground leading-tight">
            How we go from idea to impact
          </h2>
        </div>

        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-[2.6rem] left-[calc(12.5%+2.5rem)] right-[calc(12.5%+2.5rem)] h-px bg-border pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ num, Icon, title, description }) => (
              <div
                key={num}
                data-animate
                className="flex flex-col items-center text-center group"
              >
                {/* Icon chip */}
                <div
                  className="relative z-10 w-[3.25rem] h-[3.25rem] rounded-2xl flex items-center justify-center mb-4
                    bg-neutral-100 dark:bg-neutral-800
                    border border-neutral-200 dark:border-neutral-700
                    shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)]
                    group-hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <Icon size="20" className="text-primary" />
                </div>

                <span className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.2em] mb-1">
                  {num}
                </span>
                <h3 className="text-[15px] font-bold text-foreground mb-1.5">{title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
