"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "@/lib/gsap-utils"
import { animateSection } from "@/lib/gsap-utils"
import {
  ArrowRight,
  Flash,
  Clock,
  Global,
  People,
} from "iconsax-reactjs"

const pillars = [
  {
    icon: Flash,
    title: "Built for Speed",
    body: "Live in days, not months. We move fast without cutting corners on quality.",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    icon: Clock,
    title: "Always On",
    body: "AI agents that handle calls, bookings, and workflows around the clock — no breaks.",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    icon: Global,
    title: "Any Industry",
    body: "Trade services, health clinics, real estate, professional firms — we've done it.",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    icon: People,
    title: "Team First",
    body: "Free your people from repetitive tasks so they focus on high-value work.",
    accent: "from-blue-500 to-sky-500",
  },
]

const HEADING_PREFIX = "Intelligent Automation for "
const HEADING_GRADIENT = "Service Businesses"

export function AboutStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefixRef = useRef<HTMLSpanElement>(null)
  const gradientRef = useRef<HTMLSpanElement>(null)
  const caretRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      animateSection(sectionRef.current!, "[data-animate]", 0.08)

      const prefix = prefixRef.current
      const gradient = gradientRef.current
      const caret = caretRef.current
      if (!prefix || !gradient || !caret) return

      prefix.textContent = ""
      gradient.textContent = ""
      gsap.set(caret, { opacity: 1 })

      const blink = gsap.to(caret, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)",
      })

      const prefixChars = HEADING_PREFIX.split("")
      const gradientChars = HEADING_GRADIENT.split("")
      const prefixObj = { i: 0 }
      const gradientObj = { i: 0 }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      })

      tl.to(prefixObj, {
        i: prefixChars.length,
        duration: prefixChars.length * 0.035,
        ease: "none",
        onUpdate: () => {
          prefix.textContent = prefixChars
            .slice(0, Math.round(prefixObj.i))
            .join("")
        },
      })
        .to(
          gradientObj,
          {
            i: gradientChars.length,
            duration: gradientChars.length * 0.06,
            ease: "none",
            onUpdate: () => {
              gradient.textContent = gradientChars
                .slice(0, Math.round(gradientObj.i))
                .join("")
            },
          },
          ">+0.15"
        )
        .to(caret, { opacity: 0, duration: 0.4, delay: 0.6 }, ">")
        .add(() => blink.kill())
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-background dark:bg-neutral-950 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[400px] rounded-full bg-blue-500/5 dark:bg-blue-500/[0.08] blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-28 items-start">

          {/* Left — text */}
          <div className="lg:sticky lg:top-32">
            <p
              data-animate
              className="text-primary text-[10px] font-semibold uppercase tracking-[0.28em] mb-5"
            >
              About AusBotics
            </p>

            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-foreground leading-[1.12] mb-7 min-h-[1.12em]">
              <span ref={prefixRef} aria-hidden />
              <span
                ref={gradientRef}
                aria-hidden
                className="bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent"
              />
              <span
                ref={caretRef}
                aria-hidden
                className="inline-block w-[3px] h-[0.95em] -mb-[0.12em] ml-1 bg-blue-500 dark:bg-blue-400 align-middle"
              />
              <span className="sr-only">
                {HEADING_PREFIX}
                {HEADING_GRADIENT}
              </span>
            </h2>

            <p
              data-animate
              className="text-[15px] text-muted-foreground leading-[1.75] mb-5"
            >
              AusBotics builds AI-powered calling agents, workflow automations, and live business
              dashboards that work around the clock — so your team can focus on what matters most.
            </p>
            <p
              data-animate
              className="text-[15px] text-muted-foreground leading-[1.75] mb-10"
            >
              From trade services and health clinics to real estate agencies and professional firms,
              we deliver tailored solutions that integrate cleanly with the tools you already use.
            </p>

            <div data-animate>
              <Link
                href="/how-it-works"
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-150"
              >
                Learn how it works
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Right — pillar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, title, body, accent }) => (
              <div
                key={title}
                data-animate
                className="group relative overflow-hidden rounded-2xl p-6 cursor-default
                  bg-white dark:bg-neutral-900/70
                  border border-neutral-200/80 dark:border-neutral-800
                  shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.30)]
                  hover:-translate-y-1
                  hover:border-blue-300/70 dark:hover:border-blue-500/40
                  hover:shadow-[0_18px_40px_-12px_rgba(59,130,246,0.25)]
                  dark:hover:shadow-[0_18px_40px_-12px_rgba(59,130,246,0.30)]
                  transition-all duration-300 ease-out"
              >
                {/* Top accent line — reveals on hover */}
                <span
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Soft radial wash on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-blue-500/0 group-hover:bg-blue-500/[0.08] blur-2xl transition-colors duration-500"
                />

                {/* Icon — duotone Bulk variant */}
                <div
                  className={`relative mb-4 w-11 h-11 rounded-xl flex items-center justify-center
                    bg-gradient-to-br ${accent}
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_12px_-4px_rgba(59,130,246,0.35)]
                    group-hover:scale-105
                    transition-transform duration-300 ease-out`}
                >
                  <Icon size={22} color="#ffffff" variant="Bulk" />
                </div>

                <h3 className="relative text-[15px] font-semibold text-foreground mb-1.5 leading-snug">
                  {title}
                </h3>
                <p className="relative text-[13px] text-muted-foreground leading-relaxed">
                  {body}
                </p>

                {/* Bottom-right arrow that slides in */}
                <span
                  aria-hidden
                  className="absolute bottom-5 right-5 text-blue-500 dark:text-blue-400
                    opacity-0 -translate-x-2
                    group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-300"
                >
                  <ArrowRight size={16} />
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
