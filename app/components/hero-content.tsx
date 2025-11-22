import { ArrowDownRight } from "lucide-react";
import { Button } from "./ui/button";
import { StatusBadge } from "./ui/status-badge";

export function HeroContent() {
  return (
    <div className="relative z-10 order-2 space-y-8 lg:order-1">
      <div className="animate-fade-in-up delay-100">
        <StatusBadge label="System Operational v2.0" />
      </div>

      <h1 className="animate-fade-in-up font-bold font-heading text-5xl text-[var(--text-emphasis)] leading-none tracking-tight delay-200 lg:text-7xl">
        ARCTIC
        <br />
        <span className="bg-gradient-to-r from-[#88C0D0] via-[#8FBCBB] to-[#5E81AC] bg-clip-text text-glow text-transparent">
          FRONTIER
        </span>
      </h1>

      <p className="max-w-md animate-fade-in-up border-[#88C0D0]/30 border-l-2 pl-6 font-body text-[var(--text-secondary)] text-lg leading-relaxed delay-300">
        北極圏のような静寂と鋭い視点で、AI・クラウド・Web開発の深層を探求するテックジャーナル。
      </p>

      <div className="flex animate-fade-in-up flex-wrap gap-5 pt-4 delay-400">
        <Button
          asChild
          className="group relative overflow-hidden bg-[var(--text-emphasis)] px-8 py-4 font-bold font-heading text-[var(--bg-primary)] tracking-wide transition-all hover:scale-105"
        >
          <a href="#articles">
            <span className="relative z-10 flex items-center gap-2">
              READ ARTICLES{" "}
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 z-0 origin-left scale-x-0 transform bg-[#88C0D0] transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </Button>
        <Button
          asChild
          className="border border-[var(--text-secondary)]/30 px-8 py-4 font-bold font-heading text-[var(--text-emphasis)] tracking-wide transition-all hover:border-[var(--text-emphasis)] hover:bg-[var(--bg-elevated)]"
          variant="outline"
        >
          <a href="/posts">PORTFOLIO</a>
        </Button>
      </div>
    </div>
  );
}
