/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = bfs(nums, target, false)
  let right = bfs(nums, target, true)
  return [left, right]
};

// checkLeftPtr = true 
function bfs(nums, target, checkEndPos) {
  let left = 0;
  let right = nums.length - 1;
  let i = -1

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
          i = mid
          if(checkEndPos) {
              left = mid+1
          } else {
              right = mid - 1;
          }
      } else if (target < nums[mid]) {
          right = mid -1
      } else {
          left = mid + 1;
      }
  }
  return i
}

// @lc code=end

