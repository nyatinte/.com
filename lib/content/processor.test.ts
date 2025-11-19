import { describe, expect, it } from "vitest";
import { FIXTURES_DIR } from "./__fixtures__";
import { loadMarkdownFiles } from "./loader";
import { processMarkdown } from "./processor";
import { PostFrontmatterSchema } from "./schema";

describe(processMarkdown, () => {
  it("正常系: マークダウンをHTMLに変換できる", async () => {
    const files = await loadMarkdownFiles(FIXTURES_DIR);
    const validPost = files.find((f) => f.slug === "valid-post");

    if (!validPost) {
      throw new Error("valid-post not found");
    }

    const frontmatter = PostFrontmatterSchema.parse(validPost.frontmatter);
    const result = await processMarkdown(
      validPost.content,
      frontmatter,
      validPost.slug
    );

    expect(result.html).toMatchSnapshot();
    expect(result).toMatchObject({
      content: validPost.content,
      slug: "valid-post",
    });
  });

  it("正常系: 様々なマークダウン機能のスナップショット", async () => {
    const files = await loadMarkdownFiles(FIXTURES_DIR);
    const comprehensivePost = files.find(
      (f) => f.slug === "comprehensive-test"
    );

    if (!comprehensivePost) {
      throw new Error("comprehensive-test not found");
    }

    const frontmatter = PostFrontmatterSchema.parse(
      comprehensivePost.frontmatter
    );
    const result = await processMarkdown(
      comprehensivePost.content,
      frontmatter,
      comprehensivePost.slug
    );

    expect(result).toMatchSnapshot();
  });
});
