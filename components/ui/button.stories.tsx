import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import preview from "../../.storybook/preview";
import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
      description: "ボタンのスタイルバリアント",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "ボタンのサイズ",
    },
    disabled: {
      control: "boolean",
      description: "ボタンを無効化",
    },
    children: {
      control: "text",
      description: "ボタンのテキスト内容",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトのプライマリボタン。グラデーション背景と影付きで、
 * ホバー時にスケールアップするアニメーション効果があります。
 */
export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Primary Button",
  },
};

/**
 * セカンダリボタン。境界線とテキストのみのスタイルで、
 * ホバー時に背景色が変化します。
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    children: "Secondary Button",
  },
};

/**
 * ゴーストボタン。背景なしのテキストのみのスタイルで、
 * ホバー時にミュートされた背景色が表示されます。
 */
export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "md",
    children: "Ghost Button",
  },
};

/**
 * 小サイズのボタン
 */
export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Small Button",
  },
};

/**
 * 中サイズのボタン（デフォルト）
 */
export const Medium: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Medium Button",
  },
};

/**
 * 大サイズのボタン
 */
export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Large Button",
  },
};

/**
 * 無効化されたボタン。クリックできず、視覚的にも無効であることを示します。
 */
export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Disabled Button",
    disabled: true,
  },
};

/**
 * アイコン付きボタン。Lucide Reactのアイコンを組み合わせた例です。
 */
export const WithIcon: Story = {
  render: (args) => {
    // アイコンをインラインで定義（Lucide Reactのようなスタイル）
    const ChevronRight = () => (
      <svg
        className="ml-2"
        fill="none"
        height="16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Chevron Right</title>
        <polyline points="9 18 15 12 9 6" />
      </svg>
    );

    return (
      <Button {...args}>
        {args.children}
        <ChevronRight />
      </Button>
    );
  },
  args: {
    variant: "primary",
    size: "md",
    children: "Next Step",
  },
};

/**
 * 長いテキストを持つボタン
 */
export const LongText: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "これは非常に長いテキストを持つボタンです",
  },
};
