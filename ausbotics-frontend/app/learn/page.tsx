"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { LearningHubHero } from "@/components/learning-hub-hero"
import { CourseCard } from "@/components/course-card"
import { COURSES } from "@/lib/courses"

export default function LearnPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = ["All", ...Array.from(new Set(COURSES.map((c) => c.category)))]

  const filteredCourses = activeCategory && activeCategory !== "All"
    ? COURSES.filter((course) => course.category === activeCategory)
    : COURSES

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <LearningHubHero />

      {/* Filter Section */}
      <section className="border-y border-border/30 bg-card/30 px-4 py-8 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat === "All" ? null : cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  (cat === "All" && !activeCategory) || activeCategory === cat
                    ? "bg-accent text-white"
                    : "border border-border/50 bg-background text-muted-foreground hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="px-4 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          {filteredCourses.length === 0 ? (
            <div className="text-center">
              <p className="text-muted-foreground">No courses found in this category.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/30 bg-card/50 px-4 py-16 backdrop-blur-sm">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold">Ready to Master AI?</h2>
          <p className="text-muted-foreground">
            Pick a course above and start learning. Each lesson takes 7-10 minutes and is completely free.
          </p>
          <p className="text-sm text-muted-foreground">
            💡 Tip: Start with "Prompt Engineering Basics" if you're new to AI
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
