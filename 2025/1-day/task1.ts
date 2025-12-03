import * as fs from "fs";

const dataLocation = "2025/1-day/data.txt";

let value = 50;
let numberOfZeroes = 0;

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const start = performance.now();
  const input = data.toString().split("\r\n");
  input.forEach((val) => {
    const tempVal = Number(val.slice(1));
    for (let index = 0; index < tempVal; index++) {
      if (val.slice(0, 1) === "L") {
        if (value === 0) {
          value = 99;
          continue;
        }
        value--;
      } else {
        if (value === 99) {
          value = 0;
          continue;
        }
        value++;
      }
    }
    if (value === 0) {
      numberOfZeroes++;
    }
  });
  const end = performance.now();
  const duration = end - start;
  console.log(`Time: ${duration.toFixed(2)}ms`);
  console.log(numberOfZeroes);
});
