import { ArrowRight, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeroSection() {
  return (
    <section className="mt-4 flex flex-col gap-8 md:mt-8 md:gap-12">
      <div className="fade-in slide-in-from-bottom-5 flex animate-in flex-col items-center gap-10 delay-100 duration-800 md:flex-row md:items-center md:gap-16">
        {/* Avatar */}
        <div className="group relative shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-primary/50 opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50" />
          <Avatar className="relative h-40 w-40 border-[6px] border-card shadow-2xl outline outline-2 outline-primary/50 transition-transform duration-500 group-hover:scale-[1.02] md:h-56 md:w-56">
            <AvatarImage
              alt="Profile"
              src="https://avatars.githubusercontent.com/u/104000239?v=4"
            />
            <AvatarFallback>NT</AvatarFallback>
          </Avatar>
          <div className="absolute right-2 bottom-2 rounded-full border border-primary/50 bg-card p-3 text-primary shadow-lg">
            <Sparkles size={24} />
          </div>
        </div>

        <div className="flex flex-col gap-6 text-center md:text-left">
          <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-card/50 px-3 py-1 backdrop-blur-md md:mx-0">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <span className="font-mono text-primary text-xs">
              UI ENGINEER / DESIGNER
            </span>
          </div>

          <h1 className="font-bold font-display text-5xl text-foreground leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Nyatinte<span className="text-primary">.</span>com
          </h1>

          <p className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text font-bold font-display text-2xl text-muted-foreground text-transparent tracking-tight md:text-3xl">
            WebとAIたまにゲーム
          </p>

          <div className="flex justify-center gap-4 pt-4 md:justify-start">
            <button className="group relative overflow-hidden bg-primary px-8 py-3.5 font-bold font-sans text-primary-foreground text-sm tracking-wide shadow-[0_0_20px_rgba(136,192,208,0.3)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(136,192,208,0.5)]">
              <span className="relative z-10 flex items-center gap-2">
                記事を読む <ArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
