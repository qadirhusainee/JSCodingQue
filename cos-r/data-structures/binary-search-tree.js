// IMP: Visualization Tool: https://visualgo.net/en/bst

/* Binary Search Tree
Level 0 : 2 ^ 0 = 1 
Level 1 : 2 ^ 1 = 2 
Level 2 : 2 ^ 2 = 4 
Level 3 : 2 ^ 3 = 8 
# of nodes = 2 ^ h - 1 
log nodes = steps
log 100 = 2
10 ^ 2 = 100 */

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //Code here
  }
  lookup(value) {
    //Code here
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root));

//     9
//  4     20
//1  6  15  170

const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};
