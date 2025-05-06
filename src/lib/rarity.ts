export const RARE = "rare" as const;
export const COMMON = "common" as const;
export const UNCOMMON = "uncommon" as const;
export const MYTHIC = "mythic" as const;

export type Rare = typeof RARE;
export type Common = typeof COMMON;
export type Uncommon = typeof UNCOMMON;
export type Mythic = typeof MYTHIC;

export type Rarity = Rare | Common | Uncommon | Mythic;

