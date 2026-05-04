import Link from "next/link"

const company = [
  { label: "Home",         href: "/" },
  { label: "Features",     href: "/features" },
  { label: "Pricing",      href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact",      href: "/contact" },
]

const services = [
  { label: "AI Calling Agents",    href: "/features" },
  { label: "Workflow Automation",  href: "/features" },
  { label: "Business Dashboards",  href: "/features" },
  { label: "Custom Web Platforms", href: "/features" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-background dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-xl font-extrabold tracking-tight text-foreground">
                Aus<span className="text-primary">Botics</span>
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

      {/* Bottom bar */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-muted-foreground">© 2025 AusBotics. All rights reserved.</p>
          <p className="text-[12px] text-muted-foreground">Built with ❤️ in Melbourne</p>
        </div>
      </div>
    </footer>
  )
}
