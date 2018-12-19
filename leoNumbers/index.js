/*

  Created By: Dmitriy Shin.
  Date: June 16, 2018.
  Program Description: 
    The Leonardo numbers are a sequence of numbers defined by:
      L(0) = 1 || 0
      L(1) = 1 || 0
      L(x) = L(x - 1) + L(x - 2) + 1

*/

function L(n, L0, L1, add) {
  let array = [];
}

// Helpers
//////////


// Testing Function
///////////////////
console.log(L(5, 1, 1, 1)); // [1, 1, 3, 5, 9].
console.log(L(5, 0, 0, 2)); // [0, 0, 2, 4, 8].