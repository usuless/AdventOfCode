import * as fs from "fs";

let total = 0;

const digitWords: string[] = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "zero",
];

const dataLocation = "2023/d-1/data.txt";

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const records = data.toString();
  let splitRecords = records.split("\r\n");
  splitRecords.forEach((record) => {
    let firstNum: number | null = null;
    let lastNum: number | null = null;
    record.split("").forEach((sign, index) => {
      //   if (!isNaN(Number(sign))) {
      //     if (firstNum == null) {
      //       firstNum = Number(sign);
      //       console.log(index);
      //     } else {
      //       lastNum = Number(sign);
      //     }
      //   }
      for (let index = 0; index < digitWords.length; index++) {
        if (record.includes(digitWords[index])) {
          console.log();
        }
      }
    });
    if (lastNum == null) {
      lastNum = firstNum;
    }

    let finalNumber = Number(String(firstNum) + String(lastNum));
    total += finalNumber;
  });
  console.log(total);
});

/*

one
two
three
four
five
six
seven
eight
nine

o t f s e n

*/
