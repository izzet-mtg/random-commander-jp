import useSWRImmutable from 'swr/immutable';
import { mutate } from 'swr';
import { z } from 'zod';

const Card = z.object({
  colors: z.array(z.union([z.literal("W"), z.literal("U"), z.literal("B"), z.literal("R"), z.literal("G")])),
  image_uris: z.object({
    normal: z.string().url(),
  }),
  printed_name: z.string().optional(),
  rarity: z.union([z.literal("rare"), z.literal("common"), z.literal("uncommon"), z.literal("mythic")]),
  game_changer: z.boolean(),
  name: z.string(),
  mana_cost: z.string(),
  related_uris: z.object({
    edhrec: z.string().url(),
  }),
  set_uri: z.string(),
  printed_text: z.string().optional(),
  printed_type_line: z.string().optional(),
  oracle_text: z.string(),
  power: z.string(),
  type_line: z.string(),
  toughness: z.string(),
});
export type Card = z.infer<typeof Card>;

const fetcher = async (): Promise<Card> => {
  const response = await fetch('https://api.scryfall.com/cards/random?q=is:commander+lang:ja&lang=ja');
  return Card.parse(await response.json());
}
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
