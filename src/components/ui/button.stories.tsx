import type { Meta, StoryObj } from "@storybook/nextjs-vite";
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
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "ボタンのスタイルバリアント",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
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
 * デフォルトのプライマリボタン
 */
export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Default Button",
  },
};

/**
 * 破壊的なアクションを示すボタン（削除、取り消しなど）
 */
export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "default",
    children: "Destructive Button",
  },
};

/**
 * アウトラインスタイルのボタン
 */
export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
    children: "Outline Button",
  },
};

/**
 * セカンダリボタン
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    children: "Secondary Button",
  },
};

/**
 * ゴーストボタン。背景なしのテキストのみのスタイル
 */
export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "default",
    children: "Ghost Button",
  },
};

/**
 * リンクスタイルのボタン
 */
export const Link: Story = {
  args: {
    variant: "link",
    size: "default",
    children: "Link Button",
  },
};

/**
 * 小サイズのボタン
 */
export const Small: Story = {
  args: {
    variant: "default",
    size: "sm",
    children: "Small Button",
  },
};

/**
 * 大サイズのボタン
 */
export const Large: Story = {
  args: {
    variant: "default",
    size: "lg",
    children: "Large Button",
  },
};

/**
 * アイコンのみのボタン（デフォルトサイズ）
 */
export const Icon: Story = {
  render: (args) => {
    const ChevronRight = () => (
      <svg
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
        <ChevronRight />
      </Button>
    );
  },
  args: {
    variant: "outline",
    size: "icon",
  },
};

/**
 * アイコンのみのボタン（小サイズ）
 */
export const IconSmall: Story = {
  render: (args) => {
    const ChevronRight = () => (
      <svg
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
        <ChevronRight />
      </Button>
    );
  },
  args: {
    variant: "outline",
    size: "icon-sm",
  },
};

/**
 * アイコンのみのボタン（大サイズ）
 */
export const IconLarge: Story = {
  render: (args) => {
    const ChevronRight = () => (
      <svg
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
        <ChevronRight />
      </Button>
    );
  },
  args: {
    variant: "outline",
    size: "icon-lg",
  },
};

/**
 * テキストとアイコンを組み合わせたボタン
 */
export const WithIcon: Story = {
  render: (args) => {
    const ChevronRight = () => (
      <svg
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
    variant: "default",
    size: "default",
    children: "Next Step",
  },
};

/**
 * 無効化されたボタン
 */
export const Disabled: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Disabled Button",
    disabled: true,
  },
};

/**
 * 長いテキストを持つボタン
 */
export const LongText: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "これは非常に長いテキストを持つボタンです",
  },
};
