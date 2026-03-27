import * as fs from "fs";

const dataLocation = "2023/d-3/data.txt";

const total = 0;

const numDetecotr = (line: string, index: number) => {
  for (let i = index; i < line.length; i++) {
    if (isNaN(Number(line[i]))) {
      return line.slice(index, i);
    }
  }
};

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const records = data.toString();
  let splitRecords = records.split("\r\n");
  const start = performance.now();
  splitRecords.forEach((line) => {
    line.split("").forEach((symbol, index) => {
      // console.log(`${symbol} on ${index} position`);
      if (!isNaN(Number(symbol)) && isNaN(Number(line[index - 1]))) {
        console.log(numDetecotr(line, index));
      }
    });
  });
  const end = performance.now();
  const duration = end - start;
  console.log(`Time: ${duration.toFixed(2)}ms`);
});
