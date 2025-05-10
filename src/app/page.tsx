'use client';

// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { useEffect, useState } from 'react';
import useRandomCard, { CardFace as CardFaceData, revalidate as revalidateCard } from '@/hook/useRandomCard';
import useSymbol from '@/hook/useSymbol';
import { parseManaCost } from '@/lib/manacost';
import ErrorDialog from '@/component/ErrorDialog';
import { parseCardText } from '@/lib/cardtext';
import CardSet from '@/component/card/Set';
import ColorIdentity from '@/component/card/ColorIdentity';
import ManaCost from '@/component/card/ManaCost';
import Rarity from '@/component/card/Rarity';
import Type from '@/component/card/Type';
import Stats from '@/component/card/Stats';
import Loyalty from '@/component/card/Loyalty';
import Name from '@/component/card/Name';
import Section from '@/component/card/internal/Section';
import CardImage from '@/component/card/Image';
import CardFace from '@/component/card/Face';
import Tab from '@/component/Tab';

export default function Home() {
  const defaultTabId = "upright" as const;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { card, error: useCardError } = useRandomCard();
  const { symbols, error: useSymbolError } = useSymbol();
  const [activeTabId, setActiveTabId] = useState<string>(defaultTabId);
  const [error, setError] = useState<Error | undefined>(useCardError || useSymbolError);
  const [tabs, setTabs] = useState<Record<string, string>>({});
  const [cardFaces, setCardFaces] = useState<Record<string, CardFaceData>>({});
  useEffect(() => {
    if (card && symbols) {
      console.info(`user fetched card (name: ${card.name}, id: ${card.id})`);
  
      if (card.layout === "normal") {
        setTabs({ [defaultTabId]: "表" });
        setCardFaces({
          [defaultTabId]: {
            colors: card.color_identity,
            image_uris: card.image_uris,
            name: card.name,
            oracle_text: card.oracle_text,
            power: card.power,
            toughness: card.toughness,
            loyalty: card.loyalty,
            printed_text: card.printed_text,
            printed_type_line: card.printed_type_line,
            type_line: card.type_line,
            printed_name: card.printed_name,
            mana_cost: card.mana_cost,
          }
        });
      } else if (card.layout === "transform" || card.layout === "modal_dfc") {
        setTabs({ [defaultTabId]: "表", reverse: "裏" });
        setCardFaces({
          [defaultTabId]: card.card_faces[0],
          reverse: card.card_faces[1],
        });
      }
      setIsLoading(false);
      setActiveTabId(activeTabId ?? Object.keys(tabs)[0]);
    }
  }, [card, symbols]);
  if (error) {
    console.error(`user encountered error: ${error}`);
  }

  if (isLoading) return (
    <main className="flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </main>
  );

  const activeCardFace = cardFaces[activeTabId];
  const colorIdentity = (card?.color_identity ?? []).map(color => `{${color}}`);
  const cardText = (activeCardFace.printed_text || activeCardFace.oracle_text || "").split("\n").map(line => parseCardText(line));
  return (
    <main className="flex flex-col items-center justify-center p-8">
      <div className='p-8'>
        <Tab tabs={tabs} onClick={(tabId: string) => setActiveTabId(tabId)} />
      </div>
      {activeTabId &&
        <CardFace>
          <CardImage>
            <img className="block lg:h-96 h-80 m-auto row-span-1 rounded-xl" src={cardFaces[activeTabId].image_uris!.normal} />
          </CardImage>
          <div className="max-w-128">
            <Name>
              {activeCardFace.printed_name ?? activeCardFace.name}
            </Name>
            <hr/>
            <CardSet>
              {card?.set_name ?? <p className="font-bold">!カードセット未登録です</p>}
            </CardSet>
            <hr />
            <ColorIdentity>
              {symbols && (
                (colorIdentity.length > 0 ? colorIdentity : ["{C}"]).map(
                  (color, index) => <img key={`color-identity-${index}`} src={symbols[color]} className='h-[1em] '/>
                )
              )}
            </ColorIdentity>
            <hr />
            <ManaCost>
              {symbols && activeCardFace.mana_cost && (
                <span className='flex justify-center items-center gap-1'>
                  {parseManaCost(activeCardFace.mana_cost).map((manaCost, index) => <img key={`mana-cost-${index}`} src={symbols[manaCost]} className='h-[1em]' />)}
                  {card && <span>(総量: {card.cmc})</span>}
                </span>
              )}
            </ManaCost>
            <hr />
            <Type>{activeCardFace.printed_type_line || activeCardFace.type_line}</Type>
            <hr />
            {card && <Rarity rarity={card.rarity} />}
            <hr />
            <Section flexCol>
              {symbols && cardText.map(
                (line, lineIndex) => (
                  <p key={`text-line: ${lineIndex}`} className="pb-1">
                    {line.map((component, componentIndex) => typeof component === "string"
                      ? <span key={`text-line: ${lineIndex}, component-index: ${componentIndex}`}>{component}</span>
                      : <img key={`text-line: ${lineIndex}, component-index: ${componentIndex}`} src={symbols[component.symbol]} className='h-[1em] inline' />
                    )}
                  </p>
                )
              )}
            </Section>
            <hr />
            {activeCardFace.power && activeCardFace.toughness && (
              <Stats power={activeCardFace.power} toughness={activeCardFace.toughness} />
            )}
            {activeCardFace.loyalty && (
              <Loyalty loyalty={activeCardFace.loyalty} />
            )}
          </div>
        </CardFace>
      }
      <div className="flex items-center p-8 gap-4">
        <button type="button" className="w-30 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => revalidateCard()}>再選択</button>
        <button type="button" className="w-30 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => window.open(card?.related_uris.edhrec)}>EDHREC </button>
      </div>
      {error && (
        <ErrorDialog onClose={() => setError(undefined)}>
          <p>以下の情報を連絡先から管理者に送信してください</p>
          <p>(連絡先: {process.env.NEXT_PUBLIC_CONTACT_LINK})</p>
          <div className='p-4'>
            <div className="bg-gray-100 text-gray-800 text-sm p-4 rounded-md border border-gray-300 overflow-x-auto whitespace-pre-wrap">
              {card?.id && <p className='font-bold'>カード ID: {card.id}</p>}
              {card?.name && <p className='font-bold'>カード名前: {card.name}</p>}
              <p className='font-bold'>エラー内容: {`${error}`}</p>
            </div>
          </div>
        </ErrorDialog>
      )}
    </main>
  );
}
