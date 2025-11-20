"use client";

import { ThemeSwitcher } from "./theme-switcher";

type FrostedHeaderProps = {
  title: string;
  links?: Array<{ label: string; href: string }>;
};

export function FrostedHeader({ title, links = [] }: FrostedHeaderProps) {
  return (
    <header className="sticky top-0 z-50 animate-fade-in border-b bg-arctic-glass shadow-arctic-frosted backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        <h1 className="font-bold text-xl">{title}</h1>

        <div className="flex items-center gap-6">
          {links.length > 0 && (
            <nav className="flex gap-6">
              {links.map(({ label, href }) => (
                <a
                  className="text-foreground/80 text-sm transition-colors hover:text-foreground"
                  href={href}
                  key={href}
                >
                  {label}
                </a>
              ))}
            </nav>
          )}
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
