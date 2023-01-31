/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 3 || n == 1) return true;
  if (n < 3) return false;

  return isPowerOfThree(n / 3);
};
// @lc code=end
