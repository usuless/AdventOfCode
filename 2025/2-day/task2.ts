import * as fs from "fs";

const dataLocation = "2025/2-day/data.txt";
let test = 0;
function isInvalidID(id: number): boolean {
  const idAsString = id.toString();
  const idLength = idAsString.length;

  for (let maxLength = 1; maxLength <= Math.floor(idLength / 2); maxLength++) {
    if (idLength % maxLength !== 0) {
      continue;
    }

    const baseBlock = idAsString.substring(0, maxLength);
    let constructedID = "";

    for (let i = 0; i < idLength / maxLength; i++) {
      constructedID += baseBlock;
    }

    if (constructedID === idAsString) {
      return true;
    }
  }

  return false;
}

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  const input = data.toString().split(",");
  const start = performance.now();
  input.forEach((val) => {
    const [firstNumStr, lastNumStr] = val.split("-");
    const firstNum = Number(firstNumStr);
    const lastNum = Number(lastNumStr);

    for (let index = firstNum; index <= lastNum; index++) {
      if (isInvalidID(index)) {
        test += index;
      }
    }
  });
  const end = performance.now();
  const duration = end - start;

  console.log(`Time: ${duration.toFixed(2)}ms`);
  console.log(test);
});
