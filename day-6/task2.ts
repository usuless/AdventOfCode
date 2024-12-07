import * as fs from "fs";

const dataLocation: string = "data.txt";

let area = "";
let guardLocation: number[] = [];
let lines: string[] = [];
let howManyMarks = 0;

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

const navigation = (
  map: string[],
  guardVertLocation: number,
  guardHorLocation: number,
) => {
  for (let searchIndex = 0; searchIndex < map.length; searchIndex++) {
    for (
      let anotherIndex = 0;
      anotherIndex < map[anotherIndex].length - 1;
      anotherIndex++
    ) {
      let newMapWithHash = hashMarking(map, searchIndex, anotherIndex);
      let direction = 0;
      let isGuardOnMap = true;
      while (isGuardOnMap) {
        if (direction === 0 && guardVertLocation !== undefined) {
          for (let index = guardVertLocation; index >= 0; index--) {
            if (
              newMapWithHash[index + 1][guardHorLocation] === "#" &&
              newMapWithHash[index][guardHorLocation] === "X"
            ) {
              console.log("loop");
            }
            if (newMapWithHash[index][guardHorLocation] === "#") {
              newMapWithHash = xMarking(
                newMapWithHash,
                index + 1,
                guardHorLocation,
              );
              direction++;
              guardVertLocation = index + 1;
              index = 0;
            }
          }
        } else {
          // console.log("strażnik wyszedł z mapy");
          isGuardOnMap = false;
        }
        if (direction === 1 && guardHorLocation !== undefined) {
          for (
            let index = guardHorLocation;
            index < newMapWithHash[guardHorLocation].length;
            index++
          ) {
            if (newMapWithHash[guardVertLocation][index] === "#") {
              newMapWithHash = xMarking(
                newMapWithHash,
                guardVertLocation,
                index - 1,
              );
              direction++;
              guardHorLocation = index - 1;
              index = newMapWithHash.length;
            }
          }
        } else {
          // console.log("strażnik wyszedł z mapy");
          isGuardOnMap = false;
        }
        if (direction === 2 && guardVertLocation !== undefined) {
          for (
            let index = guardVertLocation;
            index < newMapWithHash.length;
            index++
          ) {
            if (newMapWithHash[index][guardHorLocation] === "#") {
              newMapWithHash = xMarking(
                newMapWithHash,
                index - 1,
                guardHorLocation,
              );
              direction++;
              guardVertLocation = index - 1;
              index = newMapWithHash.length;
            }
          }
        } else {
          // console.log("strażnik wyszedł z mapy");
          isGuardOnMap = false;
        }
        if (direction === 3 && guardHorLocation !== undefined) {
          for (let index = guardHorLocation; index >= 0; index--) {
            if (newMapWithHash[guardVertLocation][index] === "#") {
              newMapWithHash = xMarking(
                newMapWithHash,
                guardVertLocation,
                index + 1,
              );
              direction = 0;
              guardHorLocation = index + 1;
              index = 0;
            }
          }
        } else {
          // console.log("strażnik wyszedł z mapy");
          isGuardOnMap = false;
        }
        console.log(newMapWithHash)
      }
      map = area.split("\r\n");
    }
  }
};

const xMarking = (map: string[], vert: number, hor: number) => {
  let string = map[vert];
  let ArrayFromString = string.split("");
  ArrayFromString[hor] = "X";
  let newString = ArrayFromString.join("");
  map[vert] = newString;
  let newMap = map;
  return newMap;
};

const hashMarking = (map: string[], vert: number, hor: number) => {
  if (map[vert][hor] === "^") {
    return area.split("\r\n");
  }
  let string = map[vert];
  let ArrayFromString = string.split("");
  ArrayFromString[hor] = "#";
  let newString = ArrayFromString.join("");
  map[vert] = newString;
  let newMap = map;
  return newMap;
};

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;

  area = data.toString();
  lines = area.split("\r\n");
  findGuard(lines);
  navigation(lines, guardLocation[0], guardLocation[1]);
});


/*

    skoro pozycja guarda to 6,3

    JEŻELI GUARD IDZIE W GÓRE

    jeżeli 7,(szukana) od arr[7].slice(3, arr[7].length).includes("#")
    for (let i = 6; i >= 0; i++) {
        if (arr[i][3] === "#" ) {
            let ostatniPunkt = arr[i + 1].slice(3, arr[i].length)
            for(let index = 0; index < ostatniPunkt.length; index++) {
                if(ostatni punkt[index] === "#") {
                    MAMY SZACHA
                }
            }
        }
    }

    JEŻELI GUARD IDZIE W PRAWO

    guard ma teraz 1,3

     for (let i = lokalizacjaWertykalna; i < arr.length; i++) {
     if( arr[i][3] === "#" {
     
     })
    }

*/