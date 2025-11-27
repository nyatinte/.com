import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NyatinteAvatar } from "@/components/ui/nyatinte-avatar";
import { StatusBadge } from "@/components/ui/status-badge";

export function HeroSection() {
  return (
    <section className="mt-4 flex flex-col gap-8 md:mt-8 md:gap-12">
      <div className="fade-in slide-in-from-bottom-5 flex animate-in flex-col items-center gap-10 delay-100 duration-800 md:flex-row md:items-center md:gap-16">
        {/* Avatar */}
        <div className="group relative shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-primary/50 opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50" />
          <NyatinteAvatar />
          <div className="absolute right-2 bottom-2 rounded-full border border-primary/50 bg-card p-3 text-primary shadow-lg">
            <Sparkles size={24} />
          </div>
        </div>

        <div className="flex flex-col gap-6 text-center md:text-left">
          <StatusBadge className="mx-auto md:mx-0">Web Engineer</StatusBadge>

          <h1 className="font-bold font-display text-5xl text-foreground leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Nyatinte<span className="text-primary">.</span>com
          </h1>

          <p className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text font-bold font-display text-2xl text-muted-foreground text-transparent tracking-tight md:text-3xl">
            WebとAIたまにゲーム
          </p>

          <div className="flex justify-center gap-4 pt-4 md:justify-start">
            <Button asChild size="lg">
              <Link
                className="relative z-10 flex items-center gap-2"
                href="/posts"
              >
                記事を読む <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
