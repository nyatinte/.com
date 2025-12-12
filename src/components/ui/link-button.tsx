import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkButtonProps = {
  title: string;
  subtitle?: string;
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function LinkButton({
  title,
  subtitle,
  href,
  children,
  className,
}: LinkButtonProps) {
  const baseClassName = cn(
    "group relative flex h-16 w-full items-center justify-between px-6",
    "rounded-2xl border border-border bg-card/80 backdrop-blur-sm",
    "transition-all duration-300 ease-out",
    "hover:scale-[1.02] hover:border-primary/50 hover:bg-secondary hover:shadow-lg",
    className
  );

  return (
    <Link
      className={baseClassName}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-lg bg-secondary/50 p-2 text-muted-foreground transition-colors duration-300 group-hover:text-primary">
          {children}
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-foreground tracking-wide">
            {title}
          </span>
          {subtitle && (
            <span className="text-muted-foreground text-sm">{subtitle}</span>
          )}
        </div>
      </div>

      <div className="text-muted-foreground/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
        <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
      </div>
    </Link>
  );
}
