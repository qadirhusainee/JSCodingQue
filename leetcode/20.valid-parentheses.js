/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

const bracketsMap = {
  '{': '}',
  '[': ']',
  '(': ')',
}
const closedBracket = ['}', ']', ')']

isValid = (s) => {
  let stack = [];

  for (bracket of s) {
    if(bracketsMap[bracket]) {
      stack.push(bracket)
    } else if(closedBracket.includes(bracket)) {
      if(bracketsMap[stack.pop()] !== bracket) return false
    }
  }

return stack.length === 0
}
// @lc code=end

