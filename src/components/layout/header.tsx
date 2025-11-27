import { GithubIcon, NewTwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { LinkIcon } from "@/components/ui/link-icon";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { NYATINTE } from "@/constant/nyatinte";

export function Header() {
  return (
    <header className="fade-in slide-in-from-top-5 flex animate-in items-center justify-between duration-800">
      {/* Logo */}
      <Link className="group flex cursor-pointer items-center gap-3" href="/">
        <div className="relative">
          <div className="absolute inset-0 bg-primary opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-50" />
          <div className="relative flex h-10 w-10 rotate-3 items-center justify-center border border-primary/30 bg-card transition-transform duration-300 group-hover:rotate-0">
            <Terminal className="h-5 w-5 text-primary" />
          </div>
        </div>
        <span className="font-bold font-display text-foreground text-xl tracking-tight">
          Nyatinte<span className="text-primary">.</span>com
        </span>
      </Link>

      {/* Nav & Icons & Switcher */}
      <div className="flex items-center gap-6 md:gap-8">
        <nav className="hidden gap-8 font-mono text-muted-foreground text-sm md:flex">
          {["Index", "Playground", "About"].map((item) => (
            // biome-ignore lint/a11y/useValidAnchor: TODO: implement page...
            <a className="group relative overflow-hidden" href="#" key={item}>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                {item}
              </span>
              <span className="-translate-x-full absolute bottom-0 left-0 h-[1px] w-full transform bg-primary transition-transform duration-300 group-hover:translate-x-0" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 border-border border-l pl-4">
          <LinkIcon href={NYATINTE.github.url}>
            <HugeiconsIcon icon={GithubIcon} />
          </LinkIcon>
          <LinkIcon href={NYATINTE.x.url}>
            <HugeiconsIcon icon={NewTwitterIcon} />
          </LinkIcon>

          <ThemeSwitcher className="ml-2" />
        </div>
      </div>
    </header>
  );
}
