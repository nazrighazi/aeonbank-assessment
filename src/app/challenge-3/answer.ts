function twoSum(numbers: number[], target: number): number[] {
  let firstNum: number = 0; //beginning of array
  let secondNum: number = numbers.length - 1; //end of array

  while (firstNum < secondNum) {
    const sum: number = numbers[firstNum] + numbers[secondNum];
    if (sum === target) {
      return [firstNum + 1, secondNum + 1]; //convert from 0-indexed to 1-indexed
    } else if (sum < target) {
      firstNum++;
    } else {
      secondNum--;
    }
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
