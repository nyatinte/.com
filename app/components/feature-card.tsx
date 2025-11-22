import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  iconColor,
}: FeatureCardProps) {
  return (
    <div className="glass-card group rounded-3xl p-10 transition-all duration-500 hover:bg-[var(--bg-primary)]/50">
      <div
        className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-lg transition-colors group-hover:border-[#88C0D0]/50"
        style={{
          borderColor: "var(--border-color)",
        }}
      >
        <Icon className="h-8 w-8" style={{ color: iconColor }} />
      </div>
      <h3 className="mb-4 font-bold font-heading text-[var(--text-emphasis)] text-xl">
        {title}
      </h3>
      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
