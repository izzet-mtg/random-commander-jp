'use client';

import { PropsWithChildren } from "react";

const Card = ({ children, href }: PropsWithChildren<{ href?: string }>) => (
  <a href={href}>
    <div className="rounded-2xl shadow p-4 dark:hover:bg-gray-600 dark:bg-gray-700 hover:bg-gray-200 bg-gray-300 transition">
      {children}
    </div>
  </a>
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
        <Card href={`${process.env.NEXT_PUBLIC_BASE_PATH}/about-us`}>
          <CardTitle>
            私たちについて
          </CardTitle>
          <CardContents>
            目的の紹介
          </CardContents>
        </Card>
        <Card href={`${process.env.NEXT_PUBLIC_BASE_PATH}/faq`}>
          <CardTitle>
            よくある質問と回答集
          </CardTitle>
          <CardContents>
            質問と回答を掲載
          </CardContents>
        </Card>
        <Card href={`${process.env.NEXT_PUBLIC_BASE_PATH}/`}>
          <CardTitle>
            ランダム統率者表示
          </CardTitle>
          <CardContents>
            ランダムに統率者を表示します
          </CardContents>
        </Card>
      </div>
    </main>
  );
}
