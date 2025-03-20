import * as fs from "fs";

const dataLocation = "data.txt";

const chart = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

let symbolList: string[] = ["-", "@", "*", "=", "%", "/", "$", "#", "+", "&"];

fs.readFile(dataLocation, (err, data) => {
    if (err) throw err;
    const records = data.toString();
    let splitRecords = records.split("\r\n");
    splitRecords.forEach((line) => {
        line.split("").forEach((symbol) => {
            if (!chart.includes(symbol) && !symbolList.includes(symbol)) {
                symbolList.push(symbol);
            }
        });
    });
    console.log(symbolList);
});
