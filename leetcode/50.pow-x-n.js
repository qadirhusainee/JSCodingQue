/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const calculatatePow = (num, power) => {
    if (power === 0) return 1;

    // Added below condition to reduce no of iteration
    if (power % 2 === 0) {
      return calculatatePow(num, power / 2) ** 2;
    } else {
      return num * calculatatePow(num, (power - 1) / 2) ** 2;
    }
    // Below also works but for higher power it exceeds stack
    // return num * pow(num, --power)
  };
  let sign = 1;
  if (n < 0) {
    sign = -1;
    n = -n;
  }
  const p = calculatatePow(x, n);
  if (sign === -1) {
    return 1 / p;
  } else {
    return p;
  }
};
// @lc code=end
