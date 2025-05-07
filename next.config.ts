import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_FAQ_LINK: "https://github.com/izzet-mtg/random-commander-jp/wiki",
    NEXT_PUBLIC_CONTACT_LINK: "https://github.com/izzet-mtg/random-commander-jp/issues",
  }
};

export default nextConfig;
