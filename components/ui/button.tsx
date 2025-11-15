import { cva, type VariantProps } from "class-variance-authority";
import { type TwcComponentProps, twc } from "react-twc";

const button = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white shadow-lg hover:scale-105 hover:opacity-90 hover:shadow-xl active:scale-95",
        secondary:
          "border border-2 text-primary hover:bg-primary hover:text-primary-foreground",
        ghost: "text-foreground hover:bg-muted",
      },
      size: {
        sm: "rounded-lg px-4 py-2 text-sm",
        md: "rounded-xl px-6 py-3 text-base",
        lg: "rounded-2xl px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = TwcComponentProps<"button"> & VariantProps<typeof button>;

export const Button = twc.button<ButtonProps>(({ variant, size }) =>
  button({
    variant,
    size,
  })
);
