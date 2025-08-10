// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { Metadata } from "next";
import PrivacyPolicyPage from "@/component/page/PrivacyPolicy";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "本サイトのプライバシーポリシーを記載しています",
  openGraph: {
    title: "プライバシーポリシー",
    description: "本サイトのプライバシーポリシーを記載しています",
    siteName: "ランダム統率者",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.png`,
      }
    ],
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
