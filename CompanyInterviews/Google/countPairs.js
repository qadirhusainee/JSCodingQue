/**
 * Problem Statement:
 * You are given N persons. M pairs of persons among them meet each other every day.
 * A person X is said to "know" another person Y if either X meets Y every day or there is a person Z that both X and Y "know".
 * Count all pairs of persons that do not "know" each other.
 */

function knows(graph, person1, person2) {
  // Check if person1 and person2 directly know each other
  if (graph[person1][person2] === 1 || graph[person2][person1] === 1) {
    return true;
  }

  // Check if there is a person who knows both person1 and person2
  for (let i = 0; i < graph.length; i++) {
    if (graph[person1][i] === 1 && graph[person2][i] === 1) {
      return true;
    }
  }

  // If there is no path of length at most 2 between person1 and person2, return false
  return false;
}

function countPairs(n, pairs) {
  // Initialize an adjacency matrix to represent the graph
  const graph = new Array(n).fill().map(() => new Array(n).fill(0));

  // Mark the pairs in the graph
  for (let [person1, person2] of pairs) {
    graph[person1][person2] = 1;
    graph[person2][person1] = 1;
  }

  // Count the pairs of persons that do not "know" each other
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (!knows(graph, i, j)) {
        count++;
      }
    }
  }

  return count;
}


const n = 6;
const pairs = [[0, 1], [1, 2], [2, 0], [3, 4], [3, 5]];
const result = countPairs(n, pairs);
console.log(result); // Output: 9
