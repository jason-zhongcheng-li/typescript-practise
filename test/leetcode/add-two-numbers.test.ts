// https://leetcode.com/problems/add-two-numbers/description/

import * as assert from 'assert';

// interface Node {
//     value: number;
//     next: Node;
// }

// interface LinkedList {
//     head: {
//         node: Node;
//     };
// }

describe('Add two numbers test', () => {
    it('Solution 1', () => {

        /**
        * @param {ListNode} l1
        * @param {ListNode} l2
        * @return {ListNode}
        */
        // const addTwoNumbers = (l1: ListNode, l2: number[]): LinkedList => {
        //     let sum = 0;
        //     let current = new ListNode(0);
        //     let result = current;

        //     while (l1 || l2) {

        //         if (l1) {
        //             sum += l1.val;
        //             l1 = l1.next;
        //         }

        //         if (l2) {
        //             sum += l2.val;
        //             l2 = l2.next;
        //         }

        //         current.next = new ListNode(sum % 10);
        //         current = current.next;

        //         sum = sum > 9 ? 1 : 0;
        //     }

        //     if (sum) {
        //         current.next = new ListNode(sum);
        //     }

        //     return result.next;
        // };

        // const l1 = [2, 4, 3], l2 = [5, 6, 4];
        // const result = addTwoNumbers(l1, l2);
        // console.log('result = ', result);

    });
});