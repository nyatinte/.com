import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { ReadingTime } from "@/components/ui/reading-time";
import { blog } from "@/lib/source";

export function LatestPostList() {
  const posts = blog.getPages();

  return (
    <>
      {posts.map((post, index) => (
        <article
          className="group hover:-translate-y-1 fade-in slide-in-from-bottom-5 relative flex animate-in flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary hover:shadow-2xl"
          key={post.url}
          style={{ animationDelay: `${500 + index * 100}ms` }}
        >
          {/* Card Content */}
          <div className="relative flex flex-1 flex-col p-6 md:p-8">
            <div className="mb-3 flex items-center gap-3 font-mono text-primary text-xs">
              <ReadingTime content={post.data.getText("processed")} />
              <span>•</span>
              <span>
                {new Date(post.data.date).toLocaleDateString("ja-JP")}
              </span>
            </div>

            <Link href={post.url}>
              <h3 className="mb-3 font-bold font-display text-foreground text-xl leading-tight transition-colors duration-300 group-hover:text-primary">
                {post.data.title}
              </h3>
            </Link>

            <p className="mb-6 line-clamp-3 flex-1 font-body text-muted-foreground text-sm leading-relaxed">
              {post.data.description}
            </p>

            {post.data.tags && post.data.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-1.5">
                {post.data.tags.map((tag: string) => (
                  <span
                    className="bg-primary px-3 py-1 font-bold font-mono text-card text-xs shadow-lg"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <Link
              className="group/link mt-auto flex items-center pt-4 font-bold text-primary text-sm"
              href={post.url}
            >
              <span className="decoration-2 underline-offset-4 group-hover/link:underline">
                READ MORE
              </span>
              <HugeiconsIcon
                className="ml-2 transform transition-transform group-hover/link:translate-x-1"
                icon={ArrowRight02Icon}
                size={16}
              />
            </Link>
          </div>
        </article>
      ))}
    </>
  );
}
