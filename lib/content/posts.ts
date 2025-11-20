import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { loadMarkdownFiles } from "./loader";
import { processMarkdown } from "./processor";
import type { Post } from "./schema";
import { PostFrontmatterSchema } from "./schema";

const POSTS_DIR = path.join(process.cwd(), "contents/posts");
const MD_EXTENSION_REGEX = /\.md$/;

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
  const filepath = path.join(POSTS_DIR, `${slug}.md`);

  try {
    const raw = await fs.readFile(filepath, "utf-8");
    const { data, content } = matter(raw);
    const frontmatter = PostFrontmatterSchema.parse(data);
    return await processMarkdown(content, frontmatter, slug);
  } catch {
    return;
  }
};

const _getPostSlugs = async (): Promise<string[]> => {
  const files = await fs.readdir(POSTS_DIR);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(MD_EXTENSION_REGEX, ""));
};
