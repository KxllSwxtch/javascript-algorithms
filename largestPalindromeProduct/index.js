/**
 * 
 * Date: December 19, 2018
 * Name: Dmitriy Shin
 * Program Description
 *  A palindromic number reads the same both ways. 
 *  The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *  Find the largest palindrome made from the product of two 3-digit numbers.
 * 
 */

const largestPalindromeProduct = n => {
  let largestProduct = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let currentProduct = i * j;

      if (isPalindrome(currentProduct)) {
        if (largestProduct < currentProduct) largestProduct = currentProduct;
      }
    }
  }

  return largestProduct;
}; 

const isPalindrome = number => +number.toString().split("").reverse().join("") === number;

console.log(largestPalindromeProduct(999)); // 906609