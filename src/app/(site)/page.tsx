// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { Metadata } from 'next';
import CardLottery from '@/component/CardLottery';

export const metadata: Metadata = {
  title: "ホーム",
  openGraph: {
    title: "ホーム",
    description: "本サイトのプライバシーポリシーを記載しています",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    images: {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.png`,
      type: "image/png",
      alt: "ロゴ",
      width: 1200,
      height: 630,
    },
  },
};

export default function Home() {
  return (
    <main>
      <CardLottery />
    </main>
  );
}
