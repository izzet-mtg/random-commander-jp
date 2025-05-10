// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

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
const FlipCard = CardCommon.extend({
  card_faces: z.tuple([CardFace, CardFace]),
  image_uris: z.object({
    normal: z.string().url(),
  }).optional(),
  layout: z.literal("flip"),
});
export type FlipCard = z.infer<typeof FlipCard>;
export const Card = z.union([NormalCard, DualFaceCard, AdventureCard, FlipCard]);
export type Card = z.infer<typeof Card>;