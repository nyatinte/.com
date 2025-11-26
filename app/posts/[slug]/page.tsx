import { promises as fs } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { type BlogPage, blog } from "@/lib/source";
import { CopyMarkdownButton } from "../components/copy-markdown-button";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return (blog.getPages() as BlogPage[]).map((post) => ({
    slug: post.slugs[0],
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.getPage([slug]) as BlogPage | undefined;

  if (!post) {
    return {};
  }

  return {
    title: post.data.title,
    description: post.data.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = blog.getPage([slug]) as BlogPage | undefined;

  if (!post) {
    notFound();
  }

  const MDX = post.data.body;

  // CopyMarkdown機能: サーバーサイドでファイル読み込み
  // スラッグから直接ファイルパスを構築
  let rawMarkdown = "";
  try {
    const filePath = path.join(process.cwd(), "contents/posts", `${slug}.mdx`);
    rawMarkdown = await fs.readFile(filePath, "utf-8");
  } catch (error) {
    console.error("Failed to read markdown file:", error);
  }

  return (
    <article className="mx-auto max-w-4xl px-6 py-12">
      <header className="mb-8">
        <div className="mb-6 flex items-start justify-between">
          <h1 className="font-bold text-5xl">{post.data.title}</h1>
          {rawMarkdown && <CopyMarkdownButton markdown={rawMarkdown} />}
        </div>

        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          <time dateTime={post.data.date}>
            {new Date(post.data.date).toLocaleDateString("ja-JP")}
          </time>
          {post.data.readingTime && (
            <>
              <span>•</span>
              <span>{post.data.readingTime}分で読めます</span>
            </>
          )}
        </div>

        {post.data.tags && post.data.tags.length > 0 && (
          <div className="mt-4 flex gap-2">
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
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDX />
      </div>
    </article>
  );
}
