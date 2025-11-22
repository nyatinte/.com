---
name: frontend-design
description: UIコンポーネント、スタイリング、レイアウト、デザインシステムを作成する際にブランド一貫性のあるデザインガイドラインを適用する。フロントエンドコンポーネントの構築、デザイン実装、ビジュアル/UXに関する議論の際に使用。Nyatinte BlogのNord風ダークテーマ（Polar Night背景とFrostアクセント）への準拠を保証する。
---

Frontend Design Skill - Nyatinte Blog (Glacial Cyberpunk Edition)

このドキュメントは、Nyatinte Blogのv2デザインシステムにおける**「Glacial Cyberpunk（氷河のサイバーパンク）」**美学のガイドラインです。
一般的な「AIっぽい」デザイン（AI Slop）を徹底的に排除し、文脈に即した独創的な体験を提供することを目的とします。

🧠 Core Philosophy (美学の指針)

"Avoid the Generic. Create Atmosphere."

脱・AI Slop: 予測可能で退屈な「分布の真ん中」のデザインを避ける。InterやRoboto、ありふれた紫のグラデーションは禁止する。

驚きと喜び (Surprise & Delight): ユーザーの期待を良い意味で裏切る。整列されただけのレイアウトではなく、深み、質感、動きで感情を動かす。

IDEからのインスピレーション: 開発者が好むIDEテーマ（Nord, Dracula等）のような、高コントラストで目が疲れず、かつ美しい配色を目指す。

🎯 ブランドアイデンティティ

名前: Nyatinte Blog
コンセプト: Arctic Frontier (極北のフロンティア)
美学: 静寂な氷の世界に、サイバーパンク的な発光とデジタルノイズが交差する「Glacial Cyberpunk」。
キーワード: Sharp (鋭さ), Deep (深淵), Glowing (発光), Crystalline (結晶質)

🏗️ デザインシステムの基盤

技術スタックとアプローチ

CSS Variables First: テーマ（Light/Dark）の切り替えを前提とし、すべての色はCSS変数で管理する。

Tailwind CSS: セマンティックなクラス設計を行い、@apply は避け、ユーティリティファーストで記述する。

Atmosphere & Depth: 単色塗りつぶし（Solid Colors）に逃げない。CSSグラデーションのレイヤー、ノイズテクスチャ、幾何学的パターンを重ねて「空気感」を作る。

🎨 カラーパレット & テーマ戦略

臆病で均等に分散されたパレットよりも、シャープなアクセントを持つドミナントカラーを重視します。

テーマ変数

Light Mode (Sharp & Clean)

--bg-primary:   #ECEFF4; /* Nord6 - 雪原 */
--bg-secondary: #E5E9F0; /* Nord5 - 氷床 */
--bg-elevated:  rgba(255, 255, 255, 0.7); /* 氷の結晶 */
--text-primary: #2E3440; /* Nord0 - 岩肌 */
--border-glow:  rgba(136, 192, 208, 0.3); /* 淡い光 */


Dark Mode (Deep & Glowing)

--bg-primary:   #1a1d24; /* Custom Deep Dark - 極夜の深部（Nordより深く） */
--bg-secondary: #242933; /* 構造物 */
--bg-elevated:  rgba(46, 52, 64, 0.6); /* Nord2 Base - ガラス */
--text-primary: #E5E9F0; /* Nord4 - 雪明かり */
--border-glow:  rgba(136, 192, 208, 0.1); /* 鋭い光 */


アクセントカラー (Frost & Aurora)

Nordカラーをベースにしつつ、**発光表現（Glow）**を伴って使用します。

Primary (Frost Blue): #88C0D0 - メインアクション、リンク、発光ボーダー

Secondary (Teal): #8FBCBB - 補助的なアクセント、グラデーション

Dark Accent: #5E81AC - 背景のオーロラ、深みのある装飾

Status Glow: 各ステータスカラー（Error, Success等）は、box-shadowによる発光を伴うことでサイバー感を演出する。

📝 タイポグラフィ

"No more Inter. No more Arial."
一般的で安全なフォント選択を避け、美学を高める特徴的なフォントを採用します。安易にSpace Groteskに流れることも避けます。

1. Display Font: Unbounded

未来的で広がりのあるサンセリフ。視覚的なインパクトを最大化する。

font-family: 'Unbounded', sans-serif;
/* 用途: 特大見出し、数字、インパクトを出したい短いフレーズ */


2. Body Font: Plus Jakarta Sans

幾何学的で読みやすいモダンサンセリフ。機能美と個性のバランス。

font-family: 'Plus Jakarta Sans', sans-serif;
/* 用途: 記事本文、UIテキスト、説明文 */


3. Code/Accent Font: JetBrains Mono

開発者親和性の高い等幅フォント。テックブログとしてのアイデンティティ。

font-family: 'JetBrains Mono', monospace;
/* 用途: コードブロック、日付、メタデータ、装飾的なラベル */


💎 ビジュアル要素 & エフェクト

Glassmorphism (氷の質感)

カードやUIコンポーネントには、すりガラス効果を使用し「氷越しの視界」を表現します。

.glass-card {
  background: var(--bg-elevated);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
}


Noise Texture (粒状感)

画面全体に微細なSVGノイズフィルターをオーバーレイし、デジタルな「フィルムグレイン」感を演出します。のっぺりとしたCG感を排除します。

Aurora Lighting (オーロラ)

背景には固定的なグラデーションではなく、CSS Animationでゆっくりと揺らぐオーロラ（Blob）を配置し、生きているような深みを作ります。

✨ モーション & インタラクション

"Focus on High-Impact Moments."
散漫なマイクロインタラクションよりも、ページロード時の一連の体験（Orchestrated Page Load）を重視します。

Staggered Reveal (段階的出現)

ページロード時は、要素を一斉に表示せず、animation-delay を用いて順次表示させ、舞台の幕が上がるような期待感を高めます。

.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
/* ... */


Hover Glow (発光ホバー)

要素が浮き上がるだけでなく、内側から発光し、ボーダーが鋭く光る演出を加えます。CSSのみの実装を優先します。

✅ Do's and Don'ts (美学の規定)

✅ Do (やるべきこと)

「異質感」を恐れない: 一般的なブログデザインよりも、SFインターフェースのような没入感を優先する。

コントラストによる強調: 重要な要素は text-glow や鮮やかなアクセントカラーで鋭く光らせる。

余白の活用: "Unbounded"フォントの広がりを活かすため、十分なホワイトスペース（またはダークスペース）を確保する。

コンテキストに即したデザイン: 「北極」というテーマに合わせ、氷、雪、オーロラ、寒冷な空気感を抽象的に表現する。

❌ Don't (やってはいけないこと - Anti AI Slop)

ありふれたフォント: Inter, Roboto, Arial, Open Sans, そしてAIが使いがちなSpace Groteskの安易な使用を禁止する。

陳腐な配色: 特に「白背景に薄い紫のグラデーション」や「意味のない虹色」は避ける。

ベタ塗りの背景: 背景には必ずノイズ、グラデーション、またはオーロラを含めること。完全な単色（Flat Color）は避ける。

予測可能なレイアウト: クッキーカッター（金太郎飴）のような、どこにでもあるコンポーネント配置を避ける。

過度な装飾: サイバーパンクといっても「ごちゃごちゃ」させてはいけない。あくまで「北極圏」のように澄んでいること。

バージョン: 2.1 (Glacial Cyberpunk - Anti-Slop Edition)
最終更新: 2025-11-21