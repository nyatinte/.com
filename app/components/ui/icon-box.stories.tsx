import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Heart, Settings, Star, Zap } from "lucide-react";
import { IconBox } from "./icon-box";

const meta = {
  title: "UI/IconBox",
  component: IconBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "アイコンボックスのサイズ",
    },
    variant: {
      control: "select",
      options: ["filled", "outlined"],
      description: "アイコンボックスのスタイルバリアント",
    },
    color: {
      control: "color",
      description: "アイコンの色",
    },
    animate: {
      control: "boolean",
      description: "ホバー時のアニメーション効果を有効化",
    },
  },
} satisfies Meta<typeof IconBox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトのIconBox（中サイズ、アウトラインバリアント）
 */
export const Default: Story = {
  args: {
    icon: Zap,
    size: "md",
    variant: "outlined",
    color: "#3B82F6",
    animate: false,
  },
};

/**
 * 小サイズのアイコンボックス
 */
export const Small: Story = {
  args: {
    icon: Star,
    size: "sm",
    variant: "outlined",
    color: "#EC4899",
    animate: false,
  },
};

/**
 * 大サイズのアイコンボックス
 */
export const Large: Story = {
  args: {
    icon: Heart,
    size: "lg",
    variant: "outlined",
    color: "#EF4444",
    animate: false,
  },
};

/**
 * フィル型のアイコンボックス
 */
export const Filled: Story = {
  args: {
    icon: Settings,
    size: "md",
    variant: "filled",
    color: "#8B5CF6",
    animate: false,
  },
};

/**
 * アニメーション有効なアイコンボックス（ホバーで拡大）
 */
export const Animated: Story = {
  args: {
    icon: Zap,
    size: "md",
    variant: "outlined",
    color: "#10B981",
    animate: true,
  },
};

/**
 * フィル型でアニメーション有効
 */
export const FilledAnimated: Story = {
  args: {
    icon: Heart,
    size: "lg",
    variant: "filled",
    color: "#F59E0B",
    animate: true,
  },
};
