// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import Link from "next/link";

const Footer = () => (
  <footer className="flex flex-col flex-wrap items-center justify-center w-full dark:bg-gray-800 bg-gray-300 p-8 gap-2">
    <div className="flex gap-4 md:flex-row flex-col">
      <Link href="/">ホーム</Link>
      <Link href={process.env.NEXT_PUBLIC_CONTACT_LINK!}>問い合わせ</Link>
      <Link href="/faq">FAQ</Link>
      <Link href="/about-us">私達について</Link>
      <Link href="/privacy-policy">プライバシーポリシー</Link>
      <Link href="/human-sitemap">サイトマップ</Link>
    </div>
    <div className="flex flex-col items-center justify-center">
      <p>
        本サイトは<Link href="https://company.wizards.com/ja/legal/fancontentpolicy">ファンコテンツポリシー</Link>にしたがって作成したものであり、ウィザーズから何らかの許可や承認を得ているものではありません。
      </p>
      <p>
        また、本ページ内で使用されている素材の一部はウィザーズ・オブ・ザ・コーストの所有物です。
      </p>
      <p>
        画像イメージやテキストは <Link href="https://scryfall.com/">Scryfall</Link> から取得して利用しています。
      </p>
    </div>
  </footer>
);

export default Footer;