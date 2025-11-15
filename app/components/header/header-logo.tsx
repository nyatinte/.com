type HeaderLogoProps = {
  title: string;
};

export function HeaderLogo({ title }: HeaderLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 animate-float items-center justify-center rounded-full bg-linear-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] shadow-lg">
        <span className="text-xl">🐧</span>
      </div>
      <h1 className="font-arctic-heading font-bold text-foreground text-xl">
        {title}
      </h1>
    </div>
  );
}
