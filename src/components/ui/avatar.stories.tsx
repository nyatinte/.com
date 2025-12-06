import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const meta = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 画像付きのデフォルトアバター
 */
export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage alt="User Avatar" src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

/**
 * フォールバック表示のアバター（画像なし）
 */
export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage alt="User Avatar" src="/broken-image.jpg" />
      <AvatarFallback>NY</AvatarFallback>
    </Avatar>
  ),
};

/**
 * 大サイズのアバター
 */
export const Large: Story = {
  render: () => (
    <Avatar className="size-16">
      <AvatarImage alt="User Avatar" src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

/**
 * 小サイズのアバター
 */
export const Small: Story = {
  render: () => (
    <Avatar className="size-6">
      <AvatarImage alt="User Avatar" src="https://github.com/shadcn.png" />
      <AvatarFallback className="text-xs">CN</AvatarFallback>
    </Avatar>
  ),
};

/**
 * 複数のアバターを並べた表示
 */
export const Group: Story = {
  render: () => (
    <div className="-space-x-2 flex">
      <Avatar className="border-2 border-background">
        <AvatarImage alt="User 1" src="https://github.com/shadcn.png" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage alt="User 2" src="https://github.com/vercel.png" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback>+3</AvatarFallback>
      </Avatar>
    </div>
  ),
};
