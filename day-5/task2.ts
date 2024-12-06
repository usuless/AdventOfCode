import * as fs from "fs"

let dataLocation: string = "day-5/data.txt"
let rules: string = ''
let ordersCounter: number = 0
let arrayOfPrinted: number[] = []
let badArrayIdx: number[] = []
let finalSumOfGood:number = 0
let finalSumOfBad:number = 0
let badArrayIdxNoDuplicates: number[]
let arrayOfRepaired: number[][] = []

const objectOfRules: any = {}
const objectOfOrders: any = {}

const changeToNumbers = (text: string) => {
  if (text === undefined) {
    return []
  } else {
    const numArray = text.split(',').map(Number)
    return numArray
  }
}

const elementSwap = (arr: number[], pos1:number, pos2: number) => {
    const temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;

    return arr;
}

const parseLines = (line: string) => {
  if(line.includes("|")) {
    const ruleNumber = line.slice(0, line.indexOf('|'))
    const printedNumber = line.slice(line.indexOf("|") + 1, line.length)

    if (objectOfRules[ruleNumber] === undefined) {
      objectOfRules[ruleNumber] = ''
    }

    objectOfRules[ruleNumber] += `${printedNumber},`
  } else if (line === "") {
  } else {
    objectOfOrders[ordersCounter] = line
    ordersCounter++
  }
}

const findBadOrders = (objectWithOrders: any, objectWithNumbers: any) => {
  for(let index = 0; index < Object.keys(objectWithOrders).length; index++) {

    let arrayOrder = changeToNumbers(objectWithOrders[index])
    for(let i = 0; i < arrayOrder.length; i++) {
      let arrayRestrictions: number[] = changeToNumbers(objectWithNumbers[arrayOrder[i]])
      let arrayValid: number[] = arrayOfPrinted.filter(value => arrayRestrictions.includes(value))

      if (arrayValid.length !== 0) {
          badArrayIdx.push(index)
          i++
      }
      arrayOfPrinted.push(arrayOrder[i])
    }
    arrayOfPrinted = []
  }
}

const middleNumberCase = (objectOfOrders: any, badArrayIdx: number[]) => {
  badArrayIdxNoDuplicates = badArrayIdx.filter((item, index) => badArrayIdx.indexOf(item) === index)
  for(let i = 0; i < Object.keys(objectOfOrders).length; i++) {
    if(badArrayIdxNoDuplicates.includes(i)) {
    } else {
      let arrayOfNums: number[] = changeToNumbers(objectOfOrders[String(i)])
      let middleNumber = arrayOfNums[Math.floor((arrayOfNums.length / 2))]
      finalSumOfGood += middleNumber
    }
  }
  console.log(finalSumOfGood)
}

const restoreBadArrays = (ordersObject: any, rulesObject: any, indexList: number[]) => {
    for(let i = 0;i < Object.keys(ordersObject).length; i++) {
        if(indexList.includes(i)) {
            let badArray: number[] = changeToNumbers(ordersObject[String(i)])
            for(let index = 0; index < badArray.length; index++) {
                let elementRules: number[] = rulesObject[String(badArray[index])]
                if(elementRules === undefined) {
                    elementRules = []
                }
                const test = badArray.slice(0, index)
                test.forEach((element) =>  {
                    if(elementRules.includes(element)) {
                        elementSwap(badArray, badArray.indexOf(element), badArray.indexOf(badArray[index]))
                        index = 0
                    }
                })
                
            } 
            for(let i = 0; i < 50; i ++) {
              console.log("\n");
            }
            console.log(`Loading: ${i}/${Object.keys(ordersObject).length}`)
            arrayOfRepaired.push(badArray)
            }
        }
    }

    const quickAnswer = (arrays: number[][]) => {
        console.log(arrays)
        arrays.forEach(array => {
            let arrLength = Math.floor((array.length / 2))
            console.log(array[arrLength])
            finalSumOfBad += array[arrLength]
        })
        console.log("Wynik zadania:",finalSumOfBad)
    }

fs.readFile(dataLocation, (err,data) => {
    if (err) throw err;
    
    rules = data.toString()
    const lines: string[] = rules.split("\r\n")

    lines.forEach((line) => {
      parseLines(line)
    })
    findBadOrders(objectOfOrders, objectOfRules)
    middleNumberCase(objectOfOrders, badArrayIdx)
    restoreBadArrays(objectOfOrders, objectOfRules, badArrayIdxNoDuplicates)
    quickAnswer(arrayOfRepaired)
    })