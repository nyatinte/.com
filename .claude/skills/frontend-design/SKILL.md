---
name: frontend-design
description: Apply brand-consistent design guidelines when creating UI components, styling, layouts, or working with design systems. Use when building frontend components, implementing designs, or discussing visual/UX decisions. Ensures adherence to the Nyatinte Blog's Nord-inspired dark theme with Polar Night backgrounds and Frost accents.
---

# Frontend Design Skill - Nyatinte Blog

このスキルは、Nyatinte Blogのフロントエンド開発における**ブランドガイドライン**を提供します。

---

## 🎯 Brand Identity

**Name:** Nyatinte Blog
**Tagline:** モダンテクノロジーの最前線を追う
**Positioning:** 北極圏のように澄み切った視点で、AI・クラウド・Web開発の最新トレンドと実践的な知見を届けるテックブログ

---

## 🎨 Color Palette

### Primary Colors

**Background (Polar Night)**
```
#2E3440 - background-primary (メイン背景)
#3B4252 - background-secondary (セカンダリ背景)
#434C5E - background-elevated (カード背景)
#4C566A - border (ボーダー・区切り線)
```

**Text (Snow Storm)**
```
#D8DEE9 - text-secondary (セカンダリテキスト)
#E5E9F0 - text-primary (通常テキスト)
#ECEFF4 - text-emphasis (メインテキスト・強調)
```

**Accent (Frost)**
```
#8FBCBB - accent-secondary (セカンダリアクセント)
#88C0D0 - accent-primary (メインアクセント・リンク)
#81A1C1 - accent-gradient (グラデーション用)
#5E81AC - accent-dark (ダークアクセント)
```

### Semantic Colors (Aurora)

```
#BF616A - error (エラー・重要)
#D08770 - orange (オレンジアクセント)
#EBCB8B - warning (警告・ハイライト)
#A3BE8C - success (成功・グリーン)
#B48EAD - purple (パープルアクセント)
```

### 使用ルール

**Tailwind CSS設定例:**
```js
// tailwind.config.js
colors: {
  background: {
    primary: '#2E3440',
    secondary: '#3B4252',
    elevated: '#434C5E',
  },
  text: {
    secondary: '#D8DEE9',
    primary: '#E5E9F0',
    emphasis: '#ECEFF4',
  },
  accent: {
    secondary: '#8FBCBB',
    primary: '#88C0D0',
    gradient: '#81A1C1',
    dark: '#5E81AC',
  },
  status: {
    error: '#BF616A',
    orange: '#D08770',
    warning: '#EBCB8B',
    success: '#A3BE8C',
    purple: '#B48EAD',
  },
}
```

---

## 📝 Typography

### フォントファミリー

**見出し: Poppins (太字)**
```css
font-family: 'Poppins', Arial, sans-serif;
font-weight: 600-700;
```
使用場所: h1-h6, ナビゲーション, ボタン

**本文: Lora (読みやすさ重視)**
```css
font-family: 'Lora', Georgia, serif;
font-weight: 400-500;
```
使用場所: 記事本文, 説明文

### サイズ指針

```
Hero h1: 4rem (mobile: 2.5rem)
Section h2: 2.5rem
Card h3: 1.5rem
本文: 1rem
メタ情報: 0.85-0.95rem
行間: 1.7
```

### 実装例

```tsx
// 見出し
<h1 className="font-heading text-4xl md:text-6xl font-bold text-emphasis">

// 本文
<p className="font-body text-base text-primary leading-relaxed">

// メタ情報
<span className="text-sm text-secondary">
```

---

## 🎭 Tone & Voice

### カジュアルかつ専門的
- 「です・ます」調を基本としつつ、堅苦しくない
- 技術用語は正確に、説明は分かりやすく
- 読者に語りかけるような親しみやすさ

### 教育的で先進的
- 最新トレンドを追いながら、本質的な理解を重視
- 実践的なコード例や具体的なユースケースを提供
- 「なぜ」を説明し、深い理解を促す

### 避けるべき表現
- 過度に謙遜的・自虐的な表現
- マーケティング的な誇張
- 上から目線の専門用語の羅列

---

## 📐 Layout Principles

### 余白を活かす

```
セクション間: 6rem (24px × 6 = 96px)
カード間: 2.5rem gap
テキスト行間: 1.7
コンテナpadding: 1.5rem (mobile) → 3rem (desktop)
```

### グリッドシステム

```tsx
<div className="
  container mx-auto max-w-screen-xl px-6
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  gap-10
">
  {/* Grid Items */}
</div>
```

**仕様:**
- 最大幅: 1200px
- カラム: repeat(auto-fit, minmax(320-350px, 1fr))
- レスポンシブブレイクポイント: 768px

### 視覚的階層

