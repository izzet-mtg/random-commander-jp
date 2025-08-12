'use client';

// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { useEffect, useState } from 'react';
import useRandomCard, { revalidate as revalidateCard } from '@/hook/useRandomCard';
import useSymbol from '@/hook/useSymbol';
import { parseManaCost } from '@/lib/manacost';
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
import { CardFace as CardFaceData } from '@/type/card';
import useCardSearch from '@/hook/useCardSearch';
import ErrorDialog from '@/component/ErrorDialog';

const CardLottery = () => {
  const defaultTabId = "upright" as const;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { card, error: useCardError } = useRandomCard();
  const { symbols, error: useSymbolError } = useSymbol();
  const [activeTabId, setActiveTabId] = useState<string>(defaultTabId);
  const [tabs, setTabs] = useState<Record<string, string>>({});
  const [cardFaces, setCardFaces] = useState<Record<string, CardFaceData & { flipImage?: boolean }>>({});
  // 合体カードは複雑で、手順は次の通り:
  // 1. 合体カードのパーツカードがくる
  // 2. プロパティを見ると合体カードの名前がある
  // 3. 合体カードの名前で検索 API を実行してカード情報取得
  // 4. カード情報を state 保存
  // 5. 描画かかって合体カード情報が UI に表示される
  // そのため、合体カード名を保存するステートを用意して基本 `undefined` にしておいて検索 API 呼び出す `useSWR` フックは
  // 検索せずに素通りさせ、合体カードのときだけカード名を state に保存して検索 API をよびだして `meldCard` に
  // 合体カード情報がのるようにするという手法で実現
  // 注意点として日本語、というか検索 API が遅い
  const [meldCardName, setMeldCardName] = useState<string | undefined>();
  const { card: meldCard, error: useCardSearchError } = useCardSearch(meldCardName);
  const [error, setError] = useState<Error | undefined>(useCardError || useSymbolError || useCardSearchError);
  useEffect(() => {
    if (card && symbols) {
      console.info(`user fetched card (name: ${card.name}, id: ${card.id})`);

      switch (card.layout) {
        case "transform":
        case "modal_dfc":
          setTabs({ [defaultTabId]: "表", reverse: "裏" });
          setCardFaces({
            [defaultTabId]: card.card_faces[0],
            reverse: card.card_faces[1],
          });
          break;
        case "adventure":
          setTabs({ [defaultTabId]: "当事者", adventure: "出来事" });
          setCardFaces({
            [defaultTabId]: { ...card.card_faces[0], image_uris: card.image_uris },
            adventure: { ...card.card_faces[1], image_uris: card.image_uris },
          });
          break;
        case "flip":
          setTabs({ [defaultTabId]: "正位置", flip: "逆位置" });
          setCardFaces({
            [defaultTabId]: { ...card.card_faces[0], image_uris: card.image_uris },
            flip: { ...card.card_faces[1], image_uris: card.image_uris, flipImage: true },
          });
          break;
        case "normal":
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
          break;
        case "meld":
          setTabs({ [defaultTabId]: "表", meld: "合体" });
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
            },
            ...(meldCard === undefined || meldCard.layout !== "meld" ? {} : {
              meld: {
                colors: meldCard.color_identity,
                image_uris: meldCard.image_uris,
                name: meldCard.name,
                oracle_text: meldCard.oracle_text,
                power: meldCard.power,
                toughness: meldCard.toughness,
                loyalty: meldCard.loyalty,
                printed_text: meldCard.printed_text,
                printed_type_line: meldCard.printed_type_line,
                type_line: meldCard.type_line,
                printed_name: meldCard.printed_name,
                mana_cost: meldCard.mana_cost,
              },
            }),
          });
          setMeldCardName(card.all_parts.find(part => part.component === "meld_result")?.name);
          break;
      }
      setActiveTabId(activeTabId ?? Object.keys(tabs)[0]);
      setIsLoading(false);
    }
  }, [card, symbols, meldCard]);
  if (error) {
    console.error(`user encountered error: ${error}`);
  }

  if (isLoading) return (
    <div className="flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  const activeCardFace = cardFaces[activeTabId];
  const colorIdentity = (card?.color_identity ?? []).map(color => `{${color}}`);
  const cardText = (activeCardFace.printed_text || activeCardFace.oracle_text || "").split("\n").map(line => parseCardText(line));
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className='p-8'>
        <Tab tabs={tabs} onClick={(tabId: string) => setActiveTabId(tabId)} activeTabId={activeTabId} />
      </div>
      {activeTabId &&
        <CardFace>
          <CardImage>
            <img className={`block lg:h-96 h-80 m-auto row-span-1 rounded-xl ${activeCardFace.flipImage ? "rotate-180" : ""}`} src={cardFaces[activeTabId].image_uris!.normal} />
          </CardImage>
          <div className="max-w-128">
            <Name>
              {activeCardFace.printed_name ?? activeCardFace.name}
            </Name>
            <hr />
            <CardSet>
              {card?.set_name ?? <p className="font-bold">!カードセット未登録です</p>}
            </CardSet>
            <hr />
            <ColorIdentity>
              {symbols && (
                (colorIdentity.length > 0 ? colorIdentity : ["{C}"]).map(
                  (color, index) => <img key={`color-identity-${index}`} src={symbols[color]} className='h-[1em] ' />
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
        <button
          type="button"
          className="w-30 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => { setActiveTabId(defaultTabId); setIsLoading(true); revalidateCard(); }}
        >
          再選択
        </button>
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
    </div>
  );
}

export default CardLottery;