/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

/**
 * Problem:
 * Given a string s and a dictionary of strings wordDict,
 * return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 * 
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 * 
 * Example 1:
 * Input: s = "leetcode", wordDict = ["leet","code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet code".
 */

/**
 * Solution:
 * 1. Take a dp Array of string length and initialize last with true
 * 2. Check in reverse order of string matches word from wordDict
 * 3. Update position with true if substring ahead is true
 * 4. Return dp[0]
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let strLen = s.length
  let dp = Array(strLen).fill(false)
   dp[strLen] = true;

   for(let i = strLen; i >= 0; i--) {
       for(word of wordDict) {
           if (i + word.length <= strLen) {
            let sliceStr =  s.slice(i, i + word.length)
              if(word === sliceStr){
                dp[i] = dp[i + word.length]
              }
               
           }
           if (dp[i]) {
               break
           }
       }
   }
   return dp[0]
};
// @lc code=end

let s = "leetcode", wordDict = ["leet","code"]
let result = wordBreak(s, wordDict)
