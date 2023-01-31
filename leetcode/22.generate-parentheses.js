/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result= [];

  const backTrack = (open, close, stack) => {
      if(open > n || close > open) return
      // base case
      if(open === n && close === n) {
          result.push(stack.join(""));
      }

      // open Bracket
      stack.push('(')
      backTrack(open+1, close, stack)
      stack.pop()

      // closed Bracket
      stack.push(')')
      backTrack(open, close + 1, stack)
      stack.pop()
  }
  backTrack(0,0, [])
  return result

};




// @lc code=end

