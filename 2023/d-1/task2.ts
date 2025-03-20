import * as fs from "fs";

let total = 0;

const dataLocation = "data.txt";

fs.readFile(dataLocation, (err, data) => {
    if (err) throw err;
    const records = data.toString();
    let splitRecords = records.split("\r\n");
    splitRecords.forEach((record) => {
        let firstNum: number | null = null;
        let lastNum: number | null = null;
        record.split("").forEach((sign) => {
            if (!isNaN(Number(sign))) {
                if (firstNum == null) {
                    firstNum = Number(sign);
                } else {
                    lastNum = Number(sign);
                }
            }
        });
        if (lastNum == null) {
            lastNum = firstNum;
        }

        let finalNumber = Number(String(firstNum) + String(lastNum));
        total += finalNumber;
        console.log(finalNumber);
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
