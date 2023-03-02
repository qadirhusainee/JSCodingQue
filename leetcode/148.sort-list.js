/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head === null || head.next === null) return head;

  let [left, right] = getBothHalf(head);

  left = sortList(left);
  right = sortList(right);

  return mergeList(left, right);
};

const mergeList = (list1, list2) => {
  let list = new ListNode(-1);
  let currentNode = list;
  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      currentNode.next = list2;
      list2 = list2.next;
    } else {
      currentNode.next = list1;
      list1 = list1.next;
    }
    currentNode = currentNode.next;
  }
  if (list1 !== null) {
    currentNode.next = list1;
  }
  if (list2 !== null) {
    currentNode.next = list2;
  }
  return list.next;
};

const getBothHalf = (head) => {
  let fast = head.next;
  let slow = head;
  let firstHalf = slow;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let secondHalf = slow.next;
  slow.next = null;
  return [firstHalf, secondHalf];
};
// @lc code=end
