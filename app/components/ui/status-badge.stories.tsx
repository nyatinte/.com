import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StatusBadge } from "./status-badge";

const meta = {
  title: "UI/StatusBadge",
  component: StatusBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "ステータスのラベルテキスト",
    },
    icon: {
      control: "text",
      description: "ラベルの前に表示されるアイコン（絵文字など）",
    },
  },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトのステータスバッジ
 */
export const Default: Story = {
  args: {
    label: "Online",
  },
};

/**
 * アイコン付きのステータスバッジ
 */
export const WithIcon: Story = {
  args: {
    label: "Active",
    icon: "✓",
  },
};

/**
 * 長いラベルのステータスバッジ
 */
export const LongLabel: Story = {
  args: {
    label: "Processing Request",
  },
};

/**
 * 絵文字アイコン付きのステータスバッジ
 */
export const WithEmojiIcon: Story = {
  args: {
    label: "Ready",
    icon: "⚡",
  },
};
