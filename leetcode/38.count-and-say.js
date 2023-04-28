/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
/**!!! Not Working for some test cases */
var countAndSay = function(n) {
  if (n === 1) return "1";
  if (n === 2) return "11"
  let result = "11"
  for(let i = 2; i < n;i++) {
      result = calcCountAndSay(result)
  }
  return result
};

function calcCountAndSay(no) {
let result= '';
let previousDigit = parseInt(no[0]);
let count = 0;

for(let i=0; i <= no.length; i++) {
    let currentDigit = parseInt(no[i]);
    if(currentDigit !== previousDigit) {
        
        result = result+count+previousDigit
        console.log(result, currentDigit,i)
        previousDigit = currentDigit
        count = 0;
    }
    count++

}
return result
}
// @lc code=end

