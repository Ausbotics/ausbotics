"use client"

import Link from "next/link"
import { ArrowRight, Flash, Clock, Global, People } from "iconsax-reactjs"
import { GlareHover } from "@/components/ui/glare-hover"

const pillars = [
  {
    icon: Flash,
    title: "Built for speed",
    body: "Launch quickly with focused execution and practical systems that do the job well.",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    icon: Clock,
    title: "Always on",
    body: "Automations that keep working after hours, so enquiries and workflows do not wait.",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    icon: Global,
    title: "Works across industries",
    body: "Useful for trade services, clinics, agencies, and firms that need reliable digital support.",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    icon: People,
    title: "Built around your team",
    body: "Reduce repetitive work so your people can spend more time on the work that matters.",
    accent: "from-blue-500 to-sky-500",
  },
]

export function AboutStats() {
  return (
    <section className="relative bg-neutral-950 py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-500/6 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400/90">
              About AusBotics
            </p>

            <h2 className="max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em] text-white leading-[1.08]">
              Intelligent automation for service businesses.
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/68">
              AusBotics builds AI calling agents, workflow automations, and live dashboards that
              help service teams respond faster, stay organised, and run more smoothly.
            </p>

            <p className="mt-4 max-w-xl text-[15px] leading-8 text-white/68">
              From trade services and health clinics to real estate and professional firms, we
              build practical systems that fit into the tools you already use.
            </p>

            <div className="mt-8">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
              >
                Learn how it works
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body, accent }) => (
              <GlareHover
                key={title}
                glareColor="rgba(255,255,255,0.10)"
                glareSize={240}
                className="rounded-2xl"
              >
                <article
                  className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-6
                  transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white/[0.05]"
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent} opacity-70`}
                  />

                  <div
                    className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent}`}
                  >
                    <Icon size={20} color="#fff" variant="Bulk" />
                  </div>

                  <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-white">
                    {title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-7 text-white/64">{body}</p>

                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-white/40 transition-colors group-hover:text-white/70">
                    View more <ArrowRight size={14} />
                  </span>
                </article>
              </GlareHover>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}