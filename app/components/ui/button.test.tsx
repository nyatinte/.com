import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { Button } from "./button";

describe("Button", () => {
  describe("インタラクション", () => {
    test("クリックイベントを処理できる", async () => {
      // given
      const handleClick = vi.fn();
      const { getByRole } = await render(
        <Button
          onClick={() => {
            handleClick();
          }}
        >
          Click
        </Button>
      );
      const button = getByRole("button");

      // when
      await button.click();

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
