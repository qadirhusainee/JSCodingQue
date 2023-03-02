/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  let carry;
  while (b != 0) {
    carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
};
// @lc code=end
