/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let visited = new Set();
  let islandCount = 0;

  for(let r = 0; r < grid.length; r++) {
      for (let c=0; c < grid[0].length; c++) {
          if(grid[r][c] == "1") {
              islandCount = islandCount + exploreIsland(r,c, grid, visited);
          }
          
      }
  }
  return islandCount
  
};

const exploreIsland = (r,c, grid, visited) => {
let node = `${r},${c}`


const rowInBound = r >= 0 && r < grid.length;
const colInBound = c >= 0 && c < grid[0].length;

  if(!rowInBound || !colInBound) {
      return 0
  }
  if(grid[r][c] == "0") {
      return 0;
  }

  if(visited.has(node)) {
      return 0
  }

  visited.add(node);
  exploreIsland(r, c+1, grid, visited)
  exploreIsland(r+1, c, grid, visited)
  exploreIsland(r -1 , c, grid, visited)
  exploreIsland(r, c -1 , grid, visited) 

  return 1;
}
Co
// @lc code=end

