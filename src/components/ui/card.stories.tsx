import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 全ての要素を含んだ完全なカード
 */
export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>カードタイトル</CardTitle>
        <CardDescription>カードの説明文がここに入ります</CardDescription>
      </CardHeader>
      <CardContent>
        <p>カードの本文コンテンツです。様々な情報を表示できます。</p>
      </CardContent>
      <CardFooter>
        <Button>アクション</Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * ヘッダーのみのシンプルなカード
 */
export const HeaderOnly: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>シンプルカード</CardTitle>
        <CardDescription>ヘッダーのみを持つカードです</CardDescription>
      </CardHeader>
    </Card>
  ),
};

/**
 * コンテンツのみのカード
 */
export const ContentOnly: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent>
        <p>
          コンテンツのみを持つカードです。シンプルな情報表示に適しています。
        </p>
      </CardContent>
    </Card>
  ),
};

/**
 * 長いコンテンツを持つカード
 */
export const LongContent: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>長いコンテンツのカード</CardTitle>
        <CardDescription>
          このカードは長い説明文と本文を含んでいます。レイアウトの確認に使用してください。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          これは非常に長いコンテンツを持つカードの例です。実際のアプリケーションでは、ブログ記事の抜粋、製品の説明、ユーザープロフィールなど、様々な情報を表示することがあります。カードコンポーネントは柔軟にコンテンツを収容できるよう設計されています。
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline">キャンセル</Button>
        <Button>保存</Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * フッターに複数のボタンを持つカード
 */
export const WithMultipleActions: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>確認ダイアログ</CardTitle>
        <CardDescription>この操作を実行しますか？</CardDescription>
      </CardHeader>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">キャンセル</Button>
        <Button variant="destructive">削除</Button>
      </CardFooter>
    </Card>
  ),
};
