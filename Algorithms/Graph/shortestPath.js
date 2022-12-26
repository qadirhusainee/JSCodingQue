/**
 * Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
 * The function should return the length of the shortest path between A and B.
 * Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.
 * 
 */
const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];

const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    const visited = new Set([nodeA]);
    const queue = [[nodeA, 0]];

    while(queue.length > 0) {
      const [currentNode, distance] = queue.shift();
      if (currentNode === nodeB) {
        return distance
      }
      for(let neighbor of graph[currentNode]) {
        console.log(neighbor)
        if(!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, distance + 1])
        }
      }
    }
    
    return -1
  };
  
  const buildGraph = (edges) => {
    const graph = {}
    for( let edge of edges) {
      const [node1, node2] = edge;
      if(!(node1 in graph)) graph[node1] = [];
      if(!(node2 in graph)) graph[node2] = [];
      graph[node1].push(node2)
      graph[node2].push(node1)
    }
    
    return graph;
  }

  console.log(shortestPath(edges, 'w', 'z')); // -> 2