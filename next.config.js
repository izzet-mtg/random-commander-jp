/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_FAQ_LINK: "https://github.com/izzet-mtg/random-commander-jp/wiki",
    NEXT_PUBLIC_CONTACT_LINK: "https://github.com/izzet-mtg/random-commander-jp/issues/new/choose",
  },
  basePath: process.env.NODE_ENV === "productuion" ? "/random-commander-jp" : "",
};

module.exports = nextConfig;
