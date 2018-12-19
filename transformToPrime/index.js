/*

  Created By: Dmitriy Shin.
  Date: May 24, 2018.
  Program Description: Given an array of integers, find a minimum number to be inserted in array, so that sum of all elements of array should equal the closest prime number.

*/

const minimumNumber = (arr) => {
  let _sum = arr.reduce((acc, number) => { return acc + number }, 0);

};

// Helpers
//////////
const isPrime = (num) => {
  for(let i = 2; i <= num; i++) {
    if(num % i === 0) {
      return false;
    } else {
      return num !== 1;
    }
  }
};
