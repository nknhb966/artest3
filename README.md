# ARのWebアプリ作成方法

## 0. はじめに

### 0-1. 概要

スマートフォンのみで、ARのWebアプリを作成する方法を以下に説明します。スマホにScaniverseアプリをインストールし、GitHub Pagesに3Dモデル化したデータをアップロードすれば完成となります。

### 0-2. 必要なもの

- スマートフォン（iOSまたはAR対応のAndroid）
- 3Dモデル化したい対象物
- GitHubアカウント（GitHub Pages推奨）
- Scaniverseアプリ（または代替スキャンアプリ）

### 0-3. その他

- PC不要  
- アプリ開発スキル不要  
- インターネット接続とブラウザがあればOK！

---

## 1. GitHub リポジトリを準備

### 1-1. GitHub アカウントを作成（無料）

- https://github.com にアクセスし、アカウントを登録
- ユーザー名とメールアドレスを設定

### 1-2. GitHubモバイルサイトにログイン

### 1-3. 制作キットを自分のリポジトリにコピー

- 「arkit」のGitHubリポジトリを開く  
  https://www.github.com/echizencity/arkit
- [Fork]を選択
- 「Repository name」を変更: `arkit` → `reponame`
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

例：  
`hajiki01_model.glb`, `sueki03_model.glb`

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
|`./models/hajiki01_model.glb`|土師器|
|`./models/sueki03_model.glb`|須恵器|

- 半角カンマ区切り
- 1行目は `path,name` のままでOK
- 編集後、[Commit changes] → [Commit changes]で保存

---

## 5. 公開と動作確認

### 5-1. GitHub Pagesが自動更新

- 公開URLにアクセスし、ページが更新されているか確認：

|名称|端末|URL|
|----|----|----|
|AR Lite|ヘッドセット|`https://username.github.io/reponame/`|
|AR Event|スマホ|`https://username.github.io/reponame/event.html`|
|AR Go|スマホ|`https://username.github.io/reponame/go.html`|

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
`<!--     APP: <a href="https://github.com/echizencity/arkit/tree/main/">src on GitHub</a><br> -->`

↓コメントアウトを解除して、URL等を修正する

`GLB: <a href="https://github.com/username/reponame/tree/main/models/">〜〜〜〜</a><br>`  
`APP: <a href="https://github.com/username/reponame/tree/main/">src on GitHub</a><br>`
