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
      className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] transition-all hover:border-[#88C0D0] hover:text-[#88C0D0] hover:shadow-[0_0_15px_rgba(136,192,208,0.3)]"
      href={href}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}
