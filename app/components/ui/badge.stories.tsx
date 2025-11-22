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
    children: "New",
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
 * 破壊的アクション（削除、警告など）を示すバッジ
 */
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Danger",
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
