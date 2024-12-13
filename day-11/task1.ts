import * as fs from "fs"

const dataLocation: string = "day-11/data.txt"
let stones: number[]
let stonesCopy: number[] = []
let idx = 0

fs.readFile(dataLocation, (err, data) => {
    if (err) throw err;
    let earlyData = data.toString()

    stones = earlyData.split(/\s/g).map(Number)
    console.log(stones)
    for( let index = 0; index < 25; index++) {
        for(let i = 0; i < stones.length; i++) {
            if(stones[i] === 0) {
                stonesCopy[idx] = 1
                idx++
            } else if(stones[i].toString().length % 2 === 0) {
                let howManyDigits = stones[i].toString().length / 2
                let eString1 = stones[i].toString().slice(0,howManyDigits)
                let eString2 = stones[i].toString().slice(howManyDigits, stones[i].toString().length)
                stonesCopy.push(Number(eString1))
                stonesCopy.push(Number(eString2))
                idx++
                idx++
            } else {
                stonesCopy[idx] = stones[i] * 2024
                idx++
            }
        }
        stones = stonesCopy
        stonesCopy = []
        idx = 0
        console.log("iteracja wewnętrzna: " + index)
    }
    console.log(stones.length)
    
})