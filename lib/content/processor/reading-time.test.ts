import { describe, expect, it } from "vitest";
import { calculateReadingTime } from "./reading-time";

describe(calculateReadingTime, () => {
  it("正常系: 短いコンテンツ(2単語)は1分と計算される", () => {
    const shortContent = "Short content.";

    const result = calculateReadingTime(shortContent);

    expect(result).toBe(1);
  });

  it("正常系: 400単語のコンテンツは2分と計算される (200単語/分)", () => {
    const longContent = "word ".repeat(400);

    const result = calculateReadingTime(longContent);

    expect(result).toBe(2);
  });

  it("正常系: 空のコンテンツは最小値の1分と計算される", () => {
    const emptyContent = "";

    const result = calculateReadingTime(emptyContent);

    expect(result).toBe(1);
  });
});
