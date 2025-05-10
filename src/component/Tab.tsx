// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { PropsWithChildren } from "react"

type TabButtonProps = {
  onClick?: () => void,
  className?: string;
}
const TabButton = ({ children, onClick, className }: PropsWithChildren<TabButtonProps>) => (
  <button
    onClick={onClick}
    className={`p-4 border-b-2 rounded-t-lg ${className}`}
  >
    {children}
  </button>
);
const ActiveButton = ({ children }: PropsWithChildren) => (
  <TabButton className="active text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500">
    {children}
  </TabButton>
);
const NonActiveButton = ({ children, onClick }: PropsWithChildren<{ onClick?: () => void }>) => (
  <TabButton className="hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 border-transparent" onClick={onClick}>
    {children}
  </TabButton>
);

export type TabProps = {
  tabs: Record<string, string>;
  onClick?: (tabId: string) => void;
  activeTabId: string;
};

const Tab = ({ tabs: $tabs, onClick, activeTabId }: TabProps) => {
  const tabs = Object.entries($tabs);

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-300 dark:text-gray-400 dark:border-gray-700">
      <nav className="flex flex-row -mb-px">
        {tabs.map(([id, name]) => (
          <div key={`tab-item-${id}`}>
            {activeTabId === id && <ActiveButton>{name}</ActiveButton>}
            {activeTabId !== id && <NonActiveButton onClick={() => onClick?.(id)}>{name}</NonActiveButton>}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Tab;