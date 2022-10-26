/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 
 * Solution: Sliding window, map with char and index. Replace startPtr with index of duplicate char
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let start = 0;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      start = Math.max(start, map[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    map[char] = i + 1;
  }
  return longest;
};
// @lc code=end
