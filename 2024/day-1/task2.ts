import * as fs from "fs";

let similarityScore: number = 0;

const arr1: number[] = [];

const arr2Appearances: Record<number, number> = {};

const dataLocation: string = "./2024/day-1/data.txt";

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;

  const separateLines = data.toString().split("\r\n");
  const separator: string = "   ";

  separateLines.forEach((line) => {
    const nums = line.split(separator);

    arr1.push(Number(nums[0]));

    const arr2Key = Number(nums[1]);

    if (!arr2Appearances[arr2Key]) arr2Appearances[arr2Key] = 0;
    arr2Appearances[arr2Key] += 1;
  });

  for (let i = 0; i < arr1.length; i++) {
    const appearanceCount = arr2Appearances[arr1[i]] ?? 0;

    similarityScore += arr1[i] * appearanceCount;
  }

  console.log(similarityScore);
});
