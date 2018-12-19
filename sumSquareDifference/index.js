/*
 
  Created By: Dmitriy Shin.
  Date: May 31, 2018.
  Program Description: Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/

function sumSquareDifference() {
  let naturalNumbersSquaredArr = []; // to store all squared natural numbers
  let naturalNumbersArr = []; // to store all natural numbers from 1 to 10

  for(let i = 1; i <= 100; i++) {
    naturalNumbersArr.push(i);
    naturalNumbersSquaredArr.push(squareN(i)); // push each squared number into array
  }

  const naturalNumbersSquaredSum = naturalNumbersSquaredArr.reduce((accumulator, currentN) => {
    return accumulator + currentN;
  }, 0);

  const naturalNumbersSum = naturalNumbersArr.reduce((accumulator, currentN) => {
    return accumulator + currentN;
  }, 0)**2;

  console.log(naturalNumbersSum - naturalNumbersSquaredSum);
}

// Helpers
//////////
function squareN(number) {
  return number**2;
}

console.log(sumSquareDifference()); // 25164150
