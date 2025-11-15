import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type MarkdownFile = {
  filename: string;
  slug: string;
  frontmatter: Record<string, unknown>;
  content: string;
  filepath: string;
};

export const loadMarkdownFiles = async (
  dir: string
): Promise<MarkdownFile[]> => {
  const files = await fs.readdir(dir);
  const markdownFiles = files.filter((f) => f.endsWith(".md"));

  return Promise.all(
    markdownFiles.map(async (filename) => {
      const filepath = path.join(dir, filename);
      const raw = await fs.readFile(filepath, "utf-8");
      const { data, content } = matter(raw);

      return {
        filename,
        slug: filename.replace(/\.md$/, ""),
        frontmatter: data,
        content,
        filepath,
      };
    })
  );
};
