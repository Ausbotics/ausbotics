"use client"

import { useEffect, useRef } from "react"
import { Setting4, Chart, Monitor, ArrowRight } from "iconsax-reactjs"
import { animateSection } from "@/lib/gsap-utils"
import { TextAnimate } from "@/components/ui/text-animate"
import { GlareHover } from "@/components/ui/glare-hover"
import Link from "next/link"

const services = [
  {
    Icon: Setting4,
    badge: "AI-Powered",
    title: "Automation",
    description:
      "Deploy intelligent agents that take repetitive, time-consuming tasks off your team's plate — running quietly 24/7 so your people can focus on what drives growth.",
    highlights: [
      "24/7 automated workflows",
      "Data entry & smart follow-ups",
      "Multi-step process automation",
      "Seamless tool integrations",
    ],
    href: "/how-it-works",
    accentFrom: "from-blue-500/10",
    accentTo: "to-indigo-500/5",
  },
  {
    Icon: Chart,
    badge: "Real-Time",
    title: "Dashboards",
    description:
      "Custom-built dashboards designed for businesses of every size. Track customers, monitor key metrics, and turn raw data into clear, actionable insights instantly.",
    highlights: [
      "Live metrics & KPI tracking",
      "Built-in CRM features",
      "Customer journey visibility",
      "Exportable reports",
    ],
    href: "/pricing",
    accentFrom: "from-emerald-500/10",
    accentTo: "to-teal-500/5",
  },
  {
    Icon: Monitor,
    badge: "End-to-End",
    title: "Web Development",
    description:
      "From the first wireframe to deployment and ongoing maintenance — we craft fast, responsive, and scalable websites that look stunning and grow with your business.",
    highlights: [
      "Design & wireframe to launch",
      "Responsive & mobile-first",
      "Performance optimised",
      "Ongoing maintenance included",
    ],
    href: "/contact",
    accentFrom: "from-violet-500/10",
    accentTo: "to-purple-500/5",
  },
]

const metrics = [
  { value: "3×", label: "Faster response times" },
  { value: "24/7", label: "Always-on operation" },
  { value: "100%", label: "Custom to your business" },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) animateSection(sectionRef.current, "[data-animate]", 0.08)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 bg-background overflow-hidden">
      {/* Blob backgrounds matching home hero */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/12 blur-3xl -z-10 pointer-events-none animate-[blobFloat1_9s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 rounded-full bg-blue-400/12 dark:bg-blue-500/15 blur-3xl -z-10 pointer-events-none animate-[blobFloat2_11s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[24rem] rounded-full bg-indigo-300/8 dark:bg-indigo-500/8 blur-3xl -z-10 pointer-events-none" />

      {/* Top/bottom rules */}
      <div className="absolute inset-x-0 top-0 h-px bg-border" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section header */}
        <div data-animate className="mb-4">
          <p className="text-primary text-[11px] font-semibold tracking-[0.25em] mb-3 uppercase">
            What We Build
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-foreground leading-tight max-w-xl">
              <TextAnimate variant="blur-in" stagger={0.055}>
                Smart Solutions That Power Your Business
              </TextAnimate>
            </h2>
            <p className="text-[14px] text-muted-foreground leading-relaxed max-w-sm lg:text-right">
              Three integrated pillars — built, deployed, and maintained by AusBotics end-to-end.
            </p>
          </div>
        </div>

        {/* Metrics strip */}
        <div data-animate className="flex flex-wrap gap-px bg-border rounded-2xl overflow-hidden mb-10 sm:mb-12 border border-border">
          {metrics.map(({ value, label }) => (
            <div
              key={label}
              className="flex-1 min-w-[120px] flex flex-col items-center justify-center gap-0.5 py-4 px-6 bg-background"
            >
              <span className="text-2xl font-extrabold text-primary tabular-nums">{value}</span>
              <span className="text-[11px] text-muted-foreground font-medium text-center">{label}</span>
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map(({ Icon, badge, title, description, highlights, href, accentFrom, accentTo }) => (
            <GlareHover
              key={title}
              glareColor="rgba(255,255,255,0.22)"
              glareSize={300}
              className="rounded-2xl"
            >
              <div
                data-animate
                className="group h-full rounded-2xl p-6 sm:p-7 flex flex-col
                  bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-sm
                  border border-neutral-200 dark:border-neutral-700
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.06)]
                  dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_-8px_rgba(0,0,0,0.5)]
                  hover:-translate-y-1.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_12px_28px_-8px_rgba(15,23,42,0.12)]
                  dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_36px_-10px_rgba(0,0,0,0.6)]
                  transition-all duration-300 ease-out overflow-hidden"
              >
                {/* Subtle accent gradient top */}
                <div className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${accentFrom} ${accentTo} opacity-60 rounded-t-2xl pointer-events-none`} />

                <div className="relative z-10">
                  {/* Icon + badge row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                      <Icon size={22} variant="Bulk" className="text-primary" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary/70 bg-primary/8 border border-primary/12 rounded-full px-2.5 py-1">
                      {badge}
                    </span>
                  </div>

                  {/* Title + description */}
                  <h3 className="text-[16px] font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">{description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[12px] text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA link pinned to bottom */}
                <div className="mt-auto relative z-10">
                  <div className="h-px bg-border mb-4" />
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-primary hover:gap-2.5 transition-all duration-200"
                  >
                    Learn more
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </GlareHover>
          ))}
        </div>

      </div>

      <style jsx global>{`
        @keyframes blobFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(16px, 20px) scale(1.04); }
        }
        @keyframes blobFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-18px, -14px) scale(1.05); }
        }
      `}</style>
    </section>
  )
}
