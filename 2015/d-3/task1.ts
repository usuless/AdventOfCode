import * as fs from "fs";

let santaX = 0;
let santaY = 0;

let howManyHouses = 1;

const dataLocation = "data.txt";

let objOfDuplicates = {};

const prepareObject = (obj: any, generatedName: string) => {
    obj[generatedName] = 0;
};

fs.readFile(dataLocation, (err, data) => {
    if (err) throw err;
    const coordinates = data.toString();
    let splitCoords = coordinates.split("");

    splitCoords.forEach((letter) => {
        if (letter == ">") {
            santaX++;
        } else if (letter == "<") {
            santaX--;
        } else if (letter == "^") {
            santaY--;
        } else {
            santaY++;
        }
        howManyHouses++;
        prepareObject(objOfDuplicates, String(santaX) + "," + String(santaY));
    });
    console.log(Object.keys(objOfDuplicates).length);
});
