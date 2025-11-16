import path from "node:path";
import { loadMarkdownFiles } from "./loader";
import { processMarkdown } from "./processor";
import type { Post } from "./schema";
import { PostFrontmatterSchema } from "./schema";

const POSTS_DIR = path.join(process.cwd(), "contents/posts");

export const getAllPosts = async (): Promise<Post[]> => {
  const files = await loadMarkdownFiles(POSTS_DIR);

  const posts = await Promise.all(
    files.map(async (file) => {
      const frontmatter = PostFrontmatterSchema.parse(file.frontmatter);
      return await processMarkdown(file.content, frontmatter, file.slug);
    })
  );

  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
};

export const getPostBySlug = async (
  slug: string
): Promise<Post | undefined> => {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
};

export const getPostSlugs = async (): Promise<string[]> => {
  const posts = await getAllPosts();
  return posts.map((post) => post.slug);
};
