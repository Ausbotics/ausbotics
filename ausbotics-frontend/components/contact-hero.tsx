"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap-utils"
import Link from "next/link"
import { Sms, Call, Messages2 } from "iconsax-reactjs"
import { Button } from "@/components/ui/button"

const channels = [
  { Icon: Messages2, label: "24/7 Support" },
  { Icon: Call, label: "2-min response" },
  { Icon: Sms, label: "Same-day booking" },
]

export function ContactHero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = [
        "[data-contact='eyebrow']",
        "[data-contact='heading']",
        "[data-contact='sub']",
        "[data-contact='channels']",
      ]
      gsap.set(items, { opacity: 0, y: 24, filter: "blur(8px)" })
      const tl = gsap.timeline({ delay: 0.1 })
      items.forEach((sel, i) => {
        tl.to(sel, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.65, ease: "power3.out" }, i === 0 ? 0 : "-=0.4")
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[60vh] bg-background overflow-hidden flex items-center justify-center"
    >
      {/* Blobs */}
      <div className="absolute -top-20 left-0 w-80 h-80 rounded-full bg-primary/15 blur-3xl -z-10 pointer-events-none animate-[blobFloat1_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-400/12 dark:bg-blue-500/18 blur-3xl -z-10 pointer-events-none animate-[blobFloat2_10s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[20rem] rounded-full bg-indigo-300/8 dark:bg-indigo-500/10 blur-3xl -z-10 pointer-events-none" />

      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, oklch(0.60 0.15 240 / 0.20), transparent)" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        <p
          data-contact="eyebrow"
          className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-5"
        >
          We're Here to Help
        </p>

        <h1
          data-contact="heading"
          className="font-extrabold leading-[1.06] tracking-tight mb-6 text-foreground"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
        >
          Get in Touch with Our{" "}
          <span className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-300 dark:to-indigo-400 bg-clip-text text-transparent">
            Expert Team
          </span>
        </h1>

        <p
          data-contact="sub"
          className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed mb-10"
        >
          Have questions about AI calling agents? Need a custom solution? Our team of experts is ready
          to help you transform your business communication — reach out anytime.
        </p>

        {/* Channel chips */}
        <div data-contact="channels" className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {channels.map(({ Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold bg-white/60 dark:bg-white/5 border border-white/50 dark:border-white/10 backdrop-blur-sm text-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
            >
              <Icon size={14} className="text-primary" />
              {label}
            </div>
          ))}
        </div>

        <Button asChild variant="default" size="lg">
          <Link href="/book">
            Book a Consultation
          </Link>
        </Button>
      </div>

      <style jsx global>{`
        @keyframes blobFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(18px, 22px) scale(1.04); }
        }
        @keyframes blobFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-20px, -16px) scale(1.05); }
        }
      `}</style>
    </section>
  )
}
