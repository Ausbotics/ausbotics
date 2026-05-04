"use client"

import { useEffect, useRef } from "react"
import { animateSection } from "@/lib/gsap-utils"
import Link from "next/link"

const articles = [
  {
    accent: "bg-blue-500/10 dark:bg-blue-500/15",
    date: "May 2026",
    title: "AI Automation for Trade Businesses in Australia",
    excerpt:
      "How plumbers, electricians, and home service providers are using AI calling agents to win more jobs without lifting a finger.",
    href: "/features",
  },
  {
    accent: "bg-primary/10 dark:bg-primary/15",
    date: "Apr 2026",
    title: "How AI Calling Agents Reduce No-Shows by 60%",
    excerpt:
      "Automated reminders, rescheduling flows, and instant follow-ups are changing the game for health and wellness clinics.",
    href: "/features",
  },
  {
    accent: "bg-blue-400/10 dark:bg-blue-400/15",
    date: "Apr 2026",
    title: "Building a 24/7 Business with Automation",
    excerpt:
      "A practical guide to deploying AI agents that handle enquiries, bookings, and lead nurturing while your team sleeps.",
    href: "/features",
  },
]

export function InsightsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) animateSection(sectionRef.current, "[data-animate]", 0.1)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 bg-background dark:bg-neutral-900 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        <div data-animate className="mb-14">
          <p className="text-primary text-[11px] font-semibold uppercase tracking-[0.25em] mb-3">
            Latest Insights
          </p>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-foreground leading-tight">
            Stay ahead with AI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles.map(({ accent, date, title, excerpt, href }) => (
            <article
              key={title}
              data-animate
              className="group rounded-2xl overflow-hidden
                bg-neutral-100 dark:bg-neutral-800
                border border-neutral-200 dark:border-neutral-700
                shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.25)]
                hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]
                transition-all duration-200"
            >
              <div className={`${accent} h-40 w-full`} />

              <div className="p-6">
                <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                  {date}
                </span>
                <h3 className="text-[14px] font-bold text-foreground mt-2 mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">{excerpt}</p>
                <Link
                  href={href}
                  className="text-[13px] font-semibold text-primary hover:underline underline-offset-2"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
