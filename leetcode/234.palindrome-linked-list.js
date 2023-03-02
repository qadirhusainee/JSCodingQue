/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let fast = head;
  let slow = head;
  let startPtr = head;
  let len = 0;
  
  while(fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      len++
  }

  let endPtr = reverseLinkedList(slow);

  while (len) {
      if(startPtr.val !== endPtr.val) return false
      len--;
      startPtr = startPtr.next;
      endPtr = endPtr.next
  }
  return true
};

function reverseLinkedList(head) {
  let previous = null;
  let currentNode = head;
  let nextNode;

  while(currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = previous;
      previous = currentNode;
      currentNode = nextNode
  }
  return previous;
}
// @lc code=end

