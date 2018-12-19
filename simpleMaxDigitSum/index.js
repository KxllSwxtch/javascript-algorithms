/* 

  Created By: Dmitriy Shin.
  Date: June 11, 2018.
  Program Description: 
    Given an integer n. 
  
    Task: 
    Return the largest integer that is <= n and has the highest digit sum.
  
  Notes:  
    Input range is 0 > n > 10e11.

/* 
   ___       ________  ___      ___ _______           ________  ________  ________  ________  ________  ________  _____ ______   _____ ______   ___  ________   ________     
  |\  \     |\   __  \|\  \    /  /|\  ___ \         |\   __  \|\   __  \|\   __  \|\   ____\|\   __  \|\   __  \|\   _ \  _   \|\   _ \  _   \|\  \|\   ___  \|\   ____\    
  \ \  \    \ \  \|\  \ \  \  /  / | \   __/|        \ \  \|\  \ \  \|\  \ \  \|\  \ \  \___|\ \  \|\  \ \  \|\  \ \  \\\__\ \  \ \  \\\__\ \  \ \  \ \  \\ \  \ \  \___|    
   \ \  \    \ \  \\\  \ \  \/  / / \ \  \_|/__       \ \   ____\ \   _  _\ \  \\\  \ \  \  __\ \   _  _\ \   __  \ \  \\|__| \  \ \  \\|__| \  \ \  \ \  \\ \  \ \  \  ___  
    \ \  \____\ \  \\\  \ \    / /   \ \  \_|\ \       \ \  \___|\ \  \\  \\ \  \\\  \ \  \|\  \ \  \\  \\ \  \ \  \ \  \    \ \  \ \  \    \ \  \ \  \ \  \\ \  \ \  \|\  \ 
     \ \_______\ \_______\ \__/ /     \ \_______\       \ \__\    \ \__\\ _\\ \_______\ \_______\ \__\\ _\\ \__\ \__\ \__\    \ \__\ \__\    \ \__\ \__\ \__\\ \__\ \_______\
      \|_______|\|_______|\|__|/       \|_______|        \|__|     \|__|\|__|\|_______|\|_______|\|__|\|__|\|__|\|__|\|__|     \|__|\|__|     \|__|\|__|\|__| \|__|\|_______|
         
*/

// Main Function
////////////////
function solve(n) {
  if(n <= 10) {
    return 9; // 9 will always be the highest number in range 0 < x <= 10.
  }

  // Finding the sums.
  let sumArray = []; // Store all sum values, and sort array in descending order.
  
  // Object Creation.
  let myObject = new Object();

  for(let i = 0; i <= n; i++) {
    let splitted = splitNumber(i); // Split each number.
    let sum = findSum(splitted); // Find the sum of each number.

    myObject[i] = sum; // Add i as a key and sum of its values as a value.
  }

  return +sortObject(myObject)[0][0];
}


// Helpers
//////////
function sortObject(object) {
  let arr = [];

  for(let i in object) {
    arr.push([i, object[i]]);
  }

  return arr.sort((a, b) => {
    return a[1] < b[1] ? 1 : -1;
  });
}

function buildObject(key, value) {
  let object = {
    key: value
  };

  return object;
}

function findSum(array) {
  return array.reduce((a, b) => a + b, 0);
}

function splitNumber(n) {
  return n.toString().split("").map(char => +char);
}

// Testing Function
///////////////////
// console.log(solve(100)); // 99.
// console.log(solve(10)); // 9.
// console.log(solve(48)); // 48.
console.log(solve(1000000)); // .