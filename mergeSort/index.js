/*

  Created By: Dmitriy Shin.
  Date: June 1, 2018.
  Program Description: Implement a Merge Sorting Algorithm.

*/

const mergeSort = arr => {
  if (arr.length < 2) return arr;

  let middleIndex = Math.floor(arr.length / 2);
  let FH = arr.slice(0, middleIndex); 
  let SH = arr.slice(middleIndex, arr.length);

  return merge(mergeSort(FH), mergeSort(SH));
};

const merge = (a, b) => {
  let result = [];

  while (a.length && b.length) {
    let minElement = a[0] < b[0] ? a.shift() : b.shift();
    result.push(minElement);
  }

  result = a.length ? result.concat(a) : result.concat(b);

  return result;
};

console.log(mergeSort([1500, 42, 1, 65, 988, 3548, 7785, 659, 454, 848484, 7454])); // ​​​​​[ 1, 42, 65, 454, 659, 988, 1500, 3548, 7454, 7785, 848484 ]​​​​​