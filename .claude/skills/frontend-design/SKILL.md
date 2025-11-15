---
name: frontend-design
description: Apply brand-consistent design guidelines when creating UI components, styling, layouts, or working with design systems. Use when building frontend components, implementing designs, or discussing visual/UX decisions. Ensures adherence to the penguin-themed blog's soft, transparent, and approachable aesthetic.
---

# Frontend Design Skill

このスキルは、ブログのフロントエンド開発における**デザインガイドライン**と**実装方針**を提供します。

## 🎨 デザインコンセプト

### 対象ユーザー
- 技術系の記事を読むエンジニア層
- シンプルで読みやすく、無駄のないレイアウトを好むユーザー
- 優しい雰囲気のビジュアルが苦手ではないライト層

### ブランドイメージ
> **優しいペンギンのアイコンを中心に、ほんのりとした透明感と柔らかい曲線で構築された、技術読者に寄り添う静かなブログ空間。**

**3つの核となる印象:**
1. 「落ち着いているのに可愛い」
2. 「親しみやすいけれど技術ブログとして信頼できる」
3. 「シンプルなのに記憶に残る」

## 🌈 ブランディング原則

### 1. 柔らかさとクリア感の両立
- 淡い色調と親しみやすさをベースにする
- ガラスの透明感を感じる軽さ（backdrop-filter: blur(4px-8px)）
- **記事の可読性を最優先** - 本文背景には透明効果を使わない

### 2. 優しい曲線
- border-radius: 8px-16px（カードサイズに応じて）
- ボタン: 6px-12px
- 大きなセクション: 16px-24px

### 3. 自然なニュアンス
- 主色: 淡いブルー系・グリーン系
- 補色: 白とグレー
- 余白を十分に確保
- 冷たすぎず暖かすぎない中間の温度感

### 4. 静かに集中できるタイポグラフィ
- 本文: 16px-18px, line-height: 1.7-1.8
- 見出し: font-weight: 600-700
- letter-spacing: わずかに広め（0.01em-0.02em）

## 🎨 カラーパレット

詳細は [COLOR_PALETTE.md](COLOR_PALETTE.md) を参照。

**プライマリーカラー:**
- Primary Blue: #A8D5E2
- Primary Green: #B8E6D5

**使用ルール:**
- 背景: ホワイト or ライトグレー
- カード: ホワイト + 軽い影 or プライマリーカラー（alpha 0.1-0.2）
- アクセント: プライマリーブルー/グリーン
- テキスト: ダークグレー（本文）, ミディアムグレー（補助）

## 📐 レイアウト原則

**余白（Spacing）:**
- 基本単位: 4px
- セクション間: 64px-96px
- カード間: 24px-32px
- コンポーネント内: 16px-24px

**グリッドシステム:**
- コンテナ最大幅: 1200px-1280px
- 記事本文最大幅: 720px-768px（可読性優先）
- サイドバー: 280px-320px

**ブレークポイント:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🧩 コンポーネント設計

詳細は [COMPONENTS.md](COMPONENTS.md) を参照。

### カード
```
- 背景: 白 or 淡いプライマリーカラー（alpha 0.05-0.1）
- 影: 0 1px 3px rgba(0,0,0,0.1)
- border-radius: 12px-16px
- padding: 24px-32px
- ホバー: translateY(-2px) + 影強化
```

### ボタン
```
- プライマリー: プライマリーブルー背景 + ホワイトテキスト
- セカンダリー: ホワイト背景 + プライマリーブルーボーダー
- border-radius: 8px-12px
- padding: 12px 24px
```

### ナビゲーション
```
- 背景: 半透明ホワイト + backdrop-filter: blur(8px)
- 高さ: 64px-72px
- 固定位置（sticky）
```

## ✨ インタラクションとアニメーション

**原則:**
- 控えめに、しかし感じられるように
- すべてのトランジション: 200ms-300ms
- easing: ease-in-out または cubic-bezier(0.4, 0, 0.2, 1)

**推奨:**
- ホバー: opacity, transform, box-shadow
- ページ遷移: フェードイン（300ms）
- モーダル: スケール + フェード（250ms）

**避けるべき:**
- 過度な回転やスピン
- 長すぎるアニメーション（> 500ms）
- 突然の動き

## 📱 レスポンシブデザイン

- **モバイルファースト**: 基本スタイルはモバイル向け
- **タッチ対応**: タップターゲット最小 44px × 44px
- **ホバー効果**: モバイルでは @media (hover: hover) で制御

## ♿ アクセシビリティ

詳細は [ACCESSIBILITY.md](ACCESSIBILITY.md) を参照。

**重要な要件:**
- 色のコントラスト: WCAG AA準拠（4.5:1以上）
- キーボードナビゲーション: すべてのインタラクティブ要素に focus-visible
- セマンティックHTML: 正しい見出し階層とランドマーク要素
- スクリーンリーダー: 適切なalt属性とaria-label

## 🛠️ 実装ツール

- **Tailwind CSS + twx**: スタイリング
- **Storybook**: コンポーネント独立開発
- **Next.js Image**: 画像最適化
- **Atomic Design**: コンポーネント構成

## 📋 実装チェックリスト

新規コンポーネント作成時は以下を確認:

- [ ] カラーパレットに準拠
- [ ] 適切なborder-radius（8px-16px）
- [ ] 余白が統一（4pxベース）
- [ ] ホバー/フォーカス状態を定義
- [ ] レスポンシブ対応（モバイル・タブレット・デスクトップ）
- [ ] アクセシビリティ要件を満たす（WCAG AA）
- [ ] アニメーションが控えめ（200ms-300ms）
- [ ] Storybookにストーリー追加
- [ ] セマンティックHTMLを使用

## Instructions for Claude

When you create or modify frontend components:

1. **Always apply brand colors** from the color palette
2. **Use soft border-radius** (8px-16px) for all UI elements
3. **Ensure proper spacing** using 4px base units
4. **Add hover/focus states** with smooth transitions
5. **Make it responsive** (mobile-first approach)
6. **Check accessibility** (contrast, keyboard nav, semantic HTML)
7. **Keep animations subtle** (200ms-300ms)
8. **Reference supporting docs** when you need detailed guidance

Remember: This design system prioritizes **readability, accessibility, and a calm user experience** while maintaining a soft, approachable aesthetic.
