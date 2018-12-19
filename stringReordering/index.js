/*

  Created By: Dmitriy Shin.
  Date: May 25, 2018.
  Program Description: The input will be an array of dictionaries. Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order). 
                       The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty..

*/

function stringReorder(arr) {
  let sorted = arr.sort((a, b) => {
    return Object.keys(a) - Object.keys(b);
  });

  let finalOut = [];

  for(let i in sorted) {
    finalOut.push(Object.values(sorted[i]));
  }

  return finalOut.join(" ");
}

let objArr = [
  { "4": "dog" },
  { "2": "took" },
  { "3": "his" },
  { "-2": "Vatsan" },
  { "5": "for" },
  { "6": "a" },
  { "12": "spin" }
];

// Helpers
//////////

console.log(stringReorder(objArr)); // 'Vatsan took his dog for a spin'