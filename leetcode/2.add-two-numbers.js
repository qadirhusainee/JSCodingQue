/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

  const sumList = new ListNode();
  let currentNode = sumList;
  let carry = 0;
  while (l1 || l2 || carry !== 0) {

      let sum = 0
      if(l1) {
          sum += l1.val
          l1 = l1.next
      }
      if(l2) {
          sum += l2.val
          l2 = l2.next
      }
      sum += carry
      carry = sum > 9 ? 1: 0;
      
      sum  = sum % 10;
      let newNode = new ListNode(sum);
      currentNode.next = newNode;
      currentNode  = currentNode.next
  }

  return sumList.next
};
// @lc code=end
