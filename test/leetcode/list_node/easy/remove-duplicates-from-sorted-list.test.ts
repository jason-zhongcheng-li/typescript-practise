import * as assert from 'assert';
import ListNode from '../list-node';

describe('[Done] Remove duplicated sorted list test', () => {
  // Input: head = [1, 1, 2];
  // Output: [1, 2];

  // Input: head = [1, 1, 2, 3, 3];
  //   1 - 1, 2; 1
  // Output: [1, 2, 3];

  it('Solution 1', () => {
    const deleteDuplicates = (head: ListNode | null): ListNode | null => {
      if (!head?.next) {
        return head;
      }
      if (head.val === head.next.val) {
        return deleteDuplicates(head.next);
      } else {
        head.next = deleteDuplicates(head.next);
      }
      return head;
    };

    const threeNull = { val: 3, next: null } as ListNode;
    const threeThree = { val: 3, next: threeNull } as ListNode;
    const two = { val: 2, next: threeThree } as ListNode;
    const oneTwo = { val: 1, next: two } as ListNode;
    const oneOne = { val: 1, next: oneTwo } as ListNode;

    const result = deleteDuplicates(oneOne);

    console.log('result = ', JSON.stringify(result));
  });
});
