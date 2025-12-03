import * as fs from "fs";
import { parseLine } from "./parseLine";

const dataLocation = "2025/3-day/data.txt";

let total = 0;

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const input = data.toString().split("\r\n");

  input.forEach((line) => {
    total += parseLine(line);
  });
  console.log(total);
});

/*
2233643232222242333443433223122333324326451323323334325223136631334332233233323164354342233332238233
 */
