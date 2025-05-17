// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { PropsWithChildren } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "よくある質問とその回答集です",
  openGraph: {
    title: "FAQ",
    description: "よくある質問とその回答集です",
    siteName: "ランダム統率者",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/faq`,
    images: [
      {
        url: "/ogp.png",
      }
    ],
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

export default function AboutUs() {
  return (
    <main className="max-w-3xl">
      <h1 className="text-2xl font-extrabold pb-4">よくある質問と回答</h1>
      <Section>
        <Question>これは何？</Question>
        <Answer>
          ランダムに <a href="https://mtg-jp.com/">Magic: the Gathering</a> の<a href="https://mtg-jp.com/gameplay/format/commander.html">統率者戦</a>における統率者を表示するものです。
          利用想定としては友人や様々な人と本ページで表示されるランダムな統率者をつかって統率者戦を遊んでもらうことになります。
          利用は当地の法律や条例、その他定められ法令と Wizards of the Coast 社が用意している<a href="https://company.wizards.com/ja/legal/fancontentpolicy">ファンコテンツポリシー</a>にしたがってご利用ください。
        </Answer>
      </Section>
      <Section>
        <Question>一部英語が含まれるのは何故ですか？</Question>
        <Answer>
          データとして <a href="https://scryfall.com/">Scryfall</a> の <a href="https://scryfall.com/docs/api">API</a> を利用しています。
          その API から返ってくるデータに英語が含まれており、そのデータを直接利用しているためです。
          日本語に独自対応する予定はありません。
        </Answer>
      </Section>
      <Section>
        <Question>こちらのデータを利用してよいですか？</Question>
        <Answer>
          本サイトは <a href="https://scryfall.com/">Scryfall</a> の <a href="https://scryfall.com/docs/api">API</a> を利用しているだけですのでおそらくそちらを利用する方がよいでしょう。
        </Answer>
      </Section>
      <Section>
        <Question>バグやエラーを見つけました。どちらに問い合わせればよいですか？</Question>
        <Answer>
          <a href={process.env.NEXT_PUBLIC_CONTACT_LINK}>問い合わせフォーム</a>に記載して送信いただければ大丈夫です。
          開発者の方は <a href={process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_URL}>GitHub リポジトリー</a>から Issue をたてていただければ対応しますし、 Pull Request を送信いただいても構いません。
          その際は行動規範をよく読んだ上で実施してください。
          また、著作の権利を簡素にするため著作権譲渡をお願いしています。
          投稿される際はそちらに同意いただいてから実施してください。
        </Answer>
      </Section>
    </main>
  );
}
