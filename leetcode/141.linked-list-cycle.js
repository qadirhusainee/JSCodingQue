/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * Solution: 
 * 1. Have 2 pointers slow and Fast
 * 2. Increment Fast by 2 and slow by 1
 * 3. If fast and slow are same at any point then it is cyclic
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let fastPointer = head;
  let slowPointer = head;

  while(fastPointer  && fastPointer.next) {
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;
      if(fastPointer === slowPointer) {
          return true

      }
  }
  return false
};
// @lc code=end

