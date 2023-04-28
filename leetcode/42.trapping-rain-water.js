/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * 
 * Companies:
 * amazon | apple | bloomberg | google | twitter | zenefits
 * 
 * Solution:
 * 1. Use 2 pointers left, right
 * 2. Keep leftMax, and rightMax to track max values on each side
 * 3. Compute left/RightMax - currentHeight
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
  let left = 0;
  let right = height.length-1

  let leftMax = height[left];
  let rightMax = height[right];
  let res = 0;

  while(left<right) {
      if(leftMax <= rightMax) {
          left++;
          leftMax = Math.max(leftMax, height[left])
          res += (leftMax-height[left])
      } else {
          right--;
          rightMax = Math.max(rightMax, height[right])
          res += (rightMax - height[right])
      }
  }  
  return res;
};
// @lc code=end

