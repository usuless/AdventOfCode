import * as fs from "fs";

let total = 0;

const dataLocation = "2023/d-2/data.txt";

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const records = data.toString();
  let splitRecords = records.split("\r\n");
  const start = performance.now();
  for (let i = 0; i < splitRecords.length; i++) {
    let redC = 0;
    let greenC = 0;
    let blueC = 0;
    let throws = splitRecords[i].split(":");
    const rounds = throws[1].split(";");
    for (let y = 0; y < rounds.length; y++) {
      let round = rounds[y].split(",");
      round.forEach((ball) => {
        const dec = ball.trim().split(" ");
        if (dec[1] == "blue" && Number(dec[0]) > blueC) {
          blueC = Number(dec[0]);
        }
        if (dec[1] == "red" && Number(dec[0]) > redC) {
          redC = Number(dec[0]);
        }
        if (dec[1] == "green" && Number(dec[0]) > greenC) {
          greenC = Number(dec[0]);
        }
      });
    }
    total += redC * greenC * blueC;
  }
  console.log(total);
  const end = performance.now();
  const duration = end - start;
  console.log(`Time: ${duration.toFixed(2)}ms`);
});
