import {
  GithubIcon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ZennIcon } from "@/components/icons/zenn-icon";
import { LinkButton } from "./link-button";

const meta = {
  title: "UI/LinkButton",
  component: LinkButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "ボタンに表示するタイトル",
    },
    href: {
      control: "text",
      description: "リンク先URL",
    },
    email: {
      control: "text",
      description: "コピーするメールアドレス",
    },
    isEmail: {
      control: "boolean",
      description: "メールコピーモードを有効にする",
    },
  },
  decorators: [
    (StoryComponent) => (
      <div className="w-96">
        <StoryComponent />
      </div>
    ),
  ],
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * X / Twitterリンクボタン
 */
export const Twitter: Story = {
  args: {
    title: "X / Twitter",
    href: "https://x.com/nyatinte",
    children: <HugeiconsIcon icon={NewTwitterIcon} size={24} />,
  },
};

/**
 * GitHubリンクボタン
 */
export const GitHub: Story = {
  args: {
    title: "GitHub",
    href: "https://github.com/nyatinte",
    children: <HugeiconsIcon icon={GithubIcon} size={24} />,
  },
};

/**
 * Zennリンクボタン（カスタムアイコン）
 */
export const Zenn: Story = {
  args: {
    title: "Zenn",
    href: "https://zenn.dev/nyatinte",
    children: <ZennIcon className="h-6 w-6" />,
  },
};

/**
 * メールコピーボタン（クリックでクリップボードにコピー）
 */
export const Email: Story = {
  args: {
    title: "Copy Email",
    email: "example@example.com",
    isEmail: true,
    children: <HugeiconsIcon icon={Mail01Icon} size={24} />,
  },
};

/**
 * 複数のボタンを並べて表示
 */
export const Stack: Story = {
  decorators: [
    () => (
      <div className="flex w-96 flex-col gap-4">
        <LinkButton href="https://x.com/nyatinte" title="X / Twitter">
          <HugeiconsIcon icon={NewTwitterIcon} size={24} />
        </LinkButton>
        <LinkButton href="https://github.com/nyatinte" title="GitHub">
          <HugeiconsIcon icon={GithubIcon} size={24} />
        </LinkButton>
        <LinkButton href="https://zenn.dev/nyatinte" title="Zenn">
          <ZennIcon className="h-6 w-6" />
        </LinkButton>
        <LinkButton email="example@example.com" isEmail title="Copy Email">
          <HugeiconsIcon icon={Mail01Icon} size={24} />
        </LinkButton>
      </div>
    ),
  ],
  args: {
    title: "",
    children: null,
  },
};
