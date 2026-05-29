import { cn } from "@/lib/utils"

export const BentoGrid = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string
  className: string
  background: React.ReactNode
  Icon: React.ComponentType<{ className?: string }>
  description: string
  href: string
  cta: string
}) => (
  <div
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950",
      "transition-all duration-300 hover:shadow-lg",
      className
    )}
  >
    <div className="pointer-events-none absolute inset-0 z-0">
      {background}
    </div>

    <div className="relative z-10 flex items-start justify-between">
      <div>
        <Icon className="mb-4 h-6 w-6 text-primary" />
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          {name}
        </h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </div>

    <div className="relative z-10 pt-4">
      <a
        href={href}
        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
      >
        {cta}
        <span className="ml-2">→</span>
      </a>
    </div>
  </div>
)
