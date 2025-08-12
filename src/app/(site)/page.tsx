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
  },
};

export default function Home() {
  return (
    <main>
      <CardLottery />
    </main>
  );
}
