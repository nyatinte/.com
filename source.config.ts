import rehypeShiki from "@shikijs/rehype";
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import type { ShikiTransformer } from "shiki";
import { z } from "zod";

// Veliteのコピーボタンtransformerを再利用
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

// ブログ定義（docsとして定義）
export const blog = defineDocs({
  dir: "contents/posts",
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string().or(z.date()),
      author: z.string().optional(),
      coverImage: z.string().optional(),
      tags: z.array(z.string()).optional().default([]),
      draft: z.boolean().optional().default(false),
      readingTime: z.number().optional(),
    }),
  },
});

// グローバルMDXオプション
export default defineConfig({
  mdxOptions: {
    rehypePlugins: [
      [
        // biome-ignore lint/suspicious/noExplicitAny: Shiki型定義の互換性
        rehypeShiki as any,
        {
          theme: "one-dark-pro",
          transformers: [transformerCopyButton()],
        },
      ],
    ],
  },
});
