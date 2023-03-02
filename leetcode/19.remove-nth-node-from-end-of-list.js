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
    let resultList = dummyNode;
    let tempNode = head;
    let length = 0
    // count length of linked list
    while(tempNode != null) {
        tempNode = tempNode.next;
        length++
    }
    // update pointer of linked list to the element before the target
    for(let i =0; i < length-n; i++) {
        dummyNode = dummyNode.next;
    }
    dummyNode.next = dummyNode.next.next;
    return resultList.next
};
// @lc code=end

