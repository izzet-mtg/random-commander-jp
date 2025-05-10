// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { z } from "zod"

export const Rarity = z.union([z.literal("rare"), z.literal("common"), z.literal("uncommon"), z.literal("mythic"), z.literal("special")]);
export type Rarity = z.infer<typeof Rarity>;