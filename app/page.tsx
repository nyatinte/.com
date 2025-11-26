import Link from "next/link";
import { type BlogPage, blog } from "@/lib/source";
import { FrostedHeader } from "./components/header";

export default function Home() {
  const posts = blog.getPages() as BlogPage[];

  return (
    <div className="min-h-screen">
      <FrostedHeader
        links={[{ label: "Home", href: "/" }]}
        title="Nyatinte Blog"
      />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1100px] text-center">
          <h1 className="mb-6 font-bold text-5xl leading-tight md:text-6xl lg:text-7xl">
            技術ブログ
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-foreground/80 text-lg leading-relaxed md:text-xl">
            Next.js、TypeScript、Webフロントエンドについて
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">最新記事</h2>
          </div>

          <div className="space-y-8">
            {posts.map((post) => (
              <article className="border-border border-b pb-8" key={post.url}>
                <Link className="group" href={post.url}>
                  <h2 className="mb-2 font-semibold text-2xl transition-colors group-hover:text-primary">
                    {post.data.title}
                  </h2>
                </Link>
                <div className="mb-3 flex items-center gap-4 text-muted-foreground text-sm">
                  <time
                    dateTime={
                      post.data.date instanceof Date
                        ? post.data.date.toISOString()
                        : post.data.date
                    }
                  >
                    {new Date(post.data.date ?? "").toLocaleDateString("ja-JP")}
                  </time>
                  {post.data.readingTime && (
                    <>
                      <span>•</span>
                      <span>{post.data.readingTime}分で読めます</span>
                    </>
                  )}
                </div>
                <p className="mb-4 text-muted-foreground">
                  {post.data.description}
                </p>
                {post.data.tags && post.data.tags.length > 0 && (
                  <div className="flex gap-2">
                    {post.data.tags.map((tag) => (
                      <span
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t px-6 py-12">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-foreground/60 text-sm">
            Powered by Fumadocs & Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
