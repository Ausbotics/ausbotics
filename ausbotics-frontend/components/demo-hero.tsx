"use client"

import { useEffect, useRef } from "react"
import { PlayCircle, Calendar, Call } from "iconsax-reactjs"
import { gsap } from "@/lib/gsap-utils"

const benefits = [
  { icon: PlayCircle, text: "Live AI agent demonstration" },
  { icon: Calendar, text: "Personalized consultation" },
  { icon: Call, text: "Custom use case discussion" },
]

export function DemoHero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-demo='hero-item']", { opacity: 0, y: 28, filter: "blur(8px)" })
      const tl = gsap.timeline({ delay: 0.1 })
      gsap.utils.toArray<HTMLElement>("[data-demo='hero-item']").forEach((el, i) => {
        tl.to(el, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.65, ease: "power3.out" }, i === 0 ? 0 : "-=0.4")
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[58vh] bg-background overflow-hidden flex items-center justify-center"
    >
      {/* Ambient blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/12 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 rounded-full bg-blue-400/12 dark:bg-blue-500/18 blur-3xl -z-10 pointer-events-none" />

      {/* Top rule */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, oklch(0.60 0.15 242 / 0.20), transparent)" }}
      />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">

        <p data-demo="hero-item" className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-5">
          Free Demo Available
        </p>

        <h1
          data-demo="hero-item"
          className="font-extrabold leading-[1.06] tracking-tight mb-6 text-foreground"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
        >
          See Our{" "}
          <span className="bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
            AI Calling Agents
          </span>{" "}
          in Action
        </h1>

        <p data-demo="hero-item" className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
          Experience the power of AI-driven customer service firsthand. Book a personalized demo and discover
          how our intelligent calling agents can transform your business communication.
        </p>

        <div data-demo="hero-item" className="flex flex-col sm:flex-row gap-5 justify-center">
          {benefits.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 bg-white/60 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/8 rounded-2xl px-5 py-3 shadow-sm backdrop-blur-sm">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                <Icon size={18} variant="Bulk" className="text-primary" />
              </div>
              <span className="text-[13px] font-medium text-foreground">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
