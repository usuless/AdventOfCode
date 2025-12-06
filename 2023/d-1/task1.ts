import * as fs from "fs";

let total = 0;

const dataLocation = "2023/d-1/data.txt";

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const records = data.toString();
  let splitRecords = records.split("\r\n");
  splitRecords.forEach((record) => {
    let firstNum: number | null = null;
    let lastNum: number | null = null;
    if (lastNum == null) {
      lastNum = firstNum;
    }

    let finalNumber = Number(String(firstNum) + String(lastNum));
    total += finalNumber;
    console.log(finalNumber);
  });
  console.log(total);
});
