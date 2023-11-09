import * as assert from 'assert';

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

describe('Remove duplicates from sorted array test', () => {
  // Input: nums = [0,0,1,1,1,2,2,3,3,4]
  // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
  // Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
  // It does not matter what you leave beyond the returned k (hence they are underscores).

  it('Solution 1', () => {
    const removeDuplicates = (nums: number[]): number => {
      let k = 1;
      let i = 0;
      while (nums[i] <= nums[i + 1]) {
        if (nums[i] < nums[i + 1]) {
          nums[k] = nums[i + 1];
          k++;
        }
        i++;
      }
      return k;
    };

    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);
    console.log('k = ', k);
    console.log('nums = ', nums);
  });
});
