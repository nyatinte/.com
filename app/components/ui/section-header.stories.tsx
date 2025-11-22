import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SectionHeader } from "./section-header";

const meta = {
  title: "UI/SectionHeader",
  component: SectionHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "セクションの上部に表示されるラベル（オプション）",
    },
    title: {
      control: "text",
      description: "セクションのメインタイトル（必須）",
    },
    description: {
      control: "text",
      description: "タイトルの下に表示される説明テキスト（オプション）",
    },
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * タイトルのみの最小限の構成
 */
export const Default: Story = {
  args: {
    title: "セクションタイトル",
  },
};

/**
 * ラベル付きのセクションヘッダー
 */
export const WithLabel: Story = {
  args: {
    label: "セクションラベル",
    title: "タイトルテキスト",
  },
};

/**
 * 説明文付きのセクションヘッダー
 */
export const WithDescription: Story = {
  args: {
    title: "セクションタイトル",
    description:
      "このセクションの説明文がここに表示されます。より詳細な情報を提供し、ユーザーにコンテンツの概要を理解させるために使用されます。",
  },
};

/**
 * ラベル、タイトル、説明をすべて含むフル構成
 */
export const Complete: Story = {
  args: {
    label: "新機能",
    title: "素晴らしい新しい機能",
    description:
      "このセクションでは、プロダクトの最新機能や更新についての詳細な説明を提供します。ユーザーが機能を理解し、どのように役立つかを把握できるようにサポートします。",
  },
};

/**
 * 長いタイトルテキストの例
 */
export const LongTitle: Story = {
  args: {
    label: "セクション",
    title: "複数行にわたる非常に長いセクションタイトルの例です",
    description:
      "このストーリーは、長いタイトルがどのように表示されるかを示しています。",
  },
};
