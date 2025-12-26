import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { CatchupCardData } from "./catchup-card";
import { CatchupCardStack } from "./catchup-card-stack";

const sampleCards: CatchupCardData[] = [
  {
    id: "1",
    title: "Next.js 15の新機能を徹底解説",
    description:
      "App RouterとServer Actionsの進化、新しいキャッシング戦略、パフォーマンス改善について詳しく解説します。",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    date: "2024年12月20日",
    tags: ["Next.js", "React", "Web開発"],
  },
  {
    id: "2",
    title: "TypeScript 5.5で追加された型推論の改善",
    description:
      "新しい型推論機能と、より安全なコードを書くためのベストプラクティスを紹介します。",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    date: "2024年12月18日",
    tags: ["TypeScript", "型安全性"],
  },
  {
    id: "3",
    title: "TailwindCSS v4のすべて",
    description:
      "新しいエンジン、CSS変数ベースの設定、パフォーマンスの向上など、v4の変更点を網羅的に解説。",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    date: "2024年12月15日",
    tags: ["TailwindCSS", "CSS", "デザイン"],
  },
  {
    id: "4",
    title: "React Server Componentsのベストプラクティス",
    description:
      "サーバーコンポーネントとクライアントコンポーネントの使い分け、データフェッチングパターンを解説。",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    date: "2024年12月12日",
    tags: ["React", "Server Components", "パフォーマンス"],
  },
  {
    id: "5",
    title: "Biomeで統一するコード品質管理",
    description:
      "ESLintとPrettierを置き換える高速なRust製ツールチェーン。設定方法と移行ガイド。",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    date: "2024年12月10日",
    tags: ["Biome", "開発ツール", "Rust"],
  },
];

const meta = {
  title: "UI/CatchupCardStack",
  component: CatchupCardStack,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#2E3440" }],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    cards: {
      control: "object",
      description: "表示するカードの配列",
    },
    onSwipe: {
      action: "swiped",
      description: "スワイプ時のコールバック",
    },
    onEmpty: {
      action: "empty",
      description: "すべてのカードがスワイプされた時のコールバック",
    },
  },
  decorators: [
    (StoryComponent) => (
      <div className="flex h-screen items-center justify-center bg-[#2E3440] p-4">
        <StoryComponent />
      </div>
    ),
  ],
} satisfies Meta<typeof CatchupCardStack>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 5枚のカードを持つデフォルトのスタック
 */
export const Default: Story = {
  args: {
    cards: sampleCards,
  },
};

/**
 * 2枚のカードのみのスタック
 */
export const FewCards: Story = {
  args: {
    cards: sampleCards.slice(0, 2),
  },
};

/**
 * 1枚のカードのみ
 */
export const SingleCard: Story = {
  args: {
    cards: sampleCards.slice(0, 1),
  },
};

/**
 * カードがない状態（完了状態）
 */
export const Empty: Story = {
  args: {
    cards: [],
  },
};

/**
 * 多くのタグを持つカード
 */
export const ManyTags: Story = {
  args: {
    cards: [
      {
        id: "1",
        title: "フルスタック開発の完全ガイド",
        description:
          "フロントエンドからバックエンド、インフラまで網羅的に解説する超大作記事。",
        imageUrl:
          "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
        date: "2024年12月25日",
        tags: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Docker",
          "Kubernetes",
        ],
      },
      ...sampleCards.slice(1, 3),
    ],
  },
};

/**
 * 長いタイトルと説明を持つカード
 */
export const LongContent: Story = {
  args: {
    cards: [
      {
        id: "1",
        title:
          "React Server ComponentsとクライアントコンポーネントのベストプラクティスManyカード開発ガイドライン",
        description:
          "React 19で導入されたServer Componentsの仕組みと、従来のクライアントコンポーネントとの使い分けについて、実例を交えながら詳しく解説します。パフォーマンス最適化のポイントも紹介。データフェッチング、キャッシング、ストリーミングレンダリングなど、モダンなReact開発に必要な知識を網羅。",
        imageUrl:
          "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
        date: "2024年12月25日",
        tags: ["React", "Server Components"],
      },
      ...sampleCards.slice(1, 3),
    ],
  },
};
