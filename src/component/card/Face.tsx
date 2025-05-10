// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { PropsWithChildren } from "react";

const Face = ({ children }: PropsWithChildren) => (
  <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1280px] gap-8">
    {children}
  </div>
);

export default Face;