# craftARt

**craftARt（クラフタート）** は、「手作りをARで届ける」ことをコンセプトとした、  
地域文化・工芸・展示物をヘッドセットやスマートフォンで簡易にAR体験できるWebアプリです。

> **craftARt = craft（手作り） + AR（拡張現実） + art（文化・芸術）**

## craftARt越前

本リポジトリは越前市版の「craftARt」であり、地域文化を拡張現実（AR）として再発信する取り組みです。

### アプリ種別

| アプリ名           | 用途                         | 端末 | HTML |
|--------------------|------------------------------|--------|--------|
| **craftARt Lite**  | ヘッドセット向け軽量ビューア | ヘッドセット | `/index.html` |
| **craftARt Event** | イベント向けAR体験    | スマホ | `/event.html` |
| **craftARt Go**    | 簡易型ARビューア | スマホ | `/go.html` |

### 全国向けスターターキット

地域や団体で craftARt を活用いただくためのテンプレートはこちら：

- **[craftARt kit](https://github.com/echizencity/craftARt-kit)**  
  GitHub Pages をベースに、誰でも無料・簡単にAR展示が始められる導入キットです。

### 使用ライブラリ

- [model-viewer](https://modelviewer.dev/)
- [egxr.js](https://github.com/code4fukui/egxr.js/blob/main/egxr.js) （Code for Fukui）
- [threeutil.js](https://github.com/code4fukui/vr-lenspark/blob/main/threeutil.js) （Code for Fukui）

### ライセンス

このプロジェクトは **MITライセンス** のもとで公開されています。  
ご自由に利用・改変・再配布が可能です。

---

## 0. はじめに

### 0-1. このプロジェクトでできること

- スマートフォンだけでAR展示を作成・公開できる
- GitHub Pages を使ってWebで無料公開
- スキャン → 軽量化 → 公開 の3ステップで完了
- PCやアプリ開発の知識は不要！

### 0-2. 必要なもの

- スマートフォン（iOS または AR対応 Android）
- Scaniverse アプリ（または代替スキャンアプリ）
- GitHub アカウント（無料）
- 3D化したい対象物（作品、工芸品、資料など）

### 0-3. 特徴

- PC不要：スマホだけで完結  
- スキル不要：誰でも3DコンテンツをAR化
- 導入例：文化・観光・教育などにすぐ使える  

---

## 1. GitHub リポジトリを準備

### 1-1. GitHub アカウントを作成

- https://github.com にアクセスし、アカウントを登録
- ユーザー名とメールアドレスを設定

### 1-2. GitHubモバイルサイトにログイン

### 1-3. 制作キットを自分のリポジトリにコピー

- 「craftARt-kit」のGitHubリポジトリを開く  
  https://www.github.com/echizencity/craftARt-kit
- [Fork]を選択
- 「Repository name」を変更: `craftARt-kit` → `reponame`
- [Create fork]で自分のアカウント下に作業用リポジトリを作成

### 1-4. GitHub Pages を有効化

- [Settings] → [Pages] → 「Branch」の“None”を“main”にして [Save]
- 約1分後に公開URLが発行される  
  `https://username.github.io/reponame`

---

## 2. Scaniverseで3Dモデル作成

### 2-1. Scaniverseアプリ（または類似アプリ）を起動

- [+] → [メッシュ] → オブジェクトサイズを指定 → [●]
- 対象物の周囲をゆっくり撮影  
  光の反射や背景ノイズに注意して撮影
- [●]で撮影終了 → 処理モードを選択 → 1~2分待つ → [保存]

### 2-2. クロップ（切り取り）

- [編集] → [トリミング]で、不要な床や背景をカット

### 2-3. glb形式でエクスポート

- [共有] → [モデルのエクスポート]を選択  
  **エクスポート形式は `.glb`（推奨）**
- [ファイルに保存]を選択  
  ファイル名を以下の形式で変更（日本語・スペースNG）

例：`hajiki01.glb`,`sueki03.glb`

---

## 3. gltfbeautyで軽量化

### 3-1. モバイル対応 gltfbeauty にアクセス

- 軽量化ツール：gltfbeauty（Code for Fukui）  
  https://code4fukui.github.io/gltfbeauty/

### 3-2. モデルファイルを選んで読み込み

- テクスチャーサイズなどを調整する
- 「ファイル選択」から.glbファイルを選択  
  → 自動で軽量化されたファイルがダウンロードされる

---

## 4. GitHubにアップロード

### 4-1. GitHubモバイルサイトから、「models」フォルダを開く

### 4-2. ファイルをアップロード

- […] → 「Upload files」→「choose your files」  
  → スマホから軽量化済みglbファイルをアップ
- 「sample.glb」は削除  
  → […] → [Delete file] → [Commit changes] → [Commit changes]

### 4-3. models.csv を編集

- 「models」フォルダから上の階層「reponame」フォルダに移動
- CSVファイル（models.csv）を開き、[…] → [Edit in place]

以下のように入力する：

|path|name|
|----|----|
|`./models/hajiki01.glb`|土師器|
|`./models/sueki03.glb`|須恵器|

- 半角カンマ区切り
- 1行目は `path,name` のままでOK
- 編集後、[Commit changes] → [Commit changes]で保存

---

## 5. 公開と動作確認

### 5-1. GitHub Pagesが自動更新

- 公開URLにアクセスし、ページが更新されているか確認：

|名称|端末|URL|
|----|----|----|
|craftARt Event|スマホ|`https://username.github.io/reponame/event.html`|
|craftARt Go|スマホ|`https://username.github.io/reponame/go.html`|
|craftARt Lite|ヘッドセット|`https://username.github.io/reponame/`|

### 5-2. 動作確認（スマホ）

- ARボタンで起動するか確認（AR対応機種で）
- モデルの読み込み・サイズに問題がないか確認
- Android端末の場合はARCore対応かを確認

### 5-3. 動作確認（ヘッドセット）

- ARボタンで起動するか確認
- モデルの読み込み・表示サイズに問題がないか確認

---

## 6. QRコード作成と印刷

### 6-1. QRコード作成ページへ

- おすすめツール：QRコード作成（jig.jp）  
  https://fukuno.jig.jp/app/util/qrmaker/  

- 作成対象URL：  
  （Event）`https://username.github.io/reponame/event.html`  
  （Go）`https://username.github.io/reponame/go.html`

### 6-2. QRコードを印刷・配布

- チラシ・ポスター・会場パネルなどに貼り出してAR体験スタート！

---

## 補足

### forkだけだと見た目が同じなので区別したい場合：

#### 1. 固有名称に変更

- `index.html`: 5行目, 11行目  
- `event.html`: 5行目, 166行目  
- `go.html`: 5行目, 93行目

※5行目はWebページのタイトル、他の行は表示されるタイトル

#### 2. GLBやAPPを指定

- `index.html` の13行目がGLBファイルの場所、14行目がAPPの場所を指定している

`<!--     GLB: <a href="https://github.com/echizencity/opendata/tree/main/kokufuhakkutsu/">越前国府発掘プロジェクト</a><br> -->`  
`<!--     APP: <a href="https://github.com/echizencity/craftARt-kit/tree/main/">src on GitHub</a><br> -->`

↓コメントアウトを解除して、URL等を修正する

`GLB: <a href="https://github.com/username/reponame/tree/main/models/">〜〜〜〜</a><br>`  
`APP: <a href="https://github.com/username/reponame/tree/main/">src on GitHub</a><br>`
