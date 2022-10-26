/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 * Solution: 2 Pointer. Compare left and right hight and change ptr whichever is small
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0;
  let i = 0;
  let j = height.length - 1;;

  while(i < j) {
    const tempArea = Math.min(height[j], height[i])*(j-i);
    maxArea = Math.max(maxArea, tempArea)
    if(height[j] < height[i]) {
      j--
    } else {
      i++
    }

  }
  return maxArea;
    
};
// @lc code=end

