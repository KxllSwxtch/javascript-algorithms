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
  let count = 0;
  let arr = []; // store numbers from 1 to 10
  let startEndArr = []; // store two inputs joined together
  let finalOuts = []; // store all numbers of occerences of each number

  // for each number from 1 to 10, push it into an arr.
  for(let i = 0; i <= 10; i++) {
    arr.push(i);
  }

  // for each input number, push the splitted version into startEndArr
  for(let i = start; i <= end; i++) {
    startEndArr.push(splitNumber(i));
  }

  // sort it
  startEndArr = startEndArr.join(",").split(",").map(char => +char).sort((a, b) => { return a - b });

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < startEndArr.length; j++) {
      if(startEndArr[j] === arr[j]) {
        count++;
        let a = new Object();
        a.value = startEndArr[j];
        a.count = count;
        finalOuts.push(a);
      }
    }
  }

  return finalOuts;
}

// Helpers
//////////
function splitNumber(num) {
  return num.toString().split("").map(char => +char);
}

console.log(paintLetterBoxes(125, 132));