/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * Solution:
 * Create a hashmap which stores value and index. Compare the different of value and check in hashMap
 * 
 * 
 * hashMap example for inputs Input: nums = [2,7,11,15], target = 9
 * {
 *  '2': 0,
 *  '7': 1,
 *  '11': 2,
 *  '15': 3
 * }
 */

var twoSum = function(nums, target) {
    let hashMap = {};
    for(let [index, num] of nums.entries()) {

        if(hashMap[target-num] !== undefined) {
            return [hashMap[target-num] ,index]
        }
        if(!hashMap[num]) {
            hashMap[num] = index;
        }
    }
};
// @lc code=end
