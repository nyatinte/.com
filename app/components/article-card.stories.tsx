import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BookOpen, Code2, Lightbulb, Zap } from "lucide-react";
import { ArticleCard } from "./article-card";

const meta = {
  title: "Components/ArticleCard",
  component: ArticleCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "記事のタイトル",
    },
    description: {
      control: "text",
      description: "記事の説明文",
    },
    date: {
      control: "text",
      description: "公開日（例：2024-01-15）",
    },
    readingTime: {
      control: { type: "number", min: 1, max: 60, step: 1 },
      description: "読了時間（分）",
    },
    category: {
      control: "text",
      description: "カテゴリ名",
    },
    categoryColor: {
      control: "color",
      description: "カテゴリの強調カラー",
    },
    icon: {
      control: "select",
      options: ["Code2", "Lightbulb", "Zap", "BookOpen"],
      mapping: {
        Code2,
        Lightbulb,
        Zap,
        BookOpen,
      },
      description: "記事を表現するアイコン",
    },
    href: {
      control: "text",
      description: "記事へのリンク",
    },
  },
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 記事カードのデフォルト表示。
 * Storybookコントロールパネルで、タイトル、説明、日付、読了時間、
 * カテゴリ、カラー、アイコンを自由に調整できます。
 */
export const Default: Story = {
  args: {
    title: "TypeScriptで型安全なコードを書く",
    description:
      "TypeScriptの高度な型機能を使用して、より安全で保守しやすいコードを書く方法について学びます。",
    date: "2024-01-15",
    readingTime: 8,
    category: "TECH",
    categoryColor: "#88C0D0",
    icon: Code2,
    href: "/posts",
  },
};
