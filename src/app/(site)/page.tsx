// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { Metadata } from 'next';
import HomePage from '@/component/page/Home';

export const metadata: Metadata = {
  title: "ホーム",
  openGraph: {
    title: "ホーム",
  },
};

export default function Home() {
  return <HomePage />
}
