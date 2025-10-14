import * as fs from "fs";

const dataLocation = "data.txt";
let map: Array<Array<number>> = [];
let poweredBulbs = 0;

const createMap = () => {
  for (let index = 0; index < 1000; index++) {
    const mapLine = new Array(1000).fill(0);
    map.push(mapLine);
  }
};
fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const input = data.toString();
  const parsedInput = input.split("\r\n");
  createMap();
  parsedInput.forEach((input) => {
    const matchesArray = [...input.matchAll(/\d+/g)].map((match) => match[0]);
    if (input.includes("turn on")) {
      for (
        let index = Number(matchesArray[0]);
        index <= Number(matchesArray[2]);
        index++
      ) {
        for (
          let i = Number(matchesArray[1]);
          i <= Number(matchesArray[3]);
          i++
        ) {
          map[index][i]++;
        }
      }
    } else if (input.includes("turn off")) {
      for (
        let index = Number(matchesArray[0]);
        index <= Number(matchesArray[2]);
        index++
      ) {
        for (
          let i = Number(matchesArray[1]);
          i <= Number(matchesArray[3]);
          i++
        ) {
          if (map[index][i] > 0) {
            map[index][i]--;
          }
        }
      }
    } else {
      for (
        let index = Number(matchesArray[0]);
        index <= Number(matchesArray[2]);
        index++
      ) {
        for (
          let i = Number(matchesArray[1]);
          i <= Number(matchesArray[3]);
          i++
        ) {
          map[index][i] += 2;
        }
      }
    }
  });

  map.forEach((line) => {
    line.forEach((letter) => {
      poweredBulbs += letter;
    });
  });
  console.log(poweredBulbs);
});

// 925464
// 441507
