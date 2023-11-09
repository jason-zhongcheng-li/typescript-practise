// https://leetcode.com/problems/sort-list/description/

import * as assert from 'assert';
import ListNode from '../list-node';

// Input: head = [4, 2, 1, 3];
// Output: [1, 2, 3, 4];

// Input: head = [-1, 5, 3, 4, 0];
// Output: [-1, 0, 3, 4, 5];

describe('[TODO] Sort list test', () => {
  it('Solution 1', () => {
    const sortList = (head: ListNode | null): ListNode | null => {
      if (!head || !head.next) {
        return head;
      }

      if (head.val <= head.next.val) {
        sortList(head.next);
        return head;
      }

      if (head.val > head.next.val) {
        const curr = head;
        head = head.next;
        curr.next = head.next;
        head.next = curr;
      }
      sortList(head.next);
      return head;
    };

    const six = { val: 6, next: null } as ListNode;
    const five = { val: 5, next: null } as ListNode;
    const four = { val: 4, next: null } as ListNode;
    const three = { val: 3, next: null } as ListNode;
    const two = { val: 2, next: null } as ListNode;
    const one = { val: 1, next: null } as ListNode;

    const list1 = two;
    list1.next = one;
    list1.next.next = five;
    list1.next.next.next = four;
    list1.next.next.next.next = six;
    list1.next.next.next.next.next = three;

    console.log('before sort ', JSON.stringify(list1));
    // before sort  {"val":1,"next":{"val":4,"next":{"val":5,"next":{"val":2,"next":{"val":6,"next":{"val":3,"next":null}}}}}}

    const nodes = sortList(list1);

    console.log('after sort ', JSON.stringify(nodes));
  });
});
