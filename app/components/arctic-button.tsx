import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn, twx } from "@/lib/utils";

type ArcticButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

type ArcticButtonProps = ArcticButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ArcticButtonBaseProps> & {
    asChild?: boolean;
  };

const StyledButton = twx.button.transientProps([
  "variant",
  "size",
])<ArcticButtonProps>((props) =>
  cn(
    "inline-flex items-center justify-center font-medium transition-all duration-200",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    (props.variant === "primary" || !props.variant) &&
      "bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white shadow-lg hover:scale-105 hover:opacity-90 hover:shadow-xl active:scale-95",
    props.variant === "secondary" &&
      "border border-2 text-primary hover:bg-primary hover:text-primary-foreground",
    props.variant === "ghost" && "text-foreground hover:bg-muted",
    props.size === "sm" && "rounded-lg px-4 py-2 text-sm",
    (props.size === "md" || !props.size) && "rounded-xl px-6 py-3 text-base",
    props.size === "lg" && "rounded-2xl px-8 py-4 text-lg"
  )
);

export function ArcticButton({
  children,
  variant = "primary",
  size = "md",
  asChild,
  ...props
}: ArcticButtonProps) {
  return (
    <StyledButton
      asChild={asChild}
      size={size}
      type="button"
      variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
