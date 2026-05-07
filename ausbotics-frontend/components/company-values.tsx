"use client";

import { Flash, TaskSquare, Lamp, People, ArrowRight } from "iconsax-reactjs";
import Link from "next/link";

const values = [
  {
    icon: Flash,
    title: "Simple & Smart",
    description:
      "Intelligent bots designed to be simple, smart, and scalable for any business size.",
  },
  {
    icon: TaskSquare,
    title: "Results-Focused",
    description:
      "Bots that deliver consistent results, saving time and boosting productivity.",
  },
  {
    icon: Lamp,
    title: "Innovation Made Easy",
    description:
      "Startup creativity meets cutting-edge AI to make technology accessible for all.",
  },
  {
    icon: People,
    title: "Future of Work",
    description:
      "Smarter workflows with AI bots that make work easier and more efficient.",
  },
];

export function CompanyValues() {
  return (
    <section className="py-24 bg-background">
      <div className="absolute inset-x-0 h-px bg-border" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* ── Our Mission ─────────────────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-3">
              Our Purpose
            </p>
            <h2 className="font-extrabold text-foreground" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Our Mission
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Decorative left border line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

            <div className="pl-8 sm:pl-10 space-y-5">
              <p className="text-[16px] sm:text-[17px] text-foreground/80 leading-[1.8] font-light">
                At Ausbotics, we&apos;re on a mission to bring the power of AI automation
                to everyone — from growing startups to everyday businesses. Our bots reduce
                manual effort, handle tasks independently, and deliver consistent results.
              </p>
              <p className="text-[16px] sm:text-[17px] text-foreground/80 leading-[1.8] font-light">
                We combine creativity and cutting-edge AI to design bots that are simple,
                smart, and scalable. Ausbotics helps businesses save time, boost
                productivity, and focus on what matters most.
              </p>
              <p className="text-[15px] font-semibold text-primary leading-relaxed">
                We believe the future of work is smarter, not harder — and our bots
                make that future a reality.
              </p>
            </div>
          </div>
        </div>

        {/* ── Core Values ─────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-3">
            What We Stand For
          </p>
          <h2 className="font-extrabold text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Our Core Values
          </h2>
          <p className="text-[15px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            These principles guide everything we do and shape how we build intelligent automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className="relative flex flex-col rounded-2xl p-7 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5">
                <Icon size={22} variant="Bulk" className="text-primary" />
              </div>
              <h3 className="text-[15px] font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* ── CTA Banner ──────────────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-10 lg:p-14 text-center">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-extrabold text-foreground mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
              Ready to Transform Your Business?
            </h3>
            <p className="text-[15px] text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Join businesses that have revolutionised their operations with our intelligent AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 cursor-pointer text-white font-bold rounded-2xl px-7 py-3.5 text-[14px] bg-gradient-to-b from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 shadow-[0_4px_0_#1d4ed8,0_8px_24px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.40)] hover:translate-y-[2px] hover:shadow-[0_2px_0_#1d4ed8,0_4px_12px_rgba(59,130,246,0.25)] active:translate-y-[4px] transition-all duration-100"
              >
                Request a Demo
                <ArrowRight size={15} variant="Bulk" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 cursor-pointer font-bold rounded-2xl px-7 py-3.5 text-[14px] text-slate-800 dark:text-white bg-gradient-to-b from-white to-slate-100 dark:from-slate-700 dark:to-slate-800 border border-slate-200 dark:border-slate-600 shadow-[0_4px_0_#cbd5e1,0_6px_18px_rgba(15,23,42,0.08)] dark:shadow-[0_4px_0_#1e293b,0_6px_18px_rgba(0,0,0,0.35)] hover:translate-y-[2px] active:translate-y-[4px] transition-all duration-100"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
