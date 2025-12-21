import { Megaphone03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

type ContactHeaderProps = {
  name: string;
  tagline: string;
  imageSrc: string;
  imageAlt?: string;
};

export function ContactHeader({
  name,
  tagline,
  imageSrc,
  imageAlt,
}: ContactHeaderProps) {
  return (
    <div className="fade-in slide-in-from-bottom-5 mb-10 flex animate-in flex-col items-center text-center delay-100 duration-800">
      <div className="group relative mb-6 h-28 w-28">
        <div className="relative z-10 h-full w-full overflow-hidden rounded-full border-2 border-border bg-card shadow-xl transition-colors duration-300 group-hover:border-primary">
          <Image
            alt={imageAlt ?? name}
            className="object-cover"
            fill
            priority
            sizes="112px"
            src={imageSrc}
          />
        </div>
        {/* Decorative rotating ring */}
        <div className="pointer-events-none absolute inset-[-4px] animate-spin rounded-full border border-primary/30 [animation-duration:20s]" />
      </div>

      <h1 className="font-bold text-3xl text-foreground tracking-tight">
        {name}
      </h1>
      <p className="mb-3 flex items-center gap-1 font-mono text-muted-foreground text-xs tracking-wide">
        <HugeiconsIcon icon={Megaphone03Icon} size={14} />
        にゃちんて / にちんて
      </p>
      <p className="max-w-xs text-base text-foreground leading-relaxed">
        {tagline}
      </p>
    </div>
  );
}
