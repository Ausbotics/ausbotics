import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import Link from "next/link"

export function PricingTiers() {
  const tiers = [
    {
      name: "Subscription Model",
      description: "Continuous access to all product suites with ongoing support",
      priceRange: "$500 – $1,500",
      priceSuffix: "per month per client",
      features: [
        "Continuous access to all product suites",
        "Background management and ongoing automation updates",
        "System monitoring and continuous performance optimization",
        "Dedicated operational support",
      ],
      popular: true,
    },
    {
      name: "One-Time Deployment",
      description: "Fully built systems delivered with a one-time setup cost",
      priceRange: "$2,000 – $8,000",
      priceSuffix: "one-time setup",
      features: [
        "Fully built, ready-to-use systems delivered with a one-time setup cost",
        "Complete initial integration across automation, dashboards, and web",
        "Absolute ownership of the foundational structure",
        "On-demand support available as required",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Choose Your Engagement Model</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two flexible models designed for different business needs — recurring subscription for managed automation or
            a one-time deployment for full ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`p-8 relative hover:shadow-lg transition-all duration-300 ${
                tier.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-6">{tier.description}</p>

                <div className="space-y-1">
                  <div className="text-4xl font-bold text-primary">{tier.priceRange}</div>
                  <div className="text-sm text-muted-foreground">{tier.priceSuffix}</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-foreground">What's included:</h4>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <Button className="w-full" variant={tier.popular ? "default" : "outline"} asChild>
                  <Link href="/demo">Get Started</Link>
                </Button>
                <Button variant="ghost" className="w-full text-sm" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-6 rounded-xl bg-muted/30 border border-border max-w-xl mx-auto">
          <p className="text-sm text-muted-foreground uppercase tracking-wide font-semibold mb-1">Projected ARR</p>
          <p className="text-2xl font-bold text-foreground">$60k – $180k</p>
          <p className="text-muted-foreground text-sm mt-1">based on 10 clients</p>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We offer enterprise packages tailored to your specific requirements.
          </p>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact for Enterprise Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
