import * as fs from "fs";

const dataLocation = "2025/6-day/data.txt";

let total = 0;

const allNums: string[][] = [];

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const start = performance.now();
  const input = data.toString().split("\r\n");
  input.forEach((line) => {
    const nums = line.trim().split(/\s+/);
    allNums.push(nums);
  });

  for (let x = 0; x < allNums[0].length; x++) {
    let tempTotal = 0;
    for (let y = 0; y < allNums.length - 1; y++) {
      if (tempTotal == 0) {
        tempTotal = Number([allNums[y][x]]);
        continue;
      }
      if (allNums[allNums.length - 1][x] == "*") {
        tempTotal *= Number(allNums[y][x]);
      } else {
        tempTotal += Number(allNums[y][x]);
      }
    }
    total += tempTotal;
  }
  const end = performance.now();
  const duration = end - start;
  console.log(`Time: ${duration.toFixed(2)}ms`);

  console.log(total);
});
