/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 * 
 * Solution: 2 Pointer. Start both Ptr from 0. Update ptr based on comparision of total with target value
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let startPtr = 0;
  let endPtr = 0;
  let total = 0;
  let len = Infinity;

  while (startPtr < nums.length) {
    if (total < target && endPtr < nums.length) {
      total = total + nums[endPtr];
      endPtr++;
    } else if (total >= target){
      len = Math.min(len, endPtr-startPtr);
      total = total-nums[startPtr]
      startPtr++;
    } else {
      break;
    }
    
  }

  return len === Infinity ? 0 : len;
};
// @lc code=end

