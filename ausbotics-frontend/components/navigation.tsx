"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sun, Bot, Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { ModeToggle } from "./Modetoggle";
import { Moon } from "iconsax-reactjs";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const { user, isLoading } = useAuth();
  const { theme, setTheme } = useTheme();
  const isDashboard = pathname.startsWith("/dashboard");
  const isRestrictedRole =
    user?.role?.toLowerCase() === "superadmin" ||
    user?.role?.toLowerCase() === "admin";

  const marketingNavItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  const dashboardNavItems = [
    { href: "/dashboard", label: "Overview" },
    { href: "/dashboard/workflows", label: "Workflows" },
    { href: "/dashboard/appointments", label: "Appointments" },
    { href: "/dashboard/settings", label: "Settings" },
  ];

  const navItems = isDashboard ? dashboardNavItems : marketingNavItems;

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        "dark:bg-neutral-900/85 dark:border-neutral-800",
        "bg-white border-neutral-200"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href={isDashboard ? "/dashboard" : "/"}
            className="flex items-center gap-2"
          >
            <div className="rounded-xl p-2 shadow-inner bg-neutral-200 dark:bg-neutral-800">
              <Bot className="h-5 w-5 text-neutral-800 dark:text-neutral-100" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Ausbotics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-3">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <NavigationMenuItem key={item.href}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={clsx(
                            "relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 shadow-inner ",
                            isActive
                              ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                              : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70"
                          )}
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-3">
            <ModeToggle />

            {!isLoading &&
              (user ? (
                <>
                  {!isDashboard && (
                    <>
                      {!isRestrictedRole && (
                        <>
                          <Button
                            variant="ghost"
                            className="rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70"
                            asChild
                          >
                            <Link href="/demo">See Demo</Link>
                          </Button>
                          <Button
                            variant="ghost"
                            className="rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70"
                            asChild
                          >
                            <Link href="/book">Book</Link>
                          </Button>
                        </>
                      )}
                      <Button
                        variant="outline"
                        className="rounded-full border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70"
                        asChild
                      >
                        <Link href="/dashboard">Dashboard</Link>
                      </Button>
                    </>
                  )}
                  <ProfileDropdown />
                </>
              ) : (
                !isDashboard && (
                  <>
                    <Button
                      variant="ghost"
                      className="rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70"
                      asChild
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70"
                      asChild
                    >
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </>
                )
              ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={clsx(
              "md:hidden border-t backdrop-blur-lg transition-colors duration-300",
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
              "dark:bg-neutral-900/95 dark:border-neutral-800",
              "bg-neutral-100/90 border-neutral-200"
            )}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={clsx(
                    "block px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-inner",
                    pathname === item.href
                      ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              {!isLoading &&
                (user ? (
                  <>
                    {!isDashboard && (
                      <>
                        <Button
                          className="w-full rounded-full bg-neutral-200/70 dark:bg-neutral-800/70 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80"
                          variant="ghost"
                          asChild
                        >
                          <Link href="/demo">See Demo</Link>
                        </Button>
                        <Button
                          className="w-full rounded-full border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70"
                          variant="outline"
                          asChild
                        >
                          <Link href="/dashboard">Dashboard</Link>
                        </Button>
                      </>
                    )}
                    <div className="flex items-center justify-between pt-2 border-t border-neutral-200 dark:border-neutral-800/80">
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        Hi, {user.fullName || user.email}
                      </span>
                      <ProfileDropdown />
                    </div>
                  </>
                ) : (
                  !isDashboard && (
                    <>
                      <Button
                        className="w-full rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70"
                        variant="ghost"
                        asChild
                      >
                        <Link href="/login">Login</Link>
                      </Button>
                      <Button
                        className="w-full rounded-full border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70"
                        variant="outline"
                        asChild
                      >
                        <Link href="/signup">Sign Up</Link>
                      </Button>
                    </>
                  )
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
