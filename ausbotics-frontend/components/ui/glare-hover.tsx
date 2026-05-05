"use client"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface GlareHoverProps {
  children: React.ReactNode
  className?: string
  glareColor?: string
  glareSize?: number
  borderRadius?: string
}

export function GlareHover({
  children,
  className,
  glareColor = "rgba(255, 255, 255, 0.28)",
  glareSize = 300,
  borderRadius = "1rem",
}: GlareHoverProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: -9999, y: -9999, show: false })

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top, show: true })
  }

  function onLeave() {
    setMouse((m) => ({ ...m, show: false }))
  }

  function onEnter() {
    setMouse((m) => ({ ...m, show: true }))
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
      className={cn("relative overflow-hidden", className)}
      style={{ borderRadius }}
    >
      {/* Glare spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 ease-out"
        style={{
          borderRadius,
          background: `radial-gradient(${glareSize}px circle at ${mouse.x}px ${mouse.y}px, ${glareColor}, transparent 70%)`,
          opacity: mouse.show ? 1 : 0,
        }}
      />
      {children}
    </div>
  )
}
