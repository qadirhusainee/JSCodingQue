
/**
 * Iterative approach
 * @param {Graph} graph 
 * @param {node} source 
 */

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}
const depthFirstPrint = (graph, source) => {
    const stack = [source];

    while(stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        for(let neighbor of graph[current]) {
            stach.push(neighbor)
        }
    }
};

/**
 * Recursive Appraoch
 */

const depthFirstPrintRec = (graph, source) => {
    console.log(source);
    for (let neighbor of graph[source]) {
        depthFirstPrintRec(graph, neighbor)
    }
}