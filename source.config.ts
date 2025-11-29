import {
  type RehypeCodeOptions,
  remarkMdxFiles,
} from "fumadocs-core/mdx-plugins";
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

const TAGS = new Set([
  "JavaScript",
  "TypeScript",
  "Markdown",
  "Next.js",
  "App Router",
  "React",
]);

export const blog = defineDocs({
  dir: "contents/posts",
  docs: {
    schema: frontmatterSchema.extend({
      date: z.coerce.date().transform((date) => date.toISOString()),
      coverImage: z.string().optional(),
      tags: z
        .array(z.enum(Array.from(TAGS)))
        .optional()
        .default([]),
      draft: z.boolean().optional().default(false),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

const rehypeCodeOptions: RehypeCodeOptions = {
  themes: {
    light: "github-light",
    dark: "github-dark",
  },
  inline: "tailing-curly-colon",
};

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxFiles],
    rehypeCodeOptions,
  },
});
