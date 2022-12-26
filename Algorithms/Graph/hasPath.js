/**
 * Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst).
 * The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.
 */



/**
 * Depth First recusive appraoch
 * @returns 
 */
const hasPathDF = (graph, src, dst) => {
    if(src === dst) return true;
    for(let neighbor of graph[src]) {
        if(hasPath(graph, neighbor, dst) === true) {
            return true;
        }
    }
    return false;
}


/**
 * Breadth First recusive appraoch
 * @returns 
 */
 const hasPathBF = (graph, src, dst) => {
    const queue= [src] 
    if(src === dst) return true;
    while(queue.length > 0) {
        const current  = queue.shift();
        if (current === dst) {
            return true;
        }
        for(let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
    return false;

}