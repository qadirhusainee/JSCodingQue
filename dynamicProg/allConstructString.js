// WAP allCondtruct(target, workdBank) that accepts a target string and an array of strings
// Should return a 2D array containing all of the ways the `target` can be constructed by concatenating
// elements of the `workdBank` array. Each element of the 2d array should represebt one combination the constructs the `target`

// Reuse elements of `wordBank` as many times as needed

// `countConstruct(target, wordBank)`
// Funciton should return the number of ways that the `target` can be contructed by contactenaitve elements of the `wordBank` array

// You may reuse elements of `workBas` as many times as needed

const allConstuct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") {
    return [[]];
  }

  let allCombinations = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length);
      const suffixWays = allConstuct(suffix, wordBank, memo);

      const targetWays = suffixWays.map((way) => [word, ...way]);
      allCombinations.push(...targetWays);
    }
  }
  memo[target] = allCombinations;
  return allCombinations;
};

console.log(
  allConstuct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(allConstuct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  allConstuct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "baor"])
);

// ** Complexity
// m = target.length
// n = wordbank.length

// **Memoize Force
// Time = O(n^m*m) // This will be exponential after memoization
// Space = O(m*m) // suffix (*m)



const allConstuctTab = (target, wordBank) => {
  const table = Array(target.length + 1).fill([]);
  table[0] = [[]];

  for(let i=0; i<= target.length; i++) {
      if(target[i] !== null) {
          for(let word of wordBank) {
              if (target.slice(i, i+word.length) === word) {
                  console.log(table)
                  
                  table[i+word.length] = [...table[i+word.length], ...table[i].map((existing) => [...existing, word])]


              }
          }
      }
  }
  console.log(table)
  return table[target.length]
}

// Time = O(n^m*m) // This will be exponential after memoization
// Space = O(n^m) // suffix (*m)

console.log(
  allConstuctTab("abcdef", ["ab","abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(allConstuctTab("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  allConstuctTab("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "baor"])
);