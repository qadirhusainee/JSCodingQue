/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let needleLength = needle.length;

  for(let i = 0; i < haystack.length; i++) {
      if(haystack[i] === needle[0]) {
          let subStr = haystack.slice(i, i + needleLength);
          if (subStr === needle) {
            return i
          }
      }
  }
  return -1
};
// @lc code=end

