"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { getCourse } from "@/lib/courses"
import { ChevronRight, Clock } from "lucide-react"
import * as Icon from "iconsax-reactjs"

export default function CoursePage({
  params,
}: {
  params: { courseSlug: string }
}) {
  const course = getCourse(params.courseSlug)

  if (!course) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Course not found</h1>
            <p className="mt-2 text-muted-foreground">
              The course you're looking for doesn't exist.
            </p>
            <Link
              href="/learn"
              className="mt-4 inline-block text-accent hover:underline"
            >
              Back to courses
            </Link>
          </div>
        </div>
        <SiteFooter />
      </main>
    )
  }

  const IconComponent = (Icon as Record<string, any>)[course.icon] || Icon.Book

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Breadcrumb */}
      <div className="border-b border-border/30 px-4 py-4">
        <div className="mx-auto max-w-4xl text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/learn" className="hover:text-foreground">Learn</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{course.title}</span>
        </div>
      </div>

      {/* Course Header */}
      <section className="border-b border-border/30 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10">
              <IconComponent size={32} className="text-accent" />
            </div>
            <div className="flex-1 space-y-2">
              <h1 className="text-3xl font-bold sm:text-4xl">{course.title}</h1>
              <p className="text-lg text-muted-foreground">{course.description}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  {course.category}
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-950 dark:text-green-300">
                  {course.level}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons List */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold">Course Lessons</h2>
          <div className="space-y-3">
            {course.lessons.map((lesson, index) => (
              <Link
                key={lesson.slug}
                href={`/learn/${course.slug}/${lesson.slug}`}
                className="group flex items-center gap-4 rounded-lg border border-border/50 bg-card/50 p-4 transition-all duration-200 hover:border-accent/50 hover:bg-card/80 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-semibold text-accent group-hover:bg-accent group-hover:text-white">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                    {lesson.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                  <Clock size={16} />
                  {lesson.duration}
                </div>
                <ChevronRight size={20} className="text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="border-t border-border/30 bg-card/50 px-4 py-12 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <h3 className="text-xl font-semibold">About This Course</h3>
          <p className="text-muted-foreground">
            This course contains {course.lessonCount} lessons, each taking 7-10 minutes to complete. All lessons are practical, beginner-friendly, and designed to be actionable. You can complete this course at your own pace.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
