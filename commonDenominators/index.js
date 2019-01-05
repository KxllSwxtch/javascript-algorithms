/**
 *
 * Date: December 21, 2018
 * Created By: Dmitriy Shin
 * Program Description: Given a 2D array of integers, find the greatest common divisor of each subarray
 *
 */
const convertFrac = arr => {
  let secondNumbers = [],
    firstNumbers = [],
    lowestCommonMultiple = 1,
    greaterCommonDivisors = [];

  for (let i = 0; i < arr.length; i++) {
    firstNumbers.push(arr[i][0]);
    secondNumbers.push(arr[i][1]);
  }

  lowestCommonMultiple = secondNumbers.reduce(
    (accumulator, next, index, self) => lcm(accumulator, next)
  );

  let result = "";

  for (let i = 0; i < secondNumbers.length; i++) {
    result += `(${lowestCommonMultiple / secondNumbers[i]},${lowestCommonMultiple})`;
  }

  return result;
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);

console.log(convertFrac([[1, 2], [1, 3], [1, 4]]));
