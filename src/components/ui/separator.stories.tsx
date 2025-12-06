import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Separator } from "./separator";

const meta = {
  title: "UI/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "区切り線の向き",
    },
    decorative: {
      control: "boolean",
      description: "装飾目的かどうか（アクセシビリティ用）",
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 水平方向のデフォルト区切り線
 */
export const Horizontal: Story = {
  render: (args) => (
    <div className="w-[300px]">
      <div className="text-sm">上のコンテンツ</div>
      <Separator {...args} className="my-4" />
      <div className="text-sm">下のコンテンツ</div>
    </div>
  ),
  args: {
    orientation: "horizontal",
  },
};

/**
 * 垂直方向の区切り線
 */
export const Vertical: Story = {
  render: (args) => (
    <div className="flex h-8 items-center gap-4">
      <span className="text-sm">左</span>
      <Separator {...args} />
      <span className="text-sm">右</span>
    </div>
  ),
  args: {
    orientation: "vertical",
  },
};

/**
 * ナビゲーションでの使用例
 */
export const InNavigation: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-4">
      <span className="text-sm">ホーム</span>
      <Separator orientation="vertical" />
      <span className="text-sm">ブログ</span>
      <Separator orientation="vertical" />
      <span className="text-sm">お問い合わせ</span>
    </div>
  ),
};
