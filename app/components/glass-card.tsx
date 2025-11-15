import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  title?: string;
  className?: string;
  delay?: number;
};

export function GlassCard({
  children,
  title,
  className,
  delay = 0,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "group relative animate-slide-up overflow-hidden rounded-arctic-md border",
        "bg-arctic-glass shadow-arctic-soft backdrop-blur-sm transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-arctic-medium",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-white/5" />

      <div className="relative z-10">
        {title && (
          <div className="border-b px-6 py-4">
            <h3 className="font-arctic-heading font-bold text-foreground text-lg">
              {title}
            </h3>
          </div>
        )}
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}
