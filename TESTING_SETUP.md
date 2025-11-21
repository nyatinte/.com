# テスト環境セットアップ手順

## 概要
ThemeSwitcherコンポーネントのテストを実行するために必要な環境設定手順です。

## 必要な依存関係のインストール

```bash
pnpm add -D @testing-library/react @testing-library/user-event @vitest/ui happy-dom
```

## vitest.config.ts の更新

現在の設定:
- environment: `jsdom`
- include: `["**/__tests__/**/*.test.ts", "**/*.test.ts", "**/*.test.tsx"]`

推奨される設定:
- environment: `happy-dom` (より高速でモダンなDOM実装)

### 変更内容

```typescript
// vitest.config.ts
{
  test: {
    name: "unit",
    include: [
      "**/__tests__/**/*.test.ts",
      "**/*.test.ts",
      "**/*.test.tsx"
    ],
    exclude: ["**/*.stories.tsx", "node_modules/**"],
    environment: "happy-dom", // jsdom から happy-dom に変更
  },
},
```

## テストファイルの配置

作成済みのテストファイル:
- `app/components/header/theme-switcher.test.tsx`

## テストの実行方法

```bash
# すべてのテストを実行
pnpm test

# ThemeSwitcherのテストのみ実行
pnpm test --run theme-switcher

# ウォッチモードでテスト
pnpm test --watch
```

## 現在のテストカバレッジ

### ThemeSwitcher コンポーネント
- ✅ 3つのテーマボタン表示
- ✅ デフォルト値による初期状態
- ✅ テーマ切り替え時のonChangeコールバック
- ✅ カスタムクラスの適用
- ✅ アクセシビリティ (aria-label, button要素)

## next-themesのモック

テストファイル内で以下のモックを使用しています:

```typescript
vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "system",
    setTheme: vi.fn(),
  }),
}));
```

## Storybookテスト

Storybookのテストは別プロジェクトとして設定されており、ブラウザベース(Playwright)で実行されます。

```bash
# Storybookテストのみ実行
pnpm test storybook
```

## トラブルシューティング

### テストが見つからない場合
- vitest.config.tsの`include`パターンを確認
- テストファイルの拡張子が`.test.tsx`であることを確認

### 環境の問題
- `happy-dom`がインストールされていることを確認
- `@testing-library/react`のバージョンがReact 19と互換性があることを確認

### next-themesのモックエラー
- モックの定義がテストファイルの先頭にあることを確認
- `vi.mock()`は`describe()`の外で呼び出す必要があります
