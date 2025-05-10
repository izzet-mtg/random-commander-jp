// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import Section from "@/component/card/internal/Section";
import Spacer from "@/component/card/internal/Spacer";
import SectionTitile from "@/component/card/internal/SectionTitle";
import { PropsWithChildren } from "react";

const Type = ({ children }: PropsWithChildren) => (
  <Section>
    <SectionTitile>カードタイプ</SectionTitile>
    <Spacer />
    <p>{children}</p>
  </Section>
);

export default Type;