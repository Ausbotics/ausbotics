import { Star1, MessageText } from "iconsax-reactjs"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "VP of Customer Success",
    company: "TechFlow Solutions",
    content:
      "The demo was incredibly impressive. Seeing the AI agent handle complex customer scenarios in real-time convinced us this was the right solution for our growing business.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "Operations Director",
    company: "HealthCare Plus",
    content:
      "What stood out was how natural the conversations felt. The AI agent understood context and responded appropriately to every question we threw at it during the demo.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    title: "CEO",
    company: "Local Services Co",
    content:
      "The personalized demo showed exactly how AI agents could handle our appointment scheduling. We went from demo to implementation in just two weeks.",
    rating: 5,
  },
]

export function DemoTestimonials() {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="absolute inset-x-0 h-px bg-border" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-3">
            Testimonials
          </p>
          <h2 className="font-extrabold leading-tight text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            What Our Demo Attendees Say
          </h2>
          <p className="text-[15px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from business leaders who experienced our AI calling agents firsthand during their demo sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-2xl p-7 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star1 key={i} size={15} variant="Bold" className="text-amber-400" />
                ))}
              </div>

              {/* Quote icon */}
              <div className="mb-3">
                <MessageText size={28} variant="Bulk" className="text-primary/20" />
              </div>

              <p className="text-[13px] text-muted-foreground leading-relaxed flex-1 mb-6">{t.content}</p>

              <div className="border-t border-border pt-4">
                <div className="text-[13px] font-semibold text-foreground">{t.name}</div>
                <div className="text-[12px] text-muted-foreground mt-0.5">
                  {t.title}, {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
