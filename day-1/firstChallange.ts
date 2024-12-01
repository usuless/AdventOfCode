// 68298   57474
import * as fs from 'fs'

let historianLocations: string = ''
fs.readFile('./day-1/data.txt', (err,data) => {
    if (err) throw err;

    historianLocations = data.toString()
    const arr1: number[] = []
    const arr2: number[] = []
    const finalArray: number[] = []
    const separateLines = historianLocations.split("\r\n");
    
    separateLines.forEach((line)=> {
    const nums = line.split('   ')
    arr1.push(Number(nums[0]))
    arr2.push(Number(nums[1]))
    })
    
    arr1.sort((a: number, b: number) => {
        return a - b;
      });

    arr2.sort((a: number, b: number) => {
        return a - b;
      });

    for (let i = 0; i < arr1.length; i++ ) {
        if (arr1[i] > arr2[i]) {
            const difference = arr1[i] - arr2[i]
            finalArray.push(difference)
        } else if (arr2[i] > arr1[i]) {
            const difference = arr2[i] - arr1[i]
            finalArray.push(difference)
        } else {
            finalArray.push(0)
        }
    }

    let finalResult: number = 0
    finalArray.forEach((element) => {
        finalResult = finalResult + element
    })

    console.log(finalResult)
})



// 1. parse lokacji do dwóch tablic
// a) podzielenie inputu na linie: done
// b) wykonanie operacji na każdej linii, przypisując
// pierwszą liczbę do 1 arr i drugą liczbę do 2 arr
// c)

// 2. segregacja tablic od małych do dużych

// 3. item[1] porównać z item[1]  z dwóch list