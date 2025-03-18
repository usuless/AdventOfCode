import * as fs from "fs";

let total = 0;
const dataLocation = "data.txt";

fs.readFile(dataLocation, (err, data) => {
    if (err) throw err;
    const coordinates = data.toString();
    const coordArr = coordinates.split("\r\n");
    coordArr.forEach((coordinate) => {
        let [a, b, c] = coordinate.split("x");
        let lengts = [Number(a), Number(b), Number(c)];
        lengts.sort((a, b) => a - b);
        total += (Number(a) * Number(b) * Number(c)) + (lengts[0] * 2) +
            (lengts[1] * 2);
    });
});
