import { blog as blogCollection } from "fumadocs-mdx:collections/server";
import { type InferPageType, loader } from "fumadocs-core/source";

// ブログ記事のフロントマター型定義
export type BlogFrontmatter = {
  title: string;
  description: string;
  date?: string | Date;
  author?: string;
  coverImage?: string;
  tags?: string[];
  draft?: boolean;
  readingTime?: number;
};

export const blog = loader({
  baseUrl: "/posts",
  source: blogCollection.toFumadocsSource(),
});

// ブログページの型を推論
export type BlogPage = InferPageType<typeof blog>;
