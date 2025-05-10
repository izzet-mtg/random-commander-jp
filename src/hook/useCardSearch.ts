// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import useSWRImmutable from 'swr/immutable';
import { mutate } from 'swr';
import { Card } from '@/type/card';
import { z } from 'zod';

const Response = z.object({
  data: z.array(Card),
});
type Response = z.infer<typeof Response>;

const fetcher = async (cardName: string): Promise<{ success: true, card: Card } | { success: false, error: Error }> => {
  const rawResponse = await fetch(`https://api.scryfall.com/cards/search?q=${cardName}+lang:ja`);
  const body = await rawResponse.json();
  const response = Response.safeParse(body);
  if (!response.success) {
    console.error(response.error);
    console.error(body);
    return { success: false, error: response.error };
  }
  const card = response.data.data[0];
  return { success: true, card };
}
/**
 * カードを検索する
 * @example
 * const { card, error, isLoading } = useCardSearch('');
 * @returns ランダムに取得した統率者カード情報
 */
const useCardSearch = (cardName?: string) => {
  const { data: response, error, isLoading } =  useSWRImmutable(cardName ? `/cards/search?q=${cardName}` : undefined, () => fetcher(cardName!));
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
export default useCardSearch;

export const revalidate = () => mutate('/cards/random');
