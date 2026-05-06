"use client"

import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap-utils"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
  textClassName?: string
}

export function TextReveal({ text, className, textClassName }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const words = text.split(" ")

  useEffect(() => {
    const el = containerRef.current
    if (!el || typeof window === "undefined") return

    const spans = el.querySelectorAll<HTMLSpanElement>(".tr-word")

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { opacity: 0.12, filter: "blur(5px)", y: 6 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: { each: 0.055, from: "start" },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      )
    })

    return () => ctx.revert()
  }, [text])

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <p className={cn("flex flex-wrap", textClassName)}>
        {words.map((word, i) => (
          <span
            key={i}
            className="tr-word inline-block mr-[0.26em] mb-[0.12em]"
            style={{ opacity: 0.12 }}
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  )
}
