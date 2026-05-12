
import Link from "next/link"
import Image from "next/image"

const company = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
]

const services = [
  { label: "AI Calling Agents", href: "/features" },
  { label: "Workflow Automation", href: "/features" },
  { label: "Business Dashboards", href: "/features" },
  { label: "Custom Web Platforms", href: "/features" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-background dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="rounded-xl overflow-hidden w-9 h-9 shrink-0 ring-1 ring-blue-500/20">
                <Image
                  src="/logo.jpeg"
                  alt="AusBotics"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-base font-bold tracking-tight text-foreground dark:text-white">
                AusBotics
              </span>
            </Link>
            <p className="text-[13px] text-muted-foreground leading-relaxed max-w-[200px]">
              Intelligent automation for service businesses. Practical outcomes over hype, every time.
            </p>
          </div>

          {/* Col 2 — Company */}
          <div>
            <h4 className="text-[11px] font-semibold text-foreground uppercase tracking-[0.2em] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="text-[11px] font-semibold text-foreground uppercase tracking-[0.2em] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-[11px] font-semibold text-foreground uppercase tracking-[0.2em] mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="text-[13px] text-muted-foreground">hello@ausbotics.com.au</li>
              <li className="text-[13px] text-muted-foreground">+61 400 000 000</li>
              <li className="text-[13px] text-muted-foreground">Melbourne, Australia</li>
            </ul>
          </div>

        </div>
      </div>


    </footer>
  )
}
