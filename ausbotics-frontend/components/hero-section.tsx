"use client"

import { useEffect, useRef } from "react"
import { ArrowRight2 } from "iconsax-reactjs"
import { gsap } from "@/lib/gsap-utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroButtons() {
  return (
    <div className="flex flex-row w-full items-stretch sm:items-center justify-center gap-3 sm:gap-2">
      <Button asChild variant="default" size="sm" className="flex-1 sm:flex-none group">
        <Link href="/contact">
          <span className="text-xs sm:text-sm">Request a Demo</span>
          <ArrowRight2 size={13} className="transition-transform duration-150 group-hover:translate-x-1" />
        </Link>
      </Button>
      <Button asChild variant="outline" size="sm" className="flex-1 sm:flex-none group !text-white !border-white/25 !bg-white/10 backdrop-blur-md hover:!bg-white/20">
        <Link href="/contact">
          <span className="text-xs sm:text-sm">Contact us</span>
          <ArrowRight2 size={13} className="transition-transform duration-150 group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  )
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = [
        "[data-hero='h1-line1']",
        "[data-hero='h1-line2']",
        "[data-hero='rule']",
        "[data-hero='subtext']",
        "[data-hero='ctas']",
        "[data-hero='proof']",
      ]

      gsap.set(items, { opacity: 0, y: 20, filter: "blur(8px)" })

      const tl = gsap.timeline({ delay: 0.2 })
      items.forEach((sel, i) => {
        tl.to(
          sel,
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.65, ease: "power3.out" },
          i === 0 ? 0 : "-=0.42",
        )
      })

      if (sectionRef.current) {
        const topRightBlob = sectionRef.current.querySelector(".blob-top-right")
        const bottomLeftBlob = sectionRef.current.querySelector(".blob-bottom-left")

        if (topRightBlob) {
          gsap.to(topRightBlob, {
            y: -80,
            scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 1.8 },
          })
        }

        if (bottomLeftBlob) {
          gsap.to(bottomLeftBlob, {
            y: 60,
            scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 1.5 },
          })
        }
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[96vh] overflow-hidden flex items-center justify-center text-center"
      style={{
        background: "#04090f",
        backgroundImage: "radial-gradient(circle, rgba(100,140,220,0.055) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.38 }}
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_055001_8e16d972-3b2b-441c-86ad-2901a54682f9.mp4" type="video/mp4" />
      </video>

   

     
      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-24 flex flex-col items-center pb-24" style={{ gap: "0" }}>
        {/* Heading - Line 1 */}
        <h1
          data-hero="h1-line1"
          style={{
           
            fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
            lineHeight: "1.06",
            letterSpacing: "-0.025em",
            color: "#f0f4ff",
            margin: 0,
          }}
        >
          Replace manual work with
        </h1>

        {/* Heading - Line 2 */}
        <h1
          data-hero="h1-line2"
          style={{
           
            fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
            lineHeight: "1.06",
            letterSpacing: "-0.025em",
            color: "#f0f4ff",
            margin: 0,
          }}
        >
          AI that runs 24/7.
        </h1>


        {/* Subtext */}
        <p
          data-hero="subtext"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 300,
            color: "rgba(200,215,240,0.65)",
            maxWidth: "58ch",
            lineHeight: "1.7",
            marginTop: "1.75rem",
            marginBottom: "2.5rem",
            
          }}
        >
           AusBotics delivers intelligent calling agents, live business dashboards, and custom web platforms fully built, integrated, and ready to deploy for service businesses.
        </p>

        {/* CTAs */}
        <div data-hero="ctas">
          <HeroButtons />
        </div>

      
      </div>
    </section>
  )
}


