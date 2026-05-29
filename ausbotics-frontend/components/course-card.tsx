"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { type Course } from "@/lib/courses"
import * as Icon from "iconsax-react"

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  "Prompt Engineering": { bg: "bg-blue-100 dark:bg-blue-950", text: "text-blue-700 dark:text-blue-300" },
  Tools: { bg: "bg-purple-100 dark:bg-purple-950", text: "text-purple-700 dark:text-purple-300" },
  Automation: { bg: "bg-green-100 dark:bg-green-950", text: "text-green-700 dark:text-green-300" },
  Productivity: { bg: "bg-orange-100 dark:bg-orange-950", text: "text-orange-700 dark:text-orange-300" },
}

const LEVEL_COLORS: Record<string, { bg: string; text: string }> = {
  Beginner: { bg: "bg-green-100 dark:bg-green-950", text: "text-green-700 dark:text-green-300" },
  Intermediate: { bg: "bg-amber-100 dark:bg-amber-950", text: "text-amber-700 dark:text-amber-300" },
}

export function CourseCard({ course }: { course: Course }) {
  const categoryColor = CATEGORY_COLORS[course.category] || CATEGORY_COLORS["Tools"]
  const levelColor = LEVEL_COLORS[course.level]

  // Get icon component dynamically
  const IconComponent = (Icon as Record<string, any>)[course.icon] || Icon.Book

  return (
    <Link href={`/learn/${course.slug}`}>
      <Card className="h-full cursor-pointer border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-card/80 hover:shadow-lg hover:shadow-accent/20">
        <div className="flex h-full flex-col gap-4 p-6">
          {/* Icon and Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <IconComponent size={24} className="text-accent" />
            </div>
            <div className={`rounded-full px-3 py-1 text-xs font-medium ${categoryColor.bg} ${categoryColor.text}`}>
              {course.category}
            </div>
          </div>

          {/* Title and Description */}
          <div className="flex flex-col gap-2">
            <h3 className="line-clamp-2 text-lg font-semibold leading-tight text-foreground">
              {course.title}
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Footer: Level and Lesson Count */}
          <div className="flex items-center justify-between gap-2 border-t border-border/30 pt-4">
            <div className={`rounded-full px-2.5 py-1 text-xs font-medium ${levelColor.bg} ${levelColor.text}`}>
              {course.level}
            </div>
            <p className="text-sm text-muted-foreground">{course.lessonCount} lessons</p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-200 group-hover:text-accent/80">
            Start Learning
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Card>
    </Link>
  )
}
