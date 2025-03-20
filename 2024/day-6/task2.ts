import * as fs from "fs";

const dataLocation: string = "day-6/data.txt";

let area = "";
let guardLocation: number[] = [];
let linedArea: string[] = [];

const findGuard = (map: string[]) => {
  for (let vertIndex = 0; vertIndex < map.length; vertIndex++) {
    for (
      let horizontalIndex = 0;
      horizontalIndex < map[vertIndex].length;
      horizontalIndex++
    ) {
      if (map[vertIndex][horizontalIndex] === "^") {
        guardLocation.push(vertIndex);
        guardLocation.push(horizontalIndex);
      }
    }
  }
};


fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;

  area = data.toString();
  linedArea = area.split("\r\n");
  findGuard(linedArea);
});