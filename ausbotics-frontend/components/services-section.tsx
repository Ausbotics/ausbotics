"use client"

import { useEffect, useRef } from "react"
import { Call, Setting4, Chart, Monitor, Link21, Teacher } from "iconsax-reactjs"
import { animateSection } from "@/lib/gsap-utils"
import Link from "next/link"
import { TextAnimate } from "@/components/ui/text-animate"
import { GlareHover } from "@/components/ui/glare-hover"

const services = [
  {
    Icon: Call,
    title: "AI Calling Agents",
    description: "Intelligent voice agents that handle inbound and outbound calls 24/7.",
  },
  {
    Icon: Setting4,
    title: "Workflow Automation",
    description: "End-to-end automation of repetitive tasks across your entire business.",
  },
  {
    Icon: Chart,
    title: "Business Dashboards",
    description: "Live operations dashboards that surface the metrics that matter most.",
  },
  {
    Icon: Monitor,
    title: "Custom Web Platforms",
    description: "Fully custom websites and client portals built to your exact specifications.",
  },
  {
    Icon: Link21,
    title: "CRM Integration",
    description: "Seamless connections to your existing CRM, scheduling, and billing tools.",
  },
  {
    Icon: Teacher,
    title: "Training & Support",
    description: "Ongoing agent refinement, team training, and dedicated support throughout.",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) animateSection(sectionRef.current, "[data-animate]", 0.08)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-24 bg-neutral-950 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div data-animate className="mb-12 sm:mb-14">
          <p className="text-primary text-[11px] font-semibold tracking-[0.25em] mb-3">
            What We Build
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-foreground leading-tight">
            <TextAnimate variant="blur-in" stagger={0.055}>
              Professional AI Solutions for Every Business
            </TextAnimate>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map(({ Icon, title, description }) => (
            <GlareHover
              key={title}
              glareColor="rgba(255,255,255,0.22)"
              glareSize={260}
              className="rounded-2xl"
            >
              <div
                data-animate
                className="h-full rounded-2xl p-6 sm:p-7
                  bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-sm
                  border border-neutral-200 dark:border-neutral-700
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.06)]
                  dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_-8px_rgba(0,0,0,0.5)]
                  hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_12px_28px_-8px_rgba(15,23,42,0.12)]
                  dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_36px_-10px_rgba(0,0,0,0.6)]
                  transition-all duration-300 ease-out"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                  <Icon size={20} variant="Bulk" className="text-primary" />
                </div>
                <h3 className="text-[15px] font-bold text-foreground mb-2">{title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">{description}</p>
                <Link
                  href="/features"
                  className="text-[13px] font-semibold text-primary hover:underline underline-offset-2"
                >
                  Learn more →
                </Link>
              </div>
            </GlareHover>
          ))}
        </div>

      </div>
    </section>
  )
}
