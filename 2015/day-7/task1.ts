import * as fs from "fs";

const dataLocation = "data.txt";
let wires: Record<string, number> = {};

function convertToBinary(num: number) {
  let binary = "";
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary;
}

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const input = data.toString().split("\r\n");
  input.forEach((record) => {
    if (record.includes("AND")) {
      // console.log(1);
    } else if (record.includes("NOT")) {
      // console.log(2);
    } else if (record.includes("OR")) {
      // console.log(3);
    } else if (record.includes("RSHIFT")) {
      // console.log(4);
    } else if (record.includes("LSHIFT")) {
      // console.log(5);
    } else {
      const match = record.match(/^(\d+)\s*->\s*([a-z]+)/);

      if (match) {
        const wireName = match[2];

        const wireValue = parseInt(match[1], 10);

        wires[wireName] = wireValue;
      }
    }
  });
  console.log(wires);
});
