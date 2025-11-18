import { describe, expect, it } from "vitest";
import { FIXTURES_DIR } from "./__fixtures__";
import { loadMarkdownFiles } from "./loader";
import { processMarkdown } from "./processor";
import { PostFrontmatterSchema, PostSchema } from "./schema";

describe("posts integration", () => {
  it("正常系: loader + processor の統合テスト", async () => {
    const files = await loadMarkdownFiles(FIXTURES_DIR);
    const posts = await Promise.all(
      files.map(async (file) => {
        const frontmatter = PostFrontmatterSchema.parse(file.frontmatter);
        return await processMarkdown(file.content, frontmatter, file.slug);
      })
    );

    expect(posts.length).toBeGreaterThan(0);

    for (const post of posts) {
      expect(post).toEqual(expect.schemaMatching(PostSchema));
    }
  });
});
