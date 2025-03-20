import * as fs from "fs"

let listToCalibration: string = ''
let calibrationElements: string[] = [] 
const dataLocation = "day-7/data.txt"
let totalScore: number = 0

const counterMaker = (Numbers: number[]) => {
let counter = ""
    for(let i = 0; i < Numbers.length - 1; i++) {
        counter += ("0")
    }
    return counter
}

const counterChanger = (counter:string) => {
let counterArr = []
let CounterForNow = ''
for(let i = 0; i < counter.length; i++) {
    counterArr.push(counter[i])
}
for (let i = counterArr.length - 1; i >= 0; i--) {
    if(counterArr[i] === "0") {
        counterArr[i] = "1"
        i = -1
        if( i != counterArr.length) {
            counterArr[i + 1] = "0"
        }
    }
}

for(let i = 0; i < counterArr.length; i++) {
    CounterForNow += counterArr[i]
}
return CounterForNow
}


const numChecker = (Numbers: number[], Sum: number) => {
let counter = counterMaker(Numbers)
let isFound = false
let sumCheck: number = 0;
while (counter.includes("0")) {
for (let i = 0; i < Numbers.length - 1; i++) {
    if (counter[i] === "0") {
        sumCheck += (Numbers[i] + Numbers[i + 1])
        // console.log(Numbers[i], Numbers[i + 1])
        // console.log("dodaje")
        } else {
        sumCheck += (Numbers[i] * Numbers[i + 1])
        // console.log(Numbers[i], Numbers[i + 1])
        // console.log("mnoży")
    }
}
if(sumCheck != Sum) {
    // console.log(counter)
    counter = counterChanger(counter)
    // console.log("To jest counter: " + counter)
    // console.log(sumCheck)
    sumCheck = 0
} else {
totalScore += Sum
sumCheck = 0
// console.log("dobry wynik")
counter = "1"
}}
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
})

    /*
    1. oczytanie pliku
    2. parse data
    3. stworzenie wszystkich kombinacji
    4. sprawdzenie kazdej kombinacji na danych
    5. dodanie sumy wszyskich danych spelniajacych warunek
    6. console.log(suma)
*/