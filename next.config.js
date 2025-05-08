const basePath = process.env.NODE_ENV === "production" ? "/random-commander-jp" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_FAQ_LINK: "https://github.com/izzet-mtg/random-commander-jp/wiki",
    NEXT_PUBLIC_CONTACT_LINK: "https://forms.gle/FNLZMrzAnxNehuaP6",
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  assetPrefix: basePath,
  basePath: basePath,
};

module.exports = nextConfig;
