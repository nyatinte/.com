type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="text-center">
      {label && (
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[var(--color-accent-primary)]" />
          <span className="font-mono text-[var(--color-accent-primary)] text-xs uppercase tracking-widest">
            {label}
          </span>
        </div>
      )}
      <h2 className="mb-6 font-bold font-heading text-3xl text-[var(--text-emphasis)] md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl font-body text-[var(--text-secondary)] text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
