import useSWRImmutable from 'swr/immutable';
import { z } from 'zod';

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

  let symbolMap: Record<string, string> = {};
  for (const symbol of symbols) {
    symbolMap[symbol.symbol] = symbol.svg_uri;
  }
  return symbolMap;
}
const useSymbol = () => {
  const { data, error, isLoading } = useSWRImmutable('/symbology', fetcher);

  return {
    symbols: data,
    error,
    isLoading,
  };
};
export default useSymbol;
