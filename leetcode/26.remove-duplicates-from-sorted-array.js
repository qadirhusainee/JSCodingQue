/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Solution: 2 Pointers.
 *  i -> tracks unique value
 *  j -> Moves to find duplicate values
 */
var removeDuplicates = function(nums) {
  let i=0;
  let j=1;
  while(j < nums.length) {
    if(nums[i] === nums[j]) {
      j++;
    } else {
      nums[++i] = nums[j];
    }
  }
  return i+1;
};
// @lc code=end

