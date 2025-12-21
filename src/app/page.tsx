import { LayersIcon } from "@hugeicons/core-free-icons";
import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";
import { HeroSection } from "./components/hero-section";
import { LatestPostList } from "./components/latest-post-list";

export default function Home() {
  return (
    <>
      <HeroSection />

      <Separator />

      <section className="flex flex-col gap-10">
        <div className="fade-in slide-in-from-bottom-5 flex animate-in items-end justify-between delay-400 duration-800">
          <SectionHeader icon={LayersIcon}>Latest Insights</SectionHeader>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <LatestPostList />
        </div>
      </section>
    </>
  );
}
