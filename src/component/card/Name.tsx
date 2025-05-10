// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import Section from "@/component/card/internal/Section";
import { PropsWithChildren } from "react";

const Name = ({ children }: PropsWithChildren) => (
  <Section>
    <h1 className="text-2xl font-extrabold">{children}</h1>
  </Section>
);

export default Name;