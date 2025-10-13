import { createHash } from "crypto";
import * as fs from "fs";

const dataLocation = "data.txt";
let decimalNumber = 0;

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const input = data.toString();
  while (true) {
    const hash = createHash("md5")
      .update(input + decimalNumber)
      .digest("hex");
    if (String(hash).slice(0, 5) == "00000") {
      console.log(hash);
      console.log(decimalNumber);
      return;
    } else {
      decimalNumber++;
    }
  }
});
