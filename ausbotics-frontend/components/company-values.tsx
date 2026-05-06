"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Target, Lamp, Users } from "lucide-react";
import Link from "next/link";

export function CompanyValues() {
  const values = [
    {
      icon: Zap,
      title: "Simple & Smart",
      description:
        "Intelligent bots designed to be simple, smart, and scalable for any business size.",
    },
    {
      icon: Target,
      title: "Results-Focused",
      description:
        "Bots that deliver consistent results, saving time and boosting productivity.",
    },
    {
      icon: Lamp,
      title: "Innovation Made Easy",
      description:
        "Startup creativity meets cutting-edge AI to make technology accessible for all.",
    },
    {
      icon: Users,
      title: "Future of Work",
      description:
        "Smarter workflows with AI bots that make work easier and more efficient.",
    },
  ];

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-6 bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-700 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <div className="max-w-4xl mx-auto bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-8 lg:p-12 shadow-inner">
            <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              At Ausbotics, we're on a mission to bring the power of AI
              automation to everyone—from growing startups to everyday
              businesses. Our bots reduce manual effort, handle tasks
              independently, and deliver consistent results.
            </p>
            <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              We combine creativity and cutting-edge AI to design bots that are
              simple, smart, and scalable. Ausbotics helps businesses save time,
              boost productivity, and focus on what matters most.
            </p>
            <p className="text-lg sm:text-xl text-primary font-semibold">
              We believe the future of work is smarter, not harder—and our bots
              make that future a reality.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-4 bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-300 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            These principles guide everything we do and shape how we build
            intelligent automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, idx) => (
            <Card
              key={idx}
              className="p-6 bg-neutral-100 dark:bg-neutral-800 rounded-2xl shadow-inner hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 dark:from-primary/30 dark:via-secondary/30 dark:to-accent/30 rounded-full p-4 w-fit mx-auto mb-4 shadow-inner flex items-center justify-center">
                <value.icon className="h-8 w-8 text-neutral-900 dark:text-neutral-100" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-8 lg:p-12 text-center shadow-inner">
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-700 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join businesses that have revolutionized their operations with our
            intelligent AI automation bots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/80 text-foreground rounded-2xl shadow-inner transition-all duration-300"
              asChild
            >
              <Link href="/contact">Request for Demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 rounded-2xl shadow-inner transition-all duration-300"
              asChild
            >
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
