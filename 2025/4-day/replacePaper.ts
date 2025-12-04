export const replacer = (Y: number, X: number, map: string[]) => {
  if (map[Y][X] !== "#") {
    let tempMapLine = map[Y];
    let tempMapLineArray = Array.from(tempMapLine);
    tempMapLineArray[X] = ".";
    tempMapLine = tempMapLineArray.join("");
    map[Y] = tempMapLine;
  }
  return map;
};
