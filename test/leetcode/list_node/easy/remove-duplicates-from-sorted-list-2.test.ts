import * as assert from 'assert';
import ListNode from '../list-node';

describe('Remove duplicated sorted list test', () => {
  // Input: head = [1, 2, 3, 3, 4, 4, 5];
  // Output: [1, 2, 5];

  it('Solution 1', () => {
    let duplicated = undefined as number;
    const deleteDuplicates = (head: ListNode | null): ListNode | null => {
      if (head && !head.next) {
        if (head.val === duplicated) {
          return null;
        }
        return head;
      }

      if (!head) {
        return head;
      }

      if (head.val === head.next.val || head.val === duplicated) {
        duplicated = head.val;
        head = deleteDuplicates(head.next);
      } else {
        duplicated = undefined;
        head.next = deleteDuplicates(head.next);
      }
      return head;
    };

    // const g = { val: 1, next: null } as ListNode;
    // const f = { val: 4, next: g } as ListNode;
    // const e = { val: 4, next: f } as ListNode;
    // const d = { val: 3, next: e } as ListNode;
    const c = { val: 3, next: null } as ListNode;
    const b = { val: 2, next: c } as ListNode;
    const a = { val: 1, next: b } as ListNode;

    console.log('oneOne = ', JSON.stringify(a));

    const result = deleteDuplicates(a);

    console.log('result = ', JSON.stringify(result));
  });
});
