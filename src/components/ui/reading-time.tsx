import { Clock01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { calculateReadingTime } from "@/lib/reading-time";
import { cn } from "@/lib/utils";

type ReadingTimeProps = {
  content: Promise<string> | string;
  className?: string;
  showIcon?: boolean;
};

export async function ReadingTime({
  content,
  className,
  showIcon = true,
}: ReadingTimeProps) {
  const resolvedContent = await content;
  const minutes = calculateReadingTime(resolvedContent);

  return (
    <span className={cn("flex items-center gap-1", className)}>
      {showIcon && <HugeiconsIcon icon={Clock01Icon} size={12} />}
      <span>{minutes}分で読めます</span>
    </span>
  );
}
