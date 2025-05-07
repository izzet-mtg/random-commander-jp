'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import useCard, { revalidate as revalidateCard } from '@/hook/card';
import useSymbol from '@/hook/symbol';
import { parseManaCost } from '@/lib/manacost';
import ErrorDialog from '@/component/ErrorDialog';

const TextSection = ({ children, flexCol }: PropsWithChildren<{ flexCol?: boolean }>) => (
  <div className={`text-center md:text-left p-2 flex ${flexCol ? "flex-col" : ""}`}>
    {children}
  </div>
);
const TextSectionTitle = ({ children }: PropsWithChildren) => (
  <span className="font-bold">{children}:</span>
);
const TextSectionSpacer =  () => (
  <span className='w-[0.5em]'></span>
);

export default function Home() {
  const { card, error: useCardError } = useCard();
  const { symbols, error: useSymbolError } = useSymbol();
  const [error, setError] = useState<any>(undefined); // eslint-disable-line @typescript-eslint/no-explicit-any
  useEffect(() => {
    const error = useCardError || useSymbolError;
    if (error) { setError(error) }
  }, [useCardError, useSymbolError]);

  if (!(card && symbols)) return <p>Loading...</p>

  const colorSymbols = card.colors.length > 0
    ? card.colors.map(color => symbols[`{${color}}`])
    : [symbols['{C}']];
  const rawManaCosts = parseManaCost(card.mana_cost);
  const manaCosts = rawManaCosts.map(manaCost => symbols[manaCost]);

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
              <TextSectionTitle>色</TextSectionTitle>
              <TextSectionSpacer />
              <span className='flex justify-center items-center gap-1'>
                {colorSymbols.map((symbol, index) => <img key={`symbol-${index}`} src={symbol} className='h-[1em]' />)}
              </span>
            </TextSection>
            <hr />
            <TextSection>
              <TextSectionTitle>マナコスト</TextSectionTitle>
              <TextSectionSpacer />
              <span className='flex justify-center items-center gap-1'>
                {manaCosts.map((symbol, index) => <img key={`mana-cost-${index}`} src={symbol} className='h-[1em]' />)}
              </span>
            </TextSection>
            <hr />
            <TextSection>
              <TextSectionTitle>カードタイプ</TextSectionTitle>
              <TextSectionSpacer />
              <p>{card.printed_type_line || card.type_line}</p>
            </TextSection>
            <hr />
            <TextSection>
              <TextSectionTitle>レアリティ</TextSectionTitle>
              <TextSectionSpacer />
              {card.rarity === "rare"
                ? "レア"
                : card.rarity === "mythic"
                  ? "神話レア"
                  : card.rarity === "uncommon"
                    ? "アンコモン"
                    : "コモン"}
            </TextSection>
            <hr />
            <TextSection flexCol>
              {(card.printed_text || card.oracle_text).map(
                (line, index) => <p key={`text-line: ${index}`} className="pb-1">{line}</p>
              )}
            </TextSection>
            <hr />
            <TextSection>
              <TextSectionTitle>スタッツ</TextSectionTitle>
              <TextSectionSpacer />
              {card.power}/{card.toughness}
            </TextSection>
          </div>
        </div>
        <div className="flex items-center p-8 gap-4">
          <button type="button" className="w-30 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => revalidateCard()}>再選択</button>
          <button type="button" className="w-30 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => window.open(card.related_uris.edhrec)}>EDHREC </button>
        </div>
        {error && (
          <ErrorDialog onClose={() => setError(undefined) }>
            <p>以下の情報を連絡先から管理者に送信してください</p>
            <p>(連絡先: {process.env.contactLink})</p>
            <div className='p-4'>
              <div className="bg-gray-100 text-gray-800 text-sm p-4 rounded-md border border-gray-300 overflow-x-auto whitespace-pre-wrap">
                <p className='font-bold'>カード ID: {card.id}</p>
                <p className='font-bold'>エラー内容: {error}</p>
              </div>
            </div>
          </ErrorDialog>
        )}
      </main>
      <footer className="flex flex-wrap items-center justify-center dark:bg-gray-800 bg-gray-300 p-8 gap-2">
        <div className="flex gap-4">
          <a href={process.env.contactLink}>連絡先</a>
          <a href={process.env.faqLink}>FAQ</a>
        </div>
        <div>
          本サイトは<a href="https://company.wizards.com/ja/legal/fancontentpolicy">ファンコテンツポリシー</a>にしたがって作成したものです。ウィザーズから何らかの許可や承認を得ているものではありません。本ページ内で使用されている素材の一部はウィザーズ・オブ・ザ・コーストの所有物です。また画像イメージやテキストは <a href="https://scryfall.com/">Scryfall</a> から取得して利用しています。
        </div>
      </footer>
    </div >
  );
}
