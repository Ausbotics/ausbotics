"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { getCourse, getLesson, getCoursePrev, getCourseNext } from "@/lib/courses"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"

export default function LessonPage({
  params,
}: {
  params: { courseSlug: string; lessonSlug: string }
}) {
  const course = getCourse(params.courseSlug)
  const lesson = getLesson(params.courseSlug, params.lessonSlug)
  const prevLesson = getCoursePrev(params.courseSlug, params.lessonSlug)
  const nextLesson = getCourseNext(params.courseSlug, params.lessonSlug)

  if (!course || !lesson) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Lesson not found</h1>
            <p className="mt-2 text-muted-foreground">
              The lesson you're looking for doesn't exist.
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

  const lessonIndex = course.lessons.findIndex((l) => l.slug === params.lessonSlug) + 1

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Breadcrumb */}
      <div className="border-b border-border/30 px-4 py-4">
        <div className="mx-auto max-w-3xl text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/learn" className="hover:text-foreground">Learn</Link>
          <span className="mx-2">/</span>
          <Link href={`/learn/${course.slug}`} className="hover:text-foreground">
            {course.title}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{lesson.title}</span>
        </div>
      </div>

      {/* Lesson Header */}
      <section className="border-b border-border/30 px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-sm text-accent">
            <span className="rounded-full bg-accent/10 px-3 py-1">
              Lesson {lessonIndex} of {course.lessonCount}
            </span>
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl">{lesson.title}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock size={18} />
            <span>{lesson.duration}</span>
          </div>
        </div>
      </section>

      {/* Lesson Content */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-sm max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-accent hover:prose-a:underline prose-strong:text-foreground prose-code:text-accent prose-code:bg-accent/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-blockquote:border-l-2 prose-blockquote:border-accent prose-blockquote:text-muted-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:marker:text-accent">
            {lesson.content}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border/30 px-4 py-8">
        <div className="mx-auto max-w-3xl grid gap-4 sm:grid-cols-2">
          {prevLesson ? (
            <Link
              href={`/learn/${course.slug}/${prevLesson.slug}`}
              className="group flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-4 transition-all duration-200 hover:border-accent/50 hover:bg-card/80"
            >
              <ChevronLeft size={20} className="text-muted-foreground group-hover:text-accent" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground">Previous Lesson</p>
                <p className="font-medium text-foreground truncate">{prevLesson.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link
              href={`/learn/${course.slug}/${nextLesson.slug}`}
              className="group flex items-center justify-between gap-3 rounded-lg border border-border/50 bg-card/50 p-4 transition-all duration-200 hover:border-accent/50 hover:bg-card/80 sm:col-start-2"
            >
              <div className="min-w-0 flex-1 text-right">
                <p className="text-sm text-muted-foreground">Next Lesson</p>
                <p className="font-medium text-foreground truncate">{nextLesson.title}</p>
              </div>
              <ChevronRight size={20} className="shrink-0 text-muted-foreground group-hover:text-accent" />
            </Link>
          ) : (
            <div className="sm:col-start-2 flex items-center justify-end gap-3 rounded-lg border border-accent/30 bg-accent/5 p-4">
              <div className="text-right">
                <p className="font-medium text-foreground">You've completed this course!</p>
                <p className="text-sm text-muted-foreground">Great job learning all the lessons.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Back to Course */}
      <section className="border-t border-border/30 px-4 py-8 text-center">
        <Link
          href={`/learn/${course.slug}`}
          className="text-accent hover:underline font-medium"
        >
          ← Back to {course.title}
        </Link>
      </section>

      <SiteFooter />
    </main>
  )
}
