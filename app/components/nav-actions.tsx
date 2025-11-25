"use client";

import { Menu } from "lucide-react";
import { ThemeSwitcher } from "./header/theme-switcher";
import { Button } from "./ui/button";

export function NavActions() {
  return (
    <div className="flex items-center gap-4">
      <ThemeSwitcher />

      <Button
        asChild
        className="hidden items-center justify-center rounded-none border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-primary)]/5 px-5 py-2 font-bold font-heading text-[var(--color-accent-primary)] text-xs uppercase tracking-wider shadow-[0_0_15px_var(--accent-shadow)] transition-all duration-300 hover:bg-[var(--color-accent-primary)] hover:text-[var(--bg-primary)] hover:shadow-[0_0_20px_var(--accent-shadow)] md:flex"
      >
        <a href="/">Subscribe</a>
      </Button>

      <button
        aria-label="ナビゲーションメニューを開く"
        className="p-2 text-[var(--text-emphasis)] md:hidden"
        type="button"
      >
        <Menu className="h-6 w-6" />
      </button>
    </div>
  );
}
