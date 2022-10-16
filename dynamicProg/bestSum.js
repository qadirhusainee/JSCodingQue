// Find a shortest way to sum

const bestSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
  
    let shortestCombination = null;
  
    for (let num of numbers) {
      const remainder = targetSum - num;
      const remanderCombination = bestSum(remainder, numbers, memo);
      if (remanderCombination !== null) {
        const combination = [...remanderCombination, num];
        if (
          shortestCombination === null ||
          combination.length < shortestCombination.length
        ) {
          shortestCombination = combination;
        }
      }
    }
    memo[targetSum] = shortestCombination
    return shortestCombination;
  };
  
  console.log(bestSum(7, [5, 3, 4, 7])); // [7]
  console.log(bestSum(8, [2, 3, 5])); // [3,5]
  console.log(bestSum(8, [1, 4, 5])); // [4,4]
  console.log(bestSum(100, [1,2,5,25])); // [25,25,25,25]
  


// m = target sum
// n numbers.length
// Complexity
// Brute Force
// Time: O(n^m*m)
// space: O(m*m) // extra m for shortestCombination array

// Memoized
// Time: O(n*m*m) // extra m from [...remanderCombination, num]
// space: O(m*m) // extra m multiplied because of memo object
