import * as fs from "fs";

let redNosedReactorData: string = ''

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
              correctReportsCount--
              return
            } else if (Number(nums[0]) < Number(nums[1])){
                // ascending
                if (Number(nums[i]) + 3 < Number(nums[i + 1]) || Number(nums[i]) > Number(nums[i + 1])) {
                    correctReportsCount--
                    return
                }
            } else if (Number(nums[0]) > Number(nums[1])) {
                // descending
                if (Number(nums[i]) - 3 > Number(nums[i +1]) || Number(nums[i]) < Number(nums[i + 1])) {
                    correctReportsCount --
                    return
                }
            } } 
            console.log("to wszystkie tablice: " + nums)
        });
console.log(correctReportsCount)
});

/* 
    1 3 2 4 5
*/

/* 

if (isCorrect === true && Number(nums[i]) >= (Number(nums[i + 1]) - 3 )) {
    console.log(nums[i])
} else if (isCorrect === true && (Number(nums[i]) - 3) <= (Number(nums[i + 1]))) {
} else if (isCorrect === true && nums[i] === nums[i + 1]) {
    isCorrect = false
    console.log(nums[i])
    console.log(nums[i + 1])
} else {
    isCorrect = false
}
}

if (isCorrect = true) {
correctReportsCount++
}
*/
