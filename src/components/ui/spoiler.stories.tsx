import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Spoiler } from "./spoiler";

const meta = {
  title: "UI/Spoiler",
  component: Spoiler,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#2E3440" }],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "game"],
      description: "スポイラーのスタイルバリアント",
    },
    title: {
      control: "text",
      description: "作品名（「〇〇のネタバレ注意」の形式で表示）",
    },
    until: {
      control: "text",
      description: "ネタバレの範囲（例: 第3章まで、エンディングまで）",
    },
    description: {
      control: "text",
      description: "カスタム説明文（untilより優先）",
    },
  },
  decorators: [
    (StoryComponent) => (
      <div className="w-[500px]">
        <StoryComponent />
      </div>
    ),
  ],
} satisfies Meta<typeof Spoiler>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトの警告表示。
 * シンプルに「ネタバレ注意」と表示されます。
 */
export const Default: Story = {
  args: {
    variant: "default",
  },
};

/**
 * ゲーム向けバリアント。
 * 紫のアクセントカラーとゲームコントローラーアイコンで表示されます。
 */
export const Game: Story = {
  args: {
    variant: "game",
  },
};

/**
 * 作品名を指定した場合。
 * タイトルが「〇〇のネタバレ注意」に自動変換されます。
 */
export const WithTitle: Story = {
  args: {
    variant: "game",
    title: "ゼルダの伝説 ティアーズ オブ ザ キングダム",
  },
};

/**
 * ネタバレの範囲を指定。
 * 「この記事は〇〇のネタバレを含みます」と表示されます。
 */
export const WithUntil: Story = {
  args: {
    variant: "game",
    title: "FF7 リバース",
    until: "第3章まで",
  },
};

/**
 * エンディングまでのネタバレ警告
 */
export const UntilEnding: Story = {
  args: {
    variant: "game",
    title: "ペルソナ5",
    until: "エンディングまで",
  },
};

/**
 * カスタム説明文を使用
 */
export const CustomDescription: Story = {
  args: {
    variant: "default",
    title: "進撃の巨人",
    description:
      "この記事には最終話までの重大なネタバレが含まれています。原作未読の方はご注意ください。",
  },
};

/**
 * 映画・ドラマ向け（デフォルトバリアント）
 */
export const Movie: Story = {
  args: {
    variant: "default",
    title: "インターステラー",
    until: "ラストシーンまで",
  },
};
