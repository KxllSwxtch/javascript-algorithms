/*

  Created By: Dmitriy Shin.
  Date: May 26, 2018.
  Program Description: 
    Given an array of N integers, you have to find how many times you have to add up the smallest numbers 
    in the array until their Sum becomes greater or equal to K..

*/

function minimumSteps(numbers, value) {
  numbers = numbers.sort((a, b) => a - b);
  
  let count = 0;
  let sum = 0;
  
  for(let i = 0; i <= numbers.length - 1; i++) {
    if(numbers[0] >= value) {
      return 0;
    }
  
    if(sum === numbers[0]) {
      sum = sum + numbers[i];
    } else {
      sum = sum + numbers[i];
      count++;
    }
    
    if(sum >= value) {
      return count;
    }
  }
}

// Helpers
//////////

console.log(minimumSteps(arrOne, 7)); // 1
console.log(minimumSteps(arrTwo, 17)); // 1
console.log(minimumSteps(arrThree, 23)); // 3