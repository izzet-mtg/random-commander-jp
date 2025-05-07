import useSWRImmutable from 'swr/immutable';
import { mutate } from 'swr';
import * as color from '@/lib/color';
import * as rarity from '@/lib/rarity';

export type Card = {
  colors: color.Color[];
  image_uris?: Record<"small" | "normal" | "large" | "png" | "art_crop", string>;
  printed_name?: string;
  rarity: rarity.Rarity;
  game_changer: boolean;
  name: string;
  mana_cost: string;
  related_uris: Record<"edhrec", string>;
  set_uri: string;
  printed_text?: string;
  printed_type_line?: string;
  oracle_text: string;
  type_line: string;
  power: string;
  toughness: string;
}

const fetcher = async (): Promise<Card> => 
  fetch('https://api.scryfall.com/cards/random?q=is:commander+lang:ja&lang=ja').then(response => response.json());
const useCard = () => {
  const { data, error, isLoading } =  useSWRImmutable('/cards/random', fetcher);

  return {
    card: data,
    error,
    isLoading,
  };
};
export default useCard;

export const revalidate = () => mutate('/cards/random');
