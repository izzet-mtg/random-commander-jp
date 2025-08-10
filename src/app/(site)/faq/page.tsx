// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { Metadata } from "next";
import FaqPage from "@/component/page/Faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "よくある質問とその回答集です",
  openGraph: {
    title: "FAQ",
    description: "よくある質問とその回答集です",
  },
};

export default function Faq() {
  return <FaqPage />;
}
