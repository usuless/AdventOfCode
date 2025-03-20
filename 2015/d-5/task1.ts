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
        let vowelsCount = 0;
        if (vowels.includes(record[0])) vowelsCount++;
        let isDoubleLetter = false;
        let badCombinationFound = false;
        for (let i = 1; i < record.length; i++) {
            let previousLetter = record[i - 1];
            let thisLetter = record[i];
            if (badCombinations.includes(previousLetter + thisLetter)) {
                badCombinationFound = true;
            }

            if (vowels.includes(thisLetter)) {
                vowelsCount++;
            }

            if (previousLetter === thisLetter) {
                isDoubleLetter = true;
            }
        }

        if (vowelsCount > 2 && isDoubleLetter && !badCombinationFound) {
            goodRecords++;
        }
    });
    console.log(goodRecords);
});
