"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"



const services = [
  "Web Development",
  "n8n Automations",
  "CRM Development",
  "Consultation",
  "AI Integrations",
  "API Development",
]

export function PartnersStrip() {
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
 
    const serviceEl = servicesRef.current
    if ( !serviceEl) return

    const serviceWidth = serviceEl.scrollWidth / 2

    const anim2 = gsap.fromTo(
      serviceEl,
      { x: -serviceWidth },
      {
        x: 0,
        duration: 34,
        ease: "none",
        repeat: -1,
        force3D: true,
      }
    )

    return () => {
      anim2.kill()
    }
  }, [])

  return (
    <section className="bg-blue-800 border-y border-white/5 overflow-hidden">

      

      {/* Row 2 — Services */}
      <div className="py-4 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div
            ref={servicesRef}
            className="flex items-center will-change-transform"
            style={{ willChange: "transform" }}
          >
            {[...services, ...services, ...services].map((name, i) => (
              <div key={`service-${i}`} className="flex items-center">
                <span className="px-8 text-lg  font-medium tracking-wide text-neutral-300 select-none">
                  {name}
                </span>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}