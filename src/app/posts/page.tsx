import { format } from "date-fns";
import type { Metadata } from "next";
import Link from "next/link";
import { ReadingTime } from "@/components/ui/reading-time";
import { type BlogPage, blog } from "@/lib/source";

export const metadata: Metadata = {
  title: "Blog Posts",
  description: "すべてのブログ記事",
};

export default async function PostsPage() {
  const posts = blog.getPages() as BlogPage[];

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-8 font-bold text-4xl">Blog Posts</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <article className="border-border border-b pb-8" key={post.url}>
            <Link className="group" href={post.url}>
              <h2 className="mb-2 font-semibold text-2xl transition-colors group-hover:text-primary">
                {post.data.title}
              </h2>
            </Link>

            <div className="mb-3 flex items-center gap-4 text-muted-foreground text-sm">
              <time dateTime={post.data.date}>
                {format(new Date(post.data.date), "yyyy/M/d")}
              </time>
              <ReadingTime content={post.data.getText("processed")} />
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
  );
}
