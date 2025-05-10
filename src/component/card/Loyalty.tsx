// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import Section from "@/component/card/internal/Section";
import Spacer from "@/component/card/internal/Spacer";
import SectionTitile from "@/component/card/internal/SectionTitle";

const Loyalty = ({ loyalty }: { loyalty: string }) => (
  <Section>
    <SectionTitile>忠誠度</SectionTitile>
    <Spacer />
    {loyalty}
  </Section>
);

export default Loyalty;