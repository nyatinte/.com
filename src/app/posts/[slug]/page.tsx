import { format } from "date-fns";
import { DocsBody } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ReadingTime } from "@/components/ui/reading-time";
import { Spoiler } from "@/components/ui/spoiler";
import { type BlogPage, blog, getPageImage } from "@/lib/source";
import { CopyMarkdownButton } from "./components/copy-markdown-button";
import { getMDXComponents } from "./components/mdx-components";
import { TableOfContents } from "./components/table-of-content";

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
    openGraph: {
      title: post.data.title,
      description: post.data.description,
      images: getPageImage(post).url,
      siteName: "Nyatinte.com",
      type: "article",
      publishedTime: post.data.date,
      tags: post.data.tags,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = blog.getPage([slug]);

  if (!post) {
    notFound();
  }

  const MDX = post.data.body;

  const processedMDXText = await post.data.getText("processed");

  return (
    <article className="mx-auto max-w-4xl px-6">
      <header className="mb-8">
        <div className="mb-6 flex items-start justify-between">
          <h1 className="font-bold text-4xl">{post.data.title}</h1>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          <time dateTime={post.data.date}>
            {format(new Date(post.data.date), "yyyy/M/d")}
          </time>
          <ReadingTime content={processedMDXText} />
        </div>

        <CopyMarkdownButton content={processedMDXText} />
        {post.data.tags && post.data.tags.length > 0 && (
          <div className="mt-4 flex gap-2">
            {post.data.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}

        {post.data.spoiler && (
          <Spoiler
            className="mt-6"
            description="この記事にはゲームのストーリーに関するネタバレが含まれています。未クリアの方はご注意ください。"
            variant="game"
          />
        )}
      </header>
      <div className="relative z-10 mx-auto flex max-w-7xl px-4 md:px-0">
        <DocsBody className="dark:prose-invert prose-lg max-w-none prose-headings:scroll-mt-8 prose-headings:text-balance prose-p:text-balance prose-headings:font-semibold prose-headings:tracking-tight prose-p:tracking-tight prose-a:no-underline">
          <MDX components={getMDXComponents()} />
        </DocsBody>
        <aside className="fixed top-32 right-16 hidden md:block">
          <div className="sticky top-40 rounded-lg border border-border bg-card p-6">
            <TableOfContents />
          </div>
        </aside>
      </div>
    </article>
  );
}
