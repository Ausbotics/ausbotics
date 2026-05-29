"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface Item {
  icon: React.ReactNode
  title: string
  description: string
}

const defaultItems = [
  {
    icon: "🔔",
    title: "New notification",
    description: "You have a new notification from your team.",
  },
  {
    icon: "✅",
    title: "Task completed",
    description: "Your task has been completed successfully.",
  },
  {
    icon: "📧",
    title: "New message",
    description: "You have a new message from John.",
  },
]

export default function AnimatedListDemo({
  className,
  items = defaultItems,
}: {
  className?: string
  items?: Item[]
}) {
  const [displayed, setDisplayed] = useState<number[]>([])

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    items.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setDisplayed((prev) => [...prev, i])
        }, i * 200)
      )
    })
    return () => timers.forEach(clearTimeout)
  }, [items.length])

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950",
            "transition-all duration-300",
            displayed.includes(i)
              ? "translate-x-0 opacity-100"
              : "-translate-x-4 opacity-0"
          )}
        >
          <div className="flex gap-2">
            <span className="text-xl">{item.icon}</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                {item.title}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
