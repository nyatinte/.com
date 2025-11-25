import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      className="group relative font-heading font-semibold text-[var(--text-secondary)] text-xs uppercase tracking-wide transition-colors hover:text-[var(--color-accent-primary)]"
      href={href}
    >
      {children}
      <span className="-bottom-1 absolute left-0 h-0.5 w-0 bg-[var(--color-accent-primary)] transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
