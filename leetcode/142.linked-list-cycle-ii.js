/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 *  * Solution:  Detect Cycle. Then find begin of cycle
 * 1. Have 2 pointers slow and Fast
 * 2. Increment Fast by 2 and slow by 1
 * 3. If fast and slow are same at any point then it is cyclic
 * 4. Move pointer from start of list and move slow pointer untill they meet 
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if(!head) return null;
  if(!head.next) return null;
  let fastPointer = head;
  let slowPointer = head;

  let pointer = head;
  let isCyclic = false;

  while(fastPointer  && fastPointer.next) {
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;
      if(fastPointer === slowPointer) {
          isCyclic = true
          break

      }
  }
  if (!isCyclic) return null;

  while(pointer !== slowPointer) {
    pointer = pointer.next;
    slowPointer = slowPointer.next;
  }
  return pointer
};
// @lc code=end

