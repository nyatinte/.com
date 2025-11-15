"use client";

import { HeaderLogo } from "./header-logo";
import { HeaderNav } from "./header-nav";
import { ThemeToggleButton } from "./theme-toggle-button";

type FrostedHeaderProps = {
  title: string;
  links?: Array<{ label: string; href: string }>;
};

export function FrostedHeader({ title, links = [] }: FrostedHeaderProps) {
  return (
    <header className="sticky top-0 z-50 animate-fade-in border-b bg-arctic-glass shadow-arctic-frosted backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        <HeaderLogo title={title} />

        <div className="flex items-center gap-6">
          {links.length > 0 && <HeaderNav links={links} />}
          <ThemeToggleButton />
        </div>
      </nav>
    </header>
  );
}
