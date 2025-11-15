# アクセシビリティガイドライン

このドキュメントでは、WCAG 2.1 AA準拠のアクセシブルなUIを構築するためのガイドラインを提供します。

## 色のコントラスト

### WCAG AA要件
- **通常のテキスト**: 4.5:1以上
- **大きなテキスト**（18pt以上または14pt太字以上）: 3:1以上
- **UIコンポーネント**: 3:1以上

### コントラスト確認済みの組み合わせ

#### テキスト
```tsx
// ✅ 合格（16.1:1）
<p className="text-gray-900 bg-white">

// ✅ 合格（4.6:1）
<p className="text-gray-600 bg-white">

// ❌ 不合格（2.1:1）
<p className="text-gray-300 bg-white">
```

#### リンク
```tsx
// ✅ 合格 - 十分なコントラスト + 下線
<a className="text-primary-blue underline hover:text-primary-blue/80">

// ⚠️ 下線なしの場合は周囲のテキストと3:1以上のコントラストが必要
<a className="text-primary-blue hover:underline">
```

### 確認ツール
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools Lighthouse
- axe DevTools

## キーボードナビゲーション

### 基本原則
1. すべてのインタラクティブ要素にキーボードでアクセス可能
2. 論理的なTab順序
3. 明確なフォーカス表示
4. キーボードトラップの回避

### フォーカス可能な要素

```tsx
// ボタン
<button className="
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-primary-blue
  focus-visible:ring-4
  focus-visible:ring-primary-blue/20
">
  Button
</button>

// リンク
<a className="
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-primary-blue
  rounded-sm
">
  Link
</a>

// 入力フィールド
<input className="
  focus:border-primary-blue
  focus:ring-2
  focus:ring-primary-blue/20
  outline-none
" />
```

### スキップリンク

```tsx
<a
  href="#main-content"
  className="
    sr-only focus:not-sr-only
    focus:absolute focus:top-4 focus:left-4
    bg-white px-4 py-2 rounded-lg
    focus-visible:outline-2 focus-visible:outline-primary-blue
    z-50
  "
>
  Skip to main content
</a>
```

### キーボードショートカット

```tsx
// モーダルを閉じる（Escape）
useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }
  window.addEventListener('keydown', handleEscape)
  return () => window.removeEventListener('keydown', handleEscape)
}, [onClose])

// Enter/Spaceでアクション実行
<div
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }}
>
  Custom Button
</div>
```

## セマンティックHTML

### 見出し階層

```tsx
// ✅ 正しい階層
<h1>ページタイトル</h1>
  <h2>セクション1</h2>
    <h3>サブセクション1-1</h3>
    <h3>サブセクション1-2</h3>
  <h2>セクション2</h2>

// ❌ レベルをスキップしない
<h1>ページタイトル</h1>
  <h3>間違い：h2をスキップ</h3>
```

### ランドマーク要素

```tsx
<body>
  <header>
    <nav aria-label="Main navigation">
      {/* メインナビゲーション */}
    </nav>
  </header>

  <main id="main-content">
    <article>
      {/* 記事コンテンツ */}
    </article>
  </main>

  <aside aria-label="Related content">
    {/* サイドバー */}
  </aside>

  <footer>
    {/* フッター */}
  </footer>
</body>
```

### ボタン vs リンク

```tsx
// ✅ ボタン - アクションを実行
<button onClick={handleSubmit}>
  Submit Form
</button>

// ✅ リンク - ナビゲーション
<a href="/about">
  About Page
</a>

// ❌ 間違い - divをボタンとして使用
<div onClick={handleClick}>Click me</div>

// ⚠️ divを使う場合は適切なroleとアクセシビリティ属性が必要
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick()
    }
  }}
>
  Click me
</div>
```

## ARIA属性

### aria-label

```tsx
// アイコンのみのボタン
<button aria-label="Close modal">
  <Icon name="x" />
</button>

// 検索フォーム
<form role="search" aria-label="Site search">
  <input type="search" aria-label="Search query" />
  <button type="submit">Search</button>
</form>
```

### aria-labelledby / aria-describedby

```tsx
<div role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
  <h2 id="modal-title">Modal Title</h2>
  <p id="modal-description">This is a description of the modal content.</p>
  {/* モーダルコンテンツ */}
</div>
```

