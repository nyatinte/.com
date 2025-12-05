import { Layers } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";
import { AuroraBackground } from "./components/aurora-background";
import { HeroSection } from "./components/hero-section";
import { LatestPostList } from "./components/latest-post-list";

export default function Home() {
  return (
    <div className="relative">
      <AuroraBackground />
      <div className="relative z-10 flex flex-col gap-16 md:gap-24">
        <HeroSection />

        <Separator />

        <section className="flex flex-col gap-10">
          <div className="fade-in slide-in-from-bottom-5 flex animate-in items-end justify-between delay-400 duration-800">
            <SectionHeader icon={Layers}>Latest Insights</SectionHeader>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <LatestPostList />
          </div>
        </section>
      </div>
    </div>
  );
}
