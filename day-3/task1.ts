import * as fs from 'fs';

const dataLocation: string = './day-3/data.txt'
let computerData: string = ''
let currentText: string = ''
let score: number = 0
// sprawdzamy ile cyfr mają liczby
const howManyDigitsInNumber = (text: string, position: number) => {
    for ( let i = position; i < text.length; i++)
        if (text[i] === "," ) {
            const firstNumber: number = Number(text.slice(position + 4, i))
            for (let secondNumberFind = i; secondNumberFind < i + 3; secondNumberFind++) {
                if (text[secondNumberFind] === ")") {
                    const secondNumber:number = Number((text.slice(i + 1, secondNumberFind)))
                    return secondNumber * firstNumber
                }
            }
        }
}


const mulDetector = (text: string) => {
    for (let i=0; i < text.length; i++) {
        // wyszukuje początek mul(
            //@ts-ignore
            if (text.slice(i, i + 4) === 'mul(' && !isNaN(text[i + 4])) {
            for (let bracesDetector = i; bracesDetector < i + 9; bracesDetector++) {
                if(text[bracesDetector] === ")" && !isNaN(Number(text[bracesDetector - 1 ]))){
                    score += howManyDigitsInNumber(text,i)
                    console.log(howManyDigitsInNumber(text,i))
                }
            }
        }
    }
}

// read file
fs.readFile(dataLocation, (err, data) => {
    if (err) throw err;

    computerData = data.toString();
    currentText = computerData
    mulDetector(currentText)
    console.log(score)
    
})


/* 

pobrać plik
wyszukać początek sekwencji "mul("
sprawdzić ile cyfr ma pierwsza liczba
sprawdzić ile cyfr ma druga liczba
sprawdzić, czy po drugiej liczbie jest odpowiedni nawias
doddać liczbe do wyniku 
uciąć stringa po zamykającym nawiasie


*/