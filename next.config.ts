import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  env: {
    faqLink: "https://github.com/izzet-mtg/random-commander-jp/wiki",
    contactLink: "https://github.com/izzet-mtg/random-commander-jp/issues",
  }
};

export default nextConfig;
