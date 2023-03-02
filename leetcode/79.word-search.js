/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 * Problem:
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells,
 * where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 * 
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let rowsLength = board.length;
  let colsLength = board[0].length;
  let visited = new Set()
  function dfs(r,c,i) {
      let node = `${r},${c}`;
      if(i === word.length) return true
      if(
          r < 0 || c < 0 ||
          r >= rowsLength || c >= colsLength ||
          visited.has(node) ||
          word[i] !== board[r][c] 
      ){
          return false;
      }
      visited.add(node)
      let result = (
          dfs(r+1, c, i+1) ||
          dfs(r-1, c, i+1) ||
          dfs(r, c+1, i+1) ||
          dfs(r, c-1, i+1)
      )
      visited.delete(node)
      return result
  }

  for (let r = 0; r < rowsLength; r++) {
      for (let c = 0; c < colsLength; c++) {
          if(dfs(r,c,0)) {return true}
      }
  }
  return false;
};
// @lc code=end

