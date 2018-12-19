/* 

  Created By: Dmitriy Shin.
  Date: May 27, 2018.
  Program Description: 
    You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee.
    Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the 1's, somebody else will paint only the 2's and so on...
    But at the end of the day you realise not everybody did the same amount of work.
    To avoid any fights you need to distribute the money fairly. That's where this Kata comes in..
    
    !--Kata Task--!
    Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.

*/

function paintLetterBoxes(start, end) {
  let startEndArray = []; // To store the splitted values from start to end.
  let count = 0; // To count the number of occurences.
  let freq = []; // To store the count.

  for(let i = start; i <= end; i++) {
    const splittedValue = toArray(i); // Transform each number into an array.

    startEndArray.push(splittedValue); // Push each number into startEndArray.
  } 

  let sortedJoinedArray = startEndArray // Join all numbers, split them by commas and then turn each char into an integer. Then sort
    .join(",")
    .split(",")
    .map(char => +char)
    .sort((a, b) => a - b); 

  let countObj = countDuplicates(sortedJoinedArray);

  for(let i = 0; i < 10; i++) {
    if(!(i in countObj)) {
      countObj[i] = 0;
    }
  }

  let finalArr = [];

  for(let i in countObj) {
    finalArr.push(countObj[i]);
  }

  return finalArr;
}

// Helpers
//////////
function countDuplicates(array) {
  let counts = {};
  array.forEach(x => { counts[x] = (counts[x] || 0) + 1; });

  return counts;
}

function toArray(input) {
  return input.toString().split("").map(char => +char);
}

// Calling a function
console.log(paintLetterBoxes(125, 132));