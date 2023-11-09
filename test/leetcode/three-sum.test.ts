import * as assert from 'assert';

// https://leetcode.com/problems/3sum/

interface MyObject {
    [code: number]: number;
}

describe('3Sum test', () => {
    /*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

    */

    const twoSum = (nums: number[], target: number) => {
        const result = [];
        const myObj = {} as MyObject;
        for (let i = 0; i < nums.length; i++) {
            const remainV = target - nums[i];
            if (myObj[remainV] !== undefined && myObj[remainV] !== i) {
                result.push([myObj[remainV], i]);
            } else {
                myObj[nums[i]] = i;
            }
        }
        return result;
    };

    it('Solution 1', () => {

        const isExist = (arrayNums: number[][], nums: number[]): boolean => {
            return arrayNums.findIndex(arrNum => {
                return arrNum.sort().toString() === nums.sort().toString();
            }) > -1;
        };

        const threeSum = (nums: number[]) => {
            const result = [] as number[][];
            while (nums.length > 2) {
                const currNum = nums.splice(0, 1)[0];
                const target = 0 - currNum;
                const remainTwo = twoSum(nums, target);
                remainTwo?.forEach(obj => {
                    if (!isExist(result, [currNum, nums[obj[0]], nums[obj[1]]])) {
                        result.push([currNum, nums[obj[0]], nums[obj[1]]]);
                    }
                });

            }
            return result;
        };

        const nums = [-1, 0, 1, 2, -1, -4]; // [[-1,-1,2],[-1,0,1]]
        const result = threeSum(nums);
        console.log('result = ', result);
    });
});