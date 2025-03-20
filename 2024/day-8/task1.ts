import * as fs from "fs"

const DataLocation: string = "day-8/data.txt"
let map: string = ''
let parsedMap: string[] = []
let elements: any[] = []
let hashCounter:number = 0

const ElementsFinder = (map: string[]) => {
    for(let VertIndex = 0; VertIndex < map.length; VertIndex++) {
        for(let HorIndex = 0; HorIndex < map[VertIndex].length; HorIndex++ ) {
            if(map[VertIndex][HorIndex] !== ".") {
                let constructor: any[] = [map[VertIndex][HorIndex], VertIndex, HorIndex]
                elements.push(constructor)
            }
        }
    }
}

const antinodesFinder = (elements: any[]) => {
    elements.forEach((element) => {
        console.log(element)
        for(let i = 0; i < elements.length; i++) {
            if(element[1] != elements[i][1] && element[2] != elements[i][2] && element[0] === elements[i][0]) {
                let distanceY = 0
                let distanceX = 0
                distanceY = element[1] - elements[i][1]
                distanceX = element[2] - elements[i][2]
                let hashLocation: number[] = [distanceY + element[1], distanceX + element[2]]
                if(hashLocation[0] >= 0 &&
                   hashLocation[0] < parsedMap[1].length &&
                   hashLocation[1] >= 0 &&
                   hashLocation[1] < parsedMap.length) {
                    parsedMap = replacer(hashLocation[0], hashLocation[1], parsedMap)
                }
            }
        }
    })
}


const replacer = (Y:number, X: number, map:string[]) => {
    if(map[Y][X] !== "#") {
        let tempMapLine = map[Y]
        let tempMapLineArray = Array.from(tempMapLine)
        tempMapLineArray[X] = "#"
        tempMapLine = tempMapLineArray.join('')
        map[Y] = tempMapLine
         hashCounter++
    }
    return map
}

fs.readFile(DataLocation, (err, data) => {
    if(err) throw err;

    map = data.toString()
    parsedMap = map.split("\r\n")
    ElementsFinder(parsedMap)
    antinodesFinder(elements)
    console.log(hashCounter)
})

/*

1: 1, 8
2: 2, 5

1 - + 0,11
2 + - 3,2

*/