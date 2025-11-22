import { HeroContent } from "./hero-content";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <header className="relative flex min-h-[90vh] items-center overflow-hidden px-6 pt-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        <HeroContent />
        <HeroVisual />
      </div>
    </header>
  );
}
