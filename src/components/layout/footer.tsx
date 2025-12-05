import { GithubIcon, NewTwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkIcon } from "@/components/ui/link-icon";
import { NYATINTE } from "@/constant/nyatinte";
import { generateCopyright } from "@/lib/copyright";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const copyright = generateCopyright(currentYear);

  return (
    <footer className="fade-in slide-in-from-bottom-5 mt-10 flex animate-in flex-col items-center justify-between gap-6 border-border border-t pt-10 delay-900 duration-800 md:mt-20 md:flex-row">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <span className="font-bold font-display text-foreground text-lg">
          Nyatinte.com
        </span>
        <p className="font-body text-muted-foreground text-xs">{copyright}</p>
      </div>

      <div className="flex gap-6 text-muted-foreground">
        <LinkIcon href={NYATINTE.github.url}>
          <HugeiconsIcon icon={GithubIcon} />
        </LinkIcon>
        <LinkIcon href={NYATINTE.x.url}>
          <HugeiconsIcon icon={NewTwitterIcon} />
        </LinkIcon>
      </div>
    </footer>
  );
}
