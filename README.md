# Next.js プロジェクト

このプロジェクトは[Next.js](https://nextjs.org)を使用して構築されています。

## 使用技術

- **Next.js 16** - Reactフレームワーク
- **TypeScript** - 型安全な開発
- **Tailwind CSS v4** - ユーティリティファーストのCSSフレームワーク
- **bun** - 高速なパッケージマネージャー

## セットアップ

依存関係をインストール：

```bash
bun install
```

## 開発

開発サーバーを起動：

```bash
bun run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて結果を確認できます。

`app/page.tsx` を編集することでページを編集できます。ファイルを編集すると、ページは自動的に更新されます。

## ビルド

プロダクション用にビルド：

```bash
bun run build
```

ビルドしたアプリケーションを起動：

```bash
bun run start
```

## リント

ESLintを実行：

```bash
bun run lint
```

## コントリビューション

このプロジェクトへの貢献に興味がある方は、[CONTRIBUTING.md](./CONTRIBUTING.md)をご覧ください。

**重要：**
- コミットメッセージとプルリクエストは日本語で記述してください
- パッケージマネージャーとして `bun` を使用してください

## 参考リンク

- [Next.js ドキュメント](https://nextjs.org/docs) - Next.jsの機能とAPIについて学ぶ
- [Next.js チュートリアル](https://nextjs.org/learn) - インタラクティブなNext.jsチュートリアル
- [Tailwind CSS ドキュメント](https://tailwindcss.com/docs) - Tailwind CSSの使い方

## デプロイ

このアプリケーションを[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)にデプロイできます。

詳細は[Next.jsデプロイドキュメント](https://nextjs.org/docs/app/building-your-application/deploying)を参照してください。
