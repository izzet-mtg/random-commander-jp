// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

const basePath = process.env.NODE_ENV === "production" ? "/random-commander-jp" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_CONTACT_LINK: "https://forms.gle/FNLZMrzAnxNehuaP6",
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_GITHUB_REPOSITORY_URL: "https://github.com/izzet-mtg/random-commander-jp/",
    NEXT_PUBLIC_SITE_URL: "https://izzet-mtg.github.io/random-commander-jp",
  },
  assetPrefix: basePath,
  basePath: basePath,
};

module.exports = nextConfig;
