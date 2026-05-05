"use client"

import { useEffect, useRef } from "react"
import { Star1 } from "iconsax-reactjs"
import { animateSection } from "@/lib/gsap-utils"

const testimonials = [
  {
    quote:
      "AusBotics completely transformed how we handle enquiries. Our AI agent books jobs around the clock — we wake up to a full calendar every morning. Best investment we've made.",
    name: "Joanne M.",
    role: "Owner",
    company: "Additive Free Plumbing Co.",
  },
  {
    quote:
      "The team went above and beyond. The automation they built reduced our no-show rate by over 60%. Our receptionist can now focus on patients instead of phone tag.",
    name: "Shona T.",
    role: "Practice Manager",
    company: "Shona Wellness Clinic",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) animateSection(sectionRef.current, "[data-animate]", 0.12)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        <div data-animate className="text-center mb-14">
          <p className="text-primary text-[11px] font-semibold uppercase tracking-[0.25em] mb-3">
            What Clients Say
          </p>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-foreground leading-tight">
            Real results, real businesses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map(({ quote, name, role, company }) => (
            <div
              key={name}
              data-animate
              className="rounded-2xl p-8
                bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-sm
                border border-neutral-200 dark:border-neutral-700
                shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.06)]
                dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_-8px_rgba(0,0,0,0.5)]
                hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star1 key={i} size={15} variant="Bulk" className="text-primary" />
                ))}
              </div>

              <p className="text-[15px] text-foreground leading-relaxed italic mb-6">
                &ldquo;{quote}&rdquo;
              </p>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex-shrink-0" />
                <div>
                  <div className="text-[13px] font-semibold text-foreground">{name}</div>
                  <div className="text-[12px] text-muted-foreground">
                    {role}, {company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
