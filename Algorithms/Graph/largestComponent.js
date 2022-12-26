/**
 * Write a function, largestComponent, that takes in the adjacency list of an undirected graph.
 * The function should return the size of the largest connected component in the graph.
 */
const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  };
  
  /**
   * Dept First approach
   */
  const getLargestComponent = (graph) => {
    const visited = new Set();
    let largest = 0;
      for(let node in graph) {
        const size = exploreSize(graph, node, visited)
        if(size > largest) {
            largest = size;
        }
      }
      return largest;
  }

  const exploreSize = (graph, node, visited) => {
    if(visited.has(node)) {
        return 0;
    }
    visited.add(node)
    let size = 1;
    for (let neighbor of graph[node]) {
        size = size + exploreSize(graph, neighbor, visited)
    }
    return size
  };

/**
 * 
 * Time = O(edge)
 * Space = O(n)
 */

  console.log(getLargestComponent(graph))