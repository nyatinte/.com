import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { ThemeSwitcher } from "./theme-switcher";

describe(ThemeSwitcher.name, () => {
  describe("デフォルト値に対応するボタンがアクティブになる", () => {
    it("正常系: デフォルト値が'system'の場合、Systemボタンがアクティブ", async () => {
      const { getByRole } = await render(
        <ThemeSwitcher defaultValue="system" />
      );
      const systemButton = getByRole("button", { name: "System theme" });
      expect(systemButton).toBeInTheDocument();
    });

    it("正常系: デフォルト値が'light'の場合、Lightボタンがアクティブ", async () => {
      const { getByRole } = await render(
        <ThemeSwitcher defaultValue="light" />
      );

      expect(getByRole("button", { name: "Light theme" })).toBeInTheDocument();
    });

    it("正常系: デフォルト値が'dark'の場合、Darkボタンがアクティブ", async () => {
      const { getByRole } = await render(<ThemeSwitcher defaultValue="dark" />);

      expect(getByRole("button", { name: "Dark theme" })).toBeInTheDocument();
    });
  });
  describe("テーマを変更できる", () => {
    it("正常系: テーマを変更できる", async () => {
      const { getByRole } = await render(<ThemeSwitcher defaultValue="dark" />);
      const systemButton = getByRole("button", { name: "System theme" });
      expect(systemButton).toBeInTheDocument();
    });
  });
});
