// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "本サイトのプライバシーポリシーを記載しています",
  openGraph: {
    title: "プライバシーポリシー",
    description: "本サイトのプライバシーポリシーを記載しています",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
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
          本サイトは<Link href="https://mtg-jp.com/gameplay/format/commander.html">統率者戦</Link>において使用する統率者をランダムに表示するだけのサイトです。
          そのため、こちらから基本的には何らかの個人情報を収集・保存することはありません。
          また、 Cookie の提供や収集、保存も基本的には実施してないはずです。
        </p>
        <p>
          ただし、サイトとしては <Link href="https://docs.github.com/ja/pages/getting-started-with-github-pages/what-is-github-pages">GitHub Pages</Link> というサービスを利用して運営しており、またカード画像やカード情報といったものは <Link href="https://scryfall.com/">Scryfall</Link> の <Link href="https://scryfall.com/docs/api">API</Link> を利用しています。
          そのため、 GitHub Pages を提供する GitHub や Scryfall 側がデータの収集・保存をおこなっている可能性があります。
          確認した範囲では解析のためにブラウザーのバージョンや OS, スクリーンサイズや言語等を収集しているようですが、詳細が気になる方は <Link href="https://docs.github.com/ja/site-policy/privacy-policies/github-general-privacy-statement">GitHub のプライバシーステートメント</Link>や <Link href="https://scryfall.com/docs/privacy">Scryfall のプライバシーステートメント</Link>をご覧ください。
        </p>
      </div>
    </main>
  );
}
