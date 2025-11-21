# PR #20 レビュー対応提案

## 概要
Gemini Code Assist から4つのレビューコメントを受けています。1件は重大な問題、3件は中程度の優先度です。

---

## コメント1: 生のMarkdownコンテンツの処理 ⚠️ **CRITICAL**

**ファイル**: `velite.config.ts:114行目

**レビュー内容**:
```
post.content にはHTMLコンテンツが格納されてしまいます。これにより、記事ページの「Copy Markdown」ボタンが正しく機能しなくなります（HTMLがコピーされてしまう）。
transform 関数で、content プロパティを meta.content から取得した生のMarkdownコンテンツで上書きする必要があります。
```

**現在の実装**:
```typescript
return {
  ...data,
  slug,
  html: data.content,
  excerpt: generateExcerpt(rawMarkdown),
  readingTime: calculateReadingTime(rawMarkdown),
  url: `/posts/${slug}`,
};
```

**推奨される対応策**: ✅ **承認推奨**
- `content` プロパティを HTML ではなく、生の Markdown コンテンツで設定する
- これにより「Copy Markdown」ボタンが正しく機能する
- 修正内容：`content: rawMarkdown` を追加

**対応理由**:
- 機能的に重大なバグ（ユーザー向け機能が正常に動作しない）
- レビューの提案が正確で実装も簡潔

---

## コメント2: ヘルパー関数への抽出 🔧 **MEDIUM**

**ファイル**: `app/posts/[slug]/page.tsx:18行目

**レビュー内容**:
```
posts.find(...) のロジックが generateMetadata (L18) と PostPage (L32) の両方で重複しています。
保守性を高めるために、このロジックをヘルパー関数に切り出すことを検討してください。
```

**現在の実装**:
- `generateMetadata` で: `const post = posts.find((_post) => _post.slug === slug);`
- `PostPage` で: 同じロジック（コメント内で確認）

**推奨される対応策**: ✅ **承認推奨**
- ヘルパー関数 `getPostBySlug(slug: string)` を作成
- 両箇所で使用

```typescript
function getPostBySlug(slug: string) {
  return posts.find((_post) => _post.slug === slug);
}
```

**対応理由**:
- コードの保守性向上（DRY原則）
- 将来の変更時に修正箇所を減らせる
- 実装量も少ない

---

## コメント3: 日付フォーマット - `[slug]/page.tsx` 📅 **MEDIUM**

**ファイル**: `app/posts/[slug]/page.tsx:47行目

**レビュー内容**:
```
日付のフォーマットが YYYY-MM-DD 形式で表示されるように変更されていますが、
以前の ja-JP ロケールでの表示（例: 2025/1/16）の方がユーザーにとって分かりやすいかもしれません。
以前の表示形式を維持することを検討してください。
```

**現在の実装**:
```typescript
<time dateTime={post.date}>{post.date}</time>
```
※ `post.date` は ISO 日付文字列（YYYY-MM-DD形式）

**推奨される対応策**: ✅ **承認推奨**
- 以前の実装に合わせて `ja-JP` ロケールでフォーマット
```typescript
<time dateTime={post.date}>{new Date(post.date).toLocaleDateString("ja-JP")}</time>
```

**対応理由**:
- UX の一貫性維持（既存ユーザーの期待値）
- レビューが妥当で、実装も簡単

---

## コメント4: 日付フォーマット - `posts/page.tsx` 📅 **MEDIUM**

**ファイル**: `app/posts/page.tsx:25行目

**レビュー内容**:
コメント3と同一（別箇所での同じ問題）

**推奨される対応策**: ✅ **同じく ja-JP フォーマットに戻す**
```typescript
<time dateTime={post.date}>{new Date(post.date).toLocaleDateString("ja-JP")}</time>
```

---

## 対応計画

| コメント | ファイル | 対応 | 優先度 |
|---------|--------|------|--------|
| コメント1 | velite.config.ts | `content: rawMarkdown` を追加 | CRITICAL |
| コメント2 | app/posts/[slug]/page.tsx | ヘルパー関数 `getPostBySlug` を作成・使用 | MEDIUM |
| コメント3 | app/posts/[slug]/page.tsx | 日付フォーマットを `ja-JP` に戻す | MEDIUM |
| コメント4 | app/posts/page.tsx | 日付フォーマットを `ja-JP` に戻す | MEDIUM |

**次のステップ**: ユーザーの承認をお願いします。
