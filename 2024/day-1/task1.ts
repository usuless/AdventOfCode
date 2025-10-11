import * as fs from "fs";

let historianLocations: string = "";
let totalDistance: number = 0;

const arr1: number[] = [];
const arr2: number[] = [];

const dataLocation: string = "./2024/day-1/data.txt";

const sortNumbers = (a: number, b: number) => {
  return a - b;
};

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;

  historianLocations = data.toString();

  const separateLines = historianLocations.split("\r\n");
  const separator: string = "   ";

  separateLines.forEach((line) => {
    const nums = line.split(separator);

    arr1.push(Number(nums[0]));
    arr2.push(Number(nums[1]));
  });

  arr1.sort(sortNumbers);
  arr2.sort(sortNumbers);

  for (let i = 0; i < arr1.length; i++) {
    const difference = Math.abs(arr1[i] - arr2[i]);
    totalDistance += difference;
  }

  console.log(totalDistance);
});
