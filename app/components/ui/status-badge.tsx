type StatusBadgeProps = {
  label: string;
  icon?: string;
};

export function StatusBadge({ label, icon }: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-[#88C0D0]/30 bg-[#88C0D0]/5 px-4 py-1.5 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#88C0D0] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#88C0D0]" />
      </span>
      <span className="font-medium font-mono text-[#88C0D0] text-[10px] uppercase tracking-widest">
        {icon && <span className="mr-1">{icon}</span>}
        {label}
      </span>
    </div>
  );
}
