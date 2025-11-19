import { describe, expect, it } from "vitest";
import { FIXTURES_DIR } from "./__fixtures__";
import { loadMarkdownFiles } from "./loader";

describe(loadMarkdownFiles, () => {
  it("正常系: マークダウンファイルを読み込んでパースできる", async () => {
    const files = await loadMarkdownFiles(FIXTURES_DIR);

    const validPost = files.find((f) => f.slug === "valid-post");
    expect(validPost).toBeDefined();
    expect(validPost).toMatchObject({
      slug: "valid-post",
      filename: "valid-post.md",
      frontmatter: {
        title: "Valid Test Post",
        date: "2024-01-15",
        description: "This is a test post for unit testing",
        tags: ["test", "unit-test"],
      },
      content: expect.stringContaining("# Test Content"),
      filepath: expect.stringContaining("valid-post.md"),
    });
  });

  it("正常系: .mdファイル以外は無視される", async () => {
    const files = await loadMarkdownFiles(FIXTURES_DIR);

    const filenames = files.map((f) => f.filename);
    expect(filenames).toEqual(expect.not.arrayContaining(["non-markdown.txt"]));
  });

  it("正常系: 複数のマークダウンファイルを読み込める", async () => {
    const files = await loadMarkdownFiles(FIXTURES_DIR);

    expect(files.length).toBeGreaterThan(1);
    const slugs = files.map((f) => f.slug);
    expect(slugs).toEqual(expect.arrayContaining(["valid-post", "my-post"]));
  });

  it("異常系: 存在しないディレクトリの場合エラー", async () => {
    await expect(
      loadMarkdownFiles("/non-existent-directory-12345")
    ).rejects.toThrow();
  });
});
