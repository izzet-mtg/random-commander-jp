// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { PropsWithChildren } from "react";
import Section from "@/component/card/internal/Section";
import Spacer from "@/component/card/internal/Spacer";
import SectionTitile from "@/component/card/internal/SectionTitle";

const Set = ({ children }: PropsWithChildren) => (
  <Section>
    <SectionTitile>カードセット</SectionTitile>
    <Spacer />
    <span className='flex justify-center items-center gap-1'>
      {children}
    </span>
  </Section>
);

export default Set;