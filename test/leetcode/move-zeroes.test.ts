import * as assert from 'assert';

// https://leetcode.com/problems/move-zeroes/description/

describe('Move Zero to the end of array test', () => {

    // Input: nums = [0, 1, 0, 3, 12];
    // Output: [1, 3, 12, 0, 0]

    it('Solution 1', () => {

        const moveZero = (nums: number[]) => {
            let k = 0;
            let i = 0;
            while (i < nums.length) {
                if (nums[i] !== 0) {
                    if (k != i) {
                        nums[k] = nums[i];
                        nums[i] = 0;
                    }
                    k++;
                }
                i++;
            }
        };

        // let nums = [0, 1, 0, 3, 12];
        let nums = [2, 1];
        moveZero(nums);
        console.log('nums out = ', nums);

    });

    it('Solution 2', () => {
        const moveZero = (nums: number[]) => {
            let i = 0;
            nums.forEach(num => {
                if (num != 0) {
                    nums[i] = num;
                    i++;
                }
            });

            while (i <= nums.length - 1) {
                nums[i] = 0;
                i++;
            }
        };
    });

});