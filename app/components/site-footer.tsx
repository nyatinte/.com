import { Github, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="fade-in slide-in-from-bottom-5 mt-10 flex animate-in flex-col items-center justify-between gap-6 border-border border-t pt-10 delay-900 duration-800 md:mt-20 md:flex-row">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <span className="font-bold font-display text-foreground text-lg">
          Nyatinte.com
        </span>
        <p className="font-body text-muted-foreground text-xs">
          © 2025 Arctic Frontier. Designed & Built by Nyatinte.
        </p>
      </div>

      <div className="flex gap-6 text-muted-foreground">
        <a
          className="transform transition-colors hover:scale-110 hover:text-primary"
          href="#"
        >
          <Twitter size={20} />
        </a>
        <a
          className="transform transition-colors hover:scale-110 hover:text-primary"
          href="#"
        >
          <Github size={20} />
        </a>
      </div>
    </footer>
  );
}
