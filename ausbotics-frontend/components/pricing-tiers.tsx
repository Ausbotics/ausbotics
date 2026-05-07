"use client"

import { useEffect, useRef } from "react"
import { TickCircle, Star1 } from "iconsax-reactjs"
import Link from "next/link"
import { animateSection } from "@/lib/gsap-utils"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tiers.map(({ name, description, priceRange, priceSuffix, features, popular, cta, accentBlob }) => (
            <div
              key={name}
              data-animate
              className={`relative flex flex-col rounded-2xl p-9 sm:p-11 overflow-hidden min-h-[540px]
                bg-white dark:bg-neutral-900
                border ${popular ? "border-primary/30" : "border-neutral-200 dark:border-neutral-800"}
                shadow-sm hover:shadow-md
                hover:-translate-y-1
                transition-all duration-300 ease-out`}
            >
              {/* Subtle top accent */}
              <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${accentBlob} to-transparent rounded-t-2xl pointer-events-none`} />

              {/* Popular badge */}
              {popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[10px] font-bold tracking-wide uppercase bg-primary text-white shadow-sm">
                  <Star1 size={11} variant="Bold" />
                  Most Popular
                </div>
              )}

              <div className="relative z-10 text-center mb-8">
                <h3 className="text-[18px] font-bold text-foreground mb-2">{name}</h3>
                <p className="text-[13px] text-muted-foreground mb-6 leading-relaxed">{description}</p>

                <div className="text-[2.4rem] font-extrabold text-primary leading-none mb-1.5">{priceRange}</div>
                <div className="text-[12px] text-muted-foreground">{priceSuffix}</div>
              </div>

              <div className="h-px bg-border mb-7" />

              <div className="relative z-10 flex-1 space-y-4 mb-9">
                <p className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground mb-4">
                  What&apos;s included
                </p>
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3 text-[13px] text-muted-foreground leading-relaxed">
                    <div className="w-4 h-4 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                      <TickCircle size={11} variant="Bold" className="text-primary" />
                    </div>
                    {f}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="relative z-10 space-y-2 mt-auto">
                <Link
                  href="/contact"
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-[13px] font-bold transition-all duration-150 ${
                    popular
                      ? "text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-sm active:scale-[0.98]"
                      : "text-foreground bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 active:scale-[0.98]"
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
          ))}
        </div>
      </div>
    </section>
  )
}