### aria-live

```tsx
// 通知
<div
  role="status"
  aria-live="polite"
  className="sr-only"
>
  {statusMessage}
</div>

// 緊急の通知
<div
  role="alert"
  aria-live="assertive"
  aria-atomic="true"
>
  {errorMessage}
</div>
```

### aria-expanded / aria-controls

```tsx
// アコーディオン
<button
  aria-expanded={isOpen}
  aria-controls="accordion-content"
  onClick={toggle}
>
  Accordion Title
</button>
<div id="accordion-content" hidden={!isOpen}>
  Content
</div>

// ドロップダウン
<button
  aria-expanded={isOpen}
  aria-haspopup="true"
  aria-controls="dropdown-menu"
>
  Menu
</button>
<div id="dropdown-menu" role="menu">
  {/* メニューアイテム */}
</div>
```

## フォームアクセシビリティ

### ラベルと入力フィールドの関連付け

```tsx
// ✅ 明示的な関連付け
<label htmlFor="email">Email Address</label>
<input id="email" type="email" name="email" />

// ✅ 暗黙的な関連付け
<label>
  Email Address
  <input type="email" name="email" />
</label>

// ❌ 関連付けなし
<div>Email Address</div>
<input type="email" name="email" />
```

### エラー表示

```tsx
<div>
  <label htmlFor="password">Password</label>
  <input
    id="password"
    type="password"
    aria-invalid={hasError}
    aria-describedby={hasError ? "password-error" : undefined}
  />
  {hasError && (
    <div id="password-error" role="alert" className="text-red-600">
      Password must be at least 8 characters
    </div>
  )}
</div>
```

### 必須フィールド

```tsx
<label htmlFor="username">
  Username
  <span aria-label="required" className="text-red-600">*</span>
</label>
<input
  id="username"
  type="text"
  required
  aria-required="true"
/>
```

## 画像とメディア

### 画像のalt属性

```tsx
// ✅ 意味のある画像
<img
  src="/hero.jpg"
  alt="Team collaborating in a modern office"
/>

// ✅ 装飾的な画像
<img
  src="/decoration.svg"
  alt=""
  role="presentation"
/>

// ✅ 複雑な画像
<figure>
  <img
    src="/chart.png"
    alt="Bar chart showing sales increase from 2020 to 2025"
  />
  <figcaption>
    Detailed description of the chart data...
  </figcaption>
</figure>
```

### 動画

```tsx
<video controls>
  <source src="/video.mp4" type="video/mp4" />
  <track
    kind="captions"
    src="/captions-en.vtt"
    srclang="en"
    label="English"
  />
  Your browser does not support the video tag.
</video>
```

## モーション・アニメーション

### prefers-reduced-motion

```tsx
// Tailwind設定
<div className="
  transition-transform duration-300
  motion-reduce:transition-none
  motion-reduce:transform-none
">
  Animated content
</div>

// CSS
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## スクリーンリーダー専用コンテンツ

### sr-only クラス

```tsx
// Tailwind
<span className="sr-only">
  This text is only read by screen readers
</span>

// カスタムCSS
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

## テストチェックリスト

新規コンポーネント作成時は以下を確認:

### キーボード操作
- [ ] Tabキーですべてのインタラクティブ要素にアクセス可能
- [ ] フォーカス表示が明確
- [ ] Enter/Spaceでボタンを実行可能
- [ ] Escapeでモーダル/ドロップダウンを閉じられる

### スクリーンリーダー
- [ ] 画像に適切なalt属性
- [ ] フォーム入力にラベル
- [ ] ボタンに説明的なテキストまたはaria-label
- [ ] ランドマーク要素を使用

### 色とコントラスト
- [ ] テキストのコントラスト比が4.5:1以上
- [ ] UIコンポーネントのコントラスト比が3:1以上
- [ ] 色だけに依存しない情報伝達

### モーション
- [ ] prefers-reduced-motionに対応
- [ ] 自動再生の動画/アニメーションに停止ボタン

### ツールで確認
- [ ] Lighthouse Accessibility スコア 90以上
- [ ] axe DevTools でエラーなし
- [ ] キーボードのみで操作可能

これらのガイドラインに従うことで、すべてのユーザーにとってアクセシブルなUIを構築できます。
