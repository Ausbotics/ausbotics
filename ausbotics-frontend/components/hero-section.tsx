"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bot,
  MessageSquare,
  BarChart3,
  Clock,
} from "@/components/simple-icons";
import Link from "next/link";

export function HeroSection() {
  const features = [
    {
      icon: (
        <Clock className="md:h-8 md:w-8 w-6 h-6 text-neutral-700 dark:text-neutral-300 transition-colors" />
      ),
      title: "24/7 Availability",
      desc: "Never miss a call or opportunity",
    },
    {
      icon: (
        <MessageSquare className="h-8 w-8 text-neutral-700 dark:text-neutral-300 transition-colors" />
      ),
      title: "Human-like Conversations",
      desc: "Natural, engaging interactions",
    },
    {
      icon: (
        <Bot className="h-8 w-8 text-neutral-700 dark:text-neutral-300 transition-colors" />
      ),
      title: "Smart Automation",
      desc: "Intelligent bots that work independently",
    },
    {
      icon: (
        <BarChart3 className="h-8 w-8 text-neutral-700 dark:text-neutral-300 transition-colors" />
      ),
      title: "Scalable Solutions",
      desc: "Grows with your business needs",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-inner transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-28 lg:py-36 text-center">
        <h1
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight 
          bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 
          dark:from-neutral-200 dark:via-neutral-300 dark:to-neutral-100 
          bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_1px_1px_rgba(255,255,255,0.1)]"
        >
          Empower Your World with
          <br className="hidden sm:block" />
          <span className="block mt-2 bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-700 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-200 bg-clip-text text-transparent">
            AI Automation
          </span>
        </h1>

        <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-3xl mx-auto leading-relaxed px-2">
          From startups to enterprises, our intelligent AI assistants handle
          repetitive tasks, streamline workflows, and help you focus on what
          truly matters — innovation and growth.
        </p>

        <div className="flex  flex-row gap-4 justify-center mb-20">
          <Button
            size="lg"
            className="text-lg px-8 py-4 bg-neutral-800 dark:bg-neutral-100 hover:bg-neutral-700 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 rounded-2xl shadow-inner transition-all duration-300"
            asChild
          >
            <Link href="/demo">See the Demo</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-4 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/60 rounded-2xl shadow-inner transition-all duration-300"
            asChild
          >
            <Link href="/how-it-works">See How It Works</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((item, idx) => (
            <Card
              key={idx}
              className="cursor-pointer p-8 sm:p-6 text-center bg-neutral-100/60 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-inner hover:shadow-[0_0_25px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-300"
            >
              <div className="bg-neutral-200/70 dark:bg-neutral-700/30 rounded-full p-4 w-fit mx-auto mb-5 shadow-inner">
                {item.icon}
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3 text-sm md:text-lg">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-neutral-300/40 dark:bg-neutral-700/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-neutral-200/30 dark:bg-neutral-600/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
