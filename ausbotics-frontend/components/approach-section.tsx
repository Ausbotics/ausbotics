"use client"

import { useEffect, useRef } from "react"
import { SearchNormal1, Brush2, Code, Send2 } from "iconsax-reactjs"
import { animateSection } from "@/lib/gsap-utils"
import { TextAnimate } from "@/components/ui/text-animate"
import { TextReveal } from "@/components/ui/text-reveal"
import { GlareHover } from "@/components/ui/glare-hover"

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
    <>
      {/* ── Scroll-triggered text reveal quote ──────────────────────────────── */}
      <div className="relative bg-neutral-50 dark:bg-neutral-950 border-t border-border overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-primary text-[11px] font-semibold tracking-[0.25em] mb-6 text-center">
            What drives us
          </p>
          <TextReveal
            text="We don't sell software. We deliver outcomes — fully built automation systems that run your business while you focus on growth."
            className="text-center"
            textClassName="text-[clamp(1.4rem,3vw,2.2rem)] font-bold text-foreground/90 leading-snug justify-center"
          />
        </div>
      </div>

      {/* ── Steps section ───────────────────────────────────────────────────── */}
      <section ref={sectionRef} className="relative py-20 sm:py-24 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-border" />

        {/* Blob accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div data-animate className="text-center mb-14 sm:mb-16">
            <p className="text-primary text-[11px] font-semibold tracking-[0.25em] mb-3">
              Our Approach
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-foreground leading-tight">
              <TextAnimate variant="blur-in" stagger={0.055}>
                How we go from idea to impact
              </TextAnimate>
            </h2>
          </div>

          <div className="relative">
            {/* Connector line — desktop */}
            <div className="hidden lg:block absolute top-[2.6rem] left-[calc(12.5%+2.5rem)] right-[calc(12.5%+2.5rem)] h-px bg-border pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {steps.map(({ num, Icon, title, description }) => (
                <GlareHover
                  key={num}
                  glareColor="rgba(255,255,255,0.22)"
                  glareSize={220}
                  className="rounded-2xl"
                >
                  <div
                    data-animate
                    className="h-full flex flex-col items-center text-center group
                      rounded-2xl p-5 sm:p-6
                      bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-sm
                      border border-neutral-200 dark:border-neutral-700
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.06)]
                      dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_24px_-8px_rgba(0,0,0,0.5)]
                      hover:-translate-y-1
                      hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_12px_28px_-8px_rgba(15,23,42,0.12)]
                      dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_36px_-10px_rgba(0,0,0,0.6)]
                      transition-all duration-300 ease-out"
                  >
                    <div
                      className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center mb-4
                        bg-primary/10 border border-primary/15
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
                    >
                      <Icon size={20} variant="Bulk" className="text-primary" />
                    </div>
                    <span className="text-[10px] font-bold text-primary/60 tracking-[0.2em] mb-1">
                      {num}
                    </span>
                    <h3 className="text-[15px] font-bold text-foreground mb-1.5">{title}</h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                </GlareHover>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
