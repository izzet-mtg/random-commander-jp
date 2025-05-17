// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { Metadata } from "next";
import AboutUsPage from "@/component/page/AboutUs";

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
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.png`,
      }
    ],
  },
};

export default function AboutUs() {
  return <AboutUsPage />;
}
