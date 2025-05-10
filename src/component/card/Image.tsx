// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { PropsWithChildren } from "react";

const Face = ({ children }: PropsWithChildren) => (
  <div className="flex items-center justify-center">
    {children}
  </div>
);

export default Face;