/**
 * Statistics server: Graph for various RPCs
Running average latency graph

Clients will send latency numbers one at time, you need to return an average at the point.
M: Window to consider to return the average
K: Remove top and bottom K outlier values and the return the average of remaining in the M window.

e.g: 
M=5, K=1
Input: 4 6 8 6 2 5 8 9
Output: -1 -1 -1 -1 5.3 5.67
 */

function initialise (m,k) {
  let window = [];

  return function calcAvg(input) {
    console.log(input)
    window.push(input)
    if(window.length >=m) {
      window.pop();
    }
    if (window.length < m) return -1;

    let sortedWindow = window.sort((a,b) => b - a);
    if (sortedWindow.length <= k*2) return -1
    for(let i = 0; i < k;i++) {
      sortedWindow.pop();
      sortedWindow.unshift();
    }
    let average = (sortedWindow.reduce((sum, val) => sum+=val, 0))/2;
    return average

  }
}
let calcAvg = initialise(5,1)

console.log(calcAvg)