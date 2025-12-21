import { Alert02Icon, GameController03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const spoilerVariants = cva("flex items-start gap-4 rounded-lg border p-4", {
  variants: {
    variant: {
      default: "border-[#EBCB8B]/30 bg-[#EBCB8B]/10",
      game: "border-[#B48EAD]/30 bg-[#B48EAD]/10",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const iconColorVariants = {
  default: "text-[#EBCB8B]",
  game: "text-[#B48EAD]",
};

const titleColorVariants = {
  default: "text-[#EBCB8B]",
  game: "text-[#B48EAD]",
};

type SpoilerProps = {
  /** ネタバレの範囲（例: "第3章まで", "エンディングまで"） */
  until?: string;
  /** 作品名（指定すると「〇〇のネタバレ注意」になる） */
  title?: string;
  /** カスタム説明文（untilより優先） */
  description?: string;
  className?: string;
} & VariantProps<typeof spoilerVariants>;

export function Spoiler({
  until,
  title,
  description,
  variant = "default",
  className,
}: SpoilerProps) {
  const IconComponent = variant === "game" ? GameController03Icon : Alert02Icon;
  const displayTitle = title ? `${title}のネタバレ注意` : "ネタバレ注意";
  const displayDescription =
    description ??
    (until
      ? `この記事は${until}のネタバレを含みます。`
      : "この記事にはネタバレが含まれています。");

  return (
    <div
      className={cn(spoilerVariants({ variant }), className)}
      data-slot="spoiler"
      role="alert"
    >
      <HugeiconsIcon
        className={cn(
          "mt-0.5 size-6 shrink-0",
          iconColorVariants[variant ?? "default"]
        )}
        icon={IconComponent}
      />
      <div className="flex flex-col gap-1">
        <p
          className={cn(
            "font-heading font-semibold text-base",
            titleColorVariants[variant ?? "default"]
          )}
        >
          {displayTitle}
        </p>
        <p className="text-[#D8DEE9] text-sm">{displayDescription}</p>
      </div>
    </div>
  );
}
