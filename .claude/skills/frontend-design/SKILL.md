---
name: frontend-design
description: UIコンポーネント、スタイリング、レイアウト、デザインシステムを作成する際にブランド一貫性のあるデザインガイドラインを適用する。フロントエンドコンポーネントの構築、デザイン実装、ビジュアル/UXに関する議論の際に使用。Nyatinte BlogのNord風ダークテーマ（Polar Night背景とFrostアクセント）への準拠を保証する。
---

# Frontend Design Skill - Nyatinte Blog (Glacial Cyberpunk Edition)

このドキュメントは、Nyatinte Blogのv2デザインシステムにおける**「Glacial Cyberpunk（氷河のサイバーパンク）」**美学のガイドラインです。

一般的な「AIっぽい」デザイン（AI Slop）を徹底的に排除し、文脈に即した独創的な体験を提供することを目的とします。

---

## 🧠 Core Philosophy (美学の指針)

**"Avoid the Generic. Create Atmosphere."**

- **脱・AI Slop:** 予測可能で退屈な「分布の真ん中」のデザインを避ける。InterやRoboto、ありふれた紫のグラデーションは禁止する。
- **驚きと喜び (Surprise & Delight):** ユーザーの期待を良い意味で裏切る。整列されただけのレイアウトではなく、深み、質感、動きで感情を動かす。
- **IDEからのインスピレーション:** 開発者が好むIDEテーマ（Nord, Dracula等）のような、高コントラストで目が疲れず、かつ美しい配色を目指す。

---

## 🎯 ブランドアイデンティティ

**名前:** Nyatinte Blog
**コンセプト:** Arctic Frontier (極北のフロンティア)
**美学:** 静寂な氷の世界に、サイバーパンク的な発光とデジタルノイズが交差する「Glacial Cyberpunk」。
**キーワード:** Sharp (鋭さ), Deep (深淵), Glowing (発光), Crystalline (結晶質)

---

## 🏗️ デザインシステムの基盤

### 技術スタックとアプローチ

