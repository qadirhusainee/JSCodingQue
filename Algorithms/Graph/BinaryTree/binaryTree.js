class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a')
const b = new Node('b');
const c = new Node('c')
const d = new Node('d');
const e = new Node(' e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//          a
//         / \
//        b   с
//       / \    \ 
//      d   e    f

const deptFirstValues = (root) => {
    const stack = [root];
    while(stack.length > 0) {
        const current = stack.pop();
        console.log(current.val)
        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)
    }
}

deptFirstValues(a)

const deptFirstValuesRec = (root) => {
    if(root === null) {
        return []
    }
    const leftValues = deptFirstValuesRec(root.left)
    const rightValues = deptFirstValuesRec(root.right)
    return [root.val, ...leftValues, ...rightValues]
}

const breadthFirstValues = (root) => {
    if(root === null) return [];
    const queue = [root];
    const values = [] 
    while(queue.length > 0) {
        const current = queue.shift();
        values.push(current.val)
        console.log(current.val)
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }
    return values
}


const treeIncludes = (root, target) => {
    if(root === null) return false;
    if(root.val === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target)
}

treeIncludes(a, 'e')


const treeSum = (root) => {
    if(root === null) return 0
    return root.val + treeSum(root.left, target) + treeSum(root.right, target)
}

