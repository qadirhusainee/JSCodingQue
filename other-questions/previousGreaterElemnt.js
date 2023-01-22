// Javascript program previous greater element
// An efficient solution to
// print previous greater
// element for every element
// in an array.

function prevGreater(arr, n) {
  // Create a stack and push
  // index of first element
  // to it
  let s = [];
  s.push(arr[0]);
  let op = [];

  // Previous greater for
  // first element is always -1.
  op.push(-1);

  // Traverse remaining elements
  for (let i = 1; i < n; i++) {
    // Pop elements from stack
    // while stack is not empty
    // and top of stack is smaller
    // than arr[i]. We always have
    // elements in decreasing order
    // in a stack.
    while (s.length != 0 && s[s.length - 1] < arr[i]) s.pop();

    // If stack becomes empty, then
    // no element is greater on left
    // side. Else top of stack is
    // previous greater.
    if (s.length == 0) op.push(-1);
    else op.push(s[s.length - 1]);

    s.push(arr[i]);
  }

  return op;
}

// Driver Code
let arr = [10, 4, 2, 20, 40, 12, 30];
let n = arr.length;
let a = prevGreater(arr, n);
a;
