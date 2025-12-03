export const parseLine = (line: string) => {
  const numOfBatteries = 12;
  const nums: number[] = line.split("").map((char) => parseInt(char, 10));

  const resultDigits: number[] = [];

  let startIndex = 0;

  for (let i = 0; i < numOfBatteries; i++) {
    const searchEndIndex = nums.length - (numOfBatteries - 1 - i);

    let maxNum = -1;
    let maxNumIndex = -1;

    for (let index = startIndex; index < searchEndIndex; index++) {
      if (nums[index] > maxNum) {
        maxNum = nums[index];
        maxNumIndex = index;
      }
    }

    resultDigits.push(maxNum);

    startIndex = maxNumIndex + 1;
  }

  const resultNumber = resultDigits.join("");

  return Number(resultNumber);
};
