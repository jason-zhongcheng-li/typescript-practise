import TreeNode from '../tree-node';

// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

describe('[TODO] Convert sorted array to height-balanced binary tree', () => {
  // Input: nums = [-10,-3,0,5,9]
  // Output: [0,-3,9,-10,null,5]
  // Explanation: [0,-10,5,null,-3,null,9] is also accepted:

  it('Solution 1', () => {
    function sortedArrayToBST(nums: number[]): TreeNode | null {
      const root = new TreeNode();

      const rootValue = nums[Math.floor(nums.length / 2)];

      const buildNode = (
        val: number,
        left: TreeNode | null,
        right: TreeNode | null,
      ): TreeNode | null => {
        return new TreeNode(val, left, right);
      };

      return root;
    }
  });
});