- **CSS Variables First:** テーマ（Light/Dark）の切り替えを前提とし、すべての色はCSS変数で管理する。
- **Tailwind CSS:** セマンティックなクラス設計を行い、\`@apply\` は避け、ユーティリティファーストで記述する。複雑なバリアントは \`cn()\` または \`twc()\` (<https://react-twc.vercel.app/>) ユーティリティで管理。
- **Atmosphere & Depth:** 単色塗りつぶし（Solid Colors）に逃げない。CSSグラデーションのレイヤー、ノイズテクスチャ、幾何学的パターンを重ねて「空気感」を作る。

---

## 🎨 カラーパレット & テーマ戦略

臆病で均等に分散されたパレットよりも、**シャープなアクセントを持つドミナントカラー**を重視します。

### テーマ変数 (globals.css で定義済み)

**Light Mode (Sharp & Clean) - \`:root\`**
\`\`\`css
--background: oklch(0.98 0.005 230);   /*雪原 - Nord6相当 */
--foreground: oklch(0.2 0.02 240);      /* 岩肌 - Nord0相当 */
--card: oklch(0.99 0.003 230);          /* 氷の結晶 */
--primary: oklch(0.55 0.12 203);        /* Frost Blue */
--border: oklch(0.88 0.012 235);        /* 淡い光*/
\`\`\`

**Dark Mode (Deep & Glowing) - \`.dark\`**
\`\`\`css
--background: oklch(0.17 0.015 245);    /*極夜の深部（Nordより深く） */
--foreground: oklch(0.94 0.008 230);    /* 雪明かり - Nord4相当 */
--card: oklch(0.22 0.018 240);          /* ガラス - Nord2相当 */
--primary: oklch(0.77 0.085 203);       /* 鋭い Frost Blue */
--border: oklch(0.38 0.025 245);        /* 鋭い光*/
\`\`\`

### アクセントカラー (Frost & Aurora)

Nordカラーをベースにしつつ、**発光表現（Glow）**を伴って使用します。

| カラー                   | Hex         | 用途                                   |
| ------------------------ | ----------- | -------------------------------------- |
| **Primary (Frost Blue)** | \`#88C0D0\` | メインアクション、リンク、発光ボーダー |
| **Secondary (Teal)**     | \`#8FBCBB\` | 補助的なアクセント、グラデーション     |
| **Dark Accent**          | \`#5E81AC\` | 背景のオーロラ、深みのある装飾         |

### オーロラ背景 (aurora-background.tsx で実装済み)

\`\`\`tsx
// 3つのBlob要素でオーロラを表現
<div className="bg-[#5E81AC] opacity-5 dark:opacity-20 blur-[120px] animate-aurora-float" />
<div className="bg-[#8FBCBB] opacity-3 dark:opacity-10 blur-[100px] animate-aurora-float" />
<div className="bg-[#88C0D0] opacity-4 dark:opacity-15 blur-[130px] animate-aurora-float" />
\`\`\`

---

## 📝 タイポグラフィ

**"No more Inter. No more Arial."**
一般的で安全なフォント選択を避け、美学を高める特徴的なフォントを採用します。安易にSpace Groteskに流れることも避けます。

### 1. Display Font: Unbounded

未来的で広がりのあるサンセリフ。視覚的なインパクトを最大化する。

\`\`\`css
font-family: 'Unbounded', sans-serif;
/*CSS変数: --font-unbounded */
/* クラス: font-display */
/* 用途: 特大見出し (h1)、数字、インパクトを出したい短いフレーズ*/
\`\`\`

**実装例 (hero-section.tsx):**
\`\`\`tsx
<h1 className="font-bold font-display text-5xl md:text-6xl lg:text-7xl">
  Nyatinte<span className="text-primary">.</span>com
</h1>
\`\`\`

### 2. Body Font: Plus Jakarta Sans + Noto Sans JP

幾何学的で読みやすいモダンサンセリフ。機能美と個性のバランス。日本語はNoto Sans JPで補完。

\`\`\`css
font-family: 'Plus Jakarta Sans', 'Noto Sans JP', sans-serif;
/*CSS変数: --font-plus-jakarta-sans, --font-noto-sans-jp */
/* クラス: font-body */
/* 用途: 記事本文、UIテキスト、説明文*/
\`\`\`

### 3. Code/Accent Font: JetBrains Mono

開発者親和性の高い等幅フォント。テックブログとしてのアイデンティティ。

\`\`\`css
font-family: 'JetBrains Mono', monospace;
/*CSS変数: --font-jetbrains-mono */
/* 用途: コードブロック、日付、メタデータ、装飾的なラベル*/
\`\`\`

**実装例 (status-badge.tsx):**
\`\`\`tsx
<span className="font-mono text-primary text-xs">{children}</span>
\`\`\`

### 補助フォント (fonts.ts で読み込み済み)

- **Inter Tight:** 代替サンセリフ
- **Chivo:** 見出しのバリエーション用

---

## 💎 ビジュアル要素 & エフェクト

### Glassmorphism (氷の質感)

カードやUIコンポーネントには、すりガラス効果を使用し「氷越しの視界」を表現します。

\`\`\`tsx
// StatusBadge での実装例
<div className="border border-primary/30 bg-card/50 backdrop-blur-md">
\`\`\`

### Aurora Lighting (オーロラ)

背景には固定的なグラデーションではなく、CSS Animationでゆっくりと揺らぐオーロラ（Blob）を配置し、生きているような深みを作ります。

**アニメーション定義 (tailwind.config.ts):**
\`\`\`ts
keyframes: {
  "aurora-float": {
    "0%": { transform: "translate(0, 0) scale(1)", opacity: "0.4" },
    "33%": { transform: "translate(30px, -50px) scale(1.1)", opacity: "0.6" },
    "66%": { transform: "translate(-20px, 20px) scale(0.9)", opacity: "0.4" },
    "100%": { transform: "translate(0, 0) scale(1)", opacity: "0.4" },
  },
},
animation: {
  "aurora-float": "aurora-float 10s ease-in-out infinite",
},
\`\`\`

### Glow Effects (発光表現)

\`\`\`tsx
// HeroSection でのアバター周囲の発光
<div className="bg-gradient-to-tr from-primary/30 to-primary/50 opacity-30 blur-2xl group-hover:opacity-50" />
\`\`\`

---

## ✨ モーション & インタラクション

**"Focus on High-Impact Moments."**
散漫なマイクロインタラクションよりも、ページロード時の一連の体験（Orchestrated Page Load）を重視します。

### Staggered Reveal (段階的出現)

ページロード時は、要素を一斉に表示せず、\`animation-delay\` を用いて順次表示させ、舞台の幕が上がるような期待感を高めます。

**実装例 (page.tsx):**
\`\`\`tsx
// Tailwind v4の animate-in と delay を組み合わせ
<div className="fade-in slide-in-from-bottom-5 animate-in delay-100 duration-800">
  {/* Hero Section */}
</div>
<div className="fade-in slide-in-from-bottom-5 animate-in delay-400 duration-800">
  {/* Section Header */}
</div>
\`\`\`

### Hover Glow (発光ホバー)

要素が浮き上がるだけでなく、内側から発光し、ボーダーが鋭く光る演出を加えます。CSSのみの実装を優先します。

\`\`\`tsx
// HeroSection でのホバー発光
<div className="transition-opacity duration-500 group-hover:opacity-50" />
\`\`\`

---

## 📐 レイアウト原則

### 余白を活かす

\`\`\`
セクション間: gap-16 (64px) ~ gap-24 (96px)
カード間: gap-8 (32px)
コンテナpadding: Tailwindのデフォルト
\`\`\`

### グリッドシステム

**実装例 (page.tsx):**
\`\`\`tsx
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
  <LatestPostList />
</div>
\`\`\`

### 視覚的階層

- 重要な要素は \`text-primary\` で鋭く光らせる
- セクションの区切りは \`<Separator />\` コンポーネントで

---

## ✅ Do's and Don'ts (美学の規定)

### ✅ Do (やるべきこと)

- **「異質感」を恐れない:** 一般的なブログデザインよりも、SFインターフェースのような没入感を優先する。
- **コントラストによる強調:** 重要な要素は \`text-primary\` や鮮やかなアクセントカラーで鋭く光らせる。
- **余白の活用:** "Unbounded"フォントの広がりを活かすため、十分なホワイトスペース（またはダークスペース）を確保する。
- **コンテキストに即したデザイン:** 「北極」というテーマに合わせ、氷、雪、オーロラ、寒冷な空気感を抽象的に表現する。
- **CSS Variables First:** \`--background\`, \`--foreground\`, \`--primary\` などのセマンティックな変数を使用する。
- **\`cn()\` / \`twc()\` でバリアント管理:** class-variance-authority (cva) と組み合わせて使用。

### ❌ Don't (やってはいけないこと - Anti AI Slop)

- **ありふれたフォント:** Inter, Roboto, Arial, Open Sans, そしてAIが使いがちなSpace Groteskの安易な使用を禁止する。
- **陳腐な配色:** 特に「白背景に薄い紫のグラデーション」や「意味のない虹色」は避ける。
- **ベタ塗りの背景:** 背景には必ずオーロラ（\`<AuroraBackground />\`）を含めること。完全な単色（Flat Color）は避ける。
- **予測可能なレイアウト:** クッキーカッター（金太郎飴）のような、どこにでもあるコンポーネント配置を避ける。
- **過度な装飾:** サイバーパンクといっても「ごちゃごちゃ」させてはいけない。あくまで「北極圏」のように澄んでいること。
- **\`@apply\` の使用:** Tailwindのユーティリティファーストを崩さない。
- **インラインスタイルやCSSモジュール:** 一貫性のためTailwindのみを使用する。

---

## 🛠️ 実装チェックリスト

新規コンポーネント作成時は以下を確認:

### カラー & テーマ

- [ ] CSS変数ベースのカラー（\`bg-background\`, \`text-foreground\`, \`text-primary\`）を使用
- [ ] ダークモード対応（\`.dark\` クラスによる自動切り替え）
- [ ] Frost カラー（\`#88C0D0\`, \`#8FBCBB\`, \`#5E81AC\`）をアクセントに使用

### タイポグラフィ

- [ ] 見出しは **Unbounded**（\`font-display\`）を使用
- [ ] 本文は **Plus Jakarta Sans + Noto Sans JP**（\`font-body\`）を使用
- [ ] コード/メタデータは **JetBrains Mono**（\`font-mono\`）を使用
- [ ] Inter, Roboto, Arial, Space Groteskを使用していない

### ビジュアルエフェクト

- [ ] ページ背景に \`<AuroraBackground />\` を配置
- [ ] カード等には Glassmorphism（\`backdrop-blur-md\`, \`bg-card/50\`）を適用
- [ ] 発光表現（\`blur-xl\`, \`opacity-*\`, グラデーション）を活用

### モーション

- [ ] ページロード時に \`animate-in\` + \`delay-*\` で段階的表示
- [ ] オーロラには \`animate-aurora-float\` を適用
- [ ] ホバー時に \`transition-*\` と \`group-hover:*\` で発光効果

### デザインシステム

- [ ] shadcnスタイルのTailwind使用法に準拠（\`cn()\`, \`twc()\`, \`cva\`）
- [ ] \`@apply\` やインラインスタイルを使用していない
- [ ] コンポーネントはsrc/components/ui/に配置

---

**バージョン:** 2.1 (Glacial Cyberpunk - Anti-Slop Edition)
**最終更新:** 2025-11-28
