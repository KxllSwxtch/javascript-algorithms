/* 

  Created By: Dmitriy Shin.
  Date: June 5, 2018.
  Program Description: 
    Re-order the characters of a string, 
    so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!
    
    The input is restricted to contain no numerals and only words containing the english alphabet letters..

*/

/*

 :::====  :::      :::====  :::  === :::====  :::====  :::===== :::==== ::: :::===== :::===== :::==== 
 :::  === :::      :::  === :::  === :::  === :::  === :::      :::==== :::      === :::      :::  ===
 ======== ===      =======  ======== ======== =======  ======     ===   ===    ===   ======   ===  ===
 ===  === ===      ===      ===  === ===  === ===  === ===        ===   ===  ===     ===      ===  ===
 ===  === ======== ===      ===  === ===  === =======  ========   ===   === ======== ======== ======= 

*/                                                                                                      

function alphabetized(string) {
  // Split the string, removing all spaces at the same time.
  let splittedString = splitString(string)
    .sort((a, b) => {
      return a.toLowerCase() === b.toLowerCase() ? -1 : 1;
    });

  let finalOuts = []; // This array will contain a final answer.
  
  return splittedString;
  
  //  Helpers
  //////////
  function splitString(str) {
    return str.replace(/\s+/gm, "").split("");
  }
}

// Testing a Function
console.log(alphabetized("The Holy Bible")); // BbeehHilloTy