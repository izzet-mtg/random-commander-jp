// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

export type CardSymbol = { symbol: string }
/**
 * テキストの要素(文章 or シンボル)
 */
export type TextComponent = string | CardSymbol;

/**
 * カードテキストからシンボルとそうでない一般文章をわけるようにパースする。
 * たとえば 「{R}: {R}マナを加える」のような文章であれば [{ symbol: "{R}"}, ": ", { symbol: "{R}"}, "マナを加える"] のようにパースされる
 * @example
 * const parsedText = parseCardText("{R}: {R}マナを加える");
 * // return [{ symbol: "{R}"}, ": ", { symbol: "{R}"}, "マナを加える"]
 * @param text カードテキスト
 * @returns 一般文章とシンボルが出現位置順にならんだもの。
 */
export const parseCardText = (text: string): TextComponent[] => {
    const parsedText: TextComponent[] = [];
  
    let buf = "";
    for (let index = 0; index < text.length; index++) {
      const character = text[index];
      if (character !== "{") {
        // シンボルじゃない間はバッファーに追加
        buf += character;
        continue;
      }
      if (character === "{") {
        // シンボル (例: `{X}`) の開始位置である `{` をみつけたとき、
        // バッファーに内容があればそこまでで文章なので、要素として push
        if (buf.length > 0) { parsedText.push(buf); }
        // そのあとにバッファークリア
        buf = "";
        // シンボルのパースを開始
        for (; index < text.length; index++) {
          const character = text[index];
          // シンボルの名称をバッファーにいれる 
          if (character !== "}") { buf += character; continue; }
          // シンボルの終了位置である `}` がみつかったら文章要素として push
          parsedText.push({ symbol: `${buf}}`});
          // バッファークリアしてシンボルパーサーから抜ける
          buf = "";
          break;
        }
        buf = "";
      } 
    }
    // まだバッファーにのこっている場合(たとえばシンボルでない文章を最後までパースしきったとき)、
    // この時点でテキスト全体のパースが終了しているので文章要素として push
    if (buf.length > 0) {
      parsedText.push(buf);
    }

    return parsedText;
  }