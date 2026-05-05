"use client"

import { useEffect, useRef } from "react"
import { Setting2, Health, Buildings2, Briefcase } from "iconsax-reactjs"
import { animateSection } from "@/lib/gsap-utils"

const segments = [
  {
    Icon: Setting2,
    name: "Trade & Home Services",
    value: "Plumbers, electricians, HVAC, cleaners — automate bookings and follow-ups.",
  },
  {
    Icon: Health,
    name: "Health & Wellness",
    value: "Clinics, physios, and gyms that need 24/7 appointment handling.",
  },
  {
    Icon: Buildings2,
    name: "Real Estate",
    value: "Agencies that never miss an inquiry, inspection, or lead follow-up.",
  },
  {
    Icon: Briefcase,
    name: "Professional Services",
    value: "Law firms, accountants, and consultants streamlining intake and admin.",
  },
]

export function WhoWeServe() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) animateSection(sectionRef.current, "[data-animate]", 0.1)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 bg-background dark:bg-neutral-900 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        <div data-animate className="text-center mb-14">
          <p className="text-primary text-[11px] font-semibold uppercase tracking-[0.25em] mb-3">
            Who We Serve
          </p>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-foreground leading-tight">
            Solutions for every service business
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {segments.map(({ Icon, name, value }) => (
            <div
              key={name}
              data-animate
              className="rounded-2xl p-6
                bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-sm
                border border-neutral-200 dark:border-neutral-700
                shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.06)]
                dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_-8px_rgba(0,0,0,0.5)]
                hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_12px_28px_-8px_rgba(15,23,42,0.12)]
                dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_36px_-10px_rgba(0,0,0,0.6)]
                transition-all duration-300 ease-out"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                <Icon size={20} variant="Bulk" className="text-primary" />
              </div>
              <h3 className="text-[14px] font-bold text-foreground mb-1.5">{name}</h3>
              <p className="text-[12px] text-muted-foreground leading-relaxed">{value}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
