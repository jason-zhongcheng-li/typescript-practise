import TreeNode from '../tree-node';

/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

// https://leetcode.com/problems/maximum-depth-of-binary-tree/

describe('[Done] Get maximun depth of binary tree', () => {
  // Input: root = [3, 9, 20, null, null, 15, 7];
  // Output: 3;

  it('Solution 1', () => {
    function maxDepth(root: TreeNode | null): number {
      if (!root) {
        return 0;
      }
      const leftMax = maxDepth(root.left) + 1;
      const rightMax = maxDepth(root.right) + 1;
      if (leftMax > rightMax) {
        return leftMax;
      }
      return rightMax;
    }
    /// [3,9,20,null,null,15,7]
    const one = new TreeNode(1);
    const two = new TreeNode(2);
    const three = new TreeNode(3);
    const four = new TreeNode(4);

    // Input: root = [1,2,2,3,4,4,3]
    const a = one;
    a.left = two;
    a.right = two;
    a.left.left = three;
    a.left.right = four;
    a.right.left = four;
    a.right.right = three;

    const result = maxDepth(a);
    console.log('result = ', result);
  });
});
