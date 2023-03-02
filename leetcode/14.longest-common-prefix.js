/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res = '';

  for (let i = 0 ; i < strs[0].length; i++) {
      for (let string of strs) {
          if(string[i] !== strs[0][i] || string.length === i) {
              return res
          };
      }
      res += strs[0][i]
  }
  return res
};
// @lc code=end

