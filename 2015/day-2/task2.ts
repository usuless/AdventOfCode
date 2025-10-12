import * as fs from "fs";

let total = 0;
const dataLocation = "data.txt";

function compareNumbers(a: number, b: number) {
  return a - b;
}

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const coordinates = data.toString();
  const coordArr = coordinates.split("\r\n");
  coordArr.forEach((coordinate) => {
    let [a, b, c] = coordinate.split("x");
    let numArr = [Number(a), Number(b), Number(c)];
    numArr.sort(compareNumbers);
    total += numArr[0] * 2 + numArr[1] * 2 + numArr[0] * numArr[1] * numArr[2];
  });
  console.log(total);
});
