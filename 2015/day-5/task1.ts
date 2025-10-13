import * as fs from "fs";

const dataLocation = "data.txt";

let goodRecords = 0;

let vowels = ["a", "e", "i", "o", "u"];
let badCombinations = ["ab", "cd", "pq", "xy"];

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const records = data.toString();
  let splitRecords = records.split("\r\n");
  splitRecords.forEach((record) => {
    let goodVowels = 0;
    let doubleLetter = false;
    let haveBadCombination = false;
    for (let index = 0; index < record.length; index++) {
      if (vowels.includes(record[index])) {
        goodVowels++;
      }
      if (index > 0 && record[index] == record[index - 1]) {
        doubleLetter = true;
      }
      if (
        index < record.length - 1 &&
        badCombinations.includes(record[index] + record[index + 1])
      ) {
        haveBadCombination = true;
      }
    }
    if (goodVowels >= 3 && doubleLetter && !haveBadCombination) {
      goodRecords++;
    }
    console.log(goodRecords);
  });
});
