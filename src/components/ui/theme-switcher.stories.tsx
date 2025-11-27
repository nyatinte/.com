import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThemeSwitcher } from "./theme-switcher";

const meta = {
  title: "Header/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "select",
      options: ["system", "light", "dark"],
      description: "デフォルトのテーマ",
    },
    className: {
      control: "text",
      description: "追加のCSSクラス",
    },
  },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト状態のテーマスイッチャー（System設定）
 */
export const Default: Story = {
  args: {
    defaultValue: "system",
  },
};

/**
 * ライトモードで初期化されたテーマスイッチャー
 */
export const LightMode: Story = {
  args: {
    defaultValue: "light",
  },
};

/**
 * ダークモードで初期化されたテーマスイッチャー
 */
export const DarkMode: Story = {
  args: {
    defaultValue: "dark",
  },
};

/**
 * カスタムクラスを適用したテーマスイッチャー
 */
export const WithCustomClass: Story = {
  args: {
    defaultValue: "system",
    className: "shadow-lg",
  },
};

/**
 * 状態変更のインタラクションデモ
 */
export const Interactive: Story = {
  args: {
    defaultValue: "system",
    onChange: (theme) => {
      console.log("Theme changed to:", theme);
    },
  },
};
