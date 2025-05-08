const Footer = () => (
  <footer className="flex flex-col flex-wrap items-center justify-center w-full dark:bg-gray-800 bg-gray-300 p-8 gap-2">
    <div className="flex gap-4 md:flex-row flex-col">
      <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/`}>ホーム</a>
      <a href={process.env.NEXT_PUBLIC_CONTACT_LINK}>問い合わせ</a>
      <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/faq`}>FAQ</a>
      <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/about-us`}>私達について</a>
      <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/privacy-policy`}>プライバシーポリシー</a>
      <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/sitemap`}>サイトマップ</a>
    </div>
    <div className="flex flex-col items-center justify-center">
      <p>
        本サイトは<a href="https://company.wizards.com/ja/legal/fancontentpolicy">ファンコテンツポリシー</a>にしたがって作成したものであり、ウィザーズから何らかの許可や承認を得ているものではありません。
      </p>
      <p>
        また、本ページ内で使用されている素材の一部はウィザーズ・オブ・ザ・コーストの所有物です。
      </p>
      <p>
        画像イメージやテキストは <a href="https://scryfall.com/">Scryfall</a> から取得して利用しています。
      </p>
    </div>
  </footer>
);

export default Footer;