"use client"

import { useEffect, useRef } from "react"
import { Routing, Buildings, Clock } from "iconsax-reactjs"
import { animateSection } from "@/lib/gsap-utils"
import { TextAnimate } from "@/components/ui/text-animate"
import { GlareHover } from "@/components/ui/glare-hover"

const reasons = [
  {
    num: "01",
    Icon: Routing,
    title: "End-to-End Delivery",
    body: "From discovery workshops through deployment and ongoing support — we handle everything, so you never have to stitch together vendors.",
  },
  {
    num: "02",
    Icon: Buildings,
    title: "Built for Service Businesses",
    body: "Our solutions are crafted specifically for trade, health, real estate, and professional services — not generic tools adapted after the fact.",
  },
  {
    num: "03",
    Icon: Clock,
    title: "Always-On Automation",
    body: "Your AI agents work 24/7, handling calls, bookings, and follow-ups even when your team is off the clock.",
  },
]

export function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) animateSection(sectionRef.current, "[data-animate]", 0.1)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-24 bg-neutral-950 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div data-animate className="text-center mb-12 sm:mb-14">
          <p className="text-primary text-[11px] font-semibold tracking-[0.25em] mb-3">
            Why AusBotics
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-foreground leading-tight">
            <TextAnimate variant="blur-in" stagger={0.07}>
              Built different.
            </TextAnimate>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
              Delivered better.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {reasons.map(({ num, Icon, title, body }) => (
            <GlareHover
              key={num}
              glareColor="rgba(255,255,255,0.20)"
              glareSize={280}
              className="rounded-2xl"
            >
              <div
                data-animate
                className="relative h-full rounded-2xl p-6 sm:p-7 overflow-hidden
                  bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-sm
                  border border-neutral-200 dark:border-neutral-700
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.06)]
                  dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_-8px_rgba(0,0,0,0.5)]
                  hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_12px_28px_-8px_rgba(15,23,42,0.12)]
                  dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_36px_-10px_rgba(0,0,0,0.6)]
                  transition-all duration-300 ease-out"
              >
                <span className="absolute -bottom-3 -right-1 text-[5rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">
                  {num}
                </span>
                <div className="relative z-10 w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                  <Icon size={20} variant="Bulk" className="text-primary" />
                </div>
                <h3 className="relative z-10 text-[15px] font-bold text-foreground mb-2.5">{title}</h3>
                <p className="relative z-10 text-[13px] text-muted-foreground leading-relaxed">{body}</p>
              </div>
            </GlareHover>
          ))}
        </div>

      </div>
    </section>
  )
}
