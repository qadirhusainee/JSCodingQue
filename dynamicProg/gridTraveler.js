// To find no of ways to go to end position of grgid if we can only go down and right


const gridTraveler = (m, n, memo = {}) => {
    const key = `${m},${n}`;
    console.log(key)
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
  
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
  };
  
  console.log(gridTraveler(1,1)) // 1
  console.log(gridTraveler(2,3)) // 3
  console.log(gridTraveler(3,2)) // 3
  console.log(gridTraveler(3,3)) // 6
  console.log(gridTraveler(18,18)) // 2333606221

// ** Complexity
// Brute Force
// Time - O(2^(m+n))
// Space - O(m+n)

// Memoized
// Time - O(m*n)
// Space - O(m+m)


// Tabulation approach

const gridTravelerTab = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += current;
      if (i + 1 <= m) table[i + 1][j] += current;
    }
  }

  return table[m][n];
};

// ** Complexity
// Time - O(m*n)
// Space - O(m*n)