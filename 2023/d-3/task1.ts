import * as fs from "fs";

const dataLocation = "2023/d-3/data.txt";

const total = 0;

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const records = data.toString();
  let splitRecords = records.split("\r\n");
  const start = performance.now();
  splitRecords.forEach((line) => {
    line.split("").forEach((symbol) => {});
  });
  const end = performance.now();
  const duration = end - start;
  console.log(`Time: ${duration.toFixed(2)}ms`);
});
