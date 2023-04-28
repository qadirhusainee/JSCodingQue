/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 * Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
 * '.' Matches any single character.​​​​
 * '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 *
 * Companies
 * airbnb | facebook | google | twitter | uber
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let memo = new Set();
  let sLen = s.length;
  let pLen = p.length;
  function dfs(i, j) {
    let node = `${i},${j}`;
    if (memo.has(node)) {
      return memo[node];
    }

    if (i >= sLen && j >= pLen) return true;
    if (j >= pLen) return false;

    let match = i < sLen && (s[i] === p[j] || p[j] === ".");
    if (p[j + 1] === "*") {
      memo[node] =
        dfs(i, j + 2) || // do not use *
        (match && dfs(i + 1, j)); // use *
      return memo[node];
    }

    if (match) {
      memo[node] = dfs(i + 1, j + 1);
      return memo[node];
    }
    memo[node] = false;
    return memo[node];
  }

  return dfs(0, 0);
};
// @lc code=end
