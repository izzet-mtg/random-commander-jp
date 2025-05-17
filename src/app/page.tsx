// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { Metadata } from 'next';
import HomePage from '@/component/page/Home';

export const metadata: Metadata = {
  title: "ホーム",
  description: "統率者をランダムに表示します",
  openGraph: {
    title: "ホーム",
    description: "統率者をランダムに表示します",
    siteName: "ランダム統率者",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.png`,
      }
    ],
  }
};

export default function Home() {
  return <HomePage />
}
