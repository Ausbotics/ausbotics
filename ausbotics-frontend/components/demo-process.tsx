import { Clock, Profile2User, NoteText, Cpu } from "iconsax-reactjs"

export function DemoProcess() {
  const steps = [
    {
      icon: Profile2User,
      title: "Consultation Call",
      duration: "15 minutes",
      description: "We'll discuss your business needs, current challenges, and specific use cases for AI agents.",
    },
    {
      icon: NoteText,
      title: "Custom Proposal",
      duration: "10 minutes",
      description:
        "Receive a personalized proposal with pricing, implementation timeline, and next steps for your business.",
    },
    {
      icon: Cpu,
      title: "AI Agent Delivery",
      duration: "10 days",
      description:
        "After our discussion call and understanding your business problem, we design, build, and deliver your AI agent within 10 days.",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-3">What to Expect</h2>
        <p className="text-[14px] text-muted-foreground leading-relaxed">
          Our demo process is designed to give you a comprehensive understanding of how AI calling agents
          can benefit your specific business.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-200 dark:border-white/8 bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-7">
          <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
            <Clock size={18} variant="Bulk" className="text-primary" />
          </div>
          <span className="text-[15px] font-semibold text-foreground">Sessions with Experts</span>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                <step.icon size={18} variant="Bulk" className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="text-[14px] font-semibold text-foreground">{step.title}</h3>
                  <span className="text-[11px] font-medium text-primary/70 bg-primary/8 rounded-full px-2 py-0.5">
                    {step.duration}
                  </span>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
