// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { PropsWithChildren } from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サイトマップ",
  description: "本サイトのサイトマップです",
  openGraph: {
    title: "サイトマップ",
    description: "本サイトのサイトマップです",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/human-sitemap`,
    images: {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.png`,
      type: "image/png",
      alt: "ロゴ",
      width: 1200,
      height: 630,
    },
  },
};

const Card = ({ children, href }: PropsWithChildren<{ href: string }>) => (
  <Link href={href}>
    <div className="rounded-2xl shadow p-4 dark:hover:bg-gray-600 dark:bg-gray-700 hover:bg-gray-200 bg-gray-300 transition">
      {children}
    </div>
  </Link>
);

const CardTitle = ({ children }: PropsWithChildren) => (
  <h2 className="text-xl font-semibold">{children}</h2>
);

const CardContents = ({ children }: PropsWithChildren) => (
  <p className="text-sm">{children}</p>
);

export default function Sitemap() {
  return (
    <main className="max-w-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
        <Card href="/about-us">
          <CardTitle>
            私たちについて
          </CardTitle>
          <CardContents>
            目的の紹介
          </CardContents>
        </Card>
        <Card href="/faq">
          <CardTitle>
            よくある質問と回答集
          </CardTitle>
          <CardContents>
            質問と回答を掲載
          </CardContents>
        </Card>
        <Card href="/">
          <CardTitle>
            ホーム
          </CardTitle>
          <CardContents>
            ランダムに統率者を表示
          </CardContents>
        </Card>
        <Card href="/privacy-policy">
          <CardTitle>
            プライバシーポリシー
          </CardTitle>
          <CardContents>
            プライバシーポリシーを表示
          </CardContents>
        </Card>
      </div>
    </main>
  );
}
