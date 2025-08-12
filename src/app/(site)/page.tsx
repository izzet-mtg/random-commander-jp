// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { Metadata } from 'next';
import CardLottery from '@/component/CardLottery';

export const metadata: Metadata = {
  title: "ホーム",
  openGraph: {
    title: "ホーム",
  },
};

export default function Home() {
  return (
    <main>
      <CardLottery />
    </main>
  );
}
