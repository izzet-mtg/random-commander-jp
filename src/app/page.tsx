'use client';

// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { PropsWithChildren, useState } from 'react';
import useRandomCard, { revalidate as revalidateCard } from '@/hook/useRandomCard';
import useSymbol from '@/hook/useSymbol';
import { parseManaCost } from '@/lib/manacost';
import ErrorDialog from '@/component/ErrorDialog';
import { parseCardText } from '@/lib/cardtext';

const TextSection = ({ children, flexCol }: PropsWithChildren<{ flexCol?: boolean }>) => (
  <div className={`text-center md:text-left p-2 flex ${flexCol ? "flex-col" : ""}`}>
    {children}
  </div>
);
const TextSectionTitle = ({ children }: PropsWithChildren) => (
  <span className="font-bold">{children}:</span>
);
const TextSectionSpacer = () => (
  <span className='w-[0.5em]'></span>
);

export default function Home() {
  const { card, error: useCardError } = useRandomCard();
  const { symbols, error: useSymbolError } = useSymbol();
  const [error, setError] = useState<Error | undefined>(useCardError || useSymbolError);
  if (error) {
    console.error(`user encountered error: ${error}`);
  }

  if (!(card && symbols)) return (
    <main className="flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </main>
  );
  console.info(`user fetched card (name: ${card.name}, id: ${card.id})`);

  const colorSymbols = card.color_identity.length > 0
    ? card.color_identity.map(color => symbols[`{${color}}`])
    : [symbols['{C}']];
  const rawManaCosts = card.mana_cost ? parseManaCost(card.mana_cost) : undefined;
  const manaCosts = rawManaCosts?.map(manaCost => symbols[manaCost]);
  console.info(`parsed card mana costs: ${rawManaCosts}`);
  const cardText = (card.printed_text || card.oracle_text || []).map(line => parseCardText(line));

  console.log(cardText);

  return (
    <main className="flex flex-col items-center justify-center p-8">
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1280px]">
        <div className="flex items-center justify-center">
          {card.image_uris && (
            <img className="block lg:h-96 h-80 m-auto row-span-1 rounded-xl" src={card.image_uris!.normal} />
          )}
        </div>
        <div className="max-w-128">
          <TextSection>
            <h1 className="text-2xl font-extrabold">{card.printed_name || card.name}</h1>
          </TextSection>
          <hr />
          <TextSection>
            <TextSectionTitle>カードセット</TextSectionTitle>
            <TextSectionSpacer />
            {card.set_name && (
              <span className='flex justify-center items-center gap-1'>
                {card.set_name}
              </span>
            )}
            {!card.set_name && <p className="font-bold">!カードセット未登録です</p>}
          </TextSection>
          <hr />
          <TextSection>
            <TextSectionTitle>固有色</TextSectionTitle>
            <TextSectionSpacer />
            <span className='flex justify-center items-center gap-1'>
              {colorSymbols.map((symbol, index) => <img key={`symbol-${index}`} src={symbol} className='h-[1em]' />)}
            </span>
          </TextSection>
          <hr />
          <TextSection>
            <TextSectionTitle>マナコスト</TextSectionTitle>
            <TextSectionSpacer />
            {manaCosts && (
              <span className='flex justify-center items-center gap-1'>
                {manaCosts.map((symbol, index) => <img key={`mana-cost-${index}`} src={symbol} className='h-[1em]' />)}
                (総量: {card.cmc})
              </span>
            )}
            {!manaCosts && <p className="font-bold">!マナコスト未登録です</p>}
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
                  : card.rarity === "special"
                    ? "スペシャル"
                    : "コモン"}
          </TextSection>
          <hr />
          <TextSection flexCol>
            {cardText.length > 0 && cardText.map(
              (line, lineIndex) => (
                <p key={`text-line: ${lineIndex}`} className="pb-1">
                  {line.map((component, componentIndex) => typeof component === "string"
                    ? <span key={`text-line: ${lineIndex}, component-index: ${componentIndex}`}>{component}</span>
                    : <img key={`text-line: ${lineIndex}, component-index: ${componentIndex}`} src={symbols[component.symbol]} className='h-[1em] inline' />
                  )}
                </p>
              )
            )}
            {cardText.length === 0 && <p className="font-bold">!カードテキストがありません</p>}
          </TextSection>
          <hr />
          {card.power && card.toughness && (
            <TextSection>
              <TextSectionTitle>スタッツ</TextSectionTitle>
              <TextSectionSpacer />
              {card.power}/{card.toughness}
            </TextSection>
          )}
          {card.loyalty && (
            <TextSection>
              <TextSectionTitle>忠誠度</TextSectionTitle>
              <TextSectionSpacer />
              {card.loyalty}
            </TextSection>
          )}
        </div>
      </div>
      <div className="flex items-center p-8 gap-4">
        <button type="button" className="w-30 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => revalidateCard()}>再選択</button>
        <button type="button" className="w-30 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => window.open(card.related_uris.edhrec)}>EDHREC </button>
      </div>
      {error && (
        <ErrorDialog onClose={() => setError(undefined)}>
          <p>以下の情報を連絡先から管理者に送信してください</p>
          <p>(連絡先: {process.env.NEXT_PUBLIC_CONTACT_LINK})</p>
          <div className='p-4'>
            <div className="bg-gray-100 text-gray-800 text-sm p-4 rounded-md border border-gray-300 overflow-x-auto whitespace-pre-wrap">
              <p className='font-bold'>カード ID: {card.id}</p>
              <p className='font-bold'>カード名前: {card.name}</p>
              <p className='font-bold'>エラー内容: {`${error}`}</p>
            </div>
          </div>
        </ErrorDialog>
      )}
    </main>
  );
}
