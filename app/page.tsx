import { ArticlesSection } from "./components/articles-section";
import { AuroraBackground } from "./components/aurora-background";
import { FeaturesSection } from "./components/features-section";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Navigation } from "./components/navigation";
import { NewsletterSection } from "./components/newsletter-section";
import { NoiseOverlay } from "./components/noise-overlay";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NoiseOverlay />
      <AuroraBackground />
      <Navigation />
      <Hero />
      <ArticlesSection />
      <FeaturesSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
