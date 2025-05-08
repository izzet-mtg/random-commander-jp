// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

/**
 * カードのマナコストをパースする。
 * Scryfall だとマナコストが "{W}{U}{B}{R}{G}" のように文字列としてくるので、これを配列にバラす。
 * @example
 * const manaCost = parseManaCost("{W}{U}{B}{R}{G}");
 * // return ["{W}", "{U}", "{B}", "{R}", "{G}"]
 * @param manaCost パースしたいマナコスト
 * @returns マナコスト内の各マナ表記を要素とした配列
 */
export const parseManaCost = (manaCost: string): string[] => {
  const manaCosts: string[] = [];

  let buf = "";
  for (const character of manaCost) {
    buf += character;
    if (character === "}") {
        manaCosts.push(buf);
        buf = "";
    }
  }
  return manaCosts;
}