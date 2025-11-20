import { describe, expect, test, vi } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-react";
import { Button } from "./button";

describe("Button", () => {
  describe("インタラクション", () => {
    test("クリックイベントを処理できる", async () => {
      // given
      const handleClick = vi.fn();
      await render(
        <Button
          onClick={() => {
            handleClick();
          }}
        >
          Click
        </Button>
      );

      // when
      await page.getByRole("button", { name: "Click" }).click();

      // then
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("disabled属性で無効化できる", async () => {
      // given
      const { getByRole } = await render(<Button disabled>Disabled</Button>);
      const button = getByRole("button");

      // then
      await expect.element(button).toBeDisabled();
    });
  });
});
