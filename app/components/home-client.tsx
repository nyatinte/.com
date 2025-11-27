"use client";

import {
  ArrowRight,
  Github,
  Layers,
  Sparkles,
  Terminal,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { type ReactNode, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeSwitcher } from "./header/theme-switcher";

type HomeClientProps = {
  articleSection: ReactNode;
};

export function HomeClient({ articleSection }: HomeClientProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden bg-background font-body text-foreground transition-opacity duration-500 selection:bg-primary selection:text-primary-foreground ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Aurora Background Blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] animate-[aurora-float_10s_ease-in-out_infinite] rounded-full bg-primary/20 opacity-20 mix-blend-screen blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] h-[500px] w-[500px] animate-[aurora-float_10s_ease-in-out_infinite] rounded-full bg-primary/10 opacity-10 mix-blend-screen blur-[100px] [animation-delay:-5s]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[700px] w-[700px] animate-[aurora-float_10s_ease-in-out_infinite] rounded-full bg-primary/15 opacity-15 mix-blend-screen blur-[130px] [animation-delay:-2s]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 py-8 md:gap-24 md:px-12 md:py-12">
        {/* Header / Nav */}
        <header
          className={`flex items-center justify-between transition-all duration-800 ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
        >
          {/* Logo */}
          <Link
            className="group flex cursor-pointer items-center gap-3"
            href="/"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-50" />
              <div className="relative flex h-10 w-10 rotate-3 items-center justify-center border border-primary/30 bg-card transition-transform duration-300 group-hover:rotate-0">
                <Terminal className="h-5 w-5 text-primary" />
              </div>
            </div>
            <span className="font-bold font-display text-foreground text-xl tracking-tight">
              Nyatinte<span className="text-primary">.</span>com
            </span>
          </Link>

          {/* Nav & Icons & Switcher */}
          <div className="flex items-center gap-6 md:gap-8">
            <nav className="hidden gap-8 font-mono text-muted-foreground text-sm md:flex">
              {["Index", "Playground", "About"].map((item) => (
                <a
                  className="group relative overflow-hidden"
                  href="#"
                  key={item}
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                    {item}
                  </span>
                  <span className="-translate-x-full absolute bottom-0 left-0 h-[1px] w-full transform bg-primary transition-transform duration-300 group-hover:translate-x-0" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4 border-border border-l pl-4">
              {/* Social Icons */}
              <a
                className="text-muted-foreground transition-colors hover:text-primary"
                href="#"
              >
                <Github size={20} />
              </a>
              <a
                className="text-muted-foreground transition-colors hover:text-primary"
                href="#"
              >
                <Twitter size={20} />
              </a>

              {/* Theme Switcher */}
              <ThemeSwitcher className="ml-2" />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="mt-4 flex flex-col gap-8 md:mt-8 md:gap-12">
          <div
            className={`flex flex-col items-center gap-10 transition-all delay-100 duration-800 md:flex-row md:items-center md:gap-16 ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
          >
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

        {/* Divider */}
        <div
          className={`h-[1px] w-full bg-gradient-to-r from-transparent via-border to-transparent transition-all delay-300 duration-800 ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
        />

        {/* Featured Posts */}
        <section className="flex flex-col gap-10">
          <div
            className={`flex items-end justify-between transition-all delay-400 duration-800 ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
          >
            <h2 className="flex items-center gap-3 font-display font-semibold text-2xl text-foreground md:text-3xl">
              <Layers className="text-primary" size={24} />
              Latest Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {articleSection}
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`mt-10 flex flex-col items-center justify-between gap-6 border-border border-t pt-10 transition-all delay-900 duration-800 md:mt-20 md:flex-row ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
        >
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
      </div>
    </div>
  );
}
