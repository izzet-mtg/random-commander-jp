import useSWRImmutable from 'swr/immutable';
import { mutate } from 'swr';
import { z } from 'zod';

const Card = z.object({
  id: z.string(),
  color_identity: z.array(z.union([z.literal("W"), z.literal("U"), z.literal("B"), z.literal("R"), z.literal("G")])),
  image_uris: z.object({
    normal: z.string().url(),
  }).optional(),
  printed_name: z.string().optional(),
  rarity: z.union([z.literal("rare"), z.literal("common"), z.literal("uncommon"), z.literal("mythic"), z.literal("special")]),
  game_changer: z.boolean(),
  name: z.string(),
  mana_cost: z.string().optional(),
  related_uris: z.object({
    edhrec: z.string().url(),
  }),
  cmc: z.number(),
  set_uri: z.string(),
  printed_text: z.string().optional(),
  printed_type_line: z.string().optional(),
  oracle_text: z.string().optional(),
  power: z.string().optional(),
  type_line: z.string(),
  toughness: z.string().optional(),
  loyalty: z.string().optional(),
  set_name: z.string().optional(),
});
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
const useCard = () => {
  const { data: response, error, isLoading } =  useSWRImmutable('/cards/random', fetcher);
  if (typeof response === 'undefined') {
    return { card: undefined, error, isLoading: false };
  }
  if (!response.success) {
    return { card: undefined, error: response.error, isLoading: false };
  }

  const card = response.card;
  return {
    card: { ...card, printed_text: card.printed_text?.split("\n"), oracle_text: card.oracle_text?.split("\n") },
    error,
    isLoading,
  };
};
export default useCard;

export const revalidate = () => mutate('/cards/random');
