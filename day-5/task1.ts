import * as fs from "fs"

let dataLocation: string = "day-5/data.txt"
let rules: string = ''
let ordersCounter: number = 0
let arrayOfPrinted: number[] = []
let badArrayIdx: number[] = []
let finalSumOfGood:number = 0
let finalSumOfBad:number = 0

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
      if (arrayValid.length === 0) {
      } else {
        badArrayIdx.push(index)
        i++
      }
      arrayOfPrinted.push(arrayOrder[i])
    }
    arrayOfPrinted = []
  }
}

const middleNumberCase = (objectOfOrders: any, badArrayIdx: number[]) => {
  const badArrayIdxNoDuplicates = badArrayIdx.filter((item, index) => badArrayIdx.indexOf(item) === index)
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


fs.readFile(dataLocation, (err,data) => {
    if (err) throw err;
    
    rules = data.toString()
    const lines: string[] = rules.split("\r\n")

    lines.forEach((line) => {
      parseLines(line)
    })
    findBadOrders(objectOfOrders, objectOfRules)
    middleNumberCase(objectOfOrders, badArrayIdx)
    })

    
    /*

    biorąc przykład:
    
    47|53
    
    strona 47 musi być wydrukowana kiedykolwiek przed 53
    
    
    Stworzę obiekt, w którym będe przetrzymywał zasady dla poszczególnych liczb.
    
    Biorąc pierwszy przykład:
    
    const orderList = 75,47,61,53,29
    -------
    
    sprawdzimy, czy każda liczba po kolei jest na swoim odpowiednim miejscu. 
  
    iterując po "orderList" sprawdzamy, czy którakolwiek z liczb w orderList nie występuje
    
    przy indeksie w obiekcie z zasadami dla poszczególnych liczb. Jeżeli nie występuje,

    to można ją drukować i usuwa się ją z orderList. Jeżeli występuje jakaś liczba z orderList,
    
    to zamienia się je miejscami

  '29': '13,',
  '47': '53,13,61,29,',     
  '53': '29,13,',
  '61': '13,53,29,',        
  '75': '29,53,47,61,13,',  
  '97': '13,61,47,29,53,75,'

    */