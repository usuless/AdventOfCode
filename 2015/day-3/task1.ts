import * as fs from "fs";

const dataLocation = "data.txt";

let santaX = 0;
let santaY = 0;

let visietedHouses = {};

const prepareObject = (obj: any, generatedName: string) => {
  if (!Object.hasOwn(visietedHouses, generatedName)) {
    obj[generatedName] = 0;
  } else {
    return;
  }
};

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const coordinates = data.toString();
  let splitCoords = coordinates.split("");
  splitCoords.forEach((coord) => {
    if (coord == ">") {
      santaX++;
    } else if (coord == "<") {
      santaX--;
    } else if (coord == "^") {
      santaY++;
    } else {
      santaY--;
    }

    prepareObject(visietedHouses, String(santaX) + "," + String(santaY));
  });
  console.log(Object.keys(visietedHouses).length);
});
