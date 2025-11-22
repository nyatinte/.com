import { ArrowRight, Cpu, Layout, Server } from "lucide-react";
import { ArticleCard } from "./article-card";

export function ArticlesSection() {
  const articles = [
    {
      title:
        "Terraformで構築する不変のインフラストラクチャ：北極圏エディション",
      description:
        "Infrastructure as Code (IaC) のベストプラクティス。環境差異による凍結を防ぐモジュール設計と、ステート管理の極意。",
      date: "2025.10.24",
      readingTime: 5,
      category: "Infrastructure",
      categoryColor: "#88C0D0",
      icon: Server,
      href: "/posts",
    },
    {
      title: "エッジデバイスでの推論：ペンギン追跡カメラの開発ログ",
      description:
        "Raspberry Pi 5とTensorFlow Liteを使用した、極寒環境下でのリアルタイム物体検出システムの構築記録。",
      date: "2025.10.20",
      readingTime: 12,
      category: "AI Engineering",
      categoryColor: "#B48EAD",
      icon: Cpu,
      href: "/posts",
    },
    {
      title: "Tailwind v4とGlassmorphismで構築する「氷」のUI",
      description:
        "透明感と深みを表現するためのCSS変数戦略と、アクセシビリティを両立させる実装ガイド。",
      date: "2025.10.15",
      readingTime: 8,
      category: "Design System",
      categoryColor: "#D08770",
      icon: Layout,
      href: "/posts",
    },
  ];

  return (
    <section className="relative py-32" id="articles">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#88C0D0]" />
              <span className="font-mono text-[#88C0D0] text-xs uppercase tracking-widest">
                Transmission Log
              </span>
            </div>
            <h2 className="font-bold font-heading text-3xl text-[var(--text-emphasis)] md:text-4xl">
              LATEST ENTRIES
            </h2>
          </div>
          <a
            className="group flex items-center gap-3 font-mono text-[var(--text-secondary)] text-sm uppercase tracking-wide transition-colors hover:text-[#88C0D0]"
            href="/posts"
          >
            View Archive
            <span className="block rounded border border-[var(--border-color)] p-1 transition-colors group-hover:border-[#88C0D0]">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
