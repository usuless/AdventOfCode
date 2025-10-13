import * as fs from "fs";

let santaX = 0;
let santaY = 0;

let robotX = 0;
let robotY = 0;

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

    for (let i = 0; i < splitCoords.length; i++) {
        if (i % 2 == 0) {
            if (splitCoords[i] == ">") {
                santaX++;
            } else if (splitCoords[i] == "<") {
                santaX--;
            } else if (splitCoords[i] == "^") {
                santaY--;
            } else {
                santaY++;
            }
            howManyHouses++;
            prepareObject(
                objOfDuplicates,
                String(santaX) + "," + String(santaY),
            );
        } else {
            if (splitCoords[i] == ">") {
                robotX++;
            } else if (splitCoords[i] == "<") {
                robotX--;
            } else if (splitCoords[i] == "^") {
                robotY--;
            } else {
                robotY++;
            }
            howManyHouses++;
            prepareObject(
                objOfDuplicates,
                String(robotX) + "," + String(robotY),
            );
        }
    }
    console.log(Object.keys(objOfDuplicates).length);
});
