import * as fs from "fs";

const dataLocation = "2025/6-day/data.txt";

let total = 0;

const allNums: string[][] = [];
const maxLength: number[] = [];

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const start = performance.now();
  const input = data.toString().split("\r\n");
  input.forEach((line) => {
    const nums = line.trim().split(/\s+/);
    allNums.push(nums);
  });

  const numRows = allNums[0].length;
  const numCols = allNums.length;

  const goodArr: string[] = [];

  for (let i = 0; i < numRows; i++) {
    //@ts-ignore
    goodArr[i] = [];

    for (let j = 0; j < numCols; j++) {
      //@ts-ignore
      goodArr[i][j] = allNums[j][i];
    }
  }

  for (let i = 0; i < goodArr.length; i++) {
    let tempMaxLength = 0;
    for (let j = 0; j < goodArr[i].length; j++) {
      if (goodArr[i][j].length > tempMaxLength) {
        tempMaxLength = goodArr[i][j].length;
      }
    }
    maxLength.push(tempMaxLength);
  }

  const end = performance.now();
  const duration = end - start;
  console.log(`Time: ${duration.toFixed(2)}ms`);

  console.log(maxLength);
  console.log(total);
});

/*

  [ '123', '45', '6', '*' ],
  [ '328', '64', '98', '+' ],
  [ '51', '387', '215', '*' ],
  [ '64', '23', '314', '+' ]


*/
