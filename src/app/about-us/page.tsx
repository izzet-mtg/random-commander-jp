// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { Metadata } from "next";
import AboutUsPage from "@/component/page/AboutUs";

export const metadata: Metadata = {
  title: "私達について",
  description: "本サイトを運用している私たちについて解説しています",
  openGraph: {
    title: "私達について",
    description: "本サイトを運用している私たちについて解説しています",
    siteName: "ランダム統率者",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
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
