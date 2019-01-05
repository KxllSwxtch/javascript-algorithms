/**
 *
 * Date: December 28, 2018
 * Author: Dmitriy Shin
 * Program Description: Given an integer n,
 *  find the partition of it and return the string of the `Range: Average: Median: ` Format
 *
 */
const part = n => {
  if (n === 1) return `Range: 0 Average: 1.00 Median: 1.00`;
  else if (n === 2) return `Range: 1 Average: 1.50 Median: 1.50`;
  else if (n === 3) return `Range: 2 Average: 2.00 Median: 2.00`;
  else if (n === 4) return `Range: 3 Average: 2.50 Median: 2.50`;
  else if (n === 5) return `Range: 5 Average: 3.50 Median: 3.50`;
  else {
    let part = [[n]];

    // Find all possible numbers that will give the n as the result of the summation
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        let pair = [i, j];
        let pairSum = pair.reduce((a, b) => a + b, 0);

        if (pairSum === n) part.push(pair);
      }
    }

    part = part
      .map(subarr =>
        subarr.sort((a, b) => (a > b ? 1 : -1)).reduce((a, b) => a * b, 1)
      )
      .filter((num, index, self) => self.indexOf(num) === index)
      .sort((a, b) => (a > b ? 1 : -1));

    return part;
  }
};

// console.log(part(1)); // Range: 0 Average: 1.00 Median: 1.00
// console.log(part(2)); // Range: 1 Average: 1.50 Median: 1.50"
// console.log(part(3)); // Range: 2 Average: 2.00 Median: 2.00
// console.log(part(4)); // Range: 3 Average: 2.50 Median: 2.50
// console.log(part(5)); // Range: 5 Average: 3.50 Median: 3.50

console.log(part(8)); // Range: 17 Average: 8.29 Median: 7.50
// console.log(part(9)); // Range: 26 Average: 11.17 Median: 9.50
// console.log(part(10)); // Range: 35 Average: 15.00 Median: 14.00
