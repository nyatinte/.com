import { BrainCircuit, CloudSnow, Terminal } from "lucide-react";
import { FeatureCard } from "./feature-card";

export function FeaturesSection() {
  const features = [
    {
      title: "Cloud Architecture",
      description:
        "AWS, Azure, GCP。極寒の環境でも停止しない堅牢な分散システムの構築手法とスケーラビリティ。",
      icon: CloudSnow,
      iconColor: "#88C0D0",
    },
    {
      title: "AI & Deep Learning",
      description:
        "LLMの微調整から推論の最適化まで。静寂の中で思考するAIの深淵と数理モデルの解説。",
      icon: BrainCircuit,
      iconColor: "#B48EAD",
    },
    {
      title: "Modern Frontend",
      description:
        "React, Vue, Next.js。パフォーマンスと美学を兼ね備えた、氷のように鋭いUIの実装ガイド。",
      icon: Terminal,
      iconColor: "#A3BE8C",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32" id="featured">
      <div className="absolute inset-0 origin-top-right skew-y-3 scale-110 transform bg-[#5E81AC]/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <h2 className="mb-6 font-bold font-heading text-3xl text-[var(--text-emphasis)] md:text-4xl">
            DEEP DIVE INTO TECH
          </h2>
          <p className="mx-auto max-w-2xl font-body text-[var(--text-secondary)] text-lg">
            表面的なニュースだけでなく、氷山の水面下にある
            <br className="hidden md:block" />
            技術の本質的構造を探求します。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
