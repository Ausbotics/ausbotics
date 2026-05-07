"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { Eye, Monitor, Routing, ShieldTick, Star1, Clock } from "iconsax-reactjs";
import { Navigation } from "./navigation";

const BENEFITS = [
  {
    icon: Eye,
    title: "Strategy Deep Dive",
    desc: "No fluff — walk through your exact workflow and see live results.",
  },
  {
    icon: Monitor,
    title: "Live AI Demo",
    desc: "Watch our calling agents handle real scenarios tailored to your industry.",
  },
  {
    icon: Routing,
    title: "Custom Strategy",
    desc: "Leave with a concrete automation blueprint specific to your business.",
  },
  {
    icon: ShieldTick,
    title: "Zero Commitment",
    desc: "Completely free session. No sales pressure, ever.",
  },
];

const STEPS = [
  { step: "01", label: "Pick a time that works for you" },
  { step: "02", label: "Get a calendar invite with Zoom link" },
  { step: "03", label: "We show up prepared — you get answers" },
];

export function CalBooking() {
  const { resolvedTheme } = useTheme();
  const calTheme = resolvedTheme === "dark" ? "dark" : "light";

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: calTheme as "dark" | "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [calTheme]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <Navigation />

      <div className="grid lg:grid-cols-[1fr_1.1fr] min-h-screen pt-16">
        <div className="relative flex flex-col justify-center px-8 py-16 lg:px-14 xl:px-20 overflow-hidden">
          {/* Background glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-[0.08] dark:opacity-[0.12]"
            style={{ background: "radial-gradient(circle, oklch(0.55 0.20 242), transparent 70%)" }}
          />

          {/* Badge */}
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[oklch(0.55_0.20_242/0.35)] bg-[oklch(0.55_0.20_242/0.08)] px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-[oklch(0.55_0.20_242)] dark:text-[oklch(0.70_0.18_242)]">
            <Star1 size={12} variant="Bold" className="fill-current" />
            Free Strategy Session
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl xl:text-[3.25rem]">
            Book Your{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, oklch(0.55 0.20 242), oklch(0.65 0.22 220))",
              }}
            >
              Free Strategy Session
            </span>
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--ink)] opacity-65 lg:text-lg">
            See exactly how AusBotics AI calling agents can automate your outreach,
            qualify leads, and book appointments — hands-free.
          </p>

          {/* Benefits */}
          <ul className="mt-10 space-y-5">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[oklch(0.55_0.20_242/0.10)] dark:bg-[oklch(0.55_0.20_242/0.18)]">
                  <Icon size={18} variant="Bulk" className="text-[oklch(0.55_0.20_242)] dark:text-[oklch(0.70_0.18_242)]" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-0.5 text-sm opacity-60">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* What happens next */}
          <div className="mt-12 rounded-2xl border border-[var(--ink)]/[0.08] bg-[var(--ink)]/[0.03] p-6 dark:bg-[var(--ink)]/[0.04]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest opacity-50">
              What happens next
            </p>
            <ol className="space-y-3">
              {STEPS.map(({ step, label }) => (
                <li key={step} className="flex items-center gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                    style={{ background: "oklch(0.55 0.20 242)" }}
                  >
                    {step}
                  </span>
                  <span className="text-sm opacity-75">{label}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ── Right Panel — Cal.com Embed ─────────────────────────── */}
        <div className="flex flex-col justify-center bg-[var(--ink)]/[0.025] dark:bg-[var(--ink)]/[0.04] px-4 py-12 lg:px-8 xl:px-12">
          <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-[var(--ink)]/[0.08] bg-[var(--bg)] shadow-xl shadow-[oklch(0.55_0.20_242/0.06)] dark:shadow-[oklch(0.55_0.20_242/0.10)]">
            {/* Card header */}
            <div
              className="px-6 py-5"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.20 242), oklch(0.48 0.22 250))",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20">
                  <Clock size={18} variant="Bulk" className="text-white" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">Free Strategy Session</p>
                  <p className="text-xs text-white/70">AusBotics · Video call via Zoom</p>
                </div>
              </div>
            </div>

            {/* Cal embed */}
            <div className="h-[600px] lg:h-[680px]">
              <Cal
                namespace="30min"
                calLink="ashish-mehta-03lvry/30min"
                style={{ width: "100%", height: "100%", overflow: "auto" }}
                config={{
                  layout: "month_view",
                  theme: calTheme,
                }}
              />
            </div>
          </div>

          <p className="mt-4 text-center text-xs opacity-40">
            Powered by{" "}
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-opacity hover:opacity-75 cursor-pointer"
            >
              Cal.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
