import { hash } from "crypto";
import * as fs from "fs";

const DataLocation: string = "day-8/data.txt";
let map: string = "";
let parsedMap: string[] = [];
let elements: any[] = [];
let hashCounter: number = 0;

const ElementsFinder = (map: string[]) => {
  for (let VertIndex = 0; VertIndex < map.length; VertIndex++) {
    for (let HorIndex = 0; HorIndex < map[VertIndex].length; HorIndex++) {
      if (map[VertIndex][HorIndex] !== ".") {
        let constructor: any[] = [
          map[VertIndex][HorIndex],
          VertIndex,
          HorIndex,
        ];
        elements.push(constructor);
      }
    }
  }
};

const hashFinder = (map:string[]) => {
    for (let VertIndex = 0; VertIndex < map.length; VertIndex++) {
        for (let HorIndex = 0; HorIndex < map[VertIndex].length; HorIndex++) {
          if (map[VertIndex][HorIndex] !== ".") {
            hashCounter++
          }
        }
      }
}

const antinodesFinder = (elements: any[]) => {
  elements.forEach((element) => {
    for (let i = 0; i < elements.length; i++) {
      if (
        element[1] != elements[i][1] &&
        element[2] != elements[i][2] &&
        element[0] === elements[i][0]
      ) {
        let distanceY = element[1] - elements[i][1];
        let distanceX = element[2] - elements[i][2];
        let stableDistX = distanceX;
        let stableDistY = distanceY;
        while (
          element[2] + distanceX >= 0 &&
          element[1] + distanceY >= 0 &&
          element[2] + distanceX < parsedMap[1].length &&
          element[1] + distanceY < parsedMap.length
        ) 
        {
          console.log("pętla: " + distanceY, distanceX);
          parsedMap = replacer(element[1] + distanceY, element[2] + distanceX, parsedMap);
          distanceX = distanceX + stableDistX;
          distanceY = distanceY + stableDistY;
        }
      }
    }
  });
  console.log(elements);
};


const replacer = (Y: number, X: number, map: string[]) => {
  if (map[Y][X] !== "#") {
    let tempMapLine = map[Y];
    let tempMapLineArray = Array.from(tempMapLine);
    tempMapLineArray[X] = "#";
    tempMapLine = tempMapLineArray.join("");
    map[Y] = tempMapLine;
  }
  return map;
};

fs.readFile(DataLocation, (err, data) => {
  if (err) throw err;

  map = data.toString();
  parsedMap = map.split("\r\n");
  ElementsFinder(parsedMap);
  antinodesFinder(elements);
  hashFinder(parsedMap)
  console.log(parsedMap);
  console.log(hashCounter);
});

/*

0: 0, 0
1: 1, 3
2: 2, 1


1 - + 0,11
2 + - 3,2

*/
