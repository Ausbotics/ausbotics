"use client";

import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HowItWorksHero() {
  return (
    <section className="py-20 lg:py-32 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-neutral-900 dark:text-neutral-100">
            How Our <span className="text-primary">AI Calling Agents</span> Work
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
            From setup to success in just 4 simple steps. Our streamlined
            process gets your AI agents up and running quickly, so you can start
            seeing results immediately.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-white rounded-2xl shadow-inner hover:bg-primary/80 hover:shadow-lg transition-all duration-300"
              asChild
            >
              <Link href="/demo" className="inline-flex items-center gap-2">
                <Play className="h-4 w-4" />
                Watch Demo
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary rounded-2xl shadow-inner hover:bg-primary/10 hover:shadow-lg transition-all duration-300"
              asChild
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                Get Started Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
