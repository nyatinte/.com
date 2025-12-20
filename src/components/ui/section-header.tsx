import type { IconSvgElement } from "@hugeicons/react";
import { HugeiconsIcon } from "@hugeicons/react";
import type React from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps<T extends React.ElementType = "h2"> = {
  as?: T;
  icon?: IconSvgElement;
  iconSize?: number;
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

export function SectionHeader<T extends React.ElementType = "h2">({
  as,
  icon,
  iconSize = 24,
  children,
  className,
  ...props
}: SectionHeaderProps<T>) {
  const Component = as || "h2";

  return (
    <Component
      className={cn(
        "flex items-center gap-3 font-semibold text-2xl text-foreground md:text-3xl",
        className
      )}
      {...props}
    >
      {icon && (
        <HugeiconsIcon className="text-primary" icon={icon} size={iconSize} />
      )}
      {children}
    </Component>
  );
}
