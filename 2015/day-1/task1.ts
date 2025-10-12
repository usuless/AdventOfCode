import * as fs from "fs";

const dataLocation = "data.txt";

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const map = data.toString();

  let floor = 0;

  for (let index = 0; index < map.length; index++) {
    if (map[index] === "(") {
      floor++;
    } else {
      floor--;
    }

    if (floor < 0) {
      console.log(index);
      return;
    }
  }
});
