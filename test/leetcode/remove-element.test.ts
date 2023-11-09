import * as assert from 'assert';

// https://leetcode.com/problems/remove-element/description/

describe('Remove element test', () => {

    // Input: nums = [3, 2, 2, 3], val = 3;
    // Output: 2, nums = [2, 2, _, _]

    it('Solution 1', () => {

        const removeElement = (nums: number[], val: number): number => {
            let k = 0;
            let i = 0;
            while (i < nums.length) {
                if (nums[i] !== val) {
                    nums[k] = nums[i];
                    k++;
                }
                i++;
            }
            return k;
        };

        let nums = [3, 2, 2, 3];
        const k = removeElement(nums, 3);
        console.log('k = ', k);
        console.log('nums out = ', nums);

    });
});