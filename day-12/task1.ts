import * as fs from "fs"
const dataLocation = "day-12/data.txt"
let garden = ''
let gardenMap: string[]
let letters
let obj: any = {}
let totalScore = 0
let generator: number = 0

const prepareObject = (obj: any, generatedName: number) => {
        obj[generatedName] = {}
        obj[generatedName]["pola"] = 0
        obj[generatedName]["płotki"] = 0
        obj[generatedName]["pojedyncze"] = 0
        generator ++
    }
    
    const letterChecker = (previousLetter: string, map: string[], Y: number, X: number) => {
        let score = 4
        if(map[Y][X] === ".") {
            return
        }
        
        if(Y > 0) {
            if(map[Y - 1][X] === previousLetter) {
                score --
                map = letterToDot(map, [Y,X])
                letterChecker(previousLetter, map, Y - 1, X)
            }
        }
        
        if(Y < map.length - 1) {
            if(map[Y + 1][X] === previousLetter) {
                score --
                map = letterToDot(map, [Y,X])
                letterChecker(previousLetter, map, Y + 1, X)
            }
        }
        
        if(X > 0) {
            if(map[Y][X - 1] === previousLetter) {
                score --
                map = letterToDot(map, [Y,X])
                letterChecker(previousLetter, map, Y, X - 1)
        }
    }
    

    if(X < map[Y].length - 1) {
        if(map[Y][X + 1] === previousLetter) {
            score --
            map = letterToDot(map, [Y,X])
            letterChecker(previousLetter, map, Y, X + 1)
        }
    }
    
    if(score === 4) {
        obj[String(generator - 1)]["pojedyncze"] ++
    } else {
        obj[String(generator - 1)]["płotki"] += score
        obj[String(generator - 1)]["pola"] ++
    }
    
}

const gardenIteration = (map: string[]) => {
    for(let i = 0; i < map.length; i++) {
        for(let idx = 0; idx < map[i].length; idx++) {
            if(i === 0 && idx === 0) {prepareObject(obj, generator)}   
            letterChecker(map[i][idx], map, i, idx)
            console.log(map.join("\r\n"))
            console.log("")
            console.log("")
        }
    }
}

const letterToDot = (map: string[], place: number[]) => {
    let mapString = map[place[0]]
    let mapStringArr = mapString.split('')
    mapStringArr[place[1]] = "."
    mapString = mapStringArr.toString()
    mapString = mapString.replace(/,/g, "")
    map[place[0]] = mapString
    return map
}


// const sumScores = (obj:any) => {
//     for (const [key, value] of Object.entries(obj)) {
//         totalScore += (value["płotki"] * value["pola"])
//         totalScore += (value["pojedyncze"] * 4)
//       }

// }

fs.readFile(dataLocation, (err, data) => {
    if(err) throw err
    garden = data.toString()
    letters = Array.from(new Set(garden)).filter(e => e !== "\n" && e !== "\r")
    gardenMap = garden.split("\r\n")
    gardenIteration(gardenMap)
    // sumScores(obj)
    letterToDot(gardenMap, [2,3])
})

/* 
[1,0][1,1]
[2,0][2,1]
[1,2]
[2,2][2,3]
     [3.3]
*/
