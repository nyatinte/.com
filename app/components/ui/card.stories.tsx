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
 * コンテンツのみのシンプルなカード
 */
export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardContent className="pt-6">
        <p>シンプルなカードのコンテンツ</p>
      </CardContent>
    </Card>
  ),
};

/**
 * ヘッダーとフッター（アクション付き）を含む標準的なカード
 */
export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>カードのタイトル</CardTitle>
        <CardDescription>このカードについての説明文です</CardDescription>
      </CardHeader>
      <CardContent>
        <p>ここはカードのメインコンテンツが配置される領域です。</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline">キャンセル</Button>
        <Button>確認</Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * ヘッダー、複数セクション、フッターを含む完全なカード
 */
export const Complete: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>複雑なカード</CardTitle>
        <CardDescription>複数のセクションを含むカード</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">セクション1</h3>
          <p className="text-muted-foreground text-sm">
            このセクションはカードのコンテンツの一部です。
          </p>
        </div>
        <div>
          <h3 className="font-semibold">セクション2</h3>
          <p className="text-muted-foreground text-sm">
            複数のセクションで構成されたカード例です。
          </p>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-6">
        <Button className="mr-2" variant="outline">
          戻る
        </Button>
        <Button>次へ</Button>
      </CardFooter>
    </Card>
  ),
};
