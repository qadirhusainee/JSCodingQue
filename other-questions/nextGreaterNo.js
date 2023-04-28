/**
 * Problem:
 * Write a function MathChallenge(num) take the num parameter being passed and return the next number greater than num using the same digits.
 * 
 * Example 1:
 * Input: 11121
 * Output: 11211
 * 
 * Example 2:
 * Input: 41352
 * Output: 41523
 */

function nextGreaterNo(num) {
  // Convert the input number to an array of digits
  const digits = num.toString().split('');

  // Find the rightmost digit that is smaller than the digit to its right
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  if (i < 0) {
    // If no such digit is found, the input number is already the largest
    return num;
  }

  // Find the smallest digit to the right of i that is greater than digits[i]
  let j = digits.length - 1;
  while (j > i && digits[j] <= digits[i]) {
    j--;
  }

  // Swap the digits at i and j
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Reverse the digits to the right of i to get the smallest number
  // greater than num using the same digits
  const newDigits = [...digits.slice(0, i + 1), ...digits.slice(i + 1).reverse()];

  // Convert the array of digits back to a number and return it
  return parseInt(newDigits.join(''));
}

console.log(MathChallenge(41352))