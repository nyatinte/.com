import { Snowflake } from "lucide-react";
import Link from "next/link";

export function FooterBrand() {
  return (
    <div className="col-span-1 md:col-span-2">
      <Link className="mb-6 flex items-center gap-3" href="/">
        <Snowflake className="h-6 w-6 text-[var(--color-accent-primary)]" />
        <span className="font-bold font-heading text-2xl text-[var(--text-emphasis)]">
          Nyatinte<span className="text-[var(--color-accent-primary)]">.</span>
        </span>
      </Link>
      <p className="max-w-sm font-body text-[var(--text-secondary)] text-sm leading-relaxed">
        北極圏のデザイン哲学と最先端のテクノロジーを融合させる実験的ブログ。
        コードは美しく、システムは堅牢に。
      </p>
    </div>
  );
}
