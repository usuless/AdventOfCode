import * as fs from "fs";

interface Battery {
  batteryIndex: number;
  batteryPower: number;
}

const dataLocation = "2025/3-day/data.txt";
let firstBattery: Battery = { batteryIndex: -1, batteryPower: -1 };
let lastBattery: Battery = { batteryIndex: -1, batteryPower: -1 };

let total = 0;

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const start = performance.now();
  const input = data.toString().split("\r\n");
  input.forEach((line) => {
    for (let index = 0; index < line.length; index++) {
      if (
        Number(line[index]) > firstBattery.batteryPower &&
        index != line.length - 1
      ) {
        firstBattery.batteryPower = Number(line[index]);
        firstBattery.batteryIndex = index;
        lastBattery.batteryPower = 0;
      }

      if (
        index > firstBattery.batteryIndex &&
        Number(line[index]) > lastBattery.batteryPower
      ) {
        lastBattery.batteryIndex = index;
        lastBattery.batteryPower = Number(line[index]);
      }
    }

    total += Number(`${firstBattery.batteryPower}${lastBattery.batteryPower}`);
    firstBattery = { batteryIndex: -1, batteryPower: -1 };
    lastBattery = { batteryIndex: -1, batteryPower: -1 };
  });
  const end = performance.now();
  const duration = end - start;
  console.log(`Time: ${duration.toFixed(2)}ms`);

  console.log(total);
});
