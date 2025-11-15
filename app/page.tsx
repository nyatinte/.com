import { Button } from "@/components/ui/button";
import { CodeBlock } from "./components/code-block";
import { GlassCard } from "./components/glass-card";
import { FrostedHeader } from "./components/header";
import { PolarSectionHeader } from "./components/polar-section-header";

export default function Home() {
  const exampleCode = `import { GlassCard } from './components/GlassCard';

export function Example() {
  return (
    <GlassCard title="Beautiful Card">
      <p>Antarctic-inspired design with subtle glass effects</p>
    </GlassCard>
  );
}`;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <FrostedHeader
        links={[
          { label: "Articles", href: "#articles" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
        title="Arctic Blog"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[hsl(var(--primary))]/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1100px]">
          <div className="animate-fade-in text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-arctic-glass px-4 py-2 text-sm backdrop-blur-sm">
              <span className="animate-float">🎨</span>
              <span className="font-medium text-foreground">
                Modern Design System
              </span>
            </div>

            <h1 className="mb-6 font-arctic-heading font-bold text-5xl text-foreground leading-tight md:text-6xl lg:text-7xl">
              南極をイメージした
              <br />
              <span className="bg-linear-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">
                モダンブログテーマ
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-foreground/80 text-lg leading-relaxed md:text-xl">
              Tailwind v4とshadcn/uiをベースにした、
              <br />
              氷河のような淡いブルーと控えめなガラス効果が特徴のデザインシステム
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" variant="primary">
                はじめる 🚀
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="#features">詳しく見る</a>
              </Button>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="pointer-events-none absolute top-20 left-10 h-64 w-64 animate-float rounded-full bg-linear-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--secondary))]/20 blur-3xl" />
          <div
            className="pointer-events-none absolute right-10 bottom-10 h-96 w-96 animate-float rounded-full bg-linear-to-br from-[hsl(var(--secondary))]/20 to-[hsl(var(--primary))]/20 blur-3xl"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20" id="features">
        <div className="mx-auto max-w-[1100px]">
          <PolarSectionHeader subtitle="デザインシステムの特徴">
            主な機能
          </PolarSectionHeader>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GlassCard delay={0} title="ガラスエフェクト">
              <p className="text-foreground/70 leading-relaxed">
                控えめなglassmorphismで、読みやすさを保ちながら洗練された見た目を実現
              </p>
            </GlassCard>

            <GlassCard delay={100} title="ダークモード対応">
              <p className="text-foreground/70 leading-relaxed">
                ライト・ダーク・システム設定の3つのテーマをサポート
              </p>
            </GlassCard>

            <GlassCard delay={200} title="アクセシビリティ">
              <p className="text-foreground/70 leading-relaxed">
                WCAG AA基準に準拠した色のコントラストとフォーカス表示
              </p>
            </GlassCard>

            <GlassCard delay={300} title="モダンな技術">
              <p className="text-foreground/70 leading-relaxed">
                Tailwind v4のCSS First機能を活用した最新のスタイリング
              </p>
            </GlassCard>

            <GlassCard delay={400} title="美しいタイポグラフィ">
              <p className="text-foreground/70 leading-relaxed">
                Inter Tight、Chivo、JetBrains Monoによる洗練されたフォント構成
              </p>
            </GlassCard>

            <GlassCard delay={500} title="レスポンシブ">
              <p className="text-foreground/70 leading-relaxed">
                モバイルからデスクトップまで、全デバイスで美しく表示
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1100px]">
          <PolarSectionHeader subtitle="実装は驚くほどシンプル">
            コード例
          </PolarSectionHeader>

          <div className="mt-12">
            <CodeBlock code={exampleCode} filename="components/Example.tsx" />
          </div>

          <div className="mt-8 text-center">
            <Button variant="ghost">ドキュメントを見る →</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1100px]">
          <GlassCard className="text-center">
            <div className="space-y-6 py-8">
              <h2 className="font-arctic-heading font-bold text-3xl text-foreground md:text-4xl">
                今すぐ始めましょう
              </h2>
              <p className="mx-auto max-w-2xl text-foreground/70 text-lg">
                Arctic Blog Themeを使って、美しく読みやすいブログを作成できます
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="primary">GitHub で見る</Button>
                <Button variant="secondary">スキルをダウンロード</Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-12">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-foreground/60 text-sm">
            Designed with 🐧 using Arctic Blog Theme
          </p>
        </div>
      </footer>
    </div>
  );
}
