"use client";

import { Avatar as BaseAvatar } from "@base-ui/react/avatar";

import { cn } from "@/lib/utils";

type AvatarProps = Omit<
  React.ComponentProps<typeof BaseAvatar.Root>,
  "className"
> & {
  className?: string;
};

type AvatarImageProps = Omit<
  React.ComponentProps<typeof BaseAvatar.Image>,
  "className"
> & {
  className?: string;
};

type AvatarFallbackProps = Omit<
  React.ComponentProps<typeof BaseAvatar.Fallback>,
  "className"
> & {
  className?: string;
};

function Avatar({ className, ...props }: AvatarProps) {
  return (
    <BaseAvatar.Root
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      data-slot="avatar"
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <BaseAvatar.Image
      className={cn("aspect-square size-full", className)}
      data-slot="avatar-image"
      {...props}
    />
  );
}

function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <BaseAvatar.Fallback
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted",
        className
      )}
      data-slot="avatar-fallback"
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
