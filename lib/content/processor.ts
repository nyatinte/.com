import { createMarkdownExit } from "markdown-exit";
import { generateExcerpt } from "./processor/excerpt";
import { calculateReadingTime } from "./processor/reading-time";
import type { Post, PostFrontmatter } from "./schema";

const md = createMarkdownExit({
  html: true,
  linkify: true,
  typographer: true,
});

export const processMarkdown = async (
  content: string,
  frontmatter: PostFrontmatter,
  slug: string
): Promise<Post> => {
  const html = await md.render(content);

  const readingTime = calculateReadingTime(content);
  const excerpt = generateExcerpt(content);
  const url = `/posts/${slug}`;

  return {
    ...frontmatter,
    slug,
    content,
    html,
    excerpt,
    readingTime,
    url,
  };
};
