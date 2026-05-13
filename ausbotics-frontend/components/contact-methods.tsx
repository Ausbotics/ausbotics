"use client"

import { useEffect, useRef } from "react"
import { Call, Sms, Messages2, Calendar } from "iconsax-reactjs"
import Link from "next/link"
import { animateSection } from "@/lib/gsap-utils"
import { GlareHover } from "@/components/ui/glare-hover"
import { TextAnimate } from "@/components/ui/text-animate"

const contactMethods = [
  {
    Icon: Call,
    title: "Phone Support",
    description: "Speak directly with our experts",
    contact: "+61 432 571 365 / +61 414 004 386",
    action: "Call Now",
    href: "tel:+61432571365",
    availability: "Mon–Fri, 9 AM – 6 PM AEST",
  },
  {
    Icon: Sms,
    title: "Email Support",
    description: "Send us a detailed message",
    contact: "ausbotics3@gmail.com",
    action: "Send Email",
    href: "mailto:ausbotics3@gmail.com",
    availability: "24/7 — Response within 4 hours",
  },
  {
    Icon: Messages2,
    title: "WhatsApp Chat",
    description: "Quick questions and instant support",
    contact: "+61 432 571 365",
    action: "Start Chat",
    href: "https://wa.me/61432571365",
    availability: "Mon–Fri, 9 AM – 6 PM AEST",
  },
  {
    Icon: Calendar,
    title: "Schedule a Call",
    description: "Book a consultation with our team",
    contact: "30-minute consultation",
    action: "Book Meeting",
    href: "/book",
    availability: "Available 7 days a week",
  },
]

export function ContactMethods() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) animateSection(sectionRef.current, "[data-animate]", 0.1)
  }, [])

  return (
    <div ref={sectionRef} className="space-y-8">
      <div data-animate>
        <p className="text-primary text-[11px] font-semibold tracking-[0.25em] mb-3 uppercase">
          Reach Out
        </p>
        <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-extrabold text-foreground mb-3 leading-tight">
          <TextAnimate variant="blur-in" stagger={0.05}>
            Contact Methods
          </TextAnimate>
        </h2>
        <p className="text-[13px] text-muted-foreground leading-relaxed">
          Choose the contact method that works best for you. We're here to help in whatever way is most convenient.
        </p>
      </div>

      <div className="space-y-3">
        {contactMethods.map(({ Icon, title, description, contact, action, href, availability }) => (
          <GlareHover
            key={title}
            glareColor="rgba(255,255,255,0.18)"
            glareSize={260}
            className="rounded-2xl"
          >
            <div
              data-animate
              className="group flex items-start gap-4 p-5 rounded-2xl
                bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-sm
                border border-neutral-200 dark:border-neutral-700
                shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.06)]
                dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_-8px_rgba(0,0,0,0.5)]
                hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_12px_28px_-8px_rgba(15,23,42,0.12)]
                dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_36px_-10px_rgba(0,0,0,0.6)]
                transition-all duration-300 ease-out"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                <Icon size={18} variant="Bulk" className="text-primary" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[14px] font-bold text-foreground">{title}</h3>
                    <p className="text-[12px] text-muted-foreground mt-0.5">{description}</p>
                    <p className="text-[13px] font-semibold text-foreground mt-1">{contact}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{availability}</p>
                  </div>
                  <Link
                    href={href}
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 text-[11px] font-bold text-white rounded-xl px-3.5 py-2 bg-gradient-to-b from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 shadow-[0_3px_0_#1d4ed8,0_6px_16px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.40)] hover:translate-y-[1px] hover:shadow-[0_2px_0_#1d4ed8,0_3px_10px_rgba(59,130,246,0.25),inset_0_1px_0_rgba(255,255,255,0.40)] active:translate-y-[2px] transition-all duration-100 whitespace-nowrap"
                  >
                    {action}
                  </Link>
                </div>
              </div>
            </div>
          </GlareHover>
        ))}
      </div>
    </div>
  )
}
