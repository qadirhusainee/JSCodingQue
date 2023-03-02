/*
 * @lc app=leetcode id=417 lang=javascript
 *
 * [417] Pacific Atlantic Water Flow
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

/**
 * Solution Approach;
 * 1. Create 2 set for pacific ocean and atlantic ocean to have cell which can reach this oceans
 * 2. Start DFS from rows/ cols (boundary) touching ocean and check where can water flow
 * 3. Iterate over the complete grid and check for the nodes which are there in both sets of ocean. 
 * 
 */
var pacificAtlantic = function(heights) {
  let atl = new Set();
  let pac = new Set();
  let rowsLength = heights.length
  let colsLength = heights[0].length

  function dfs (r, c, visited, prevHeight) {
  let node = `${r},${c}`;
  if(r < 0 || c < 0 ||
      visited.has(node) ||
      r >= rowsLength ||
      c >= colsLength ||
      heights[r][c] < prevHeight ) {
          return;
      }
      visited.add(node);
      dfs(r+1, c, visited, heights[r][c])
      dfs(r-1, c, visited, heights[r][c])
      dfs(r, c+1, visited, heights[r][c])
      dfs(r, c-1, visited, heights[r][c])

  }
  
  for (let r = 0; r < rowsLength; r++) {
      dfs(r, 0, pac, heights[r][0])
      dfs(r, colsLength -1, atl, heights[r][colsLength - 1])
  }

  for (let c = 0; c < colsLength; c++) {
      dfs(0, c, pac, heights[0][c])
      dfs(rowsLength - 1, c, atl, heights[rowsLength -1 ][c])   
  }
  let result = []
  for (let r = 0; r < rowsLength; r++) {
      for (let c = 0; c < colsLength; c++) {
          let node = `${r},${c}`
          if(atl.has(node) && pac.has(node)) {
              result.push([r,c])
          }
      }
  }
  return result;

};
// @lc code=end

