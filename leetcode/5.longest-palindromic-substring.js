/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return s;
  let longestPalindrome = "";
  for (let i = 0; i < s.length; i++) {
    const evenPalidrome = getPalindrome(i - 1, i + 1, s);
    const oddPalindrome = getPalindrome(i - 1, i, s);
    const currLongestPalindrome =
      evenPalidrome.length > oddPalindrome.length
        ? evenPalidrome
        : oddPalindrome;
    longestPalindrome =
      longestPalindrome.length > currLongestPalindrome.length
        ? longestPalindrome
        : currLongestPalindrome;
  }
  return longestPalindrome;
};

const getPalindrome = (prev, next, string) => {
  let validPalidome = string[prev + 1];

  while (prev >= 0 && next < string.length) {
    if (string[prev] === string[next]) {
      validPalidome = string.slice(prev, next + 1);
    }
    if (string[prev] !== string[next]) {
      break;
    }
    prev--;
    next++;
  }
  return validPalidome;
};
// @lc code=end
