import * as fs from "fs";

let redNosedReactorData: string = ''
let firstIteration: Array<string[]> = []

const dataLocation:string = "./day-2/data.txt"

fs.readFile(dataLocation, (err, data) => {
  if (err) throw err;
  
  redNosedReactorData = data.toString();
  
  const separateLines = redNosedReactorData.split("\r\n");
  const separator: string = " ";
  let correctReportsCount = separateLines.length
  
  separateLines.forEach((line) => {
      const nums = line.split(separator);
      for (let i = 0; i < nums.length; i++) {
          if (Number(nums[i]) === Number(nums[i + 1])) {
              // takie same elementy
              nums.slice(i + 1, 1)
              firstIteration.push(nums)
              correctReportsCount--
              return
            } else if (Number(nums[0]) < Number(nums[1])){
                // ascending
                if (Number(nums[i]) + 3 < Number(nums[i + 1]) || Number(nums[i]) > Number(nums[i + 1])) {
                    nums.splice(i, 1)
                    firstIteration.push(nums)
                    correctReportsCount--
                    return
                }
            } else if (Number(nums[0]) > Number(nums[1])) {
                // descending
                if (Number(nums[i]) - 3 > Number(nums[i +1]) || Number(nums[i]) < Number(nums[i + 1])) {
                    nums.splice(i, 1)
                    firstIteration.push(nums)
                    correctReportsCount --
                    return
                }
            } }
            firstIteration.push(nums)
        });
console.log(correctReportsCount)
console.log(firstIteration)
});

