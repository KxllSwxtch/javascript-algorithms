/**
 * 
 * Special Pythagorean Triplet by Dmitriy Shin
 * 
 */

const specialTriple = n => {
  for (let i = 1; i <= n / 3; i++) {
    for (let j = i + 1; j <= n / 2; j++) {
      let k = n - i - j;

      if (Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2)) return [ i, j, k ].reduce((a, b) => a * b, 1);
    }
  }
};

// Logs
///////
console.log(specialTriple(1000)); // 31875000
