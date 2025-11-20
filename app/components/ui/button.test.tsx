import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Button } from "./button";

const BG_PRIMARY_REGEX = /bg-primary/;
const BG_DESTRUCTIVE_REGEX = /bg-destructive/;
const BORDER_REGEX = /border/;
const HEIGHT_SM_REGEX = /h-8/;
const HEIGHT_LG_REGEX = /h-10/;

describe("Button", () => {
  describe("レンダリング", () => {
    test("テキストを表示できる", async () => {
      // given
      const { getByRole } = await render(<Button>クリック</Button>);
      const button = getByRole("button");

      // then
      await expect.element(button).toBeInTheDocument();
      await expect.element(button).toHaveTextContent("クリック");
    });
  });

  describe("バリアント", () => {
    test("defaultバリアントを適用できる", async () => {
      // given
      const { getByRole } = await render(
        <Button variant="default">Default</Button>
      );
      const button = getByRole("button");

      // then
      await expect.element(button).toHaveClass(BG_PRIMARY_REGEX);
    });

    test("destructiveバリアントを適用できる", async () => {
      // given
      const { getByRole } = await render(
        <Button variant="destructive">Delete</Button>
      );
      const button = getByRole("button");

      // then
      await expect.element(button).toHaveClass(BG_DESTRUCTIVE_REGEX);
    });

    test("outlineバリアントを適用できる", async () => {
      // given
      const { getByRole } = await render(
        <Button variant="outline">Outline</Button>
      );
      const button = getByRole("button");

      // then
      await expect.element(button).toHaveClass(BORDER_REGEX);
    });
  });

  describe("サイズ", () => {
    test("smサイズを適用できる", async () => {
      // given
      const { getByRole } = await render(<Button size="sm">Small</Button>);
      const button = getByRole("button");

      // then
      await expect.element(button).toHaveClass(HEIGHT_SM_REGEX);
    });

    test("lgサイズを適用できる", async () => {
      // given
      const { getByRole } = await render(<Button size="lg">Large</Button>);
      const button = getByRole("button");

      // then
      await expect.element(button).toHaveClass(HEIGHT_LG_REGEX);
    });
  });

  describe("インタラクション", () => {
    test("クリックイベントを処理できる", async () => {
      // given
      let clicked = false;
      const { getByRole } = await render(
        <Button
          onClick={() => {
            clicked = true;
          }}
        >
          Click
        </Button>
      );
      const button = getByRole("button");

      // when
      await button.click();

      // then
      expect(clicked).toBe(true);
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
