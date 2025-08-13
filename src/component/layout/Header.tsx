// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import Link from "next/link";
import Image from "next/image";
import Logo from "@/asset/logo.svg";

const Header = () =>  (
  <header className="flex flex-col flex-wrap w-full dark:bg-gray-800 bg-gray-600 p-4 gap-2">
    <div>
      <Link href="/" className="inline-block">
        <Image src={Logo} alt="ホームへ" width="32" height="32" />
      </Link>
    </div>
  </header>
);

export default Header;