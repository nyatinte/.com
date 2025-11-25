import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type SocialLinkProps = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <Link
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] transition-all hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)] hover:shadow-[0_0_15px_var(--accent-shadow)]"
      href={href}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}
