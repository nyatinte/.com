"use client";

import { Separator as BaseSeparator } from "@base-ui/react/separator";
import type * as React from "react";
import { cn } from "@/lib/utils";

type SeparatorProps = Omit<
  React.ComponentProps<typeof BaseSeparator>,
  "className"
> & {
  className?: string;
};

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <BaseSeparator
      className={cn(
        "fade-in slide-in-from-bottom-5 shrink-0 animate-in bg-linear-to-r from-transparent via-border to-transparent delay-300 duration-800 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px",
        className
      )}
      data-slot="separator"
      orientation={orientation}
      {...props}
    />
  );
}

export { Separator };
