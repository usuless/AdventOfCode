import * as fs from "fs";

const dataLocation = "2025/2-day/data.txt";
let test = 0;

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const input = data.toString().split(",");
  input.forEach((val) => {
    const [firstNum, lastNum] = val.split("-");
    // for (let index = Number(firstNum); index <= Number(lastNum); index++) {}
    if (Number(lastNum) - Number(firstNum) > test) {
      test = Number(lastNum) - Number(firstNum);
    }
  });
  console.log(test);
});
