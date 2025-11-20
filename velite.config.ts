import rehypeShiki from "@shikijs/rehype";
import type { ShikiTransformer } from "shiki";
import { defineConfig, s } from "velite";
import { generateExcerpt } from "./lib/excerpt";
import { calculateReadingTime } from "./lib/reading-time";

const MD_EXTENSION_REGEX = /\.md$/;

// https://velite.js.org/guide/code-highlighting#copy-button
const transformerCopyButton = (): ShikiTransformer => ({
  name: "copy-button",
  pre(node) {
    node.children.push({
      type: "element",
      tagName: "button",
      properties: {
        type: "button",
        className: "copy",
        title: "Copy to clipboard",
        onclick: `
          navigator.clipboard.writeText(this.previousSibling.textContent),
          this.className='copied',
          this.title='Copied!',
          setTimeout(()=>this.className='copy',5000)`.replace(/\s+/g, ""),
      },
      children: [
        {
          type: "element",
          tagName: "svg",
          properties: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          children: [
            {
              type: "element",
              tagName: "rect",
              properties: {
                width: "8",
                height: "4",
                x: "8",
                y: "2",
                rx: "1",
                ry: "1",
              },
              children: [],
            },
            {
              type: "element",
              tagName: "path",
              properties: {
                d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
              },
              children: [],
            },
            {
              type: "element",
              tagName: "path",
              properties: {
                class: "check",
                d: "m9 14 2 2 4-4",
              },
              children: [],
            },
          ],
        },
      ],
    });
  },
});

export default defineConfig({
  root: "contents",
  collections: {
    posts: {
      name: "Post",
      pattern: "posts/**/*.md",
      schema: s
        .object({
          title: s.string().describe("記事のタイトル"),
          date: s.isodate().describe("公開日"),
          description: s.string().describe("記事の説明文"),
          tags: s
            .array(s.string())
            .optional()
            .default([])
            .describe("記事に関連するタグの配列"),
          draft: s
            .boolean()
            .optional()
            .default(false)
            .describe("下書き状態かどうか"),
          author: s.string().optional().describe("著者名"),
          coverImage: s.string().optional().describe("カバー画像のパス"),
          content: s.markdown().describe("HTMLに変換されたコンテンツ"),
        })
        .transform((data, { meta }) => {
          const path = String(meta.path || "");
          const filename = path.split("/").pop() || "";
          const slug = filename.replace(MD_EXTENSION_REGEX, "");
          const rawMarkdown = String(meta.content || "");

          return {
            ...data,
            slug,
            html: data.content,
            content: rawMarkdown,
            excerpt: generateExcerpt(rawMarkdown),
            readingTime: calculateReadingTime(rawMarkdown),
            url: `/posts/${slug}`,
          };
        }),
    },
  },
  markdown: {
    rehypePlugins: [
      [
        // biome-ignore lint/suspicious/noExplicitAny: <https://velite.js.org/guide/code-highlighting#shikijs-rehype>
        rehypeShiki as any,
        { theme: "one-dark-pro", transformers: [transformerCopyButton()] },
      ],
    ],
  },
});
