// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

// GitHub Pages は独自ドメインを使わずに素で使うと `https://<org 名>.github.io/<リポジトリー名>/<ページ URL>` になる
// つまり、 `/` で飛んでしまうと `https://<org 名>.github.io/` に飛んでしまうが、本来飛びたいのは `https://<org 名>.github.io/<リポジトリー名>/` なはず
// そのため、 production 環境である GitHub Pages 環境であれば URL に `/<リポジトリー名>` をくっつけるようにする。
const basePath = process.env.NODE_ENV === "production" ? "/random-commander-jp" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    // お問い合わせリンク
    NEXT_PUBLIC_CONTACT_LINK: "https://forms.gle/FNLZMrzAnxNehuaP6",
    NEXT_PUBLIC_GITHUB_REPOSITORY_URL: "https://github.com/izzet-mtg/random-commander-jp/",
    // OGP 用
    NEXT_PUBLIC_SITE_URL: "https://izzet-mtg.github.io/random-commander-jp",
  },
  assetPrefix: basePath,
  basePath: basePath,
};

module.exports = nextConfig;
