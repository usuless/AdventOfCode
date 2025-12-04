import * as fs from "fs";
import { isValid } from "./isValid";
import { replacer } from "./replacePaper";

const dataLocation = "2025/4-day/data.txt";

let score = 0;
let oldScore: number;
let nearbyPaper = 0;
let maxWidth;
let maxHeigth;

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const start = performance.now();
  let input = data.toString().split("\r\n");
  maxWidth = input[0].length;
  maxHeigth = input.length;
  while (oldScore != score) {
    oldScore = score;
    for (let y = 0; y < input.length; y++) {
      for (let x = 0; x < input[y].length; x++) {
        if (input[y][x] === "@") {
          if (isValid(x + 1, y, maxWidth, maxHeigth)) {
            if (input[y][x + 1] === "@") {
              nearbyPaper++;
            }
          }
          if (isValid(x - 1, y, maxWidth, maxHeigth)) {
            if (input[y][x - 1] === "@") {
              nearbyPaper++;
            }
          }
          if (isValid(x, y - 1, maxWidth, maxHeigth)) {
            if (input[y - 1][x] === "@") {
              nearbyPaper++;
            }
          }
          if (isValid(x, y + 1, maxWidth, maxHeigth)) {
            if (input[y + 1][x] === "@") {
              nearbyPaper++;
            }
          }
          if (isValid(x + 1, y - 1, maxWidth, maxHeigth)) {
            if (input[y - 1][x + 1] === "@") {
              nearbyPaper++;
            }
          }
          if (isValid(x + 1, y + 1, maxWidth, maxHeigth)) {
            if (input[y + 1][x + 1] === "@") {
              nearbyPaper++;
            }
          }
          if (isValid(x - 1, y - 1, maxWidth, maxHeigth)) {
            if (input[y - 1][x - 1] === "@") {
              nearbyPaper++;
            }
          }
          if (isValid(x - 1, y + 1, maxWidth, maxHeigth)) {
            if (input[y + 1][x - 1] === "@") {
              nearbyPaper++;
            }
          }

          if (nearbyPaper < 4) {
            score++;
            input = replacer(y, x, input);
          }
          nearbyPaper = 0;
        }
      }
    }
  }

  const end = performance.now();
  const duration = end - start;
  console.log(`Time: ${duration.toFixed(2)}ms`);
  console.log(score);
});
