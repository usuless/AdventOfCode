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
    let stonesCopy: number[] = []
        for(let i = 0; i < stones.length; i++) {
            if(stones[i] === 0) {
                stonesCopy[idx] = 
                idx++
            console.log("to jest element: " + stonesCopy[i])
            } else if(stones[i].toString().length % 2 === 0) {
                let howManyDigits = stones[i].toString().length / 2
                let eString1 = stones[i].toString().slice(0,howManyDigits)
                let eString2 = stones[i].toString().slice(howManyDigits, stones[i].toString().length)
                stonesCopy.push(Number(eString1))
                stonesCopy.push(Number(eString2))
            console.log("to jest element: " + stonesCopy[i])
            idx++
            idx++
            } else {
                stonesCopy[idx] = stones[i] * 2024
                console.log("to jest element: " + stonesCopy[i])
                idx++
            }
            console.log(i)
            console.log(stones.length)
        }

    console.log(stones)
    console.log(stonesCopy)
})
