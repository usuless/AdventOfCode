//  import * as fs from 'fs';

const dataLocation: string = './data.txt'
let score: number = 0
const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

const regexFunc = (mul: string) => {
    const arrayWithoutBraces = mul.slice(0, -1)
    const numbers = arrayWithoutBraces.slice(4, arrayWithoutBraces.length)
    let num1: number = 0
    let num2: number = 0
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] === ',') {
            num1 = Number(numbers.slice(0, i))
            num2 = Number(numbers.slice(i + 1, numbers.length))
            score += (num1 * num2)
        }
    }
}
const computerData =  await Deno.readTextFile(dataLocation)

// read file
// fs.readFile(dataLocation, (err, data) => {
//     if (err) throw err;
// const computerData = data.toString();

const found = computerData.match(regex)

found?.forEach((mul) => regexFunc(mul))

console.log(score)
// })
