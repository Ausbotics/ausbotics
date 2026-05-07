"use client"

import { useEffect, useRef } from "react"
import { initScrollProgressBar } from "@/lib/gsap-utils"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutStats } from "@/components/about-stats"
import { ServicesSection } from "@/components/services-section"
import { WhyChoose } from "@/components/why-choose"
import { ApproachSection } from "@/components/approach-section"
import { WhoWeServe } from "@/components/who-we-serve"
import { InsightsSection } from "@/components/insights-section"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (barRef.current) initScrollProgressBar(barRef.current)
  }, [])
  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 z-[200] h-[2px] origin-left scale-x-0 pointer-events-none"
      style={{ background: "linear-gradient(to right, #3b82f6, #6366f1, #8b5cf6)" }}
    />
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ScrollProgressBar />
      <Navigation />
      <HeroSection />
      <AboutStats />
      <ServicesSection />
      <WhyChoose />
      <ApproachSection />
      <WhoWeServe />
      <InsightsSection />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
