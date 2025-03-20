import * as fs from "fs";
const dataLocation = "day-10/data.txt";
let map = [];
let numMap: number[][] = [];
let locationsOfZero: number[][] = [];
let score = 0

const dataParser = (element: string) => {
  let line: number[] = [];
  for (let i = 0; i < element.length; i++) {
    line.push(Number(element[i]));
  }
  numMap.push(line);
};

const findZero = (map: number[][]) => {
  for (let idxY = 0; idxY < map.length; idxY++) {
    for (let idxX = 0; idxX < map[idxY].length; idxX++) {
      if (map[idxY][idxX] === 0) {
        locationsOfZero.push([idxY, idxX]);
      }
    }
  }
};

const pathFinder = (map: number[][], Y: number, X: number, num: number, points: number[][]) => {
  if(num === 9) {
  points.push([Y,X])
    return
  }
  
  if(Y < map.length - 1) {
    if( map[Y + 1][X] === num + 1) {
      pathFinder(map, Y + 1, X, num + 1, points)
    }
  }
  if(Y > 0) {
    if(map[Y - 1][X] === num + 1) {
      pathFinder(map, Y - 1, X, num + 1, points)
    }    
  }
  if(X < map[Y].length - 1) {
    if(map[Y][X + 1] === num + 1) {
      pathFinder(map, Y, X + 1, num + 1, points)
    }
  }
  if(X > 0) {
    if(map[Y][X - 1] === num + 1) {
    pathFinder(map, Y, X - 1, num + 1, points)
  }
  }
}

const removeDuplicates = (arr: number[][]) => {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }

const roadFinder = (zeros: number[][]) => {
  zeros.forEach((zero) => {
    let points: number[][] = []
    pathFinder(numMap, zero[0], zero[1], 0, points)
  score += points.length
  });
};


fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;

  let dataofMap = data.toString();
  map = dataofMap.split("\r\n");
  map.forEach((element) => {
    dataParser(element);
  });

  findZero(numMap);
  roadFinder(locationsOfZero)
  console.log(score)
});
