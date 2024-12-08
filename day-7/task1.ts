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
    console.log(counter)
let counterArr = []
let CounterForNow = ''
for(let i = 0; i < counter.length; i++) {
    counterArr.push(counter[i])
}

console.log(counterArr.length)
for(let index = counterArr.length - 1; index >= 0; index--) {
    if(counterArr[index] === "0" && !counterArr.slice(index, counterArr.length).includes("0")) {
        counterArr[index] = "1"
        let parseCounter = counterArr.splice(index, counterArr.length)
        for(let i = 0; i > parseCounter.length - 1; index++) {
            counterArr.push("0")
        }
    } else if(counterArr[index] === "0") {
        counterArr[index] = "1"
        break
    }
}

console.log(counterArr)

for(let finalIndex = counterArr.length - 1; finalIndex >= 0; finalIndex--) [
    CounterForNow += counterArr[finalIndex]
]

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
        } else {
        sumCheck += (Numbers[i] * Numbers[i + 1])
    }
}
if(sumCheck != Sum) {
    counter = counterChanger(counter)
    sumCheck = 0
} else {
totalScore += Sum
sumCheck = 0
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
        // numChecker(Numbers, Sum)
    })
})

let test = counterMaker([1,2,3,4])
console.log(test)
test = counterChanger(test)
test = counterChanger(test)
// console.log(test)
// test = counterChanger(test)
// console.log(test)
// test = counterChanger(test)
// console.log(test)
// test = counterChanger(test)
// console.log(test)
// test = counterChanger(test)
// console.log(test)
// test = counterChanger(test)
// console.log(test)
// test = counterChanger(test)
// console.log(test)

    /*
    1. oczytanie pliku
    2. parse data
    3. stworzenie wszystkich kombinacji
    4. sprawdzenie kazdej kombinacji na danych
    5. dodanie sumy wszyskich danych spelniajacych warunek
    6. console.log(suma)

    jeżeli linijka ma dwa miejsca dla operatora (++) (+*) (**) (*+)
*/