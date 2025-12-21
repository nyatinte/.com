import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ContactHeader } from "./contact-header";

const meta = {
  title: "Components/ContactHeader",
  component: ContactHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "表示名",
    },
    tagline: {
      control: "text",
      description: "タグライン・説明文",
    },
    imageSrc: {
      control: "text",
      description: "プロフィール画像のパス",
    },
    imageAlt: {
      control: "text",
      description: "画像の代替テキスト",
    },
  },
} satisfies Meta<typeof ContactHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトのContactHeader
 */
export const Default: Story = {
  args: {
    name: "Nyatinte",
    tagline: "AIとWeb技術に興味があります。",
    imageSrc: "/nyatinte.webp",
    imageAlt: "Nyatinte",
  },
};

/**
 * 短いタグライン
 */
export const ShortTagline: Story = {
  args: {
    name: "Nyatinte",
    tagline: "Web開発の知見を発信。",
    imageSrc: "/nyatinte.webp",
    imageAlt: "Nyatinte",
  },
};

/**
 * プレースホルダー画像
 */
export const PlaceholderImage: Story = {
  args: {
    name: "John Doe",
    tagline: "Software Developer & Tech Blogger",
    imageSrc: "https://placehold.co/112x112/2E3440/88C0D0?text=JD",
    imageAlt: "John Doe",
  },
};
