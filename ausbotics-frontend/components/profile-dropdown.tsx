"use client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, LogOut, Settings } from "@/components/simple-icons"
import { useAuth } from "@/contexts/auth-context"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, User2 } from "lucide-react"

export function ProfileDropdown({ showNavItems = false }: { showNavItems?: boolean }) {
  const { user, signOut } = useAuth()
  const pathname = usePathname()

  if (!user) return null

  const displayName = user.fullName || user.email?.split("@")[0] || "User"
  const initials = displayName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()

  const isDashboard = pathname.startsWith("/dashboard")
  const isRestrictedRole =
    user?.role?.toLowerCase() === "superadmin" ||
    user?.role?.toLowerCase() === "admin"

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary text-primary-foreground">{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-neutral-100 dark:bg-neutral-800" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{displayName}</p>
            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Show nav items if requested (for mobile/compact view) */}
        {showNavItems && !isDashboard && (
          <>
            {!isRestrictedRole && (
              <>
                <DropdownMenuItem asChild>
                  <Link href="/demo" className="flex items-center justify-between">
                    <span>See Demo</span>
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/book" className="flex items-center justify-between">
                    <span>Book</span>
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Link>
                </DropdownMenuItem>
              </>
            )}
            <DropdownMenuItem asChild>
              <Link href="/dashboard" className="flex items-center justify-between">
                <span>Dashboard</span>
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}

        <DropdownMenuItem>
          <User2 className="" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
