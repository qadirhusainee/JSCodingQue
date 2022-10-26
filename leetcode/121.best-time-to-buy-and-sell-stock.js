/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 *
 * Solution: 2 pointer method to track smallest and greatest value of stocks
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let smallest = 0;

  for (let greatest = 1; greatest < prices.length; greatest++) {
    const currentProfit = prices[greatest] - prices[smallest];
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    } else if (prices[smallest] > prices[greatest]) {
      smallest = greatest;
    }
  }
  return maxProfit;
};
// @lc code=end
