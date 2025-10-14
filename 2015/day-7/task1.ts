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
      console.log(1);
    } else if (record.includes("NOT")) {
      console.log(2);
    } else if (record.includes("OR")) {
      console.log(3);
    } else if (record.includes("RSHIFT")) {
      console.log(4);
    } else if (record.includes("LSHIFT")) {
      console.log(5);
    } else {
      console.log(record);
      const match = record.match(/->\s*(.*)/);
      //@ts-ignore
      wires[match[1].trim()] = Number(record.match(/^.*?(?=->)/)[0]);
      console.log(match);
    }
  });
  console.log(wires);
});
