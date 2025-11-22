import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ArticleCardProps = {
  title: string;
  description: string;
  date: string;
  readingTime: number;
  category: string;
  categoryColor: string;
  icon: LucideIcon;
  href?: string;
};

export function ArticleCard({
  title,
  description,
  date,
  readingTime,
  category,
  categoryColor,
  icon: Icon,
  href = "/",
}: ArticleCardProps) {
  return (
    <Link href={href}>
      <article className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl">
        <div className="relative h-56 overflow-hidden border-[var(--border-color)]/50 border-b bg-[var(--bg-secondary)]/50">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundColor: `${categoryColor}10` }}
            >
              <Icon className="h-8 w-8" style={{ color: categoryColor }} />
            </div>
          </div>
          <div
            className="absolute top-4 left-4 rounded border px-3 py-1 font-bold font-mono text-[10px] uppercase tracking-wider backdrop-blur"
            style={{
              backgroundColor: "var(--bg-primary)",
              borderColor: "var(--border-color)",
              color: categoryColor,
            }}
          >
            {category}
          </div>
        </div>
        <div className="flex flex-grow flex-col p-8">
          <div className="mb-4 flex items-center gap-3 font-mono text-[var(--text-muted)] text-xs">
            <span>{date}</span>
            <span className="text-[#88C0D0]">{"//"}</span>
            <span>{readingTime} MIN READ</span>
          </div>
          <h3
            className="mb-4 font-bold font-heading text-[var(--text-emphasis)] text-xl leading-snug transition-colors group-hover:text-[#88C0D0]"
            style={{
              transitionProperty: "color",
            }}
          >
            {title}
          </h3>
          <p className="mb-8 line-clamp-3 flex-grow font-body text-[var(--text-secondary)] text-sm leading-relaxed">
            {description}
          </p>
          <div className="mt-auto inline-flex items-center gap-2 font-bold text-[var(--text-emphasis)] text-sm transition-all group-hover:gap-4">
            READ_ENTRY <ArrowRight className="h-4 w-4 text-[#88C0D0]" />
          </div>
        </div>
      </article>
    </Link>
  );
}
