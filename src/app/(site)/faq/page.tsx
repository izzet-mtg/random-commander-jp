// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { PropsWithChildren } from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description: "よくある質問とその回答集です",
  openGraph: {
    title: "FAQ",
    description: "よくある質問とその回答集です",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/faq`,
    images: {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.png`,
      type: "image/png",
      alt: "ロゴ",
      width: 1200,
      height: 630,
    },
  },
};

const Question = ({ children }: PropsWithChildren) => (
  <>
    <h2 className="font-bold">Q. {children}</h2>
    <hr />
  </>
);

const Answer = ({ children }: PropsWithChildren) => (
  <div className="flex gap-2">
    <p>A.</p>
    <div>
      {children}
    </div>
  </div>
);

const Section = ({ children }: PropsWithChildren) => (
  <div className="p-4 flex flex-col gap-2">
    {children}
  </div>
);

export default function Faq() {
  return (
    <main className="max-w-3xl">
      <h1 className="text-2xl font-extrabold pb-4">よくある質問と回答</h1>
      <Section>
        <Question>これは何？</Question>
        <Answer>
          ランダムに <Link href="https://mtg-jp.com/">Magic: the Gathering</Link> の<Link href="https://mtg-jp.com/gameplay/format/commander.html">統率者戦</Link>における統率者を表示するものです。
          利用想定としては友人や様々な人と本ページで表示されるランダムな統率者をつかって統率者戦を遊んでもらうことになります。
          利用は当地の法律や条例、その他定められ法令と Wizards of the Coast 社が用意している<Link href="https://company.wizards.com/ja/legal/fancontentpolicy">ファンコテンツポリシー</Link>にしたがってご利用ください。
        </Answer>
      </Section>
      <Section>
        <Question>一部英語が含まれるのは何故ですか？</Question>
        <Answer>
          データとして <Link href="https://scryfall.com/">Scryfall</Link> の <Link href="https://scryfall.com/docs/api">API</Link> を利用しています。
          その API から返ってくるデータに英語が含まれており、そのデータを直接利用しているためです。
          日本語に独自対応する予定はありません。
        </Answer>
      </Section>
      <Section>
        <Question>こちらのデータを利用してよいですか？</Question>
        <Answer>
          本サイトは <Link href="https://scryfall.com/">Scryfall</Link> の <Link href="https://scryfall.com/docs/api">API</Link> を利用しているだけですのでおそらくそちらを利用する方がよいでしょう。
        </Answer>
      </Section>
      <Section>
        <Question>バグやエラーを見つけました。どちらに問い合わせればよいですか？</Question>
        <Answer>
          <Link href={process.env.NEXT_PUBLIC_CONTACT_LINK!}>問い合わせフォーム</Link>に記載して送信いただければ大丈夫です。
          開発者の方は <Link href={process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_URL!}>GitHub リポジトリー</Link>から Issue をたてていただければ対応しますし、 Pull Request を送信いただいても構いません。
          その際は行動規範をよく読んだ上で実施してください。
        </Answer>
      </Section>
    </main>
  );
}

