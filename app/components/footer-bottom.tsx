export function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-[var(--border-color)]/50 border-t pt-8 font-mono text-[var(--text-muted)] text-xs md:flex-row">
      <p>&copy; 2025 Nyatinte Blog. All rights reserved.</p>
      <p className="flex items-center gap-2">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
        System Operational
      </p>
    </div>
  );
}
