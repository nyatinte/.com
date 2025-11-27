import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Button } from "./button";

describe("Button", () => {
  describe("インタラクション", () => {
    test("disabled属性で無効化できる", async () => {
      // given
      const { getByRole } = await render(<Button disabled>Disabled</Button>);
      const button = getByRole("button");

      // then
      await expect.element(button).toBeDisabled();
    });
  });
});
