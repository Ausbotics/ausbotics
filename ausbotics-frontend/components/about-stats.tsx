"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Flash, Clock, Global, People } from "iconsax-reactjs"
import { GlareHover } from "@/components/ui/glare-hover"
import { gsap, ScrollTrigger } from "@/lib/gsap-utils"

const pillars = [
  {
    icon: Flash,
    title: "Built for speed",
    body: "Launch quickly with focused execution and practical systems that do the job well.",
  },
  {
    icon: Clock,
    title: "Always on",
    body: "Automations that keep working after hours, so enquiries and workflows do not wait.",
  },
  {
    icon: Global,
    title: "Works across industries",
    body: "Useful for trade services, clinics, agencies, and firms that need reliable digital support.",
  },
  {
    icon: People,
    title: "Built around your team",
    body: "Reduce repetitive work so your people can spend more time on the work that matters.",
  },
]

export function AboutStats() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      // Left column: slide in from the left with blur
      gsap.fromTo(
        "[data-about='left']",
        { opacity: 0, x: -64, filter: "blur(10px)" },
        {
          opacity: 1, x: 0, filter: "blur(0px)",
          duration: 1.05, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      )
      // Cards: scale-pop in with stagger
      gsap.fromTo(
        "[data-about='card']",
        { opacity: 0, scale: 0.86, y: 28, filter: "blur(6px)" },
        {
          opacity: 1, scale: 1, y: 0, filter: "blur(0px)",
          duration: 0.72, stagger: 0.11, ease: "back.out(1.6)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 76%", once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-neutral-50 dark:bg-neutral-950 py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-500/6 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
          <div data-about="left" className="lg:sticky lg:top-28">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
              About AusBotics
            </p>

            <h2 className="max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em] text-foreground leading-[1.08]">
              Intelligent automation for service businesses.
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-8 text-muted-foreground">
              AusBotics builds AI calling agents, workflow automations, and live dashboards that
              help service teams respond faster, stay organised, and run more smoothly.
            </p>

            <p className="mt-4 max-w-xl text-[15px] leading-8 text-muted-foreground">
              From trade services and health clinics to real estate and professional firms, we
              build practical systems that fit into the tools you already use.
            </p>

            <div className="mt-8">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Learn how it works
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body }) => (
              <GlareHover
                key={title}
                glareColor="rgba(255,255,255,0.10)"
                glareSize={240}
                className="rounded-2xl"
              >
                <article
                  data-about="card"
                  className="group relative overflow-hidden rounded-2xl
                    bg-neutral-100/80 dark:bg-white/[0.03] backdrop-blur-sm
                    border border-neutral-200 dark:border-white/8
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.06)]
                    dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_-8px_rgba(0,0,0,0.5)]
                    p-6 transition-all duration-300 hover:-translate-y-1
                    hover:border-primary/20 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_12px_28px_-8px_rgba(15,23,42,0.12)]
                    dark:hover:bg-white/[0.05] dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_36px_-10px_rgba(0,0,0,0.6)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                    <Icon size={20} variant="Bulk" className="text-primary" />
                  </div>

                  <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">
                    {title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-7 text-muted-foreground">{body}</p>
                </article>
              </GlareHover>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}