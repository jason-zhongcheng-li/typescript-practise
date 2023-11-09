import * as assert from 'assert';

// https://leetcode.com/problems/plus-one/description/

describe('Plus one test', () => {

    // Input: digits = [1, 2, 3];
    // Output: [1, 2, 4]

    // Input: digits = [9];
    // Output: [1, 0]

    it('Solution 1', () => {

        const plusOne = (nums: number[]): number[] => {
            let i = nums.length - 1;
            while (i >= 0) {
                if (nums[i] !== 9) {
                    nums[i] = nums[i] + 1;
                    return nums;
                } else {
                    nums[i] = 0;
                    if (i === 0) {
                        nums.unshift(1);
                        return nums;
                    }
                    i--;
                }
            }
        };
    });
});