// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import useSWRImmutable from 'swr/immutable';
import { mutate } from 'swr';
import { z } from 'zod';
import { Rarity } from '@/type/rarity';

const CardColor = z.union([z.literal("W"), z.literal("U"), z.literal("B"), z.literal("R"), z.literal("G")]);
export type CardColor = z.infer<typeof CardColor>;
// スキーマの参考は以下
// https://api.scryfall.com/cards/946ca338-5f43-4cff-bd93-1b28449c5fdc
const CardFace = z.object({
  name: z.string(),
  printed_text: z.string().optional(),
  oracle_text: z.string().optional(),
  type_line: z.string(),
  printed_type_line: z.string().optional(),
  image_uris: z.object({
    normal: z.string().url(),
  }).optional(),
  colors: z.array(CardColor).optional(),
  power: z.string().optional(),
  toughness: z.string().optional(),
  loyalty: z.string().optional(),
  printed_name: z.string().optional(),
  mana_cost: z.string().optional(),
});
export type CardFace = z.infer<typeof CardFace>;
// スキーマは Scryfall の /cards/random GET API を参考
// https://scryfall.com/docs/api/cards/random
const CardCommon = z.object({
  id: z.string(),
  color_identity: z.array(CardColor),
  rarity: Rarity,
  mana_cost: z.string().optional(),
  related_uris: z.object({
    edhrec: z.string().url(),
  }),
  cmc: z.number(),
  set_uri: z.string(),
  set_name: z.string().optional(),
  name: z.string(),
  game_changer: z.boolean(),
});
const NormalCard = CardCommon.extend({
  image_uris: z.object({
    normal: z.string().url(),
  }).optional(),
  printed_name: z.string().optional(),
  printed_text: z.string().optional(),
  printed_type_line: z.string().optional(),
  oracle_text: z.string().optional(),
  power: z.string().optional(),
  type_line: z.string(),
  toughness: z.string().optional(),
  loyalty: z.string().optional(),
  layout: z.literal("normal"),
});
export type NormalCard = z.infer<typeof NormalCard>;
const DualFaceCard = CardCommon.extend({
  card_faces: z.tuple([CardFace, CardFace]),
  layout: z.union([z.literal("transform"), z.literal("modal_dfc")]),
});
export type DualFaceCard = z.infer<typeof DualFaceCard>;
const AdventureCard = CardCommon.extend({
  card_faces: z.tuple([CardFace, CardFace]),
  image_uris: z.object({
    normal: z.string().url(),
  }).optional(),
  layout: z.literal("adventure"),
});
export type AdventureCard = z.infer<typeof AdventureCard>;
// TODO: 以下は後で対応
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MeldCard = CardCommon.extend({
  layout: z.literal("meld"),
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SplitCard = CardCommon.extend({
  layout: z.literal("split"),
});
const FlipCard = CardCommon.extend({
  card_faces: z.tuple([CardFace, CardFace]),
  image_uris: z.object({
    normal: z.string().url(),
  }).optional(),
  layout: z.literal("flip"),
});
export type FlipCard = z.infer<typeof FlipCard>;
const Card = z.union([NormalCard, DualFaceCard, AdventureCard, FlipCard]);
export type Card = z.infer<typeof Card>;

const fetcher = async (): Promise<{ success: true, card: Card } | { success: false, error: Error }> => {
  const response = await fetch('https://api.scryfall.com/cards/random?q=is:commander+lang:ja&lang=ja');
  const body = await response.json();
  const card = Card.safeParse(body);
  if (!card.success) {
    console.log(card.error);
    console.error(body);
    return { success: false, error: card.error };
  }
  return { success: true, card: card.data };
}
/**
 * 統率者カードの情報をランダムに取得する。
 * 詳しくは Scryfall の /cards/random GET API を参考 のこと。
 * https://scryfall.com/docs/api/cards/random
 * @example
 * const { card, error, isLoading } = useRandomCard();
 * @returns ランダムに取得した統率者カード情報
 */
const useRandomCard = () => {
  const { data: response, error, isLoading } =  useSWRImmutable('/cards/random', fetcher);
  if (typeof response === 'undefined' || error) {
    return { card: undefined, error, isLoading: false };
  }
  if (!response.success) {
    return { card: undefined, error: response.error, isLoading: false };
  }

  const card = response.card;
  return {
    card,
    error,
    isLoading,
  };
};
export default useRandomCard;

export const revalidate = () => mutate('/cards/random');
