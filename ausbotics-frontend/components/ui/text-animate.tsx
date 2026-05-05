"use client"

import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap-utils"
import { cn } from "@/lib/utils"

type AnimVariant = "blur-in" | "slide-up" | "fade-in" | "slide-left"

interface TextAnimateProps {
  children: string
  className?: string
  variant?: AnimVariant
  by?: "word" | "character"
  stagger?: number
  delay?: number
  duration?: number
  start?: string
}

export function TextAnimate({
  children,
  className,
  variant = "blur-in",
  by = "word",
  stagger = 0.06,
  delay = 0,
  duration = 0.55,
  start = "top 88%",
}: TextAnimateProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const units = by === "character" ? [...children] : children.split(" ")

  useEffect(() => {
    const el = containerRef.current
    if (!el || typeof window === "undefined") return

    const spans = el.querySelectorAll<HTMLSpanElement>(".ta-unit")

    const fromVars: gsap.TweenVars = { opacity: 0 }
    const toVars: gsap.TweenVars = {
      opacity: 1,
      duration,
      stagger,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        once: true,
      },
    }

    if (variant === "blur-in") {
      fromVars.y = 10
      fromVars.filter = "blur(10px)"
      toVars.y = 0
      toVars.filter = "blur(0px)"
    } else if (variant === "slide-up") {
      fromVars.y = 28
      toVars.y = 0
    } else if (variant === "slide-left") {
      fromVars.x = -22
      toVars.x = 0
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(spans, fromVars, toVars)
    })

    return () => ctx.revert()
  }, [children, variant, by, stagger, delay, duration, start])

  return (
    <span ref={containerRef} className={cn("inline", className)} aria-label={children}>
      {units.map((unit, i) => (
        <span
          key={i}
          className="ta-unit inline-block"
          style={{ opacity: 0 }}
        >
          {unit}
          {by === "word" && i < units.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  )
}
