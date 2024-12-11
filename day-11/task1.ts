import * as fs from "fs"

const dataLocation: string = "day-11/data.txt"
let stones: number[]
let idx = 0

const elementHandler = (element: number) => {

}

fs.readFile(dataLocation, (err, data) => {
    if (err) throw err;
    let earlyData = data.toString()

    stones = earlyData.split(/\s/g).map(Number)
    console.log(stones)
        for(let i = 0; i < stones.length; i++) {
            if(i === 0) {
                stones[i] = 1
            } else if(stones[i].toString().length % 2 === 0) {
                let howManyDigits = stones[i].toString().length / 2
                let eString1 = stones[i].toString().slice(0,howManyDigits)
                let eString2 = stones[i].toString().slice(howManyDigits, stones[i].toString().length)
                let stones1 = stones.slice(0, i)
                let stones2 = stones.slice(i + 1, stones.length)
                stones = stones1
                stones.push(Number(eString1))
                stones.push(Number(eString2))
                stones2.forEach((stone) => {
                stones.push(stone)
                i++
                })
            } else {
                stones[i] = i * 2024
            }
        }
        

    console.log(stones)
})