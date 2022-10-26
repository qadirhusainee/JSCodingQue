/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 * 
 * // Solution: Make two passes, first in-order, second in-reverse, to compute products
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let product = [];
  let postFix = 1;
  for(let i=0; i<nums.length; i++) {
    product[i] = (nums[i-1] ?? 1)*(product[i-1] ?? 1)
  }
  for(let i=nums.length-1; i >= 0; i--) {
    postFix = postFix*(nums[i+1] ?? 1)
    product[i] = (product[i])*(postFix)
  }
    return product
};
// @lc code=end

