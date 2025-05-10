// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import Section from "@/component/card/internal/Section";
import Spacer from "@/component/card/internal/Spacer";
import SectionTitile from "@/component/card/internal/SectionTitle";

const Stats = ({ power, toughness }: Record<"power" | "toughness", string>) => (
  <Section>
    <SectionTitile>スタッツ</SectionTitile>
    <Spacer />
    {power}/{toughness}
  </Section>
);

export default Stats;