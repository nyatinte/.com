import type { ReactNode } from "react";

type PolarSectionHeaderProps = {
  children: ReactNode;
  subtitle?: string;
};

export function PolarSectionHeader({
  children,
  subtitle,
}: PolarSectionHeaderProps) {
  return (
    <div className="relative animate-fade-in pb-8">
      <div className="space-y-2">
        <h2 className="font-arctic-heading font-bold text-3xl text-foreground md:text-4xl">
          {children}
        </h2>
        {subtitle && <p className="text-foreground/70 text-lg">{subtitle}</p>}
      </div>

      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-6 w-full opacity-40"
        preserveAspectRatio="none"
        viewBox="0 0 1200 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop
              offset="0%"
              stopColor="var(--color-secondary)"
              stopOpacity="0.3"
            />
            <stop
              offset="50%"
              stopColor="var(--color-secondary)"
              stopOpacity="0.5"
            />
            <stop
              offset="100%"
              stopColor="var(--color-secondary)"
              stopOpacity="0.3"
            />
          </linearGradient>
        </defs>
        <path
          d="M0,30 Q300,10 600,30 T1200,30 L1200,60 L0,60 Z"
          fill="url(#wave-gradient)"
        />
      </svg>
    </div>
  );
}
