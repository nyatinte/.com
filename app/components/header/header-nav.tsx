type HeaderNavProps = {
  links: Array<{ label: string; href: string }>;
};

export function HeaderNav({ links }: HeaderNavProps) {
  return (
    <div className="flex items-center gap-6">
      {links.map((link, index) => (
        <a
          className="rounded-md px-3 py-2 font-medium text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
          href={link.href}
          key={link.href}
          style={{ animationDelay: `${(index + 1) * 100}ms` }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
