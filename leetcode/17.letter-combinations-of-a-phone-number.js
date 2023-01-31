/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */
// Use BackTracking technique to merge from tree


// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
const digitLetterMap = {
  2: ['a', 'b' ,'c'],
  3: ['d', 'e' ,'f'],
  4: ['g', 'h' ,'i'],
  5: ['j', 'k' ,'l'],
  6: ['m', 'n' ,'o'],
  7: ['p', 'q' ,'r', 's'],
  8: ['t', 'u' ,'v'],
  9: ['w', 'x' ,'y', 'z'],
}


var letterCombinations = function(digits) {
  let combination = []
  if(digits.length === 0) return combination;
  

  const backTrack = (index, stack) => {
    if(index === digits.length) {
      combination.push(stack.join(""))
      return
    }
    for (let char of digitLetterMap[digits[index]]){
        stack.push(char)
        backTrack(index+1, stack);
        stack.pop()
    }
  }
  backTrack(0, [])
  return combination
};
// @lc code=end

