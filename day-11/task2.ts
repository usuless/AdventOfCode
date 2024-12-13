import * as fs from "fs";
const dataLocation = "day-11/data.txt";
let earlyData: string = "";
let stones: number[];
let Obj: any = {};

const stoneToObj = (stone: number) => {
    Obj[String(stone)] = 1;
};

const isUndefinedCheck = (e: string, v: number) => {
  if (Obj[e] === undefined) {
    Obj[e] = v;
  } else {
    Obj[e] += v;
  }
};

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  earlyData = data.toString();
  stones = earlyData.split(/\s/g).map(Number);
  stones.forEach((stone) => {
    stoneToObj(stone);
  });
  // liczba mrugnięć
  for (let i = 1; i <= 4; i++) {
    // pojedyncze mrugnięcie
    for (let [key, value] of Object.entries(Obj)) {
      if (key === "0" && value !== 0) {
        isUndefinedCheck("1", value as number);
        Obj[key] = 0;
      } else if (key.length % 2 === 0 && value !== 0) {
        let howManyDigits = key.length / 2;
        let firstHalf = key.slice(0, howManyDigits);
        let secondHalf = key.slice(howManyDigits, key.length);
        let hasMoreThanZeroes = /[1-9]/.test(secondHalf);
        if (hasMoreThanZeroes 
            && secondHalf[0] === "0"
        ) {
          console.log("przed: " + secondHalf)
          secondHalf = secondHalf.replace(/^0+/, "");
          console.log(secondHalf)
        } else {
          secondHalf = "0";
        }
        isUndefinedCheck(firstHalf, value as number);
        isUndefinedCheck(secondHalf, value as number);
        Obj[key] = 0;
      } else {
        if (value !== 0) {
          isUndefinedCheck(String(Number(key) * 2024), value as number);
          Obj[key] = 0;
        }
      }
    }
  }
  let test = 0;
  for (let [key, value] of Object.entries(Obj)) {
    if ((value as number) !== 0) {
      test += value as number;
    }
  }

  console.log(test);
  console.log(Object.keys(Obj).length);
});

/*

[ 8096, 196202512, 13393629744, 991760, ]

*/