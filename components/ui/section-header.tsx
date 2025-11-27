import { Slot } from "@radix-ui/react-slot";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  icon?: LucideIcon;
  iconSize?: number;
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
};

export function SectionHeader({
  icon: Icon,
  iconSize = 24,
  children,
  className,
  asChild = false,
}: SectionHeaderProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={cn(
        "flex items-center gap-3 font-display font-semibold text-2xl text-foreground md:text-3xl",
        className
      )}
    >
      {Icon && <Icon className="text-primary" size={iconSize} />}
      {children}
    </Comp>
  );
}
