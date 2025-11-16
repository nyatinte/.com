import { createMarkdownExit } from "markdown-exit";
import type { Post, PostFrontmatter } from "./schema";

const md = createMarkdownExit({
  html: true,
  linkify: true,
  typographer: true,
});

const WHITESPACE_REGEX = /\s+/;
const MARKDOWN_SYMBOLS_REGEX = /[#*`[\]]/g;

const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.trim().split(WHITESPACE_REGEX).length;
  return Math.ceil(words / wordsPerMinute);
};

const generateExcerpt = (content: string, length = 160): string => {
  const text = content.replace(MARKDOWN_SYMBOLS_REGEX, "").trim();
  return text.length > length ? `${text.slice(0, length)}...` : text;
};

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
