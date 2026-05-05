"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutStats } from "@/components/about-stats"
import { ServicesSection } from "@/components/services-section"
import { WhyChoose } from "@/components/why-choose"
import { ApproachSection } from "@/components/approach-section"
import { WhoWeServe } from "@/components/who-we-serve"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InsightsSection } from "@/components/insights-section"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      <AboutStats />
      <ServicesSection />
      <WhyChoose />
      <ApproachSection />
      <WhoWeServe />
      <TestimonialsSection />
      <InsightsSection />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
