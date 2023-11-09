import * as assert from 'assert';

// https://leetcode.com/problems/search-insert-position/description/

describe('Search insert position test', () => {


    // Example 1:
    // Input: nums = [1, 3, 5, 6], target = 5;
    // Output: 2

    // Example 2:
    // Input: nums = [1, 3, 5, 6], target = 2;
    // Output: 1

    it('Solution 1', () => {
        const searchInsertPosition = (nums: number[], target: number): number => {
            let l = 0;
            let r = nums.length - 1;
            let mid;


            while (r >= l) {

                mid = Math.floor((r - l) / 2) + l;
                console.log('l = ', l, ' r = ', r, ' m = ', mid);
                if (nums[mid] === target) {
                    return mid;
                } else if (r === l) {
                    return nums[mid] < target ? mid + 1 : mid;
                }

                if (nums[mid] > target) {
                    if (mid === l) {
                        return l;
                    }
                    r = mid - 1;
                } else {
                    if (mid === r) {
                        return r + 1;
                    }
                    l = mid + 1;
                }

            }
        };

        const nums = [3, 5, 7, 9, 10];
        const target = 8;

        const result = searchInsertPosition(nums, target);
        console.log('result = ', result);
    });
});