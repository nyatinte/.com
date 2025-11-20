import { Button } from "@/app/components/ui/button";
import { PostCard } from "@/app/components/ui/post-card";
import { CodeBlock } from "./components/code-block";
import { FrostedHeader } from "./components/header";

export default function Home() {
  const exampleCode = `import { PostCard } from '@/app/components/ui/post-card';

export function Example() {
  return (
    <PostCard
      title="React Server Components入門"
      description="Next.js 15とReact 19で変わる開発体験"
      date="2024年11月16日"
      tags={["React", "Next.js", "TypeScript"]}
      readingTime={8}
    />
  );
}`;

  return (
    <div className="min-h-screen">
      <FrostedHeader
        links={[
          { label: "Articles", href: "#articles" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
        title="Arctic Blog"
      />

      {/* Hero Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1100px] text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
            <span>🎨</span>
            <span className="font-medium">Modern Design System</span>
          </div>

          <h1 className="mb-6 font-bold text-5xl leading-tight md:text-6xl lg:text-7xl">
            南極をイメージした
            <br />
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              モダンブログテーマ
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-foreground/80 text-lg leading-relaxed md:text-xl">
            Tailwind v4とshadcn/uiをベースにした、
            <br />
            氷河のような淡いブルーと控えめなガラス効果が特徴のデザインシステム
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg">はじめる 🚀</Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#articles">記事を見る</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="px-6 py-20" id="articles">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">最新記事</h2>
            <p className="text-foreground/70">
              デザインシステムとモダンな開発について
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PostCard
              date="2024年11月16日"
              description="Next.js 15とReact 19で変わる開発体験を詳しく解説"
              readingTime={8}
              tags={["React", "Next.js"]}
              title="React Server Components入門"
            />
            <PostCard
              date="2024年11月15日"
              description="型安全性を保ちながら、より柔軟な開発を実現する方法"
              readingTime={5}
              tags={["TypeScript"]}
              title="TypeScript 5の新機能"
            />
            <PostCard
              date="2024年11月14日"
              description="CSS First機能を活用した最新のスタイリング手法"
              readingTime={6}
              tags={["Tailwind", "CSS"]}
              title="Tailwind CSS v4を使いこなす"
            />
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">コード例</h2>
            <p className="text-foreground/70">実装は驚くほどシンプル</p>
          </div>

          <div className="mb-8">
            <CodeBlock code={exampleCode} filename="components/Example.tsx" />
          </div>

          <div className="text-center">
            <Button variant="ghost">ドキュメントを見る →</Button>
          </div>
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
