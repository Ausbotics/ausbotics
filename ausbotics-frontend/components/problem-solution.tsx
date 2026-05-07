"use client";

import { Warning2, TrendUp, TickCircle } from "iconsax-reactjs";

const problems = [
  {
    icon: Warning2,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-500/10 border-amber-500/15",
    title: "Missed Opportunities",
    description:
      "Businesses lose potential customers when calls or messages go unanswered during off-hours or peak times.",
  },
  {
    icon: TrendUp,
    iconColor: "text-red-500",
    iconBg: "bg-red-500/10 border-red-500/15",
    title: "Rising Costs",
    description:
      "Traditional call centers are expensive to maintain and scale, especially for growing businesses.",
  },
  {
    icon: TickCircle,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10 border-blue-500/15",
    title: "Inconsistent Service",
    description:
      "Human agents vary in performance, leading to inconsistent customer experiences and outcomes.",
  },
];

const solutions = [
  {
    title: "24/7 Availability",
    description:
      "Our AI agents never sleep, ensuring every call is answered and every opportunity is captured, regardless of time or volume.",
  },
  {
    title: "Cost-Effective Scaling",
    description:
      "Scale your customer service operations without the overhead of hiring, training, and managing large teams.",
  },
  {
    title: "Consistent Excellence",
    description:
      "Every interaction follows your exact protocols and maintains the same high standard of service quality.",
  },
];

export function ProblemSolution() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="absolute inset-x-0 h-px bg-border" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Problem Section */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-3">
            The Problem
          </p>
          <h2 className="font-extrabold text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            The Challenges Businesses Face
          </h2>
          <p className="text-[15px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Modern businesses struggle with customer communication challenges that impact growth and satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {problems.map(({ icon: Icon, iconColor, iconBg, title, description }, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-2xl p-7 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${iconBg}`}>
                <Icon size={22} variant="Bulk" className={iconColor} />
              </div>
              <h3 className="text-[15px] font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Solution Section */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-3">
            Our Solution
          </p>
          <h2 className="font-extrabold text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            How We Solve It
          </h2>
          <p className="text-[15px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI calling and messaging agents that solve these challenges while delivering superior customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-2xl p-7 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                  <TickCircle size={14} variant="Bulk" className="text-primary" />
                </div>
                <h3 className="text-[15px] font-semibold text-foreground">{solution.title}</h3>
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
