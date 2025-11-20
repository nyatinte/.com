import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ThemeSwitcher } from "./theme-switcher";

// next-themesのモック
vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "system",
    setTheme: vi.fn(),
  }),
}));

describe("ThemeSwitcher", () => {
  it("正常系: 3つのテーマボタンが表示される", () => {
    render(<ThemeSwitcher />);

    expect(screen.getByLabelText("System theme")).toBeInTheDocument();
    expect(screen.getByLabelText("Light theme")).toBeInTheDocument();
    expect(screen.getByLabelText("Dark theme")).toBeInTheDocument();
  });

  it("正常系: デフォルト値が'system'の場合、Systemボタンがアクティブ", () => {
    render(<ThemeSwitcher defaultValue="system" />);

    const systemButton = screen.getByLabelText("System theme");
    expect(systemButton).toBeInTheDocument();
  });

  it("正常系: デフォルト値が'light'の場合、Lightボタンがアクティブ", () => {
    render(<ThemeSwitcher defaultValue="light" />);

    const lightButton = screen.getByLabelText("Light theme");
    expect(lightButton).toBeInTheDocument();
  });

  it("正常系: デフォルト値が'dark'の場合、Darkボタンがアクティブ", () => {
    render(<ThemeSwitcher defaultValue="dark" />);

    const darkButton = screen.getByLabelText("Dark theme");
    expect(darkButton).toBeInTheDocument();
  });

  it("正常系: テーマボタンをクリックするとonChangeが呼ばれる", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<ThemeSwitcher defaultValue="system" onChange={handleChange} />);

    const lightButton = screen.getByLabelText("Light theme");
    await user.click(lightButton);

    expect(handleChange).toHaveBeenCalledWith("light");
  });

  it("正常系: カスタムクラスが適用される", () => {
    const { container } = render(
      <ThemeSwitcher className="custom-class" defaultValue="system" />
    );

    const wrapper = container.querySelector(".custom-class");
    expect(wrapper).toBeInTheDocument();
  });

  it("正常系: すべてのボタンがbutton要素である", () => {
    render(<ThemeSwitcher />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);

    for (const button of buttons) {
      expect(button.tagName).toBe("BUTTON");
      expect(button).toHaveAttribute("type", "button");
    }
  });

  it("正常系: aria-labelが適切に設定されている", () => {
    render(<ThemeSwitcher />);

    const systemButton = screen.getByLabelText("System theme");
    const lightButton = screen.getByLabelText("Light theme");
    const darkButton = screen.getByLabelText("Dark theme");

    expect(systemButton).toHaveAttribute("aria-label", "System theme");
    expect(lightButton).toHaveAttribute("aria-label", "Light theme");
    expect(darkButton).toHaveAttribute("aria-label", "Dark theme");
  });
});
