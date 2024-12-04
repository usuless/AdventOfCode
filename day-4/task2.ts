import * as fs from "fs"

const dataLocation: string = "./day-4/data.txt"
let wordList = ""
let countOfMAS = 0

const checkForMAS = (text: string[], arrayIndex: number, letterIndex: number) => {
    if (text[arrayIndex - 1][letterIndex - 1] === "M" && text[arrayIndex + 1][letterIndex + 1] === "S") {
       if (text[arrayIndex - 1][letterIndex + 1] === "M" && text[arrayIndex + 1][letterIndex - 1] === "S") {
        countOfMAS++
       }

       if (text[arrayIndex - 1][letterIndex + 1] === "S" && text[arrayIndex + 1][letterIndex - 1] === "M") {
        countOfMAS++
       }
    }

    if (text[arrayIndex - 1][letterIndex - 1] === "S" && text[arrayIndex + 1][letterIndex + 1] === "M") {
        if (text[arrayIndex - 1][letterIndex + 1] === "M" && text[arrayIndex + 1][letterIndex - 1] === "S") {
            countOfMAS++
        }
    
        if (text[arrayIndex - 1][letterIndex + 1] === "S" && text[arrayIndex + 1][letterIndex - 1] === "M") {
            countOfMAS++
        }
    }
}

fs.readFile(dataLocation, (err,data) => {
    if (err) throw err;
    
    wordList = data.toString()
    const parsedWordList = wordList.split("\r\n")
    for(let array = 0; array < parsedWordList.length; array++) {
        for (let letter = 0; letter < parsedWordList[array].length; letter++) {
            if ( letter > 0 && letter < (parsedWordList[array].length - 1) && array > 0 && array < (parsedWordList.length - 1) && parsedWordList[array][letter] === "A") {
                checkForMAS(parsedWordList, array, letter)
            }
        }
    }
    console.log(countOfMAS)
})
