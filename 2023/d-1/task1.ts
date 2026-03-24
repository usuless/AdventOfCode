import * as fs from "fs";

let total = 0;

const dataLocation = "2023/d-1/data.txt";

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const records = data.toString();
  let splitRecords = records.split("\r\n");
  for (let i = 0; i < splitRecords.length; i++) {
    let firstNum: null | number = null;
    let lastNum: null | number = null;
    for (let y = 0; y < splitRecords[i].length; y++) {
      if (!isNaN(Number(splitRecords[i][y]))) {
        if (firstNum == null) {
          firstNum = Number(splitRecords[i][y]);
        } else {
          lastNum = Number(splitRecords[i][y]);
        }
      }
    }
    if (lastNum == null) {
      lastNum = firstNum;
    }
    total += Number(String(firstNum) + String(lastNum));
  }
  console.log(total);
});
