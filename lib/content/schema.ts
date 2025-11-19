import { z } from "zod";

export const PostFrontmatterSchema = z
  .object({
    title: z.string().describe("記事のタイトル"),
    date: z.coerce.date().describe("公開日"),
    description: z.string().describe("記事の説明文"),
    tags: z
      .array(z.string())
      .optional()
      .default([])
      .describe("記事に関連するタグの配列"),
    draft: z.boolean().optional().default(false).describe("下書き状態かどうか"),
    author: z.string().optional().describe("著者名"),
    coverImage: z.string().optional().describe("カバー画像のパス"),
  })
  .describe("ブログ記事のフロントマター");

export type PostFrontmatter = z.infer<typeof PostFrontmatterSchema>;

export const PostSchema = PostFrontmatterSchema.extend({
  slug: z.string().describe("URL用のスラッグ（ファイル名から生成）"),
  content: z.string().describe("マークダウンの本文"),
  html: z.string().describe("HTMLに変換された本文"),
  excerpt: z.string().optional().describe("記事の抜粋（自動生成）"),
  readingTime: z.number().describe("読了時間（分）"),
  url: z.string().describe("記事のURL"),
}).describe("処理済みブログ記事");

export type Post = z.infer<typeof PostSchema>;
