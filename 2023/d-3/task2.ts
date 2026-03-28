import * as fs from "fs";

const dataLocation = "2023/d-3/data.txt";

let total = 0;
const numIndexes = [];
const regex = /\d+\d*/g;
const clogIndexes: number[][] = [];

const numDetecotr = (line: string, index: number) => {
  for (let i = index; i < line.length + 1; i++) {
    if (isNaN(Number(line[i]))) {
      return [Number(line.slice(index, i)), index];
    }
  }
  return "error";
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
      if (symbol == "*") {
        // console.log("---------");
        let totalNums = 0;
        // console.log(splitRecords[indexY - 1].slice(indexX - 1, indexX + 2));
        // console.log(splitRecords[indexY].slice(indexX - 1, indexX + 2));
        // console.log(splitRecords[indexY + 1].slice(indexX - 1, indexX + 2));
        totalNums +=
          splitRecords[indexY + 1].slice(indexX - 1, indexX + 2).match(regex)
            ?.length || 0;
        totalNums +=
          splitRecords[indexY - 1].slice(indexX - 1, indexX + 2).match(regex)
            ?.length || 0;
        totalNums +=
          splitRecords[indexY].slice(indexX - 1, indexX + 2).match(regex)
            ?.length || 0;
        if (totalNums == 2) {
          console.log(indexY, indexX);
          console.log(splitRecords[indexY].slice(indexX - 2, indexX + 2));
          total++;
        }
      }
    }
  }

  console.log("Total:", total);
  const end = performance.now();
  const duration = end - start;
  console.log(`Time: ${duration.toFixed(2)}ms`);
});
