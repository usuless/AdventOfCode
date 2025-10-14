import * as fs from "fs";

const dataLocation = "data.txt";
let goodRecords = 0;

function twoLetterPairTwice(str: string) {
  for (let i = 0; i < str.length - 1; i++) {
    const pair = str.slice(i, i + 2);
    if (str.slice(i + 2).includes(pair)) {
      return true;
    }
  }
  return false;
}

function oneLetterBetween(str: string) {
  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] === str[i + 2]) {
      return true;
    }
  }
  return false;
}

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const records = data.toString();
  let splitRecords = records.split("\r\n");

  splitRecords.forEach((record) => {
    if (twoLetterPairTwice(record) && oneLetterBetween(record)) {
      goodRecords++;
    }
  });

  console.log(goodRecords);
});
