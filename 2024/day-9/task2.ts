import * as fs from "fs"

let line: string = ''
let lineAfter: any[] = []
let sum: number = 0
let fileIndex = 0
let blocksList: any = []
let numBlocks:any = []
let emptyBlocks: any = []

const dataLocation = "day-9/data.txt"

const makeALine = (line: string) => {
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
    fileIndex--
}

const lineSorter = (lineAfter: any[]) => {
    return lineAfter
}

const blocksSorter = () => {
    console.log(blocksList)
    for(let i = 0; i < blocksList.length; i++) {
        if(blocksList[i][0] === ".") {
            emptyBlocks.push(blocksList[i])
        }else {
            numBlocks.push(blocksList[i])
        }
    }
}

const blocksDetector = () => {
    let blockLength = 0
    for(let i = 0; i < lineAfter.length; i++ ) {
            blockLength++
            if( lineAfter[i] !== lineAfter[i + 1]) {
                let tempBlock = [lineAfter[i], blockLength, i - blockLength + 1]
                blocksList.push(tempBlock)
                blockLength = 0
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
}


fs.readFile(dataLocation, (err, data) => {
    if (err) throw err
    
    line = data.toString()
    makeALine(line)
    blocksDetector()
    blocksSorter()
    lineAfter = lineSorter(lineAfter)
    sumAll(lineAfter)
})