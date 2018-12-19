const arr = [1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5, 6, 7, 9, 11];
const length = arr.length;
let freq = [];
let count = 0;

for(let i = 0; i < length; i++) {
  freq[i] = -1;
}

for(let i = 0; i < length; i++) {
  count = 1;
  
  for(let j = i + 1; j < length; j++) {
    if(arr[i] == arr[j]) {
      count++;
      freq[j] = 0;
    }
  }

  if(freq[i] != 0) {
    freq[i] = count;
  }
}

for(let i = 0; i < length; i++) {
  if(freq[i] != 0) {
    console.log(`${arr[i]} occurs: ${freq[i]}`);
  }
}