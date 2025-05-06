import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "ランダム統率者",
  description: "統率者をランダムに表示します",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansJp.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
