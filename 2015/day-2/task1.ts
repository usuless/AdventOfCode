import * as fs from "fs";

let total = 0;
const dataLocation = "data.txt";

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const coordinates = data.toString();
  const coordArr = coordinates.split("\r\n");
  coordArr.forEach((coordinate) => {
    let [a, b, c] = coordinate.split("x");
    let ab = Number(a) * Number(b);
    let bc = Number(b) * Number(c);
    let ac = Number(a) * Number(c);
    let sum = 2 * ab + 2 * ac + 2 * bc;
    total += sum;
    total += Math.min(ab, ac, bc);
  });
  console.log(total);
});
