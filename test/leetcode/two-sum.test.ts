import * as assert from 'assert';

interface MyObject {
    [code: number]: number;
}

describe('2Sum', () => {
    // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    // You may assume that each input would have exactly one solution, and you may not use the same element twice.
    // You can return the answer in any order.

    // Example 1:
    // Input: nums = [2, 7, 11, 15], target = 9;
    // Output: [0, 1];
    // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    // Example 2:
    // Input: nums = [3, 2, 4], target = 6;
    // Output: [1, 2]

    // Example 3:
    // Input: nums = [3, 3], target = 6;
    // Output: [0, 1]

    it('Solution 1', () => {
        // Solution 1, Beats 5.02%of users with JavaScript
        const twoSum = (nums: number[], target: number) => {
            for (let i = 0; i < nums.length; i++) {
                const remainV = target - nums[i];
                const index = nums.slice(i + 1).findIndex(num => num === remainV);
                if (index > -1) {
                    return [i, index + i + 1];
                }
            }
            return [];
        };
        const result = twoSum([3, 2, 4], 6);
        assert.deepStrictEqual(result, [1, 2]);
    });

    it('Solution 2', () => {
        // Runtime Beats 95.19%of users with JavaScript
        // Memory Beats 7.48%of users with JavaScript
        // Time complexity: O(2N)
        const twoSum = (nums: number[], target: number) => {
            const myMap = new Map();
            nums.forEach((num, index) => myMap.set(num, index)); // O(n)
            for (let i = 0; i < nums.length; i++) {// O(n)
                const remainV = target - nums[i];
                if (myMap.has(remainV) && myMap.get(remainV) !== i) {
                    return [i, myMap.get(remainV)];
                }
            }
            return [];
        };
        const result = twoSum([3, 2, 4], 6);
        assert.deepStrictEqual(result, [1, 2]);
    });

    it('Solution 3', () => {
        // Runtime Beats 66.92%of users with JavaScript
        // Memory Beats 20.07%of users with JavaScript
        // Time complexity: O(2N)
        const twoSum = (nums: number[], target: number) => {
            const myMap = new Map();
            for (let i = 0; i < nums.length; i++) {
                const remainV = target - nums[i];
                if (myMap.has(remainV) && myMap.get(remainV) !== i) {
                    return [myMap.get(remainV), i];
                } else {
                    myMap.set(nums[i], i);
                }
            }
            return [];
        };
        const result = twoSum([3, 2, 4], 6);
        assert.deepStrictEqual(result, [1, 2]);
    });

    it('Solution 4', () => {
        // Runtime Beats 96.12%of users with JavaScript
        // Memory 
        // Time complexity: O(2N)
        const twoSum = (nums: number[], target: number) => {
            const myObj = {} as MyObject;
            for (let i = 0; i < nums.length; i++) {
                const remainV = target - nums[i];
                if (myObj[remainV] !== undefined && myObj[remainV] !== i) {
                    return [myObj[remainV], i];
                } else {
                    myObj[nums[i]] = i;
                }
            }
            return [];
        };

        const result = twoSum([2, 7, 11, 15], 9);
        assert.deepStrictEqual(result, [0, 1]);

    });

});