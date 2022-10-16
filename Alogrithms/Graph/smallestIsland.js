/**
 * Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land.
 * The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.
 */

 const grid = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
  ];
  
  const smallestIsland = (grid) => {
    const visited = new Set();

    let minIsland = Infinity;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
            const newIsland = exploreIsland(r, c, grid, visited)
            if (newIsland !== 0 && newIsland < minIsland) {
                minIsland = newIsland
            }  
      }
    }
    return minIsland;
  };
  
  const exploreIsland = (r, c, grid, visited) => {
    const node = `${r},${c}`;
    const rowInBound = 0 <= r && r < grid.length;
    const colInBound = 0 <= c && c < grid[0].length;
    if (!rowInBound || !colInBound) {
      return 0;
    }
  
    if (grid[r][c] === "W") {
      return 0;
    }
  
    if (visited.has(node)) {
      return 0;
    }
  
    visited.add(node);
   let count = 1;

    count += exploreIsland(r, c + 1, grid, visited);
    count += exploreIsland(r, c - 1, grid, visited);
    count += exploreIsland(r + 1, c, grid, visited);
    count += exploreIsland(r - 1, c, grid, visited);
  
    return count;
  };
  
  console.log(smallestIsland(grid));
  