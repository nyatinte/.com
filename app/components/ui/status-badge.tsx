type StatusBadgeProps = {
  label: string;
  icon?: string;
};

export function StatusBadge({ label, icon }: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-primary)]/5 px-4 py-1.5 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent-primary)] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-primary)]" />
      </span>
      <span className="font-medium font-mono text-[10px] text-[var(--color-accent-primary)] uppercase tracking-widest">
        {icon && <span className="mr-1">{icon}</span>}
        {label}
      </span>
    </div>
  );
}
