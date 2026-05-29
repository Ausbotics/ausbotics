"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { ModeToggle } from "./Modetoggle";
import Image from "next/image";
import clsx from "clsx";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/src/components/ui/resizable-navbar";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const { user, isLoading } = useAuth();

  const isDashboard = pathname.startsWith("/dashboard");
  const isRestrictedRole =
    user?.role?.toLowerCase() === "superadmin" ||
    user?.role?.toLowerCase() === "admin";

  const marketingNavItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/features" },
    { name: "Learn", link: "/learn" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact" },
  ];

  const dashboardNavItems = [
    { name: "Overview", link: "/dashboard" },
    { name: "Workflows", link: "/dashboard/workflows" },
    { name: "Appointments", link: "/dashboard/appointments" },
    { name: "Settings", link: "/dashboard/settings" },
  ];

  const navItems = isDashboard ? dashboardNavItems : marketingNavItems;

  return (
    <Navbar className="">
      {/* ── Desktop ── */}
      <NavBody>
        <AusLogo isDashboard={isDashboard} />

        <NavItems
          items={navItems}
          onItemClick={() => setIsMobileMenuOpen(false)}
        />

        <div className="relative z-30 flex items-center gap-2 shrink-0">
          <ModeToggle />
          <DesktopAuth
            user={user}
            isLoading={isLoading}
            isDashboard={isDashboard}
            isRestrictedRole={isRestrictedRole}
          />
        </div>
      </NavBody>

      {/* ── Mobile ── */}
      <MobileNav>
        <MobileNavHeader>
          <AusLogo isDashboard={isDashboard} />
          <div className="flex items-center gap-2">
            <ModeToggle />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {/* Nav links */}
          {navItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={clsx(
                  "w-full rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                    : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800",
                )}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Auth actions */}
          <div className="mt-2 w-full space-y-2 border-t border-neutral-100 pt-4 dark:border-neutral-800">
            {!isLoading &&
              (user ? (
                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {user.fullName || user.email}
                  </span>
                  <ProfileDropdown />
                </div>
              ) : (
                !isDashboard && (
                  <Button
                    className="rounded-lg text-sm"
                    variant="brand"
                    asChild
                  >
                    <Link
                      href="/book"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Book Appointment
                    </Link>
                  </Button>
                )
              ))}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

// ─── Logo ──────────────────────────────────────────────────────────────────────

function AusLogo({ isDashboard }: { isDashboard: boolean }) {
  return (
    <Link
      href={isDashboard ? "/dashboard" : "/"}
      className="relative z-20 flex shrink-0 items-center gap-2.5"
    >
      <div className="rounded-xl overflow-hidden w-9 h-9 shrink-0 ring-1 ring-blue-500/20">
        <Image
          src="/logo.jpeg"
          alt="AusBotics"
          width={36}
          height={36}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-base font-bold tracking-tight leading-none">
        <span className="text-foreground dark:text-white">AusBotics</span>
      </span>
    </Link>
  );
}

// ─── Desktop auth ──────────────────────────────────────────────────────────────

function DesktopAuth({
  user,
  isLoading,
  isDashboard,
  isRestrictedRole,
}: {
  user: any;
  isLoading: boolean;
  isDashboard: boolean;
  isRestrictedRole: boolean;
}) {
  if (isLoading) return null;

  if (user) {
    return (
      <>
        {!isDashboard && !isRestrictedRole && (
          <span className="text-xs text-muted-foreground hidden lg:inline">
            |
          </span>
        )}
        <ProfileDropdown showNavItems={!isDashboard} />
      </>
    );
  }

  if (isDashboard) return null;

  return (
    <Button variant="brand" className="rounded-lg text-sm" asChild>
      <Link href="/book">Book Appointment</Link>
    </Button>
  );
}
