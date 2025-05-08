const Header = () =>  (
  <header className="flex flex-col flex-wrap w-full dark:bg-gray-800 bg-gray-600 p-4 gap-2">
    <div>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/`} className="inline-block">
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.svg`} alt="ホームへ" width="32" height="32" />
      </a>
    </div>
  </header>
);

export default Header;