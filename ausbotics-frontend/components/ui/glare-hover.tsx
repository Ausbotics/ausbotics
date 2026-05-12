"use client"

import { useRef, useState } from "react"
import { useTheme } from "next-themes"
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
  glareColor,
  glareSize = 300,
  borderRadius = "1rem",
}: GlareHoverProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: -9999, y: -9999, show: false })
  const { resolvedTheme } = useTheme()

  const effectiveGlareColor =
    glareColor ?? (resolvedTheme === "dark"
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(255, 255, 255, 0.55)")

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
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 ease-out"
        style={{
          borderRadius,
          background: `radial-gradient(${glareSize}px circle at ${mouse.x}px ${mouse.y}px, ${effectiveGlareColor}, transparent 70%)`,
          opacity: mouse.show ? 1 : 0,
          // No mixBlendMode — plain alpha compositing works in both themes
        }}
      />
      {children}
    </div>
  )
}