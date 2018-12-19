/*

  Created By: Dmitriy Shin.
  Date: June 3, 2018.
  Program Description: 
    A wildlife study involving ducks is taking place in North America. 
    Researchers are visiting some wetlands in a certain area taking a survey of what they see. 
    The researchers will submit reports that need to be processed by your function.
    
    Input: 
      The input for your function will be an array with a list of common duck names along with the counts made by the researchers. 
      The names and counts are separated by spaces in one array element. 
      The number of spaces between the name and the count could vary; but, there will always be at least one. 
      A name may be repeated because a report may be a combination of surveys from different locations.

    An example of an input array would be:
      ["Redhead 3", "Gadwall 1", "Smew 4", "Greater Scaup 10", "Redhead 3", "Gadwall 9", "Greater Scaup 15", "Common Eider 6"].

    Processing:
      The function should change the names of the ducks to a six-letter code according to given rules. 
      The six-letter code should be in upper case. The counts should be summed for a species if it is repeated.
  
    Output:
      The final data to be returned from the function should be an array sorted by the species codes and the total counts as integers. 
      The codes and the counts should be individual elements.
    
    An example of an array to be returned (based on the example input array above) would be:
      ["COMEID", 6, "GADWAL", 10, "GRESCA", 25, "REDHEA", 6, "SMEW", 4]

    The codes are strings in upper case and the totaled counts are integers.
    
    Special Note: 
      If someone has "Labrador Duck" in their list, the whole list should be thrown out as this species has been determined to be extinct. 
      The person who submitted the list is obviously unreliable. Their lists will not be included in the final data. 
      In such cases, return an array with a single string element in it: "Disqualified data"

    Rules for converting a common name to a six-letter code:
      1. Hyphens should be considered spaces.
      2. If a name has only one word, use the first six letters of the name. If that name has less than six letters, use what is there.
      3. If a name has two words, take the first three letters of each word.
      4. If a name has three words, take the first two letters of each word.
      5. If a name has four words, take the first letters from the first two words, and the first two letters from the last two words.

*/

/*

  8888b.     db    888888    db        .dP"Y8  dP""b8 88 888888 88b 88  dP""b8 888888 
   8I  Yb   dPYb     88     dPYb       `Ybo." dP   `" 88 88__   88Yb88 dP   `" 88__   
   8I  dY  dP__Yb    88    dP__Yb      o.`Y8b Yb      88 88""   88 Y88 Yb      88""   
  8888Y"  dP""""Yb   88   dP""""Yb     8bodP'  YboodP 88 888888 88  Y8  YboodP 888888 

*/

function createReport(input) {
  // Handle An Error ( Labrador Duck )
  if (input.includes("Labrador Duck")) {
    return ["Disqualified Data"];
  } else {
    let DucksObject = findDucksDuplicates(input); // Object with the Total Ducks Count.
    let DucksNames = getDucksNames(DucksObject); // Normalized Array with All Ducks Names.
    let encodedNames = encodeNames(DucksNames); // Array with Encoded Ducks' Names.
    
    // Replacing The Normal Names with Encoded Names.
    let DucksCounts = Object.keys(DucksObject).map(objKey => {
      return DucksObject[objKey];
    });
    let encodedObject = {}; // Object with encodedNames and DucksCount.

    for(let i = 0; i < encodedNames.length; i++) {
      encodedObject[encodedNames[i]] = DucksCounts[i];
    }

    let test = Object.keys(encodedObject).map(objKey => {
      let newArr = [objKey];
      newArr.push(encodedObject[objKey]);

      return newArr;
    }); // Array that stores encodedObject comma separated values. 

    for(let i = 0; i < test.length; i++) {
      if(test[i] instanceof Array) {
        test[i] = test[i].join(", ");
      }
    }

    let sortedArray = test.sort((a, b) => a > b ? 1 : -1); // Array sorted by ducks names.
    let modifiedSortedArr = sortedArray.map(string => {
      return [string.replace(/\d+/gm, "").replace(/\W+/gm, ""), +string.match(/[0-9]+/gm)];
    });
    let newArr = [];

    for(let i = 0; i < modifiedSortedArr.length; i++) {
      newArr = newArr.concat(modifiedSortedArr[i]);
    }

    return newArr;
  }
}

// Helpers
//////////
function encodeNames(namesArray) {
  let encodedNames = [];
  for (let index = 0; index < namesArray.length; index++) {
    const length = namesArray[index].length; // Get Each Name's Length.
    let duckName = namesArray[index]; // Each Duck's Name.

    if (length < 6) {
      encodedNames.push(duckName.toUpperCase()); // If Name's length is less than 6.
    }

    if (length > 6) {
      let splittedName = duckName.split(" ");
      let splittedNameLength = splittedName.length;
      let encodedName = "";

      if (splittedNameLength === 1) {
        encodedName = splittedName[0].slice(0, 6).toUpperCase();
        encodedNames.push(encodedName);
      } else if (splittedNameLength === 2) {
        encodedName = splittedName.map(name => {
          return name.slice(0, 3).toUpperCase();
        }).join("");
        encodedNames.push(encodedName);
      } else if (splittedNameLength === 3) {
        encodedName = splittedName.map(name => {
          return name.slice(0, 2).toUpperCase();
        }).join("");
        encodedNames.push(encodedName);
      } else if (splittedNameLength === 4) {
        let twoWords = [splittedName.slice(0, 2), splittedName.slice(2, 4)];

        encodedName = twoWords.map(wordArr => {
          return wordArr.map(word => {
            return word.slice(0, 2).toUpperCase();
          }).join("");
        }).join("");
        encodedNames.push(encodedName);
      }
    }
  }

  return encodedNames;
}

function getDucksNames(ducksObject) {
  let DucksNames = ObjectToArray(ducksObject).map(eachName => {
    eachName.pop();

    return eachName.join("");
  });

  return DucksNames;
}

function ObjectToArray(object) {
  return Object
    .keys(object)
    .map(objKey => {
      return [...objKey];
    });
}

function findDucksDuplicates(input) {
  // Removing Extra Space
  let filteredArr = [];
  filteredArr = input.map(duck => {
    return removeExtraSpace(duck);
  });

  // Create an Array of DucksObjects
  let DucksObjectsArr = filteredArr.map((Duck, index, self) => {
    let object = {};
    object[Duck.replace(/\d+/gm, "")] = +Duck.match(/\d+/gm)[0];

    return object;
  });

  // Count Duplicates Within The DucksObjectsArr
  let counter = {};
  DucksObjectsArr.map((DuckObject, index, self) => {
    let key = Object.keys(DuckObject);
    counter[key] = +(counter[key] || 0) + +Object.values(DuckObject);
  });

  return counter;
}

function stringToNum(char) {
  return +char;
}

function splitString(string) {
  return string.split(" ");
}

function removeExtraSpace(string) {
  return string.replace("  ", " ");
}

// Testing Function
const testArr = ["Redhead 3", "Gadwall  1", "Smew 4", "Greater Scaup 10", "Redhead 3", "Gadwall 9", "Greater Scaup  15", "Common Eider 6"];

console.log(createReport(testArr)); // ["COMEID", 6, "GADWAL", 10, "GRESCA", 25, "REDHEA", 6, "SMEW", 4]
