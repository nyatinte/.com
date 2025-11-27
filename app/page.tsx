import { Layers } from "lucide-react";
import { AuroraBackground } from "./components/aurora-background";
import { HeroSection } from "./components/hero-section";
import { LatestPostList } from "./components/latest-post-list";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-body text-foreground selection:bg-primary selection:text-primary-foreground">
      <AuroraBackground />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 py-8 md:gap-24 md:px-12 md:py-12">
        <SiteHeader />

        <HeroSection />

        {/* Divider */}
        <div className="fade-in slide-in-from-bottom-5 h-[1px] w-full animate-in bg-gradient-to-r from-transparent via-border to-transparent delay-300 duration-800" />

        {/* Featured Posts */}
        <section className="flex flex-col gap-10">
          <div className="fade-in slide-in-from-bottom-5 flex animate-in items-end justify-between delay-400 duration-800">
            <h2 className="flex items-center gap-3 font-display font-semibold text-2xl text-foreground md:text-3xl">
              <Layers className="text-primary" size={24} />
              Latest Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <LatestPostList />
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
