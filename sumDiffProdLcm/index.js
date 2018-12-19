/**

  Created By: Dmitriy Shin
  Date: May 25, 2018.
  Program Description: In this kata you need to create a function that takes a 2D array/list of non-negative integer pairs and returns the sum of 
                       all the "saving" that you can have getting the LCM of each couple of number compared to their simple product..

**/

function sumDifferencesBetweenProductsAndLCMs(pairs) {
  // Find The Product of Each SubArray.
  let products = pairs.map(pair => {
    return pair.reduce((accumulator, currentNum, index, self) => {
      return accumulator * currentNum;
    });
  });

  // Find LCM of Each SubArray.
  let LCMs = pairs.map(pair => {
    return pair.reduce((accumulator, currentNum, index, self) => {
      return LCM(accumulator, currentNum);
    });
  });

  // Find Differences between Each Product and Each LCM of Each SubArray.
  let differences = [];

  for(let i = 0; i < products.length; i++) {
    differences.push(products[i] - LCMs[i]);
  }

  // Find The Sum Of Found Differences, and Return result.
  let finalOut = differences.reduce((accumulator, currentNumber, index, self) => { return accumulator + currentNumber }, 0);

  return finalOut;
}

// Helpers
function LCM(x, y) {
  if((typeof x !== "number") || (typeof y !== "number")) {
    return false;
  } else {
    return (!x || !y) ? 0 : Math.abs((x * y) / GCD(x, y));
  }
}

function GCD(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);

  while(y) {
    let t = y;
    y = x % y;
    x = t;
  }

  return x
}

console.log(sumDifferencesBetweenProductsAndLCMs([[15, 18], [4, 5], [12, 60]]));