- グラデーションは控えめに（背景のみ）
- アニメーションは subtle（0.3s ease）
- ホバー効果で interactivity を示す
- 重要な要素は accent-primary で強調
- セクションの区切りは border カラーで

---

## 📄 Content Guidelines

### 記事構成

1. **魅力的なタイトル** - 具体的で検索可能
2. **メタ情報** - カテゴリタグ、日付
3. **導入部** - 何を学べるかを明確に
4. **本文** - コード例、図解、実践的なヒント
5. **まとめ** - 要点の再確認、次のステップ

### カテゴリタグ

**主要カテゴリ:**
```tsx
// AI・機械学習
<span className="bg-accent-primary/20 text-accent-primary px-3 py-1 rounded-full text-sm">
  AI・機械学習
</span>

// Web開発
<span className="bg-orange/20 text-orange px-3 py-1 rounded-full text-sm">
  Web開発
</span>

// クラウド
<span className="bg-accent-dark/20 text-accent-dark px-3 py-1 rounded-full text-sm">
  クラウド
</span>

// デザイン
<span className="bg-success/20 text-success px-3 py-1 rounded-full text-sm">
  デザイン
</span>
```

---

## ✨ Animation & Interaction

### 基本原則

**すべてのトランジション:**
```css
transition: all 0.3s ease;
```

**Hover時の動き:**
```css
transform: translateY(-2px) ~ translateY(-5px);
```

**フェードイン:**
```css
opacity: 0 → 1;
transition: opacity 0.3s ease;
```

**段階的表示:**
```css
animation-delay: 0.1s, 0.2s, 0.3s...
```

### 使用アニメーション

```tsx
// ページロード時のフェードインアップ
<div className="
  opacity-0 translate-y-4
  animate-[fadeInUp_0.6s_ease-out_forwards]
  [animation-delay:0.1s]
">
  Content
</div>

// Hoverトランスフォーム
<div className="
  transition-all duration-300 ease-in-out
  hover:-translate-y-1 hover:shadow-xl
">
  Interactive Element
</div>

// スムーススクロール
<html className="scroll-smooth">
```

---

## ✅ Do's and Don'ts

### ✅ Do

- セマンティックなカラー命名を使用（background-primary, text-emphasis, accent-primary）
- 十分な余白とクリーンなレイアウト（6rem セクション間）
- Poppins（見出し）とLora（本文）の組み合わせを厳守
- 微細なアニメーションとホバー効果（0.3s ease）
- コントラストを考慮したアクセシビリティ（WCAG AA準拠）
- ダークテーマを前提としたデザイン

### ❌ Don't

- 定義外の色を追加（Nordパレット外の色は使用禁止）
- 過度な装飾や複雑なグラデーション
- フォントの混在（Poppins + Lora の2種類まで）
- 派手すぎるアニメーション（> 0.5s）
- 狭すぎる行間や余白（line-height < 1.5）
- ライトテーマの使用（ダークテーマのみ）

---

## 🛠️ Implementation Checklist

新規コンポーネント作成時は以下を確認:

- [ ] Nordカラーパレットに準拠（Polar Night, Snow Storm, Frost, Aurora）
- [ ] 見出しはPoppins、本文はLoraを使用
- [ ] 適切なborder-radius（8px-12px）
- [ ] 余白が統一（セクション間6rem、カード間2.5rem）
- [ ] ホバー効果を定義（translateY, shadow, color変更）
- [ ] レスポンシブ対応（768pxブレイクポイント）
- [ ] アニメーションが控えめ（0.3s ease）
- [ ] ダークテーマに最適化
- [ ] アクセシビリティ要件を満たす（コントラスト比）

---

## 📚 Instructions for Claude

When you create or modify frontend components for Nyatinte Blog:

1. **Always use the Nord-inspired color palette** - background-primary for backgrounds, text-emphasis for main text, accent-primary for links and CTAs
2. **Apply correct typography** - Poppins for headings (font-heading), Lora for body text (font-body)
3. **Add hover effects** - All interactive elements should have translateY(-2px ~ -5px), shadow, and color changes
4. **Use proper spacing** - 6rem between sections, 2.5rem gap for grids
5. **Keep animations subtle** - 0.3s ease transitions
6. **Ensure dark theme compatibility** - All components must work on dark backgrounds
7. **Follow semantic color naming** - Use background-*, text-*, accent-*, status-* naming convention
8. **Maintain brand consistency** - Casual yet professional tone, educational content

Remember: This is a **dark-themed tech blog** with a Nord-inspired aesthetic. All designs should feel clean, modern, and professional while maintaining the cool, arctic atmosphere of the brand.

---

**Version:** 1.0
**Last Updated:** 2025-11-16
**Platform:** Web Blog Only
