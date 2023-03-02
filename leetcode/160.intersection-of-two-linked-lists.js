/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Solution Approach
 * 1. Find length of both linked list
 * 2. Increment big linked list pointer to equal the length
 * 3. Increment both linked list until nodes of both matches
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let currentA = headA;
  let currentB = headB;
  let lengthA = 0;
  let lengthB = 0;

  while(currentA !== null) {
      lengthA++;
      currentA = currentA.next;
  }

  while(currentB !== null) {
      lengthB++;
      currentB = currentB.next
  }
  currentA = headA
  currentB = headB
  if(lengthA > lengthB) {
      for(let i =0; i < lengthA- lengthB;i++) {
          currentA = currentA.next
      }
           
  } else {
      for(let i =0; i < lengthB- lengthA;i++) {
          currentB = currentB.next
      }
  }

  while (currentA!==null && currentB !== null && currentA!== currentB) {
      currentA = currentA.next;
      currentB = currentB.next
  }
  return currentA
};
// @lc code=end

