"use client";

import { Card } from "@/components/ui/card";
import { TrendUp } from "iconsax-reactjs";
import { AlertTriangle, CheckCircle } from "lucide-react";

const problems = [
  {
    icon: <AlertTriangle className="h-8 w-8 fill-yellow-500 text-white" />,
    title: "Missed Opportunities",
    description:
      "Businesses lose potential customers when calls or messages go unanswered during off-hours or peak times.",
  },
  {
    icon: <TrendUp size="32" color="#ff6565ff" variant="Bold" />,
    title: "Rising Costs",
    description:
      "Traditional call centers are expensive to maintain and scale, especially for growing businesses.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 fill-green-500 text-white" />,
    title: "Inconsistent Service",
    description:
      "Human agents vary in performance, leading to inconsistent customer experiences and outcomes.",
  },
];

export function ProblemsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {problems.map((problem, index) => (
        <Card
          key={index}
          className="p-6 text-center bg-neutral-100 dark:bg-neutral-800 rounded-2xl shadow-inner hover:shadow-lg  cursor-pointer transition-all duration-300"
        >
          <div
            className={`bg-neutral-700/40 rounded-full p-3 w-fit mx-auto mb-4 shadow-inner`}
          >
            {problem.icon}
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
            {problem.title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {problem.description}
          </p>
        </Card>
      ))}
    </div>
  );
}

export function ProblemSolution() {
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

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Problem Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-4">
            The Challenges Businesses Face
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Modern businesses struggle with customer communication challenges
            that impact growth and satisfaction.
          </p>
        </div>

        <ProblemsGrid />

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-4">
            Our Solution
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            AI calling and messaging agents that solve these challenges while
            delivering superior customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="p-6 bg-neutral-100 dark:bg-neutral-800 rounded-2xl shadow-inner hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-2 items-center mb-2">
                <CheckCircle className="h-6 w-6 fill-green-500 text-white" />
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {solution.title}
                </h3>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
