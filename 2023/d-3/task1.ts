import * as fs from "fs";

const dataLocation = "2023/d-3/data.txt";

let total = 0;

const numDetecotr = (line: string, index: number) => {
  for (let i = index; i < line.length + 1; i++) {
    if (isNaN(Number(line[i]))) {
      return line.slice(index, i);
    }
  }
  return "error";
};

const symbolDetector = (
  numLength: number,
  map: string[],
  numPositionY: number,
  numPositionX: number,
) => {
  const startY = Math.max(0, numPositionY - 1);
  const endY = Math.min(map.length - 1, numPositionY + 1);
  const startX = Math.max(0, numPositionX - 1);

  for (let y = startY; y <= endY; y++) {
    for (let x = startX; x <= numPositionX + numLength; x++) {
      const char = map[y]?.[x];
      if (char !== undefined && char !== "." && isNaN(Number(char))) {
        return true;
      }
    }
  }
  return false;
};

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const records = data.toString();
  let splitRecords = records.split("\r\n");

  const start = performance.now();

  for (let indexY = 0; indexY < splitRecords.length; indexY++) {
    const line = splitRecords[indexY];

    for (let indexX = 0; indexX < line.length; indexX++) {
      const symbol = line[indexX];

      if (
        symbol !== " " &&
        !isNaN(Number(symbol)) &&
        isNaN(Number(line[indexX - 1]))
      ) {
        const num = numDetecotr(line, indexX);

        if (num !== "error") {
          const isGood = symbolDetector(
            num.length,
            splitRecords,
            indexY,
            indexX,
          );
          if (isGood) {
            total += Number(num);
          }
        }
      }
    }
  }

  console.log("Total:", total);
  const end = performance.now();
  const duration = end - start;
  console.log(`Time: ${duration.toFixed(2)}ms`);
});
