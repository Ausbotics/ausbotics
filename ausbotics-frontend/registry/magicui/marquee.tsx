"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export const Marquee = ({
  children,
  className,
  pauseOnHover = false,
}: {
  children: ReactNode
  className?: string
  pauseOnHover?: boolean
}) => {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={(e) => {
        if (pauseOnHover) {
          const child = e.currentTarget.querySelector("[data-marquee-content]")
          if (child instanceof HTMLElement) {
            child.style.animationPlayState = "paused"
          }
        }
      }}
      onMouseLeave={(e) => {
        if (pauseOnHover) {
          const child = e.currentTarget.querySelector("[data-marquee-content]")
          if (child instanceof HTMLElement) {
            child.style.animationPlayState = "running"
          }
        }
      }}
    >
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        [data-marquee-content] {
          animation: marquee 20s linear infinite;
        }
      `}</style>
      <div
        data-marquee-content
        className="flex gap-4"
        style={{
          "--duration": "20s",
        } as React.CSSProperties}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
