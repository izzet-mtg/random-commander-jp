// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import useSWRImmutable from 'swr/immutable';
import { mutate } from 'swr';
import { Card } from '@/type/card';

const fetcher = async (): Promise<{ success: true, card: Card } | { success: false, error: Error }> => {
  // const response = await fetch('https://api.scryfall.com/cards/random?q=is:commander+lang:ja&lang=ja');
  const response = await fetch("https://api.scryfall.com/cards/c75c035a-7da9-4b36-982d-fca8220b1797?format=json&pretty=true");
  const body = await response.json();
  const card = Card.safeParse(body);
  if (!card.success) {
    console.error(card.error);
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
