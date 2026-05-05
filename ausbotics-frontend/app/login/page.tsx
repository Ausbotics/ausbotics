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

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const success = await signIn(email, password);
      toast.success("Logged in successfully");
      if (success) router.push("/");
      else setError("Invalid email or password");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex items-center justify-center space-x-2">
          <div className="bg-primary rounded-lg p-2">
            <Bot className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground">Ausbotics</span>
        </div>

        <Card className="shadow-sm border border-neutral-200 dark:border-neutral-800">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Login
            </CardTitle>
            <CardDescription className="text-neutral-600 dark:text-neutral-400">
              Enter your credentials to access your account
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
                  htmlFor="email"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-500 focus:ring-2 focus:ring-primary/30 focus:border-primary/40 shadow-inner shadow-neutral-200/60 dark:shadow-neutral-900/40"
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-500 focus:ring-2 focus:ring-primary/30 focus:border-primary/40 shadow-inner shadow-neutral-200/60 dark:shadow-neutral-900/40"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-neutral-700 dark:text-neutral-400">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="text-primary hover:underline font-medium"
              >
                Sign up
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
