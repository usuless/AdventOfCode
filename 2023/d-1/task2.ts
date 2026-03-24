import * as fs from "fs";

let total = 0;
const digitWords: string[] = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const dataLocation = "2023/d-1/data.txt";

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const records = data.toString();
  let splitRecords = records.split("\r\n");
  for (let i = 0; i < splitRecords.length; i++) {
    let line = splitRecords[i];
    let digitsInLine: number[] = [];
    for (let start = 0; start < line.length; start++) {
      if (line[start] >= "0" && line[start] <= "9") {
        digitsInLine.push(Number(line[start]));
      }
      for (let val = 0; val < digitWords.length; val++) {
        if (line.startsWith(digitWords[val], start)) {
          digitsInLine.push(val);
        }
      }
    }

    if (digitsInLine.length > 0) {
      const first = digitsInLine[0];
      const last = digitsInLine[digitsInLine.length - 1];
      total += Number(`${first}${last}`);
    }
  }
  console.log(total);
});
