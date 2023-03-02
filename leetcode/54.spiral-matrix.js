/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let size = matrix[0].length *matrix.length 
  let result = []

 while(result.length < size) {
      for(let i = left; i <= right && result.length < size;i++) {
          result.push(matrix[top][i])
      }
      top++

      for(let i = top; i <= bottom && result.length < size;i++) {
          result.push(matrix[i][right])
      }
      right--

      for(let i = right; i >= left && result.length < size;i--) {
          result.push(matrix[bottom][i])
      }
      bottom--

      for(let i = bottom; i >= top && result.length < size;i--) {
          result.push(matrix[i][left])
      }
      left++
 }
 return result
};
// @lc code=end

