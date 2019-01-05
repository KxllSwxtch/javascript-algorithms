/**
 * 
 * Date: December 20, 2018
 * Created By: Dmitriy Shin
 * Program Description:
 *  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
 *  we can see that the 6th prime is 13.
 * 
 *  What is the 10001st prime number?
 *  
 */
const _10001stPrime = _ => {
  let primes = getPrimes(1000000);
  return primes[10000];
};

const getPrimes = n => { // A simple function that generates the array of prime numbers up to n
  let sieve = [];
  let primes = [];

  for (let i = 2; i <= n; i++) {
    if (!sieve[i]) {
      primes.push(i);

      for (let j = i << 1; j <= n; j += i) sieve[j] = true;
    }
  }

  return primes;
};

/**
 * 
 * This method uses the brute force way of generating prime numbers
 * I strongly recommend you to review the code and improve it.
 * 
 */

console.log(_10001stPrime()); // 104743