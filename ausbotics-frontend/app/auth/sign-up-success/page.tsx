"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-2">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-2 shadow-inner shadow-neutral-200/60 dark:shadow-neutral-900/40">
            <Bot className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
          </div>
          <span className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 tracking-tight">
            Ausbotics
          </span>
        </div>

        <Card className="border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl text-center text-neutral-900 dark:text-neutral-100 font-medium">
              Thank you for signing up!
            </CardTitle>
            <CardDescription className="text-center text-neutral-600 dark:text-neutral-400">
              Check your email to confirm your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center mb-6 leading-relaxed">
              You've successfully signed up. Please check your inbox for a
              confirmation email before signing in.
            </p>

            <div className="text-center">
              <Link
                href="/sign-in"
                className="inline-block text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors duration-150"
              >
                Go to Sign In →
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link
            href="/"
            className="text-sm text-neutral-500 dark:text-neutral-500 hover:text-primary transition-colors duration-150"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
