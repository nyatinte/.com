import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content/posts";
import { CopyMarkdownButton } from "../components/copy-markdown-button";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-6 py-12">
      <header className="mb-8">
        <div className="mb-6 flex items-start justify-between">
          <h1 className="font-bold text-5xl">{post.title}</h1>
          <CopyMarkdownButton markdown={post.content} />
        </div>

        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          <time dateTime={post.date.toISOString()}>
            {post.date.toLocaleDateString("ja-JP")}
          </time>
          <span>•</span>
          <span>{post.readingTime}分で読めます</span>
        </div>

        {post.tags.length > 0 && (
          <div className="mt-4 flex gap-2">
            {post.tags.map((tag) => (
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

      {/* markdown-exitで処理済みのHTMLを表示 */}
      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown-exitによるサニタイズ済みコンテンツ
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}
