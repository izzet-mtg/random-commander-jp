import useSWRImmutable from 'swr/immutable';

export type Symbol = {
  symbol: string;
  svg_uri: string;
};

export type Response = {
  data: Symbol[];
};

const fetcher = async () => {
  const response = await fetch("https://api.scryfall.com/symbology");

  return await response.json();
}
const useSymbol = () => {
  const { data, error, isLoading } = useSWRImmutable<Response>('/symbology', fetcher);
  return {
    symbols: data?.data,
    error,
    isLoading,
  };
};
export default useSymbol;
