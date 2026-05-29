"use client"

import { cn } from "@/lib/utils"

const services = [
  { name: "Gmail", icon: "📧" },
  { name: "Slack", icon: "💬" },
  { name: "Drive", icon: "📁" },
]

const integrations = [
  { name: "Webhook", icon: "🔗" },
  { name: "API", icon: "⚙️" },
  { name: "Database", icon: "💾" },
]

export default function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string
}) {
  return (
    <div className={cn("flex items-center justify-center gap-8", className)}>
      {/* Services Column */}
      <div className="flex flex-col gap-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-neutral-950"
          >
            <span className="text-lg">{service.icon}</span>
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
              {service.name}
            </span>
          </div>
        ))}
      </div>

      {/* Center Connectors */}
      <div className="flex h-32 flex-col items-center justify-center gap-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-px w-6 bg-gradient-to-r from-blue-400 to-blue-600"
          />
        ))}
      </div>

      {/* Integrations Column */}
      <div className="flex flex-col gap-4">
        {integrations.map((integration, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-neutral-950"
          >
            <span className="text-lg">{integration.icon}</span>
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
              {integration.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
