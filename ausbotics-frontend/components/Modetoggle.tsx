"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, SunIcon } from "lucide-react";
import { Moon } from "iconsax-reactjs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const [isMounted, setisMounted] = React.useState(false);
  React.useEffect(() => {
    setisMounted(true);
  }, []);
  const { setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer hover:text-foreground"
      onClick={toggleTheme}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
