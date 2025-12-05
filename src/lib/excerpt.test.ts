import { describe, expect, it } from "vitest";
import { generateExcerpt } from "./excerpt";

describe(generateExcerpt, () => {
  it("正常系: excerptが長文の場合は省略される", () => {
    const longContent = "a".repeat(200);

    const result = generateExcerpt(longContent);

    expect(result.length).toBeLessThanOrEqual(163);
    expect(result).toContain("...");
  });

  it("正常系: 短いコンテンツはそのまま返す", () => {
    const shortContent = "Short content";

    const result = generateExcerpt(shortContent);

    expect(result).toBe(shortContent);
  });

  it("正常系: マークダウン記号を削除する", () => {
    const content = "# Heading with **bold** and *italic*";

    const result = generateExcerpt(content);

    expect(result).not.toContain("#");
    expect(result).not.toContain("**");
    expect(result).not.toContain("*");
    expect(result).toContain("Heading with bold and italic");
  });
});
