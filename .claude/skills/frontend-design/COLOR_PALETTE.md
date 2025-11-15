# カラーパレット詳細

このドキュメントでは、ブログのカラーパレットの詳細な仕様と使用例を提供します。

## プライマリーカラー

### Primary Blue
- **Hex**: `#A8D5E2`
- **RGB**: `rgb(168, 213, 226)`
- **用途**: メインアクセント、リンク、プライマリーボタン
- **Tailwind設定**: `primary-blue`

### Primary Green
- **Hex**: `#B8E6D5`
- **RGB**: `rgb(184, 230, 213)`
- **用途**: セカンダリーアクセント、成功状態、穏やかな強調
- **Tailwind設定**: `primary-green`

## ニュートラルカラー

### White
- **Hex**: `#FFFFFF`
- **用途**: 背景、カード背景、テキスト（ダークモード時）

### Light Gray
- **Hex**: `#F5F7FA`
- **RGB**: `rgb(245, 247, 250)`
- **用途**: セクション背景、サブ背景

### Medium Gray
- **Hex**: `#D1D5DB`
- **RGB**: `rgb(209, 213, 219)`
- **用途**: ボーダー、区切り線、非アクティブ要素

### Dark Gray
- **Hex**: `#6B7280`
- **RGB**: `rgb(107, 114, 128)`
- **用途**: セカンダリーテキスト、キャプション

### Text Color
- **Hex**: `#1F2937`
- **RGB**: `rgb(31, 41, 55)`
- **用途**: メインテキスト、見出し

## セマンティックカラー

### Success
- **Hex**: `#86EFAC`
- **RGB**: `rgb(134, 239, 172)`
- **用途**: 成功メッセージ、完了状態

### Warning
- **Hex**: `#FDE68A`
- **RGB**: `rgb(253, 230, 138)`
- **用途**: 警告メッセージ、注意喚起

### Error
- **Hex**: `#FECACA`
- **RGB**: `rgb(254, 202, 202)`
- **用途**: エラーメッセージ、失敗状態

### Info
- **Hex**: `#BAE6FD`
- **RGB**: `rgb(186, 230, 253)`
- **用途**: 情報メッセージ、ヒント

## 使用例

### 背景とカード
```tsx
// ページ背景
<div className="bg-white">

// セクション背景
<section className="bg-gray-50">

// カード
<div className="bg-white shadow-sm rounded-2xl">

// アクセント背景
<div className="bg-primary-blue/10">
```

### テキスト
```tsx
// メインテキスト
<p className="text-gray-900">

// セカンダリーテキスト
<span className="text-gray-600">

// リンク
<a className="text-primary-blue hover:text-primary-blue/80">
```

### ボタン
```tsx
// プライマリーボタン
<button className="bg-primary-blue text-white">

// セカンダリーボタン
<button className="bg-white text-primary-blue border border-primary-blue">

// ゴーストボタン
<button className="text-primary-blue hover:bg-primary-blue/10">
```

## アクセシビリティ

### コントラスト比（WCAG AA準拠）

**合格例:**
- `#1F2937` (Text) on `#FFFFFF` (White): 16.1:1 ✅
- `#6B7280` (Dark Gray) on `#FFFFFF`: 4.6:1 ✅
- `#A8D5E2` (Primary Blue) on `#1F2937`: 適切なコントラスト確保 ✅

**注意が必要:**
- 淡いカラー（Primary Blue, Primary Green）は背景としてのみ使用
- テキストカラーとして使用する場合は十分なコントラストを確保

## Tailwind設定例

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-blue': '#A8D5E2',
        'primary-green': '#B8E6D5',
        'semantic-success': '#86EFAC',
        'semantic-warning': '#FDE68A',
        'semantic-error': '#FECACA',
        'semantic-info': '#BAE6FD',
      },
    },
  },
}
```

## グラデーション（オプション）

穏やかなグラデーションを使用する場合:

```tsx
// 水平グラデーション
<div className="bg-gradient-to-r from-primary-blue/20 to-primary-green/20">

// 垂直グラデーション（ヒーロー背景など）
<div className="bg-gradient-to-b from-white to-gray-50">
```

グラデーションは控えめに使用し、過度な装飾を避けます。
