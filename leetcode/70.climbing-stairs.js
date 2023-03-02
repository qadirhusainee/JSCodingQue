/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo={}) {
  if(memo[n]) return memo[n]
  if(n === 0 || n === 1) return 1;
  memo[n]=  climbStairs(n-2, memo) + climbStairs(n-1, memo)
  return memo[n]
};
// @lc code=end

