import type { IconSvgElement } from "@hugeicons/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  icon?: IconSvgElement;
  iconSize?: number;
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
};

export function SectionHeader({
  icon,
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
      {icon && (
        <HugeiconsIcon className="text-primary" icon={icon} size={iconSize} />
      )}
      {children}
    </Comp>
  );
}
