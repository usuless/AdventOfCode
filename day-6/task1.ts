import * as fs from "fs"

const dataLocation: string = "data.txt"

let map = ''
let guardLocation: number[] = []
let lines: string[] = []
let howManyMarks = 0

const findGuard = (map:string[]) => {
    for (let vertIndex = 0; vertIndex < map.length; vertIndex++) {
        for(let horizontalIndex = 0; horizontalIndex < map[vertIndex].length; horizontalIndex++) {
            if(map[vertIndex][horizontalIndex] === "^") {
                guardLocation.push(vertIndex)
                guardLocation.push(horizontalIndex)
            }
        }
    }
}

const navigation = (map: string[], guardVertLocation: number, guardHorLocation: number) => {
    let direction = 0;
    let isGuardOnMap = true
    while(isGuardOnMap) {
        if(direction === 0 && guardVertLocation !== undefined) {
            for(let index = guardVertLocation; index >= 0; index--) {
                if(map[index][guardHorLocation] === "#") {
                    findPossibleInfLoop(map, [guardVertLocation, guardHorLocation], direction)
                    direction++
                    guardVertLocation = index + 1
                    index = 0
                } else if (map[index][guardHorLocation] !== "X") {
                    xMarking(map, index, guardHorLocation)
                }
            }
        } else {
            console.log("strażnik wyszedł z mapy")
            isGuardOnMap = false
        }
        if(direction === 1 && guardHorLocation !== undefined) {
            for(let index = guardHorLocation; index < map[guardHorLocation].length; index++) {
                if(map[guardVertLocation][index] === "#") {
                    findPossibleInfLoop(map, [guardVertLocation, guardHorLocation], direction)
                    direction++
                    guardHorLocation = index - 1
                    index = map.length
                } else if (map[guardVertLocation][index] !== "X") {
                    xMarking(map, guardVertLocation, index)
                }
            }
        } else {
            console.log("strażnik wyszedł z mapy")
            isGuardOnMap = false
        }
        if(direction === 2 && guardVertLocation !== undefined) {
            for(let index = guardVertLocation; index < map.length; index++) {
                if(map[index][guardHorLocation] === "#") {
                    findPossibleInfLoop(map, [guardVertLocation, guardHorLocation], direction)
                    direction++
                    guardVertLocation = index - 1
                    index = map.length
                } else if (map[index][guardHorLocation] !== "X") {
                    xMarking(map, index, guardHorLocation)
                }
            }
        } else {
            console.log("strażnik wyszedł z mapy")
            isGuardOnMap = false
        }
        if(direction === 3 && guardHorLocation !== undefined) {
            for(let index = guardHorLocation; index >= 0; index--) {
                if(map[guardVertLocation][index] === "#") {
                    findPossibleInfLoop(map, [guardVertLocation, guardHorLocation], direction)
                    direction = 0
                    guardHorLocation = index + 1
                    index = 0
                } else if (map[guardVertLocation][index] !== "X") {
                    xMarking(map, guardVertLocation, index)
                }
                
            }
        } else {
            console.log("strażnik wyszedł z mapy")
            isGuardOnMap = false
        }
    }
    console.log(howManyMarks)
}

const findPossibleInfLoop = (map:string[], hashLocation:number[], direction: number) => {
    if(direction===0) {

    }
}


const xMarking = (map:string[], vert:number, hor:number) => {
    let string = map[vert]
    let ArrayFromString = string.split('')
    ArrayFromString[hor] = "X"
    let newString = ArrayFromString.join("")
    map[vert] = newString
    howManyMarks++
}


fs.readFile(dataLocation, (err,data) => {
    if (err) throw err;
    
    map = data.toString()
    lines = map.split("\r\n")
    findGuard(lines)
    navigation(lines, guardLocation[0], guardLocation[1])
    })