"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { ProfileDropdown } from "@/components/profile-dropdown"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"
import { useTheme } from "next-themes"
import { ModeToggle } from "./Modetoggle"
import { Cpu } from "iconsax-reactjs"
import { useEffect, useRef } from "react"
import { gsap, initScrollProgressBar } from "@/lib/gsap-utils"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()
  const { user, isLoading } = useAuth()
  const { theme } = useTheme()
  const isDashboard = pathname.startsWith("/dashboard")
  const isRestrictedRole =
    user?.role?.toLowerCase() === "superadmin" ||
    user?.role?.toLowerCase() === "admin"

  const progressBarRef = useRef<HTMLDivElement>(null)

  const marketingNavItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ]

  const dashboardNavItems = [
    { href: "/dashboard", label: "Overview" },
    { href: "/dashboard/workflows", label: "Workflows" },
    { href: "/dashboard/appointments", label: "Appointments" },
    { href: "/dashboard/settings", label: "Settings" },
  ]

  const navItems = isDashboard ? dashboardNavItems : marketingNavItems

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!progressBarRef.current) return
    initScrollProgressBar(progressBarRef.current)
    return () => {
      gsap.killTweensOf(progressBarRef.current)
    }
  }, [])

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-500",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        isScrolled
          ? "bg-ink/90 border-border dark:bg-background/90 dark:border-border"
          : "bg-background/90 border-border"
      )}
    >
      {/* Scroll progress bar */}
      <div
        ref={progressBarRef}
        className="absolute top-0 left-0 h-0.5 bg-brand-blue origin-left scale-x-0 w-full z-[60]"
        style={{ transformOrigin: "left center" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href={isDashboard ? "/dashboard" : "/"}
            className="flex items-center gap-2"
          >
            <div className="rounded-xl p-2 bg-brand-blue/10 border border-brand-blue/20">
              <Cpu className="h-5 w-5 text-brand-blue" size="20" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span
                className={clsx(
                  "transition-colors duration-500",
                  isScrolled ? "text-background dark:text-foreground" : "text-foreground"
                )}
              >
                Aus
              </span>
              <span className="text-terracotta">Botics</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-3">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <NavigationMenuItem key={item.href}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={clsx(
                            "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                            "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-300",
                            isActive
                              ? clsx(
                                  "text-brand-blue after:w-full",
                                  isScrolled
                                    ? "text-brand-blue"
                                    : "text-brand-blue"
                                )
                              : clsx(
                                  "after:w-0 hover:after:w-full",
                                  isScrolled
                                    ? "text-cream/80 hover:text-brand-blue"
                                    : "text-steel dark:text-cream/70 hover:text-brand-blue"
                                )
                          )}
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )
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
                            className={clsx(
                              "rounded-lg transition-colors",
                              isScrolled
                                ? "text-cream/80 hover:text-brand-blue hover:bg-cream/10"
                                : "text-steel dark:text-cream/70 hover:text-brand-blue hover:bg-navy/10 dark:hover:bg-cream/10"
                            )}
                            asChild
                          >
                            <Link href="/demo">See Demo</Link>
                          </Button>
                          <Button
                            variant="ghost"
                            className={clsx(
                              "rounded-lg transition-colors",
                              isScrolled
                                ? "text-cream/80 hover:text-brand-blue hover:bg-cream/10"
                                : "text-steel dark:text-cream/70 hover:text-brand-blue hover:bg-navy/10 dark:hover:bg-cream/10"
                            )}
                            asChild
                          >
                            <Link href="/book">Book</Link>
                          </Button>
                        </>
                      )}
                      <Button
                        variant="outline-brand"
                        className="rounded-lg"
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
                      className={clsx(
                        "rounded-lg transition-colors",
                        isScrolled
                          ? "text-cream/80 hover:text-brand-blue hover:bg-cream/10"
                          : "text-steel dark:text-cream/70 hover:text-brand-blue hover:bg-navy/10 dark:hover:bg-cream/10"
                      )}
                      asChild
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button variant="brand" className="rounded-lg" asChild>
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
              className={clsx(
                "rounded-lg transition-colors",
                isScrolled
                  ? "text-cream/80 hover:bg-cream/10"
                  : "text-steel dark:text-cream/70 hover:bg-navy/10 dark:hover:bg-cream/10"
              )}
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

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 top-16 z-40 bg-navy/98 backdrop-blur-sm"
          >
            <div className="px-8 py-12 space-y-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-4 text-2xl font-bold text-cream/80 hover:text-terracotta transition-colors border-b border-cream/10"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {!isLoading &&
                (user ? (
                  <>
                    {!isDashboard && (
                      <>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: navItems.length * 0.08 }}
                          className="pt-4"
                        >
                          <Button
                            className="w-full rounded-lg"
                            variant="brand"
                            asChild
                          >
                            <Link href="/demo">See Demo</Link>
                          </Button>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (navItems.length + 1) * 0.08 }}
                        >
                          <Button
                            className="w-full rounded-lg"
                            variant="outline-brand"
                            asChild
                          >
                            <Link href="/dashboard">Dashboard</Link>
                          </Button>
                        </motion.div>
                      </>
                    )}
                    <div className="flex items-center justify-between pt-4 border-t border-cream/10">
                      <span className="text-sm text-cream/70">
                        {user.fullName || user.email}
                      </span>
                      <ProfileDropdown />
                    </div>
                  </>
                ) : (
                  !isDashboard && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: navItems.length * 0.08 }}
                        className="pt-4"
                      >
                        <Button
                          className="w-full rounded-lg"
                          variant="ghost"
                          asChild
                        >
                          <Link href="/login">Login</Link>
                        </Button>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (navItems.length + 1) * 0.08 }}
                      >
                        <Button
                          className="w-full rounded-lg"
                          variant="brand"
                          asChild
                        >
                          <Link href="/signup">Sign Up</Link>
                        </Button>
                      </motion.div>
                    </>
                  )
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
