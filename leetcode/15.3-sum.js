/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Solution: Iterate outer loop and in inner loop with 2 pointers
 * Time Complexity : O(n*n)
 */
var threeSum = function(nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i - 1] === nums[i]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    let target = nums[i] * -1;
    while (j < k) {
      let leftValue = nums[j];
      let rightValue = nums[k];


      if (leftValue + rightValue > target) {
        k--;
      } else if (leftValue + rightValue < target) {
        j++
      } else {
        result.push([target * -1, leftValue, rightValue]);
        while (j < k && nums[k] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      }
    }
  }
  return result;
};
// @lc code=end

