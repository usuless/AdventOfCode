import * as fs from "fs";

const dataLocation = "2025/2-day/data.txt";
let test = 0;

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const start = performance.now();
  const input = data.toString().split(",");
  input.forEach((val) => {
    const [firstNum, lastNum] = val.split("-");
    for (let index = Number(firstNum); index <= Number(lastNum); index++) {
      const indexString = String(index);

      const firstHalf = indexString.slice(0, indexString.length / 2);
      const secondHalf = indexString.slice(indexString.length / 2);
      if (firstHalf == secondHalf) {
        test += index;
      }
    }
  });
  const end = performance.now();
  const duration = end - start;

  console.log(`Time: ${duration.toFixed(2)}ms`);
  console.log(test);
});
