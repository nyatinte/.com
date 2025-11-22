import type { LucideIcon } from "lucide-react";
import { twx } from "@/lib/utils";

type IconBoxProps = {
  icon: LucideIcon;
  color: string;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outlined";
  animate?: boolean;
};

const sizeClasses = {
  sm: "h-12 w-12",
  md: "h-16 w-16",
  lg: "h-20 w-20",
};

const iconSizes = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-10 w-10",
};

type BoxStyledProps = {
  $variant: "filled" | "outlined";
  $animate: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Box = twx.div<BoxStyledProps>`
  flex items-center justify-center
  ${({ $variant }: BoxStyledProps) =>
    $variant === "filled"
      ? "rounded-full transition-transform duration-500"
      : "rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-lg transition-colors"}
  ${({ $animate }: BoxStyledProps) => $animate && "group-hover:scale-110"}
  ${({ $animate, $variant }: BoxStyledProps) => $animate && $variant === "outlined" && "group-hover:border-[#88C0D0]/50"}
`;

export function IconBox({
  icon: Icon,
  color,
  size = "md",
  variant = "outlined",
  animate = false,
}: IconBoxProps) {
  return (
    <Box
      $animate={animate}
      $variant={variant}
      className={sizeClasses[size]}
      style={variant === "filled" ? { backgroundColor: `${color}10` } : {}}
    >
      <Icon className={iconSizes[size]} style={{ color }} />
    </Box>
  );
}
