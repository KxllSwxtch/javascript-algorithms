/**
 *
 * Date: December 19, 2018
 * Name: Dmitriy Shin
 * Program Description
 *  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *
 */

const smallestMultiple = _ => {
  let number = 1;

  while (true) {
    if (isDivisibleFrom1To20(number)) break;
    number ++;
  }

  return number;
};

const isDivisibleFrom1To20 = n => {
  for (let i = 1; i <= 20; i++) {
    if (n % i !== 0) return false;
  }
  
  return true;
};

console.log(smallestMultiple()); // 232792560
