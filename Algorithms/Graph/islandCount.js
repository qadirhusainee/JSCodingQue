/**
 * Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land.
 * The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.
 */

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const getIslandCount = (grid) => {
  const visited = new Set();
  let islandCount = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (exploreIsland(r, c, grid, visited) === true) {
        islandCount = islandCount + 1;
      }
      exploreIsland(r, c, grid, visited);
    }
  }
  return islandCount;
};

const exploreIsland = (r, c, grid, visited) => {
  const node = `${r},${c}`;
  const rowInBound = 0 <= r && r < grid.length;
  const colInBound = 0 <= c && c < grid[0].length;
  if (!rowInBound || !colInBound) {
    return false;
  }

  if (grid[r][c] === "W") {
    return false;
  }

  if (visited.has(node)) {
    return false;
  }

  visited.add(node);

  exploreIsland(r, c + 1, grid, visited);
  exploreIsland(r, c - 1, grid, visited);
  exploreIsland(r + 1, c, grid, visited);
  exploreIsland(r - 1, c, grid, visited);

  return true;
};

console.log(getIslandCount(grid));
