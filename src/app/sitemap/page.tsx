// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { Metadata } from "next";
import SitemapPage from "@/component/page/Sitemap";

export const metadata: Metadata = {
  title: "サイトマップ",
  description: "本サイトのサイトマップです",
  openGraph: {
    title: "サイトマップ",
    description: "本サイトのサイトマップです",
    siteName: "ランダム統率者",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.png`,
      }
    ],
  },
};

export default function Sitemap() {
  return <SitemapPage />;
}
