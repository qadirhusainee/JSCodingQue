/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 * Solution Approach
 *
 * 1. Use Binary search
 * 2. Find out sorted portion
 *    2.1 If Left Ptr <= Middle Ptr then Left Portion of array is sorted
 *        a. Find if Target lies in sorted portion. If Yes update pointer to left portion else to right
 *
 *    2.2 Else Right portion array is sorted
 *        a. Find if Target lies in sorted portion. If Yes update pointer to right portion else to left
 *
 */

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[left] <= nums[mid]) {
      // Left Part is sorted

      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target <= nums[right] && target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
// @lc code=end
