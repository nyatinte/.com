"use client";

import {
  ComputerIcon,
  Moon02Icon,
  Sun03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const themes = [
  {
    key: "system",
    icon: ComputerIcon,
    label: "System theme",
  },
  {
    key: "light",
    icon: Sun03Icon,
    label: "Light theme",
  },
  {
    key: "dark",
    icon: Moon02Icon,
    label: "Dark theme",
  },
] as const;

type Theme = "light" | "dark" | "system";

export type ThemeSwitcherProps = {
  value?: Theme;
  onChange?: (theme: Theme) => void;
  defaultValue?: Theme;
  className?: string;
};

export function ThemeSwitcher({
  value,
  onChange,
  defaultValue = "system",
  className,
}: ThemeSwitcherProps) {
  const { setTheme } = useTheme();
  const [theme, setThemeState] = useControllableState({
    defaultProp: defaultValue,
    prop: value,
    onChange,
  });
  const [mounted, setMounted] = useState(false);

  const handleThemeClick = useCallback(
    (themeKey: Theme) => {
      setThemeState(themeKey);
      setTheme(themeKey);
    },
    [setThemeState, setTheme]
  );

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative isolate flex h-8 rounded-full bg-background p-1 ring-1 ring-border",
        className
      )}
    >
      {themes.map(({ key, icon, label }) => {
        const isActive = theme === key;
        return (
          <button
            aria-label={label}
            className="relative h-6 w-6 rounded-full"
            key={key}
            onClick={() => handleThemeClick(key)}
            type="button"
          >
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full bg-secondary"
                layoutId="activeTheme"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <HugeiconsIcon
              className={cn(
                "relative z-10 m-auto size-4",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
              icon={icon}
            />
          </button>
        );
      })}
    </div>
  );
}
