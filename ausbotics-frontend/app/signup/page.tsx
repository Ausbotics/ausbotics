"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bot, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "sonner";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { signUp, signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const success = await signUp(email, password, name);
      toast.success("Account created successfully");
      if (success) {
        const signInSuccess = await signIn(email, password);
        if (signInSuccess) {
          router.push("/");
        } else {
          router.push(
            "/login?message=Account created successfully. Please sign in."
          );
        }
      } else {
        setError("An account with this email already exists");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900 px-4">
      <div className="w-full max-w-md space-y-8">
        <Card className="border-none shadow-none max-w-md mx-auto container">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Sign Up
            </CardTitle>
            <CardDescription className="text-neutral-600 dark:text-neutral-400">
              Create your account to get started
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md dark:bg-red-900/20 dark:text-red-400 dark:border-red-800">
                  {error}
                </div>
              )}

              <div className="flex flex-col gap-3">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-500 focus:ring-2 focus:ring-primary/30 focus:border-primary/40 shadow-inner shadow-neutral-200/60 dark:shadow-neutral-900/40 transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-3">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-500 focus:ring-2 focus:ring-primary/30 focus:border-primary/40 shadow-inner shadow-neutral-200/60 dark:shadow-neutral-900/40 transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-3">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password (min 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-500 focus:ring-2 focus:ring-primary/30 focus:border-primary/40 shadow-inner shadow-neutral-200/60 dark:shadow-neutral-900/40 transition-all duration-200"
                />
              </div>

              <Button
                type="submit"
                className="w-full font-medium transition-all duration-200 hover:shadow-md cursor-pointer"
                variant={"secondary"}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-neutral-700 dark:text-neutral-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:underline font-medium"
              >
                Log in
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link
            href="/"
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
