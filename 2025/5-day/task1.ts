import * as fs from "fs";

const dataLocation = "2025/5-day/data.txt";

let total = 0;

interface Range {
  minRange: number;
  maxRange: number;
}

const allRanges: Range[] = [];
const allId: number[] = [];

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const input = data.toString().split("\r\n");
  const start = performance.now();

  input.forEach((line) => {
    if (isNaN(Number(line))) {
      const temp = line.split("-");
      allRanges.push({
        minRange: Number(temp[0]),
        maxRange: Number(temp[1]),
      });
    }

    if (!isNaN(Number(line)) && Number(line) != 0) {
      allId.push(Number(line));
    }
  });
  for (let i = 0; i < allId.length; i++) {
    for (let index = 0; index < allRanges.length; index++) {
      if (
        allId[i] >= allRanges[index].minRange &&
        allId[i] <= allRanges[index].maxRange
      ) {
        total++;
        break;
      }
    }
  }
  console.log(total);
  const end = performance.now();
  const duration = end - start;
  console.log(`Time: ${duration.toFixed(2)}ms`);
});
