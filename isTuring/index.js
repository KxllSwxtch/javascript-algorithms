/* 

  Created By: Dmitriy Shin.
  Date: June 6, 2018.
  Program Description:
    Given a string. It's an equation such as "a+b=c", where a, b, c are numbers made up of the digits 0 to 9. 
    This includes possible leading or trailing zeros. The equations will not contain any spaces.
    
    The main task is to judge whether string is an valid Turing equation. 
    Return true or false, respectively, in Turing's interpretation, i.e. the numbers being read backwards.

*/

function isTuringEquation(string) {
  let filteredString = string.replace(/\D+/gm, ",").split(",").map(char => +char.split("").reverse().join(""));
  const finalValue = filteredString[2];
  const sumOfFirstTwo = filteredString.slice(0, 2).reduce((a, b) => { return a + b }, 0);

  return sumOfFirstTwo === finalValue;
}

// Helpers
//////////


// Testing Function
console.log(isTuringEquation("73+42=16"));