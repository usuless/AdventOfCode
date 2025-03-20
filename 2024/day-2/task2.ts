import * as fs from "fs";

let redNosedReactorData: string = ''
const dumbNums = [1,4,7,8,9]

const isNumSafe = (nums: number[]):boolean => {
    
    for (let i = 1; i < nums.length; i++) {
      const difference = Math.abs(nums[i] - nums[i-1])
      const startOnGrow = nums[1] > nums[0]
      const isStillOnGrow = nums[i] - nums[i - 1] > 0
    
      if (difference > 3 || difference === 0) { return false }
      if ( startOnGrow !== isStillOnGrow ) {return false }
      }
      return true
}

const isNumeSafeDoubleCheck = (num: number[]) => {
    if(isNumSafe(num)) return true

    for (let i = 0; i < num.length; i++) {
        if (isNumSafe(num.filter((_, j) => j !== i))) return true
      }
      return false
}

const numsChecker = (nums: number[][]): number => {
    return nums.filter(isNumSafe).length
}

const sumOfDoubleChecked = (nums: number[][]): number => {
    return nums.filter(isNumeSafeDoubleCheck).length
}

console.log(isNumSafe(dumbNums))

const dataLocation:string = "./day-2/data.txt"

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  
  redNosedReactorData = data.toString();
  
  const separateLines = redNosedReactorData.split("\r\n");
  const separator: string = " ";
  
  const numsAsNumbers = separateLines.map(line => line.split(separator).map(Number))
    
  console.log(numsChecker(numsAsNumbers))
  console.log(sumOfDoubleChecked(numsAsNumbers))
})
