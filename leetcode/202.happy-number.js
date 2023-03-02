/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

const getSquareSum = (number) => number.toString().split('').reduce((acc, num) => { return acc + Math.pow(num,2)},0)

var isHappy = function(n) {
  const seen = new Set();

  while(!seen.has(n)) {  
    seen.add(n);
    n = getSquareSum(n);
    if(n == 1) return true
  }
  return false
};
// @lc code=end

