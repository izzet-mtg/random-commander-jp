export type CardSymbol = { symbol: string }
export type TextComponent = string | CardSymbol;

export const parseCardText = (text: string): TextComponent[] => {
    const parsedText: TextComponent[] = [];
  
    let buf = "";
    for (let index = 0; index < text.length; index++) {
      const character = text[index];
      if (character !== "{") {
        buf += character;
        continue;
      }
      if (character === "{") {
        if (buf.length > 0) { parsedText.push(buf); }
        buf = "";
        for (; index < text.length; index++) {
          const character = text[index];
          if (character !== "}") { buf += character; continue; }
          parsedText.push({ symbol: `${buf}}`});
          buf = "";
          break;
        }
        buf = "";
      } 
    }
    if (buf.length > 0) {
      parsedText.push(buf);
    }

    return parsedText;
  }