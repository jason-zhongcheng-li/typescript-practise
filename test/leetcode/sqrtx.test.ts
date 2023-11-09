import * as assert from 'assert';

// https://leetcode.com/problems/sqrtx/description/

// Input: x = 4;
// Output: 2;
// Explanation: The square root of 4 is 2, so we return 2.

describe('Sqrtx test', () => {
    it('Solution 1', () => {
        const sqrtx = (x: number) => {
            let i = 0;
            let k = 0;
            while (i * i < x) {

                k = i;
                i++;
            }
            if (i * i === x) {
                return i;
            } else {
                return k;
            }
        };
    });


    // The best solution, use Binary search
    it('Solution 1', () => {
        const sqrtx = (x: number) => {
            let left = 0;
            let right = x;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
                    return mid;
                }
                else if (mid * mid < x) {
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            }
        };
    });
});