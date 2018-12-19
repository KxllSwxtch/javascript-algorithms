/*

  Created By: Dmitriy Shin.
  Date: May 26, 2018.
  Program Description: Create a Function to get a Fibonacci Sequence. 

*/

// Recursive Fibonacci Sequence
function fibonacciRecursive(n) {
  if(n === 0 || n === 1) {
    return n;
  } else {
    return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
  }
}

console.log(fibonacciRecursive(0)); // 0
console.log(fibonacciRecursive(12)); // 144
console.log(fibonacciRecursive(5)); // 5