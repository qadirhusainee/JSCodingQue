const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
  
    for (let num of numbers) {
      const remainder = targetSum - num;
      const remanderResult = howSum(remainder, numbers, memo);
      if (remanderResult !== null) {
        memo[targetSum] = [...remanderResult, num];
        return memo[targetSum];
      }
    }
    memo[targetSum] = null;
    return null;
  };
  
  console.log(howSumTab(7, [2, 3, 4, 1])); // 
  console.log(howSumTab(7, [5, 3, 4, 7])); // 
  console.log(howSumTab(7, [2, 4])); // 
  console.log(howSumTab(7, [2, 3])); // 
  console.log(howSumTab(100, [25,1,2,5])); // 
 

// **Complexity
// m = target sum
// n numbers.length
// **Brute Force
// Time: O(n^m*m)
// space: O(m)

// **Memoized
// Time: O(n*m*m) // extra m from [...remanderResult, num]
// space: O(m*m) // extra m multiplied because of memo object

const howSumTab = (targetSum, numbers ) => {
  const table = Array(targetSum+1).fill(null);
  table[0] = [];

  for(let i=0; i < targetSum; i++) {
      if(table[i] !== null) {
          for(let num of numbers) {
              if (table[i+num] < targetSum) {
                  const combination = [...table[i], num];
                  if(!table[i+num] || combination?.length < table[i+num].length){
                      table[i+num] = combination
                  }
              }
          }
      }
  }
  return table[targetSum];
}

console.log(howSumTab(7, [2, 3, 4, 1])); // 
console.log(howSumTab(7, [5, 3, 4, 7])); // 
console.log(howSumTab(7, [2, 4])); // 
console.log(howSumTab(7, [2, 3])); // 
console.log(howSumTab(100, [25,1,2,5])); // 