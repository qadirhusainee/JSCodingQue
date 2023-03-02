/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let k = nums.length - k;

function quickSelect(l,r) {
  let p = l;
  let pivot = nums[r]

  for (let i =l; i < r; i++) {
    if (nums[i] < pivot) {
      nums = swap(nums, i, p)
      p++
    }

  }
  nums = swap(nums, p, r);
  if(p > k) {
    return quickSelect(l, p-1)
  } else if (p < k) {
    return quickSelect(p + 1, r)
  } else {
    return nums[k]
  }
}
return quickSelect(0, nums.length -1)
};

function swap(nums, i , j) {
let temp = nums[i];
nums[i] = nums[j]
nums[j] = temp
return nums
}
// @lc code=end

