# コンポーネント設計詳細

このドキュメントでは、主要なUIコンポーネントの詳細な設計仕様を提供します。

## カード（Card）

### 基本仕様
```tsx
// 標準カード
<div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
  {/* コンテンツ */}
</div>

// アクセントカード
<div className="bg-primary-blue/5 rounded-2xl p-6 border border-primary-blue/20">
  {/* コンテンツ */}
</div>
```

### バリアント
- **Default**: 白背景 + 軽い影
- **Accent**: 淡いプライマリーカラー背景
- **Bordered**: ボーダーのみ（影なし）
- **Elevated**: より強い影（重要なコンテンツ）

### サイズ
- **Small**: `p-4`, `rounded-xl`
- **Medium**: `p-6`, `rounded-2xl`（デフォルト）
- **Large**: `p-8`, `rounded-3xl`

## ボタン（Button）

### プライマリーボタン
```tsx
<button className="
  bg-primary-blue text-white
  px-6 py-3 rounded-xl
  hover:bg-primary-blue/90
  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue
  transition-colors duration-200
  font-medium
">
  Primary Action
</button>
```

### セカンダリーボタン
```tsx
<button className="
  bg-white text-primary-blue border-2 border-primary-blue
  px-6 py-3 rounded-xl
  hover:bg-primary-blue/10
  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue
  transition-colors duration-200
  font-medium
">
  Secondary Action
</button>
```

### ゴーストボタン
```tsx
<button className="
  text-primary-blue
  px-6 py-3 rounded-xl
  hover:bg-primary-blue/10
  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue
  transition-colors duration-200
  font-medium
">
  Ghost Action
</button>
```

### サイズバリアント
- **Small**: `px-4 py-2 text-sm`
- **Medium**: `px-6 py-3 text-base`（デフォルト）
- **Large**: `px-8 py-4 text-lg`

## ナビゲーション（Navigation）

### ヘッダー
```tsx
<header className="
  sticky top-0 z-50
  bg-white/80 backdrop-blur-lg
  border-b border-gray-200
  h-16 md:h-18
  transition-shadow duration-200
  [&.scrolled]:shadow-sm
">
  <nav className="container mx-auto px-4 h-full flex items-center justify-between">
    {/* ロゴとナビゲーション */}
  </nav>
</header>
```

### ナビゲーションリンク
```tsx
<a className="
  text-gray-700 hover:text-primary-blue
  px-3 py-2 rounded-lg
  hover:bg-primary-blue/10
  transition-colors duration-200
  font-medium
">
  Link
</a>
```

## フォーム（Form）

### 入力フィールド
```tsx
<input className="
  w-full px-4 py-2.5
  border border-gray-300 rounded-lg
  focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20
  transition-colors duration-200
  outline-none
" />
```

### ラベル
```tsx
<label className="
  block mb-2
  text-sm font-medium text-gray-700
">
  Label Text
</label>
```

### エラー表示
```tsx
<div className="flex items-center gap-2 mt-2 text-sm text-red-600">
  <Icon name="alert-circle" size={16} />
  <span>Error message here</span>
</div>
```

## モーダル（Modal）

### オーバーレイとコンテナ
```tsx
<div className="
  fixed inset-0 z-50
  bg-gray-900/50 backdrop-blur-sm
  flex items-center justify-center
  p-4
  animate-in fade-in duration-200
">
  <div className="
    bg-white rounded-2xl
    max-w-lg w-full
    p-6
    shadow-2xl
    animate-in zoom-in-95 duration-250
  ">
    {/* モーダルコンテンツ */}
  </div>
</div>
```

## トースト通知（Toast）

```tsx
<div className="
  fixed bottom-4 right-4 z-50
  bg-white rounded-xl shadow-lg
  p-4 pr-12
  border-l-4 border-primary-blue
  animate-in slide-in-from-right duration-200
  max-w-sm
">
  <div className="flex items-start gap-3">
    <Icon name="check-circle" className="text-primary-blue" />
    <div>
      <p className="font-medium text-gray-900">Success</p>
      <p className="text-sm text-gray-600">Your action was successful.</p>
    </div>
  </div>
</div>
```

## バッジ（Badge）

```tsx
// デフォルト
<span className="
  inline-flex items-center
  px-2.5 py-0.5
  rounded-full
  bg-primary-blue/10 text-primary-blue
  text-xs font-medium
">
  Badge
</span>

// 成功
<span className="
  inline-flex items-center
  px-2.5 py-0.5
  rounded-full
  bg-green-100 text-green-800
  text-xs font-medium
">
  Success
</span>
```

## ローディング（Loading）

### スピナー
```tsx
<div className="
  w-8 h-8
  border-4 border-gray-200 border-t-primary-blue
  rounded-full
  animate-spin
" />
```

### スケルトン
```tsx
<div className="
  bg-gray-200 rounded-lg
  animate-pulse
  h-4 w-full
" />
```

## アバター（Avatar）

```tsx
<div className="
  w-10 h-10 rounded-full
  bg-primary-blue/10
  flex items-center justify-center
  text-primary-blue font-medium
  overflow-hidden
">
  {/* イニシャルまたは画像 */}
</div>
```

## ドロップダウン（Dropdown）

```tsx
<div className="
  absolute top-full mt-2
  bg-white rounded-xl shadow-lg
  border border-gray-200
  py-2
  min-w-[200px]
  animate-in fade-in slide-in-from-top-2 duration-200
">
  <a className="
    block px-4 py-2
    text-gray-700 hover:bg-primary-blue/10 hover:text-primary-blue
    transition-colors duration-150
  ">
    Menu Item
  </a>
</div>
```

## タブ（Tabs）

```tsx
<div className="border-b border-gray-200">
  <nav className="flex gap-8">
    <button className="
      pb-3 px-1
      text-gray-600 hover:text-primary-blue
      border-b-2 border-transparent
      [&.active]:border-primary-blue [&.active]:text-primary-blue
      transition-colors duration-200
      font-medium
    ">
      Tab 1
    </button>
  </nav>
</div>
```

## アコーディオン（Accordion）

```tsx
<div className="
  border border-gray-200 rounded-xl
  overflow-hidden
">
  <button className="
    w-full px-6 py-4
    flex items-center justify-between
    text-left
    hover:bg-gray-50
    transition-colors duration-200
  ">
    <span className="font-medium text-gray-900">Accordion Title</span>
    <Icon name="chevron-down" className="transition-transform duration-200 [&.open]:rotate-180" />
  </button>
  <div className="
    px-6 pb-4
    text-gray-600
    [&.closed]:hidden
  ">
    Accordion content
  </div>
</div>
```

## 実装のベストプラクティス

### twxを使用したバリアント管理

```tsx
import { twx } from '@/lib/twx'

const Button = twx.button`
  px-6 py-3 rounded-xl
  font-medium
  transition-colors duration-200
  focus-visible:outline-2 focus-visible:outline-offset-2
`

const ButtonPrimary = twx(Button)`
  bg-primary-blue text-white
  hover:bg-primary-blue/90
  focus-visible:outline-primary-blue
`

const ButtonSecondary = twx(Button)`
  bg-white text-primary-blue border-2 border-primary-blue
  hover:bg-primary-blue/10
  focus-visible:outline-primary-blue
`
```

### Storybookストーリー例

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}
```

これらのコンポーネント仕様に従って、一貫性のあるUIを構築してください。
