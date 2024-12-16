import * as fs from "fs"

let listToCalibration: string = ''
let calibrationElements: string[] = [] 
const dataLocation = "day-7/data.txt"
let totalScore: number = 0

const counterMaker = (Numbers: number[]) => {
let counter = []
    for(let i = 0; i < Numbers.length - 1; i++) {
        counter.push(0)
    }
    return counter
}
let iter = 0
const counterChanger = (counter:number[]) => {
    let counterArr = []
    for(let i = 0; i < counter.length; i++) {
        counterArr.push(counter[i])
    }
    for (let index = counterArr.length - 1; index >= 0; index--) {
        if(counterArr[index] === 2) {
            continue
        }  else {
            counterArr[index] ++
            if(!counterArr.slice(index + 1, counterArr.length).includes(0 || 1)) {
                let slice = counterArr.splice(index + 1, counterArr.length)
                for(let i = 0; i < slice.length; i++) {
                    counterArr.push(0)
                }
            }
            break
        }
    }
return counterArr
}

const numMerge = (num1: number, num2:number) => {
    let numString = String(num1) + String(num2)
    return Number(numString)
}


const numChecker = (Numbers: number[], Sum: number) => {
    let counter = counterMaker(Numbers)
    let isFound = false
    let sumCheck: number = 0;
    while (!isFound) {
        for (let i = 0; i < Numbers.length - 1; i++) {
            if( i === 0 ) {
                if (counter[i] === 0) {
                    sumCheck = (Numbers[i] + Numbers[i + 1])
                } else if (counter[i] === 1) {
                    sumCheck = numMerge(Numbers[i], Numbers[i + 1])
                } else {
                    sumCheck = (Numbers[i] * Numbers[i + 1])
                }
            } else {
                if (counter[i] === 0) {
                    sumCheck += Numbers[i + 1]
                } else if (counter[i] === 1) {
                    sumCheck = numMerge(sumCheck, Numbers[i + 1])
                } else {
                    sumCheck = (sumCheck * Numbers[i + 1])
                }
            }
        }

        
        if(!counter.includes(0) && !counter.includes(1) && !isFound) {
            isFound = true
        }
        if(sumCheck != Sum) {
            counter = counterChanger(counter)
            sumCheck = 0
        } else {
            console.log("znalezione")
            console.log(Sum)
            totalScore += Sum
            sumCheck = 0
            isFound = true
        }
    }
}


fs.readFile(dataLocation, (err,data) => {
    if (err) throw err;
    
    listToCalibration = data.toString()
    calibrationElements = listToCalibration.split("\r\n")

    calibrationElements.forEach((element) => {
        let Sum = Number(element.slice(0, element.indexOf(":")))
        let Numbers = element.slice(element.indexOf(":") + 2, element.length).split(' ').map(Number)
        numChecker(Numbers, Sum)
    })
    console.log(totalScore)
})

/*

000 001 010
011 100 101
110 111

*/