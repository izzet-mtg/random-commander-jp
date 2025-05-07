'use client';

import { PropsWithChildren } from 'react';
import useCard, { revalidate as revalidateCard } from '@/hook/card';
import useSymbol from '@/hook/symbol';

const TextSection = ({ children }: PropsWithChildren) => (
  <div className="text-center md:text-left p-2">
    {children}
  </div>
);

export default function Home() {
  const { card, error: cardFetchError } = useCard();
  const { symbols, error: symbolFetchError } = useSymbol();
  const splitNewline = (text: string) => text.split("\n");

  if (!(card && symbols)) return <p>Loading...</p>

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <main className="flex flex-col items-center justify-center p-8 flex-grow">
        <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1280px]">
          <div className="flex items-center justify-center">
            <img className="block lg:h-96 h-80 m-auto row-span-1" src={card.image_uris!.normal} />
          </div>
          <div className="max-w-128">
            <TextSection>
              <h1 className="text-2xl font-extrabold">{card.printed_name || card.name}</h1>
            </TextSection>
            <hr />
            <TextSection>
              <span className="font-bold">色:</span> {card.colors.join()}
            </TextSection>
            <hr />
            <TextSection>
              <span className="font-bold">マナコスト:</span> {card.mana_cost}
            </TextSection>
            <hr />
            <TextSection>
              <p>{card.printed_type_line || card.type_line}</p>
            </TextSection>
            <hr />
            <TextSection>
              {card.rarity === "rare"
                ? "レア"
                : card.rarity === "mythic"
                  ? "神話レア"
                  : card.rarity === "uncommon"
                    ? "アンコモン"
                    : "コモン"}
            </TextSection>
            <hr />
            <TextSection>
              {splitNewline(card.printed_text || card.oracle_text).map(
                (line, index) => <p key={`text-line: ${index}`} className="pb-1">{line}</p>
              )}
            </TextSection>
            <hr />
            <TextSection>
              {card.power}/{card.toughness}
            </TextSection>
          </div>
        </div>
        <div className="flex items-center p-8 gap-4">
          <button type="button" className="w-30 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => revalidateCard()}>再選択</button>
          <button type="button" className="w-30 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => window.open(card.related_uris.edhrec)}>EDHREC </button>
        </div>
      </main>
      <footer className="flex flex-wrap items-center justify-center dark:bg-gray-800 bg-gray-300 p-8 gap-2">
        <div className="flex">
          <a href="https://github.com/izzet-mtg/random-commander-jp/issues">連絡先</a>
        </div>
        <div>
          本サイトは<a href="https://company.wizards.com/ja/legal/fancontentpolicy">ファンコテンツポリシー</a>にしたがって作成したものです。ウィザーズから何らかの許可や承認を得ているものではありません。本ページ内で使用されている素材の一部はウィザーズ・オブ・ザ・コーストの所有物です。また画像イメージやテキストは <a href="https://scryfall.com/">Scryfall</a> から取得して利用しています。
        </div>
      </footer>
    </div >
  );
}
