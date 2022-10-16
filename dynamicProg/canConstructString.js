const canConstructString = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if (target === "") return true;
  
    for (let word of wordBank) {
      if (target.indexOf(word) === 0) {
        const suffix = target.slice(word.length);
        if (canConstructString(suffix, wordBank) === true) {
            memo[target] = true
            return true;
        }
      }
    }
    memo[target] = false;
    return false;
  };
console.log(canConstructString('abcdef', ["ab", 'abc', 'cd', 'def', 'abcd'])) // true
console.log(canConstructString('skateboard', ["bo", 'rd', 'ate','t', 'ska', 'sk','baor'])) // false


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
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for(let i=0; i<= target.length; i++) {
    if(table[i]) {
      for(let word of wordBank) {
        if (target.slice(i, i+word.length) === word) {
          table[i + word.length] = true
        }
      }
    }

  }
  return table[target.length]
}

// Time = O(n*m*m) // splice (*m)
// Space = O(m) //

console.log(canConstructStringTab('abcdef', ["ab", 'abc', 'cd', 'def', 'abcd'])) // true
console.log(canConstructStringTab('skateboard', ["bo", 'rd', 'ate','t', 'ska', 'sk','baor'])) // false