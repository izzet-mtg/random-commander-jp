// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import Section from "@/component/card/internal/Section";
import Spacer from "@/component/card/internal/Spacer";
import SectionTitile from "@/component/card/internal/SectionTitle";
import type { Rarity as RarityType } from "@/type/rarity";

const Rarity = ({ rarity }: { rarity: RarityType }) => (
  <Section>
    <SectionTitile>マナコスト</SectionTitile>
    <Spacer />
    {rarity === "rare"
      ? "レア"
      : rarity === "mythic"
      ? "神話レア"
      : rarity === "uncommon"
      ? "アンコモン"
      : rarity === "special"
      ? "スペシャル"
      : "コモン"}
  </Section>
);

export default Rarity;