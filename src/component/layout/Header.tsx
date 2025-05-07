import Image from "next/image";

const Header = () =>  (
  <header className="flex flex-col flex-wrap w-full dark:bg-gray-800 bg-gray-300 p-4 gap-2">
    <div>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/" className="inline-block">
        <Image src="/logo.svg" alt="ホームへ" width="32" height="32" />
      </a>
    </div>
  </header>
);

export default Header;