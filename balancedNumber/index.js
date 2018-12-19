/* 

  Created By: Dmitriy Shin.
  Date: May 29, 2018.
  Program Description: Balanced number is the number that The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal.

*/

/*

  1. Remove elements from the even length arrays.

*/

function balancedNum(number) {
  if(number <= 99) {
    return "Balanced";
  } 

  let splitted = toArray(number); // Transform the number into an array
  let middle = findMiddle([...splitted]); // Find the middle number(s).

  // For arrays with length 3
  if(splitted.length === 3) {
    let filteredArr = removeArrayItem(splitted, middle); // Remove the middle number from the array.
    
    return filteredArr.reduce((acc, num) => { return acc === num; }) ? "Balanced" : "Not Balanced";
  }

  // For arrays with length 4
  if(splitted.length === 4) {
    return splitted;
  }
}

// Helpers
//////////
function removeArrayItem(array, itemToRemove) {
  // Only works for the odd length arrays
  
  let arr = [...array];
  let index = arr.indexOf(itemToRemove);

  if(index > -1) {
    arr.splice(index, 1);
  }

  return arr; 
}

function toArray(number) {
  return number.toString().split("").map(char => +char);
}

function findMiddle(array) {
  let middle = Math.floor(array.length / 2);
  
  function findMedian() {
    if(array.length % 2 === 0) {
      return [array[middle - 1], array[middle]];
    } else {
      return array[middle];
    }
  }
  
  return findMedian();
}

// Calling Main Function
////////////////////////

// console.log(balancedNum(7)); // Balanced
// console.log("---------------------------");
// console.log(balancedNum(959)); // Balanced
// console.log("---------------------------");
// console.log(balancedNum(13)); // Balanced
// console.log("---------------------------");
// console.log(balancedNum(432)); // Not Balanced
// console.log("---------------------------");
// console.log(balancedNum(424)); // Balanced
// console.log("---------------------------");

// Larger Numbers
console.log(balancedNum(1024)); // Not Balanced
console.log("---------------------------");
console.log(balancedNum(66545));
console.log("---------------------------");
console.log(balancedNum(295591));
console.log("---------------------------");
console.log(balancedNum(1230987));
console.log("---------------------------");
console.log(balancedNum(56239814));
console.log("---------------------------");