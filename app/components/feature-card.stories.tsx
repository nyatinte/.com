import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Rocket, Smartphone, Users, Zap } from "lucide-react";
import { FeatureCard } from "./feature-card";

const meta = {
  title: "Components/FeatureCard",
  component: FeatureCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "カードのタイトル",
    },
    description: {
      control: "text",
      description: "カードの説明文",
    },
    icon: {
      control: "select",
      options: ["Zap", "Smartphone", "Users", "Rocket"],
      mapping: {
        Zap,
        Smartphone,
        Users,
        Rocket,
      },
      description: "カードに表示するアイコン",
    },
    iconColor: {
      control: "color",
      description: "アイコンの色",
    },
  },
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトのフィーチャーカード。Storybookのコントロールパネルでタイトル、説明、アイコン、色を調整できます。
 */
export const Default: Story = {
  args: {
    title: "高速パフォーマンス",
    description: "最新の技術を使用して、最高のパフォーマンスを実現します。",
    icon: Zap,
    iconColor: "#88C0D0",
  },
};
