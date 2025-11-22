const LINKS = [
  { label: "Articles", href: "#" },
  { label: "About Author", href: "#" },
  { label: "Design System", href: "#" },
  { label: "RSS Feed", href: "#" },
] as const satisfies readonly { label: string; href: string }[];

export function FooterLinks() {
  return (
    <div>
      <h4 className="mb-6 font-bold font-mono text-[var(--text-emphasis)] text-xs uppercase tracking-widest">
        Coordinates
      </h4>
      <ul className="space-y-4 font-heading text-[var(--text-secondary)] text-sm">
        {LINKS.map((link) => (
          <li key={link.label}>
            <a
              className="transition-colors hover:text-[#88C0D0]"
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
