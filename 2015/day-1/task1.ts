import * as fs from "fs";

const dataLocation = "./2015/day-1/data.txt";

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const map = data.toString();
});
