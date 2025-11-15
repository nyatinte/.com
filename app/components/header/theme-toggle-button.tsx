"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      aria-label="Toggle theme"
      className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground"
      onClick={toggleTheme}
      type="button"
    >
      {mounted ? (theme === "dark" ? "🌙" : "☀️") : "○"}
    </button>
  );
}
