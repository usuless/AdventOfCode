import * as fs from "fs"

let line: string = ''
let lineAfter: any[] = []
let sum: number = 0

const dataLocation = "day-9/data.txt"

const makeALine = (line: string) => {
    let fileIndex = 0
    for(let i = 0; i < line.length; i++) {
        if (i % 2 === 0) {
            for (let index=0; index < Number(line[i]); index++) {
                lineAfter.push(fileIndex)
            }
            fileIndex++
        } else {
            for (let index=0; index < Number(line[i]); index++) {
                lineAfter.push(".")
            }
        }
    }
}

const lineSorter = () => {
    for(let i = lineAfter.length - 1; i >= 0; i--) {
        if(lineAfter[i] !== "." && i > lineAfter.indexOf(".")) {
            let emptySpace = lineAfter.indexOf(".")
            lineAfter[emptySpace] = lineAfter[i]
            lineAfter[i] = "."

        }
    }
}

const sumAll = (line: any[]) => {
    for(let i = 0; i < line.length; i++) {
        if(line[i] !== ".") {
            let tempSum = line[i] * i
            sum += tempSum
        }
    }
    console.log(sum)
}


fs.readFile(dataLocation, (err, data) => {
    if (err) throw err

    line = data.toString()
    makeALine(line)
    lineSorter()
    sumAll(lineAfter)
})