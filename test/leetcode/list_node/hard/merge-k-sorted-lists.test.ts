// https://leetcode.com/problems/merge-k-sorted-lists/description/

import * as assert from 'assert';
import ListNode from '../list-node';
// hard
describe('Merge two sorted lists test', () => {
  it('Solution 1', () => {
    const mergeMultiNodes = (lists: Array<ListNode | null>): ListNode | null => {
      return null;
    };

    //       Input: lists = [[1,4,5],[1,3,4],[2,6]]
    //       Explanation: The linked-lists are:
    //       Output: [1,1,2,3,4,4,5,6]
    //     [
    //       1->4->5,
    //       1->3->4,
    //       2->6
    //     ]
    // merging them into one sorted list:
    // 1->1->2->3->4->4->5->6

    const six = { val: 6, next: null } as ListNode;
    const five = { val: 5, next: null } as ListNode;
    const four = { val: 4, next: null } as ListNode;
    const three = { val: 3, next: null } as ListNode;
    const two = { val: 2, next: null } as ListNode;
    const one = { val: 1, next: null } as ListNode;

    const list1 = one;
    list1.next = four;
    list1.next.next = five;

    const list2 = one;
    list2.next = three;
    list2.next.next = four;

    const list3 = two;
    list3.next = six;

    // let nodes = mergeMultiNodes([list1, list2, list3]);

    // console.log(nodes);
  });
});
