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
        className="hidden items-center justify-center rounded-none border border-[#88C0D0]/30 bg-[#88C0D0]/5 px-5 py-2 font-bold font-heading text-[#88C0D0] text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(136,192,208,0.1)] transition-all duration-300 hover:bg-[#88C0D0] hover:text-[var(--bg-primary)] hover:shadow-[0_0_20px_rgba(136,192,208,0.4)] md:flex"
      >
        <a href="/">Subscribe</a>
      </Button>

      <button
        className="p-2 text-[var(--text-emphasis)] md:hidden"
        type="button"
      >
        <Menu className="h-6 w-6" />
      </button>
    </div>
  );
}
