/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Approach
 * Create a new Previous Node
 * Keep Tail node ahead by "n"
 * Iterate till tail is not null
 *
*/ 

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummyNode = new ListNode(-1, head);
  let previousNode = dummyNode;
  let removeNode = head
  let tailNode = head
  for(let i=0; i < n; i++) {
      tailNode = tailNode.next
  }
  while(tailNode !== null) {
      previousNode = previousNode.next;
      removeNode = removeNode.next;
      tailNode = tailNode.next;
  }
  previousNode.next = removeNode.next
  return dummyNode.next
};
// @lc code=end

