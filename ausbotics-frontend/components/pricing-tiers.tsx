"use client"

import { useEffect, useRef } from "react"
import { TickCircle, Star1 } from "iconsax-reactjs"
import Link from "next/link"
import { animateSection } from "@/lib/gsap-utils"
import { GlareHover } from "@/components/ui/glare-hover"
import { TextAnimate } from "@/components/ui/text-animate"

const tiers = [
  {
    name: "Subscription Model",
    description: "Continuous access to all product suites with ongoing support",
    priceRange: "$500 – $1,500",
    priceSuffix: "per month per client",
    features: [
      "Continuous access to all product suites",
      "Background management and ongoing automation updates",
      "System monitoring and continuous performance optimisation",
      "Dedicated operational support",
    ],
    popular: true,
    cta: "Get Started",
    accentBlob: "bg-blue-500/10",
  },
  {
    name: "One-Time Deployment",
    description: "Fully built systems delivered with a one-time setup cost",
    priceRange: "$2,000 – $8,000",
    priceSuffix: "one-time setup",
    features: [
      "Fully built, ready-to-use systems delivered end-to-end",
      "Complete initial integration across automation, dashboards, and web",
      "Absolute ownership of the foundational structure",
      "On-demand support available as required",
    ],
    popular: false,
    cta: "Talk to Sales",
    accentBlob: "bg-indigo-500/8",
  },
]

export function PricingTiers() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) animateSection(sectionRef.current, "[data-animate]", 0.1)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      {/* Subtle blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-primary/8 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-blue-400/8 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div data-animate className="text-center mb-12 sm:mb-14">
          <p className="text-primary text-[11px] font-semibold tracking-[0.25em] mb-3 uppercase">
            Pricing
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-foreground leading-tight mb-4">
            <TextAnimate variant="blur-in" stagger={0.055}>
              Choose Your Engagement Model
            </TextAnimate>
          </h2>
          <p className="text-[14px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Two flexible models designed for different business needs — recurring subscription for managed
            automation, or one-time deployment for full ownership.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {tiers.map(({ name, description, priceRange, priceSuffix, features, popular, cta, accentBlob }) => (
            <GlareHover
              key={name}
              glareColor="rgba(255,255,255,0.22)"
              glareSize={300}
              className="rounded-2xl"
            >
              <div
                data-animate
                className={`relative h-full rounded-2xl p-7 sm:p-8 flex flex-col overflow-hidden
                  bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-sm
                  border ${popular ? "border-primary/40" : "border-neutral-200 dark:border-neutral-700"}
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.06)]
                  dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_-8px_rgba(0,0,0,0.5)]
                  hover:-translate-y-1.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_12px_28px_-8px_rgba(15,23,42,0.12)]
                  dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_36px_-10px_rgba(0,0,0,0.6)]
                  transition-all duration-300 ease-out`}
              >
                {/* Accent blob */}
                <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${accentBlob} to-transparent rounded-t-2xl pointer-events-none`} />

                {/* Popular badge */}
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold tracking-wide uppercase bg-primary text-white shadow-[0_4px_12px_rgba(59,130,246,0.5)]">
                    <Star1 size={12} variant="Bold" />
                    Most Popular
                  </div>
                )}

                <div className="relative z-10 text-center mb-7">
                  <h3 className="text-[17px] font-bold text-foreground mb-1.5">{name}</h3>
                  <p className="text-[12px] text-muted-foreground mb-5">{description}</p>

                  <div className="text-[2.2rem] font-extrabold text-primary leading-none mb-1">{priceRange}</div>
                  <div className="text-[11px] text-muted-foreground">{priceSuffix}</div>
                </div>

                <div className="h-px bg-border mb-6" />

                <div className="relative z-10 flex-1 space-y-3 mb-7">
                  <p className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground mb-3">
                    What's included
                  </p>
                  {features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-[12px] text-muted-foreground">
                      <div className="w-4 h-4 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <TickCircle size={12} variant="Bold" className="text-primary" />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="relative z-10 space-y-2 mt-auto">
                  <Link
                    href="/contact"
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-[13px] font-bold transition-all duration-100 ${
                      popular
                        ? "text-white bg-gradient-to-b from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 shadow-[0_3px_0_#1d4ed8,0_8px_20px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.40)] hover:translate-y-[1px] hover:shadow-[0_2px_0_#1d4ed8,0_4px_12px_rgba(59,130,246,0.25),inset_0_1px_0_rgba(255,255,255,0.40)] active:translate-y-[2px]"
                        : "text-foreground bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                    }`}
                  >
                    {cta}
                  </Link>
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center text-[11px] font-medium text-muted-foreground hover:text-primary transition-colors py-1.5"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  )
}
