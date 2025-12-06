import * as fs from "fs";

const dataLocation = "2024/day-16/data.txt";
let score = 0;

const findPoint = (map: string[], sign: string) => {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] == sign) {
        return [i, j];
      }
    }
  }
};

const findRoad = (map: string[], startLoc: number[], endLoc: number[]) => {
  while (true) {
    return;
  }
};

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;

  const start = performance.now();
  const map = data.toString().split("\r\n");
  let deerLoc: number[] = findPoint(map, "S")!;
  let endPointLoc: number[] = findPoint(map, "E")!;
  let orientation = "E";
  const end = performance.now();
  const duration = end - start;
  console.log(`Time: ${duration.toFixed(2)}ms`);
});

/**
 *
 *
 * 1-5 4-6 10-12
 *
 */
