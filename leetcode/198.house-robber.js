/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that
 * adjacent houses have security systems connected and it will automatically contact the police if
 * two adjacent houses were broken into on the same night.
 * 
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let robHouse1 = 0, robHouse2 = 0;

  for (n of nums) {
      let temp = Math.max(robHouse1 + n, robHouse2)
      robHouse1 = robHouse2;
      robHouse2 = temp
  }

  return robHouse2
};
// @lc code=end

