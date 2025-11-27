import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status?: "online" | "busy" | "away" | "offline";
  children: React.ReactNode;
  className?: string;
};

const statusColors = {
  online: "bg-green-500",
  busy: "bg-red-500",
  away: "bg-yellow-500",
  offline: "bg-gray-500",
} as const;

export function StatusBadge({
  status = "online",
  children,
  className,
}: StatusBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-card/50 px-3 py-1 backdrop-blur-md",
        className
      )}
    >
      <span
        className={cn(
          "h-2 w-2 animate-pulse rounded-full",
          statusColors[status]
        )}
      />
      <span className="font-mono text-primary text-xs">{children}</span>
    </div>
  );
}
