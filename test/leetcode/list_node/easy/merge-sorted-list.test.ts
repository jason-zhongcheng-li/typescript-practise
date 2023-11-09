// https://leetcode.com/problems/merge-two-sorted-lists/

import * as assert from 'assert';
import ListNode from '../list-node';

describe('[Done] Merge two sorted lists test', () => {
  it('Solution 1', () => {
    const mergeTwoNodes = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
      if (!list1) {
        return list2;
      }

      if (!list2) {
        return list1;
      }

      if (list1.val <= list2.val) {
        list1.next = mergeTwoNodes(list1.next, list2);
        return list1;
      } else {
        list2.next = mergeTwoNodes(list1, list2.next);
        return list2;
      }
    };

    const four = { val: 4, next: null } as ListNode;
    const three = { val: 3, next: four } as ListNode;
    const two = { val: 2, next: four } as ListNode;

    const list1 = { val: 1, next: two } as ListNode;
    const list2 = { val: 1, next: three } as ListNode;

    let nodes = mergeTwoNodes(list1, list2);

    console.log(nodes);
  });
});
