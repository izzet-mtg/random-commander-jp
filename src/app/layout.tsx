// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Footer from "@/component/layout/Footer";
import Header from "@/component/layout/Header";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "ランダム統率者",
  description: "統率者をランダムに表示します",
  openGraph: {
    title: "ランダム統率者",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJp.variable} antialiased`}
      >
        <div className="flex flex-col items-center justify-items-center min-h-screen">
          <Header />
          <div className="flex-grow flex items-center justify-center w-full p-4">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
