import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NavLink } from "./nav-link";

const meta = {
  title: "Components/NavLink",
  component: NavLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
      description: "リンクの遷移先URL",
    },
    children: {
      control: "text",
      description: "リンクのテキスト内容",
    },
  },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトのナビゲーションリンク。
 * hrefとchildrenはコントロールパネルから編集可能です。
 */
export const Default: Story = {
  args: {
    href: "/",
    children: "Home",
  },
};
