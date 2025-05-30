<p align="center">
  <img src="https://raw.githubusercontent.com/izzet-mtg/random-commander-jp/refs/heads/main/logos/logo.svg" width="15%" />
</p>

# Random Commander JP (RCJ)

![cd](https://github.com/izzet-mtg/random-commander-jp/actions/workflows/nextjs.yml/badge.svg)

ランダムに統率者を選ぶオラクル

## 必要なもの

- Node.js 18.18 以上
- npm

## 始め方

まずパッケージをインストールします。

```bash
npm i
```

次のコマンドで開発サーバーを起動します。

```bash
npm run dev
```

開発用サーバーが起動したら [http://localhost:3000](http://localhost:3000) で開くとアプリに接続できます。

`src/app/page.tsx` が起点です。
もし編集したければそこから編集したい内容をたどってください。

修正内容はブランチを切り、そこに修正内容を含めて Pull Request として出してください。

## 各種リンクの変更
FAQ や連絡先といった変更されるものは `next.config.ts` の `env` にて設定しているため、適宜変更してください。
また、 `basePath` で設定しているパスに設定している org 名を自身のものに変更してください。

## Google Search Console の verification 用ファイル削除
`public` フォルダーに Google の Google Search Console の verification 用ファイルがあるため、こちらを削除し、自前のものに置き換えて利用してください。