import * as color from '@/lib/color';
import * as rarity from '@/lib/rarity';

export type Card = {
  colors: color.Color[];
  image_uris: Record<"small" | "normal" | "large" | "png" | "art_crop", string>;
  printed_name?: string;
  rarity: rarity.Rarity;
  game_changer: boolean;
  mana_cost: string;
  related_uris: Record<"edhrec", string>;
  set_uri: string;
  printed_text?: string;
  printed_type_line?: string;
  oracle_text: string;
}

export const fetchCard = async (): Promise<Card> => {
  const response = await fetch('https://api.scryfall.com/cards/random?q=is:Acommander&q=lang:ja&lang=ja');
  return await response.json();
}

