import * as fs from "fs"

const dataLocation: string = "./day-4/data.txt"
let wordList = ""
let wordCount = 0

fs.readFile(dataLocation, (err,data) => {
    if (err) throw err;
    
    wordList = data.toString()
    const parsedWordList = wordList.split("\r\n")
    for(let array = 0; array < parsedWordList.length; array++) {
        for (let letter = 0; letter < parsedWordList[array].length; letter++) {
        }
    }
    console.log(wordCount)
})