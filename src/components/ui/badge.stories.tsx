import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "バッジのスタイルバリアント",
    },
    asChild: {
      control: "boolean",
      description: "子要素をルート要素として使用",
    },
    children: {
      control: "text",
      description: "バッジの内容",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトのプライマリバッジ
 */
export const Default: Story = {
  args: {
    variant: "default",
    children: "Badge",
  },
};

/**
 * セカンダリバッジ
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

/**
 * 破壊的なアクションを示すバッジ
 */
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

/**
 * アウトラインスタイルのバッジ
 */
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

/**
 * 長いテキストを持つバッジ
 */
export const LongText: Story = {
  args: {
    variant: "default",
    children: "これは長いテキストのバッジです",
  },
};

/**
 * リンクとして使用するバッジ（asChild）
 */
export const AsLink: Story = {
  render: (args) => (
    <Badge {...args} asChild>
      <a href="/example">リンクバッジ</a>
    </Badge>
  ),
  args: {
    variant: "outline",
  },
};
