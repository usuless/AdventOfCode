import * as fs from 'fs';

const dataLocation: string = './day-3/data.txt'
let computerData: string = ''
let score: number = 0
const regex:RegExp = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g;
let isGood:boolean = true

const regexFunc = (mul: string) => {
    const arrayWithoutBraces = mul.slice(0, -1)
    const numbers = arrayWithoutBraces.slice(4, arrayWithoutBraces.length)
    let num1: number = 0
    let num2: number = 0
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] === ',') {
            num1 = Number(numbers.slice(0, i))
            num2 = Number(numbers.slice(i + 1, numbers.length))
            console.log(num1)
            console.log(num2)
            score += (num1 * num2)
        }
    }
    console.log(score)
}

const doAndDontAddon = (TableOfRules:RegExpMatchArray) => {
    for (let i = 0; i < TableOfRules.length; i++) {
        if (TableOfRules[i] === "do()") {
            console.log(TableOfRules[i])
            isGood = true
        } else if (TableOfRules[i] === "don't()") {
            console.log(TableOfRules[i])
            isGood = false
        } else {
            if (isGood === true) {
                regexFunc(TableOfRules[i])
            }
        } 
    }
}

    // read file
    fs.readFile(dataLocation, (err, data) => {
        if (err) throw err;
        
    computerData = data.toString();
    const found = computerData.match(regex)
    console.log(found)
    //@ts-ignore
    doAndDontAddon(found)
})

// 44071268