// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import useSWRImmutable from 'swr/immutable';
import { z } from 'zod';

// スキーマは Scryfall の Colors and Costs ページを参考
// https://scryfall.com/docs/api/colors
const Symbol = z.object({
  symbol: z.string(),
  svg_uri: z.string(),
});
export type Symbol = z.infer<typeof Symbol>;

const Response = z.object({
  data: Symbol.array(),
});
export type Response = z.infer<typeof Response>;

const fetcher = async () => {
  const response = await fetch("https://api.scryfall.com/symbology");
  const symbols = Response.parse(await response.json()).data;

  const symbolMap: Record<string, string> = {};
  for (const symbol of symbols) {
    symbolMap[symbol.symbol] = symbol.svg_uri;
  }
  return symbolMap;
}
/**
 * カードに顕れるシンボルの情報を全て取得する。
 * 詳しくは Scryfall の /symbology GET API を参考 のこと。
 * https://scryfall.com/docs/api/card-symbols/all
 * @example
 * const { symbols, error, isLoading } = useSymbol();
 * @returns ランダムに取得した統率者カード情報
 */
const useSymbol = () => {
  const { data, error, isLoading } = useSWRImmutable('/symbology', fetcher);

  return {
    symbols: data,
    error,
    isLoading,
  };
};
export default useSymbol;
