"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap-utils"

const ITEMS = [
  "Intelligent Automation",
  "Business Dashboards",
  "Web Platforms",
  "AI Calling Agents",
  "Zero Missed Leads",
  "Custom CRM Systems",
  "24/7 Operations",
  "Live in Days",
]

export function MarqueeTicker() {
  const trackRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Wait for layout to measure scrollWidth
    const raf = requestAnimationFrame(() => {
      const totalWidth = track.scrollWidth / 2
      if (totalWidth === 0) return

      tweenRef.current = gsap.to(track, {
        x: -totalWidth,
        duration: totalWidth / 55,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(
            (x: number) => parseFloat(String(x)) % totalWidth
          ),
        },
      })

      const pause = () => tweenRef.current?.pause()
      const resume = () => tweenRef.current?.play()
      track.parentElement?.addEventListener("mouseenter", pause)
      track.parentElement?.addEventListener("mouseleave", resume)
    })

    return () => {
      cancelAnimationFrame(raf)
      tweenRef.current?.kill()
    }
  }, [])

  // Items doubled for seamless loop
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="overflow-hidden border-y border-border bg-ink dark:bg-bg-subtle py-3.5">
      <div
        ref={trackRef}
        className="flex gap-0 whitespace-nowrap will-change-transform"
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span className="text-background dark:text-foreground/80 text-[11px] font-semibold tracking-[0.22em] uppercase px-7">
              {item}
            </span>
            {/* Accent dot separator */}
            <span
              className="text-primary text-[8px] leading-none select-none opacity-70"
              aria-hidden
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
