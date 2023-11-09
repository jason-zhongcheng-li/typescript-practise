import * as assert from "assert";

describe.skip("Merge sorted array test", () => {
  // Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  // Output: [1,2,2,3,5,6]
  // Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
  // The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

  it("Solution 1", () => {
    const binarySearch = (
      arr: number[],
      l: number,
      r: number,
      x: number
    ): number => {
      if (r >= l) {
        let mid = l + Math.floor((r - l) / 2);
        if (arr[mid] == x) return mid;
        if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);
        return binarySearch(arr, mid + 1, r, x);
      }
      return -1;
    };
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    const merge = (
      nums1: number[],
      m: number,
      nums2: number[],
      n: number
    ): void => {
      nums1.splice(m);
      let mid = Math.floor(nums1.length / 2);
      while (nums2.length > 0) {
        if (nums1[mid] < nums2[0] && nums1[mid + 1] > nums2[0]) {
          nums1.splice(mid, 0, nums2.shift());
        }
      }
    };

    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];

    merge(nums1, 3, nums2, 3);
    console.log("nums1 = ", nums1);
    console.log("nums2 = ", nums2);
  });
});
