// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "本サイトのプライバシーポリシーを記載しています",
  openGraph: {
    title: "プライバシーポリシー",
    description: "本サイトのプライバシーポリシーを記載しています",
    siteName: "ランダム統率者",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
    images: [
      {
        url: "/ogp.png",
      }
    ],
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl">
      <div>
        <h1 className="text-2xl font-extrabold pb-4">プライバシーポリシー</h1>
        <p>
          本ページでは本サイトの個人情報の取り扱いに関して記載しています。
        </p>
        <p>
          本サイトは<a href="https://mtg-jp.com/gameplay/format/commander.html">統率者戦</a>において使用する統率者をランダムに表示するだけのサイトです。
          そのため、こちらから基本的には何らかの個人情報を収集・保存することはありません。
          また、 Cookie の提供や収集、保存も基本的には実施してないはずです。
        </p>
        <p>
          ただし、サイトとしては <a href="https://docs.github.com/ja/pages/getting-started-with-github-pages/what-is-github-pages">GitHub Pages</a> というサービスを利用して運営しており、またカード画像やカード情報といったものは <a href="https://scryfall.com/">Scryfall</a> の <a href="https://scryfall.com/docs/api">API</a> を利用しています。
          そのため、 GitHub Pages を提供する GitHub や Scryfall 側がデータの収集・保存をおこなっている可能性があります。
          確認した範囲では解析のためにブラウザーのバージョンや OS, スクリーンサイズや言語等を収集しているようですが、詳細が気になる方は <a href="https://docs.github.com/ja/site-policy/privacy-policies/github-general-privacy-statement">GitHub のプライバシーステートメント</a>や <a href="https://scryfall.com/docs/privacy">Scryfall のプライバシーステートメント</a>をご覧ください。
        </p>
      </div>
    </main>
  );
}
