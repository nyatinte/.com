"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

type LinkButtonProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  href?: string;
  email?: string;
  isEmail?: boolean;
};

export function LinkButton({
  title,
  children,
  className,
  href,
  email,
  isEmail = false,
}: LinkButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    if (isEmail && email) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const baseClassName = cn(
    "group relative flex h-16 w-full items-center justify-between px-6",
    "rounded-2xl border border-border bg-card/80 backdrop-blur-sm",
    "transition-all duration-300 ease-out",
    "hover:scale-[1.02] hover:border-primary/50 hover:bg-secondary hover:shadow-lg",
    className
  );

  const content = (
    <>
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "rounded-lg bg-secondary/50 p-2 transition-colors duration-300",
            copied ? "text-green-500" : "text-muted-foreground",
            "group-hover:text-primary"
          )}
        >
          {children}
        </div>
        <span className="font-medium text-foreground tracking-wide">
          {isEmail && copied ? "Copied!" : title}
        </span>
      </div>

      <div
        className={cn(
          "text-muted-foreground/50 transition-all duration-300",
          "group-hover:translate-x-1 group-hover:text-primary",
          copied && "opacity-0"
        )}
      >
        <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
      </div>
    </>
  );

  if (isEmail) {
    return (
      <button
        className={baseClassName}
        onClick={handleEmailClick}
        type="button"
      >
        {content}
      </button>
    );
  }

  if (!href) {
    return null;
  }

  return (
    <Link
      className={baseClassName}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {content}
    </Link>
  );
}
