/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

/**
 * You are given an integer array coins representing coins of different denominations and
 * an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let dp = Array(amount+1).fill(Infinity)
  dp[0] = 0;
  
  for (let currAmount = 1; currAmount<= amount; currAmount++) {
    for (let coin of coins) {
      if(currAmount - coin >= 0) {
        dp[currAmount] = Math.min(dp[currAmount], 1+ dp[currAmount-coin])
      }
    }
  }
  
  return dp[amount] > amount ? -1 : dp[amount]
};
// @lc code=end

