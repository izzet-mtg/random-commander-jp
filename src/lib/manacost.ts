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