import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "#velite";

export const metadata: Metadata = {
  title: "Blog Posts",
  description: "すべてのブログ記事",
};

export default async function PostsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-8 font-bold text-4xl">Blog Posts</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <article className="border-border border-b pb-8" key={post.slug}>
            <Link className="group" href={post.url}>
              <h2 className="mb-2 font-semibold text-2xl transition-colors group-hover:text-primary">
                {post.title}
              </h2>
            </Link>

            <div className="mb-3 flex items-center gap-4 text-muted-foreground text-sm">
              <time dateTime={post.date}>{post.date}</time>
              <span>•</span>
              <span>{post.readingTime}分で読めます</span>
            </div>

            <p className="mb-4 text-muted-foreground">{post.description}</p>

            {post.tags.length > 0 && (
              <div className="flex gap-2">
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
          </article>
        ))}
      </div>
    </div>
  );
}
