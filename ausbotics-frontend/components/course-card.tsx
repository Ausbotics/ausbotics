"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { type Course } from "@/lib/courses";
import * as Icon from "iconsax-reactjs";

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  "Prompt Engineering": {
    bg: "bg-slate-100 dark:bg-slate-800",
    text: "text-slate-700 dark:text-slate-300",
  },
  Tools: {
    bg: "bg-slate-100 dark:bg-slate-800",
    text: "text-slate-700 dark:text-slate-300",
  },
  Automation: {
    bg: "bg-slate-100 dark:bg-slate-800",
    text: "text-slate-700 dark:text-slate-300",
  },
  Productivity: {
    bg: "bg-slate-100 dark:bg-slate-800",
    text: "text-slate-700 dark:text-slate-300",
  },
};

const LEVEL_COLORS: Record<string, { bg: string; text: string }> = {
  Beginner: {
    bg: "bg-slate-100 dark:bg-slate-800",
    text: "text-slate-700 dark:text-slate-300",
  },
  Intermediate: {
    bg: "bg-slate-100 dark:bg-slate-800",
    text: "text-slate-700 dark:text-slate-300",
  },
};

export function CourseCard({ course }: { course: Course }) {
  const categoryColor =
    CATEGORY_COLORS[course.category] || CATEGORY_COLORS["Tools"];
  const levelColor = LEVEL_COLORS[course.level];

  // Get icon component dynamically
  const IconComponent = (Icon as Record<string, any>)[course.icon] || Icon.Book;

  return (
    <Link href={`/learn/${course.slug}`}>
      <Card className="group h-full cursor-pointer border border-border/40 overflow-hidden bg-card transition-all duration-300 hover:border-border/60 hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/20">
        {/* Course Image */}
        <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute top-3 right-3">
            <div
              className={`rounded-md px-3 py-1.5 text-xs font-medium backdrop-blur-sm ${categoryColor.bg} ${categoryColor.text}`}
            >
              {course.category}
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col gap-4 p-5">
          {/* Icon and Header */}
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
            <IconComponent size={24} className="text-slate-600 dark:text-slate-400" />
          </div>

          {/* Title and Description */}
          <div className="flex flex-col gap-2.5">
            <h3 className="line-clamp-2 text-base font-semibold leading-snug text-foreground">
              {course.title}
            </h3>
            <p className="line-clamp-3 text-sm text-muted-foreground">
              {course.description}
            </p>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Footer: Level and Lesson Count */}
          <div className="flex items-center justify-between gap-2 border-t border-border/20 pt-3.5">
            <div
              className={`rounded-md px-2.5 py-1 text-xs font-medium ${levelColor.bg} ${levelColor.text}`}
            >
              {course.level}
            </div>
            <p className="text-xs font-medium text-muted-foreground">
              {course.lessonCount} {course.lessonCount === 1 ? "lesson" : "lessons"}
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors duration-200 group-hover:text-foreground">
            Start Learning
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Card>
    </Link>
  );
}
