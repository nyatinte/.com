import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Mail as MailIcon,
  Twitter as TwitterIcon,
} from "lucide-react";
import { SocialLink } from "./social-link";

const meta = {
  title: "UI/SocialLink",
  component: SocialLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
      description: "リンク先のURL",
    },
    icon: {
      control: "select",
      options: ["Github", "Twitter", "Linkedin", "Mail"],
      mapping: {
        Github: GithubIcon,
        Twitter: TwitterIcon,
        Linkedin: LinkedinIcon,
        Mail: MailIcon,
      },
      description: "表示するアイコン（Lucide Iconから選択）",
    },
    label: {
      control: "text",
      description: "スクリーンリーダー用のaria-label",
    },
  },
} satisfies Meta<typeof SocialLink>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトのGitHubリンク
 */
export const Github: Story = {
  args: {
    href: "https://github.com",
    icon: GithubIcon,
    label: "GitHub",
  },
};

/**
 * Twitterのソーシャルリンク
 */
export const Twitter: Story = {
  args: {
    href: "https://twitter.com",
    icon: TwitterIcon,
    label: "Twitter",
  },
};

/**
 * LinkedInのソーシャルリンク
 */
export const Linkedin: Story = {
  args: {
    href: "https://linkedin.com",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
};

/**
 * メールのソーシャルリンク
 */
export const Mail: Story = {
  args: {
    href: "mailto:contact@example.com",
    icon: MailIcon,
    label: "Email",
  },
};
