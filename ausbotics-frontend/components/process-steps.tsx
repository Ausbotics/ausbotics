"use client"

import { useEffect, useRef } from "react"
import { DocumentUpload, Setting4, CallCalling } from "iconsax-reactjs"
import { animateSection } from "@/lib/gsap-utils"
import { GlareHover } from "@/components/ui/glare-hover"
import { TextAnimate } from "@/components/ui/text-animate"

const steps = [
  {
    number: "01",
    Icon: DocumentUpload,
    title: "Book a Strategy Session",
    description:
      "Present your business challenge and we'll craft a tailored AI agent designed to fit your needs — defining the voice, tone, and goals that ensure meaningful customer outcomes.",
    details: [
      "Share your problem for a customised AI solution",
      "Define your brand's voice and communication style",
      "Set goals and desired outcomes for your AI agent",
    ],
  },
  {
    number: "02",
    Icon: Setting4,
    title: "Ongoing Training & Refinement",
    description:
      "Your AI agent is trained on your specific business needs, then continuously updated to incorporate improvements, changes, or new requirements as you scale.",
    details: [
      "AI learns your product catalogue and services",
      "Customises responses to match your brand",
      "Integrates with your existing CRM system",
      "Tests and validates all conversation flows",
    ],
  },
  {
    number: "03",
    Icon: CallCalling,
    title: "Personalised Dashboard",
    description:
      "Access a dedicated dashboard to monitor customer interactions and track outcomes — while your AI agent handles the heavy lifting of calls and messages 24/7.",
    details: [
      "Handles inbound and outbound calls around the clock",
      "Manages multiple conversations simultaneously",
      "Escalates complex issues to your human agents",
      "Maintains full conversation context and history",
    ],
  },
]

export function ProcessSteps() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) animateSection(sectionRef.current, "[data-animate]", 0.1)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/8 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-blue-400/8 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div data-animate className="text-center mb-14 sm:mb-16">
          <p className="text-primary text-[11px] font-semibold tracking-[0.25em] mb-3 uppercase">
            How It Works
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-foreground leading-tight mb-4">
            <TextAnimate variant="blur-in" stagger={0.055}>
              Simple 3-Step Process
            </TextAnimate>
          </h2>
          <p className="text-[14px] text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Get your AI calling agent up and running quickly. Our streamlined process makes setup
            effortless and results immediate.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {steps.map(({ number, Icon, title, description, details }, index) => (
            <GlareHover
              key={number}
              glareColor="rgba(255,255,255,0.18)"
              glareSize={320}
              className="rounded-2xl"
            >
              <div
                data-animate
                className="relative rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10 items-start
                  bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-sm
                  border border-neutral-200 dark:border-neutral-700
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.06)]
                  dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_-8px_rgba(0,0,0,0.5)]
                  hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_12px_28px_-8px_rgba(15,23,42,0.12)]
                  dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_36px_-10px_rgba(0,0,0,0.6)]
                  transition-all duration-300 ease-out overflow-hidden"
              >
                <span className="absolute -bottom-2 -right-1 text-[7rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">
                  {number}
                </span>

                <div className="flex shrink-0 items-center gap-4 lg:flex-col lg:items-center lg:gap-3 lg:w-20">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                    <Icon size={22} variant="Bulk" className="text-primary" />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest text-primary/60 uppercase">{number}</span>
                </div>

                <div className="flex-1 relative z-10">
                  <h3 className="text-[16px] font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">{description}</p>
                  <ul className="space-y-2">
                    {details.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-[12px] text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -bottom-5 left-14 w-px h-5 bg-border z-20" />
                )}
              </div>
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  )
}
