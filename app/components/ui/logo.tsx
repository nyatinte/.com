import { Snowflake } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="group flex items-center gap-3" href="/">
      <div className="relative flex h-8 w-8 items-center justify-center">
        <div className="absolute inset-0 rotate-45 rounded-lg bg-[var(--color-accent-primary)] opacity-20 transition-transform duration-500 group-hover:rotate-90" />
        <div className="absolute inset-0 rotate-0 rounded-lg bg-[var(--color-accent-primary)] opacity-20 transition-transform delay-100 duration-500 group-hover:rotate-180" />
        <Snowflake className="relative z-10 h-5 w-5 text-[var(--color-accent-primary)]" />
      </div>
      <span className="font-bold font-heading text-[var(--text-emphasis)] text-lg tracking-tight">
        Nyatinte<span className="text-[var(--color-accent-primary)]">.</span>
      </span>
    </Link>
  );
}
