"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface BluePremiumButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
}

export function BluePremiumButton({
  children,
  onClick,
  disabled = false,
  className = "",
}: BluePremiumButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none h-9 px-4 py-2 select-none",
        "bg-primary/85 text-primary-foreground backdrop-blur-xl",
        "border border-white/25 dark:border-white/10",
        "shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.30)]",
        "hover:-translate-y-[1px] hover:bg-primary/90 hover:shadow-[0_10px_36px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.35)]",
        "active:translate-y-[2px] active:shadow-[0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)]",
        className
      )}
    >
      {children}
    </button>
  )
}
