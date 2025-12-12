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
    subtitle: {
      control: "text",
      description: "タイトル下に表示するサブテキスト（ユーザーID等）",
    },
    href: {
      control: "text",
      description: "リンク先URL（mailto:も可）",
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
    subtitle: "@nyatinte",
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
    subtitle: "@nyatinte",
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
    subtitle: "@nyatinte",
    href: "https://zenn.dev/nyatinte",
    children: <ZennIcon className="h-6 w-6" />,
  },
};

/**
 * メールリンクボタン（クリックでメールアプリが開く）
 */
export const Email: Story = {
  args: {
    title: "Email",
    subtitle: "example@example.com",
    href: "mailto:example@example.com",
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
        <LinkButton
          href="https://x.com/nyatinte"
          subtitle="@nyatinte"
          title="X / Twitter"
        >
          <HugeiconsIcon icon={NewTwitterIcon} size={24} />
        </LinkButton>
        <LinkButton
          href="https://github.com/nyatinte"
          subtitle="@nyatinte"
          title="GitHub"
        >
          <HugeiconsIcon icon={GithubIcon} size={24} />
        </LinkButton>
        <LinkButton
          href="https://zenn.dev/nyatinte"
          subtitle="@nyatinte"
          title="Zenn"
        >
          <ZennIcon className="h-6 w-6" />
        </LinkButton>
        <LinkButton
          href="mailto:example@example.com"
          subtitle="example@example.com"
          title="Email"
        >
          <HugeiconsIcon icon={Mail01Icon} size={24} />
        </LinkButton>
      </div>
    ),
  ],
  args: {
    title: "",
    href: "",
    children: null,
  },
};
