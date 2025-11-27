"use client";
import Link from "next/link";

type LinkIconProps = React.ComponentProps<typeof Link>;
export function LinkIcon({ href, children, ...props }: LinkIconProps) {
  return (
    <Link
      className="text-muted-foreground transition-colors hover:text-primary"
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
