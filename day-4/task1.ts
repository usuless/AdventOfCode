import * as fs from "fs"

const dataLocation: string = "./day-4/data.txt"
let wordList = ""
let wordCount = 0

const lookHorizontallyRight = (text:string, letterIndex:number) => {
    if(text.slice(letterIndex, letterIndex + 4) === "XMAS") {
        wordCount++
    }
}

const lookHorizontallyLeft = (text: string, letterIndex:number) => {
        if (text.slice(letterIndex - 3, letterIndex + 1) === "SAMX") {
            wordCount++
        }
}

const lookVerticallyDown = (wordList: string[], arrayNum:number, letterNum: number) => {
    let find: string = ''
    for (let i = 0; i <= 3; i++) {
        find += wordList[arrayNum + i][letterNum]
    }

    if ( find === "XMAS") {
        wordCount++
    }
}

const lookVerticallyUp =(wordList: string[], arrayNum: number, letterNum: number) => {
    let find: string = ''
    for (let i = 0; i <= 3; i++) {
        find += wordList[arrayNum - i][letterNum]
    }

    if (find === "XMAS") {
        wordCount++
    }
}

const lookDiagonallyUpRight = (wordList: string[], arrayNum: number, letterNum:number) => {
    let find: string = ''
    for (let i = 0; i <=3; i++) {
        find += wordList[arrayNum - i][letterNum + i]
}
    if (find === "XMAS") {
        wordCount++
    }
}

const lookDiagonallyUpLeft = (wordList: string[], arrayNum: number, letterNum:number) => {
    let find: string = ''
    for (let i = 0; i <=3; i++) {
        find += wordList[arrayNum - i][letterNum - i]
}
    if (find === "XMAS") {
        console.log(find)
        wordCount++
    }
}

const lookDiagonallyDownRight = (wordList: string[], arrayNum: number, letterNum:number) => {
    let find: string = ''
    for (let i = 0; i <=3; i++) {
        find += wordList[arrayNum + i][letterNum + i]
}
    if (find === "XMAS") {
        console.log(find)
        wordCount++
    }
}

const lookDiagonallyDownLeft = (wordList: string[], arrayNum: number, letterNum:number) => {
    let find: string = ''
    for (let i = 0; i <=3; i++) {
        find += wordList[arrayNum + i][letterNum - i]
}
    if (find === "XMAS") {
        console.log(find)
        wordCount++
    }
}

fs.readFile(dataLocation, (err,data) => {
    if (err) throw err;
    
    wordList = data.toString()
    const parsedWordList = wordList.split("\r\n")
    for(let array = 0; array < parsedWordList.length; array++) {
        for (let letter = 0; letter < parsedWordList[array].length; letter++) {
            if  (parsedWordList[array][letter] === "X" && parsedWordList[array][letter +1] === "M") {
                lookHorizontallyRight(parsedWordList[array], letter)
            } 
            if (parsedWordList[array][letter] === "X" && parsedWordList[array][letter - 1] === "M") {
                lookHorizontallyLeft(parsedWordList[array], letter)
            }
            if (array < (parsedWordList.length - 3) && parsedWordList[array][letter] === "X" && parsedWordList[array + 1][letter] === "M") {
                lookVerticallyDown(parsedWordList, array, letter )
            } 
            if (array >= 3 && parsedWordList[array][letter] === "X" && parsedWordList[array - 1][letter] === "M") {
                lookVerticallyUp(parsedWordList, array, letter)
            }
            if (array >= 3 && letter <= (parsedWordList[array].length - 4) && parsedWordList[array][letter] === "X" && parsedWordList[array -1][letter +1] === "M") {
                lookDiagonallyUpRight(parsedWordList, array, letter)
            }
            if (array >= 3 && letter >= 3 && parsedWordList[array][letter] === "X" && parsedWordList[array-1][letter-1] === "M") {
                lookDiagonallyUpLeft(parsedWordList, array, letter)
            }
            if (array < (parsedWordList.length - 3) && letter < (parsedWordList[array].length - 3) && parsedWordList[array][letter] === "X" && parsedWordList[array +1][letter + 1] === "M") {
                lookDiagonallyDownRight(parsedWordList, array, letter)
            }
            if (array < (parsedWordList.length - 3) && letter >= 3 && parsedWordList[array][letter] === "X" && parsedWordList[array +1][letter -1] === "M") {
                lookDiagonallyDownLeft(parsedWordList, array, letter)
            }
        }
    }
    console.log(wordCount)
})