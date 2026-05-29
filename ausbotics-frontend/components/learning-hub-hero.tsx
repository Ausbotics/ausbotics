"use client"

import { COURSES } from "@/lib/courses"

export function LearningHubHero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-24 md:py-32">
      {/* Background with image and gradient overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 dark:from-slate-950 via-transparent to-slate-50 dark:to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-slate-50/20 dark:from-blue-950/10 dark:to-slate-950/20" />
      </div>

      <div className="relative mx-auto max-w-4xl space-y-8 text-center">
        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Learn AI.
            </span>
            <br />
            <span className="text-foreground">For Free.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Master the hottest AI topics with simple, practical courses designed for complete beginners. No experience needed.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 border-y border-border/20 py-6 text-center sm:gap-8">
          <div className="flex flex-col">
            <div className="text-2xl font-bold sm:text-3xl">{COURSES.length}</div>
            <div className="text-sm text-muted-foreground">Courses</div>
          </div>
          <div className="h-6 w-px bg-border/30" />
          <div className="flex flex-col">
            <div className="text-2xl font-bold sm:text-3xl">
              {COURSES.reduce((sum, c) => sum + c.lessonCount, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Lessons</div>
          </div>
          <div className="h-6 w-px bg-border/30" />
          <div className="flex flex-col">
            <div className="text-2xl font-bold sm:text-3xl">100%</div>
            <div className="text-sm text-muted-foreground">Free</div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <div className="rounded-lg border border-border/30 bg-muted/20 px-6 py-3 text-sm text-muted-foreground">
            All courses are beginner-friendly and designed to teach you practically
          </div>
        </div>
      </div>
    </section>
  )
}
