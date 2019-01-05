/**
 *
 * Date: January 3, 2019
 * Developer: Dmitriy Shin
 * Program Description:
 *  Given two input strings, count the number of each alphabetic character occurences and return the sorted output string
 *
 */

const mix = (stringOne, stringTwo) => {
  // Filter and transform two input strings into objects
  stringOne = makeStringObject(filterString(stringOne));
  stringTwo = makeStringObject(filterString(stringTwo));

  // GET the outputs by calling the helper function below (makeOutputArrays)
  let [output, outputExtra] = makeOutputArrays(stringOne, stringTwo);

  output = output.concat(outputExtra);

  // Sort two output arrays
  output = output.sort((a, b) => {
    a = a.split(":");
    b = b.split(":");

    // Prefixes
    let prefixA = a[0];
    let prefixB = b[0];

    // Strings
    let stringA = a[1];
    let stringB = b[1];

    if (stringA.length === stringB.length && prefixA === prefixB)
      // All parameters are equal
      return stringA[0] > stringB[0] ? 1 : -1;
    else if (stringA.length === stringB.length && prefixA !== prefixB)
      // The counts are equal
      return prefixA > prefixB ? 1 : -1;
    // Strings are different
    else return stringA.length > stringB.length ? -1 : 1;
  });

  // console.log(output);

  if (output.length === 0 && outputExtra.length === 0) return "";
  else return output.join("/");
};

// Helpers
//////////
const makeOutputArrays = (stringOne, stringTwo) => {
  // Works out the main part of the program
  // that finds two equivalent characters and pushes the result, related to the comparison, output
  let output = [];
  let outputForEquals = [];

  console.log(stringOne, stringTwo);

  for (let charOne in stringOne) {
    for (let charTwo in stringTwo) {
      if (charOne === charTwo) {
        if (stringOne[charOne] > stringTwo[charTwo])
          output.push(`1:${charOne.repeat(stringOne[charOne])}`);
        else if (stringOne[charOne] < stringTwo[charTwo])
          output.push(`2:${charTwo.repeat(stringTwo[charTwo])}`);
        else if (stringOne[charOne] === stringTwo[charTwo]) {
          if (stringTwo[charTwo] > 1)
            output.push(`=:${charTwo.repeat(stringTwo[charTwo])}`);
        }
      }
    }
  }

  return [output, outputForEquals];
};

const filterString = string => {
  // Filters the string by removing the spaces or uppercased characters
  let output = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[a-z]+/gm)) output.push(string[i]);
  }

  return output;
};

const makeStringObject = charArray => {
  charArray = charArray.sort((a, b) => (a > b ? 1 : -1)); // Sort the input array of characters

  // Transforms the array of characters into an object
  let stringObject = {};

  for (let i = 0; i < charArray.length; i++) {
    if (stringObject[charArray[i]]) stringObject[charArray[i]]++;
    else stringObject[charArray[i]] = 1;
  }

  return stringObject;
};

// Logs
//////////
console.log(mix(" In many languages", " there's a pair of functions"));
// Expected Output -> "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"

// console.log(mix("Lords of the Fallen", "gamekult"));
// Expected Output -> "1:ee/1:ll/1:oo"

// console.log(mix("A generation must confront the looming ", "codewarrs"));
// Expected Output -> "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr"
