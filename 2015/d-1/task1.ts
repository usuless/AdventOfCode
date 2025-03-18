import * as fs from "fs";

const dataLocation = "data.txt";
let floor = 0;
let i = 1;

fs.readFile(dataLocation, (err, data) => {
    if (err) throw err;
    const map = data.toString();

    map.split("").forEach((letter) => {
        if (letter === "(") {
            floor++;
        } else {
            floor--;
        }

        if (floor === -1) {
            console.log(i);
            return;
        }
        i++;
    });
    console.log(floor);
});
