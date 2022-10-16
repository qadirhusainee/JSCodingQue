const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum];
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [2, 3])); // true

// Complexity
// Brute Force
// Time: O(n^m)
// space: O(m)
// Memoized


// Tabulation approach

const canSumTab = (targetSum, numbers ) => {
  const table = Array(targetSum+1).fill(false);
  table[0] = true
  for(let i = 0; i < targetSum; i++) {
      if(table[i] === true) {
          for(let num of numbers) {
              if (i+num < table.length) {
                  table[i+num] = true;
              }
          }
      }
  }
  return table[targetSum]
}

console.log(canSumTab(7, [2, 3])); // true
console.log(canSumTab(7, [5, 3, 4, 7])); // true
console.log(canSumTab(7, [2, 4])); // false
console.log(canSumTab(7, [2, 3])); // true
console.log(canSumTab(7, [2, 3])); // true
// Complexity
// Time: O(nm)
// space: O(m)
