// `countConstruct(target, wordBank)` 
// Funciton should return the number of ways that the `target` can be contructed by contactenaitve elements of the `wordBank` array

// You may reuse elements of `workBas` as many times as needed

const countConstruct = (target, wordBank, memo = {}) => {
    
    if (target in memo) return memo[target]
    if (target === '') return 1;
    
    let totalCount = 0;

    for (let word of wordBank) {
        if(target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            const numWays =  countConstruct(suffix, wordBank, memo);
            totalCount += numWays;
        }
    }
    memo[target] = totalCount
    return totalCount;
}


console.log(countConstruct('abcdef', ["ab", 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstruct('purple', ["purp", 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstruct('skateboard', ["bo", 'rd', 'ate','t', 'ska', 'sk','baor'])) // 0

// ** Complexity
// m = target.length
// n = wordbank.length

// **Brute Force
// Time = O(n^m*m) // splice (*m)
// Space = O(m*m) // suffix (*m)

// ** Memoize
// Time = O(n*m*m) // splice (*m)
// Space = O(m*m) // suffix (*m)



const canConstructStringTab = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;
  
    for(let i=0; i<= target.length; i++) {

        for(let word of wordBank) {
          if (target.slice(i, i+word.length) === word) {
            table[i + word.length] += table[i]
          }
        }

  
    }
    return table[target.length]
  }

// Time = O(n*m*m) // splice (*m)
// Space = O(m) //
  
  console.log(canConstructStringTab('abcdef', ["ab", 'abc', 'cd', 'def', 'abcd'])) // 1
  console.log(canConstructStringTab('purple', ["purp", 'p', 'ur', 'le', 'purpl'])) // 2
  console.log(canConstructStringTab('skateboard', ["bo", 'rd', 'ate','t', 'ska', 'sk','baor'])) // 0
