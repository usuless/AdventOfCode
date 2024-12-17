import * as fs from "fs"
const dataLocation = "day-12/data.txt"
let garden = ''
let gardenMap: string[]
let letters
let obj: any = {}
let totalScore = 0

const prepareObject = (obj: any, lettersList: string[]) => {
    for(let i = 0; i < lettersList.length; i++) {
        obj[lettersList[i]] = {}
        obj[lettersList[i]]["pola"] = 0
        obj[lettersList[i]]["boki"] = 0
        obj[lettersList[i]]["pojedyncze"] = 0
        
    }
}

const gardenIteration = (map: string[]) => {
    for(let i = 0; i < map.length; i++) {
        for(let idx = 0; idx < map[i].length; idx++) {
            if(i === 0 && idx === 0) {

            }   
            let score = 4
            if(i > 0) {
                if(map[i - 1][idx] === map[i][idx]) {
                    score --
                }
            }
            if(i < map.length - 1) {
                if(map[i + 1][idx] === map[i][idx]) {
                    score --
                }
            }
            if(idx > 0) {
                if(map[i][idx - 1] === map[i][idx]) {
                    score --
                }
            }
            if(idx < map[i].length - 1) {
                if(map[i][idx + 1] === map[i][idx]) {
                    score --
                }
            }
            if(score === 4) {
            obj[map[i][idx]]["pojedyncze"] ++
            } else {
                obj[map[i][idx]]["boki"] += score
                obj[map[i][idx]]["pola"] ++
            }
        }
    }
}

const sumScores = (obj:any) => {
    for (const [key, value] of Object.entries(obj)) {
        totalScore += (value["boki"] * value["pola"])
        totalScore += (value["pojedyncze"] * 4)
      }
      
}

fs.readFile(dataLocation, (err, data) => {
    if(err) throw err
    garden = data.toString()
    letters = Array.from(new Set(garden)).filter(e => e !== "\n" && e !== "\r")
    gardenMap = garden.split("\r\n")
    prepareObject(obj, letters)
    gardenIteration(gardenMap)
    sumScores(obj)
    console.log(totalScore)
    console.log(obj)
})

/* 
[1,0][1,1]
[2,0][2,1]
[1,2]
[2,2][2,3]
     [3.3]
*/
