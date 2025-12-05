import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PostCard } from "./post-card";

const meta = {
  title: "UI/PostCard",
  component: PostCard,
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
      description: "記事の簡易説明",
    },
    date: {
      control: "text",
      description: "公開日",
    },
    imageUrl: {
      control: "text",
      description: "トップ画像のURL",
    },
    imageAlt: {
      control: "text",
      description: "画像の代替テキスト",
    },
    imageWidth: {
      control: "number",
      description: "画像の幅",
    },
    imageHeight: {
      control: "number",
      description: "画像の高さ",
    },
    tags: {
      control: "object",
      description: "記事のタグ（配列）",
    },
    readingTime: {
      control: "number",
      description: "読了時間（分）",
    },
  },
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトのブログカード。全ての要素を含んだ完全な例
 */
export const Default: Story = {
  args: {
    title: "Ethereal Swirl Gradient",
    description:
      "Smooth, flowing gradients blending rich reds and blues in an abstract swirl.",
    date: "2024年11月16日",
    tags: ["デザイン", "グラデーション", "アート"],
    readingTime: 5,
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    imageAlt: "Banner",
  },
};

/**
 * タグなしのシンプルなブログカード
 */
export const WithoutTags: Story = {
  args: {
    title: "Next.js 14の新機能",
    description: "App Routerとサーバーコンポーネントの詳細ガイド",
    date: "2024年11月15日",
    readingTime: 8,
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    imageAlt: "Next.js 14",
  },
};

/**
 * 読了時間なしのブログカード
 */
export const WithoutReadingTime: Story = {
  args: {
    title: "TypeScript 5の型システム",
    description: "新しい型機能と実践的な使い方を学ぶ",
    date: "2024年11月14日",
    tags: ["TypeScript", "型安全性"],
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    imageAlt: "TypeScript",
  },
};

/**
 * 日付のみのミニマルなブログカード
 */
export const Minimal: Story = {
  args: {
    title: "クリーンなデザインの重要性",
    description: "シンプルで美しいUIを作るための原則",
    date: "2024年11月13日",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    imageAlt: "Clean Design",
  },
};

/**
 * 多数のタグを持つブログカード
 */
export const ManyTags: Story = {
  args: {
    title: "フルスタック開発の完全ガイド",
    description: "フロントエンドからバックエンド、インフラまで網羅的に解説",
    date: "2024年11月12日",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    readingTime: 15,
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    imageAlt: "Full Stack Development",
  },
};

/**
 * 長いタイトルと説明を持つブログカード
 */
export const LongContent: Story = {
  args: {
    title:
      "React Server Componentsとクライアントコンポーネントの違いを理解する：包括的なガイド",
    description:
      "React 19で導入されたServer Componentsの仕組みと、従来のクライアントコンポーネントとの使い分けについて、実例を交えながら詳しく解説します。パフォーマンス最適化のポイントも紹介。",
    date: "2024年11月11日",
    tags: ["React", "Server Components", "パフォーマンス"],
    readingTime: 12,
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    imageAlt: "React Server Components",
  },
};

/**
 * 短い読了時間のクイックリード記事
 */
export const QuickRead: Story = {
  args: {
    title: "CSS Gridの基本",
    description: "5分で理解するモダンレイアウト",
    date: "2024年11月10日",
    tags: ["CSS", "レイアウト"],
    readingTime: 3,
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    imageAlt: "CSS Grid",
  },
};

/**
 * 長時間の詳細記事
 */
export const LongRead: Story = {
  args: {
    title: "マイクロサービスアーキテクチャ完全ガイド",
    description:
      "設計、実装、運用まで、実践的なマイクロサービスの構築方法を徹底解説",
    date: "2024年11月9日",
    tags: ["アーキテクチャ", "マイクロサービス", "DevOps"],
    readingTime: 25,
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    imageAlt: "Microservices",
  },
};
