import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { generateCopyright } from "./copyright";

describe(generateCopyright, () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  it("startYear と現在の年が同じ場合は範囲指定のない copyright を返す", () => {
    // given
    vi.setSystemTime(new Date("2025-1-1"));
    const startYear = 2025;

    // when
    const result = generateCopyright(startYear, "Nyatinte");

    // then
    expect(result).toBe("© 2025 Nyatinte");
  });
  it("startYear より 現在の年が小さい場合は Error を投げる", () => {
    // given
    vi.setSystemTime(new Date("2025-1-1"));
    const startYear = 2026;

    // when
    // then
    expect(() => generateCopyright(startYear, "Nyatinte")).toThrowError();
  });
  it("startYear と現在の年が異なる場合は範囲指定のある copyright を返す", () => {
    // given
    vi.setSystemTime(new Date("2027-1-1"));
    const startYear = 2025;
    const result = generateCopyright(startYear, "Nyatinte");

    // then
    expect(result).toBe("© 2025 - 2027 Nyatinte");
  });
});
