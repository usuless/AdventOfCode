import * as fs from "fs";

let total = 0;

const gameRegex = /(.*?):/;
const slotRegex = /(.*?);/g;

const dataLocation = "2023/d-2/data.txt";

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const records = data.toString();
  let splitRecords = records.split("\r\n");
  for (let i = 0; i < splitRecords.length; i++) {
    let gameNum: null | number = null;
    let wynik = splitRecords[i].match(gameRegex);
    if (wynik) {
      gameNum = Number(wynik[1].replace("Game ", ""));
      console.log(gameNum);
    }
    let throws = [...splitRecords[i].matchAll(slotRegex)];
    if (throws) {
      console.log(throws);
    }
  }
});
