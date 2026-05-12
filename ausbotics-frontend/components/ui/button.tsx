import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[>svg]:px-3 select-none"

const buttonVariants = {
  default: cn(
    base,
    "bg-primary/85 text-primary-foreground backdrop-blur-xl",
    "border border-white/25 dark:border-white/10",
    "shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.30)]",
    "hover:bg-primary/90 hover:shadow-[0_10px_36px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.35)]"
  ),
  destructive: cn(
    base,
    "bg-destructive/85 text-white backdrop-blur-xl",
    "border border-white/20",
    "shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.25)]",
    "hover:bg-destructive/90"
  ),
  outline: cn(
    base,
    "backdrop-blur-xl bg-white/10 dark:bg-white/5",
    "border border-white/20 dark:border-white/10",
    "text-foreground",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_16px_-4px_rgba(15,23,42,0.10)]",
    "hover:bg-white/20 dark:hover:bg-white/10"
  ),
  secondary: cn(
    base,
    "backdrop-blur-xl bg-secondary/70",
    "text-secondary-foreground",
    "border border-white/20 dark:border-white/10",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_16px_-4px_rgba(15,23,42,0.08)]",
    "hover:bg-secondary/85"
  ),
  ghost: cn(
    base,
    "transition-colors",
    "hover:bg-accent/60 hover:text-accent-foreground dark:hover:bg-accent/40"
  ),
  link: cn(base, "text-primary underline-offset-4 hover:underline"),
  brand: cn(
    base,
    "bg-primary/80 text-primary-foreground backdrop-blur-xl",
    "border border-white/25",
    "shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.30)]",
    "hover:bg-primary/90"
  ),
  navy: cn(
    base,
    "bg-foreground/90 text-background backdrop-blur-xl",
    "border border-white/15",
    "shadow-[0_8px_32px_rgba(0,0,0,0.20),inset_0_1px_0_rgba(255,255,255,0.18)]",
    "hover:bg-foreground"
  ),
  "outline-brand": cn(
    base,
    "backdrop-blur-xl bg-primary/5",
    "border border-primary/30",
    "text-primary",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.20),0_4px_16px_-4px_rgba(59,130,246,0.20)]",
    "hover:bg-primary/10"
  ),
}

const buttonSizes = {
  sm: "h-8 rounded-lg gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-11 rounded-xl px-6 has-[>svg]:px-4",
  icon: "size-9",
}

function Button({
  className,
  variant = "default",
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & {
  variant?: keyof typeof buttonVariants
  size?: keyof typeof buttonSizes
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "button"
  const sizeClass = size ? buttonSizes[size] : ""

  return <Comp data-slot="button" className={cn(buttonVariants[variant], sizeClass, className)} {...props} />
}

export { Button, buttonVariants }
