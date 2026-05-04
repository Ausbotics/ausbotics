"use client"

import { useEffect, useRef } from "react"
import { animateSection } from "@/lib/gsap-utils"

const partners = [
  "n8n", "Make", "OpenAI", "Anthropic", "Google", "Supabase", "Twilio", "Zapier",
]

export function PartnersStrip() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) animateSection(sectionRef.current, "[data-animate]", 0.07)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-16 bg-background dark:bg-neutral-900 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div data-animate className="text-center mb-10">
          <p className="text-primary text-[11px] font-semibold uppercase tracking-[0.25em] mb-2">
            Trusted Integrations
          </p>
          <h2 className="text-base font-medium text-muted-foreground">
            Powered by industry-leading platforms
          </h2>
        </div>

        <div data-animate className="flex flex-wrap justify-center gap-3">
          {partners.map((name) => (
            <div
              key={name}
              className="bg-neutral-100 dark:bg-neutral-800
                border border-neutral-200 dark:border-neutral-700
                rounded-xl px-5 py-2.5
                text-sm font-semibold text-muted-foreground
                shadow-[0_2px_6px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_6px_rgba(0,0,0,0.2)]
                hover:-translate-y-0.5 hover:text-foreground
                transition-all duration-200 cursor-default select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
