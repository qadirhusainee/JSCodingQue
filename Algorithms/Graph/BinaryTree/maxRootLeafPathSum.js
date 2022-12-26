class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

// Second Test Case

/**
    const a = new Node(-1);
    const b = new Node(-6);
    const c = new Node(-5);
    const d = new Node(-3);
    const e = new Node(0);
    const f = new Node(-13);
    const g = new Node(-1);
    const h = new Node(-2);
 */



a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

/**
 * Write a function, maxPathSum, that takes in the root of a binary tree that contains number values.
 * The function should return the maximum sum of any root to leaf path within the tree.
 * 
 * You may assume that the input tree is non-empty.
 */

const maxRootLeafPathSum = (root) => {
    if(root  === null) return -Infinity;
    if(root?.left === null && root?.right === null) return root.val;    
      const leftSum = maxRootLeafPathSum(root.left);
      const rightSum = maxRootLeafPathSum(root.right);
      return root.val + Math.max(leftSum, rightSum)
}

console.log(maxRootLeafPathSum(a))