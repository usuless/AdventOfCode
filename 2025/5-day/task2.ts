import * as fs from "fs";

const dataLocation = "2025/5-day/data.txt";

const dataRanges: bigint[][] = [];
let total: bigint = 0n;

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;

  const start = performance.now();
  const input = data.toString().split("\r\n");

  input.forEach((line) => {
    if (line.includes("-")) {
      const temp = line.split("-");
      const numA = BigInt(temp[0]);
      const numB = BigInt(temp[1]);
      dataRanges.push([numA, numB]);
    }
  });

  dataRanges.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else {
      return 1;
    }
  });

  let currentMin = dataRanges[0][0];
  let currentMax = dataRanges[0][1];
  for (let i = 1; i < dataRanges.length; i++) {
    const nextMin = dataRanges[i][0];
    const nextMax = dataRanges[i][1];

    if (nextMin <= currentMax + 1n) {
      if (nextMax > currentMax) {
        currentMax = nextMax;
      }
    } else {
      total += currentMax - currentMin + 1n;

      currentMin = nextMin;
      currentMax = nextMax;
    }
  }
  total += currentMax - currentMin + 1n;
  const end = performance.now();
  const duration = end - start;
  console.log(`Time: ${duration.toFixed(2)}ms`);
  console.log(total);
});

/**
 *
 *
 * 1-5 4-6 10-12
 *
 */
