/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Solution:
 * 1. Create 2 linked list -> oddList and evenList
 * 2. As per the indice val append node in oddList and evenList
 * 3. Connect 2 lists, end of oddList with Start of evenList
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if(!head || !head.next) return head;

  let oddList = new ListNode(-1);
  let evenList = new ListNode(-1);;
  let oddStart = oddList;
  let evenStart = evenList;
  let pos = 1;
  let current = head;

  while(current !== null) {
      if(pos % 2 === 1) {
          oddList.next = current;
          oddList = oddList.next
      } else {
          evenList.next = current;
          evenList = evenList.next
 
      }
      pos++;
      current = current.next
  }
  
  oddList.next = evenStart.next;
  evenList.next = null;

  return oddStart.next
};
// @lc code=end

